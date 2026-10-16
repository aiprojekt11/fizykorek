const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function testRender() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--allow-file-access-from-files', '--disable-web-security']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000 });
  
  const renderHtmlPath = path.resolve('tools/render.html');
  const pdfPath = path.resolve('data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf');
  const targetUrl = 'file:///' + renderHtmlPath.replace(/\\/g, '/') + '?pdf=' + encodeURIComponent('file:///' + pdfPath.replace(/\\/g, '/')) + '&page=4';
  
  console.log('Loading:', targetUrl);
  await page.goto(targetUrl);
  await page.waitForFunction('window.renderDone === true || window.renderError', { timeout: 15000 });
  
  const err = await page.evaluate(() => window.renderError);
  if (err) {
    console.error('Render error:', err);
  } else {
    const canvas = await page.$('#pdf-canvas');
    await canvas.screenshot({ path: 'img/test_render_canvas.png' });
    console.log('Canvas screenshot saved! Size:', fs.statSync('img/test_render_canvas.png').size);
  }
  await browser.close();
}
testRender().catch(console.error);
