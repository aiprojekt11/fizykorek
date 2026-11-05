const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function renderPages() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--allow-file-access-from-files', '--disable-web-security']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000 });

  const renderHtmlPath = path.resolve('tools/render.html');
  const pdfPath = 'C:/Users/barto/.gemini/antigravity-ide/brain/51a6f491-c1dc-4e1e-a52c-1e52d45b9ad7/.user_uploaded/media_1793708086134.pdf';
  const outDir = path.resolve('tools/rigid-audit/user_pages');
  fs.mkdirSync(outDir, { recursive: true });

  for (const p of [6, 7]) {
    const targetUrl = 'file:///' + renderHtmlPath.replace(/\\/g, '/') +
      '?pdf=' + encodeURIComponent('file:///' + pdfPath.replace(/\\/g, '/')) +
      '&page=' + p;

    console.log(`Loading page ${p}:`, targetUrl);
    await page.goto(targetUrl);
    await page.waitForFunction('window.renderDone === true || window.renderError', { timeout: 15000 });

    const err = await page.evaluate(() => window.renderError);
    if (err) {
      console.error(`Page ${p} render error:`, err);
    } else {
      const canvas = await page.$('#pdf-canvas');
      const outPath = path.join(outDir, `user_p${p}.png`);
      await canvas.screenshot({ path: outPath });
      console.log(`Saved ${outPath}, size: ${fs.statSync(outPath).size} bytes`);
    }
  }

  await browser.close();
  console.log('Finished rendering pages 6 and 7!');
}

renderPages().catch(console.error);
