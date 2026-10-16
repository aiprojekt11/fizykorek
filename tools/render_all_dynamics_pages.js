const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const pagesToRender = [
  { id: 'inf_p12', pdf: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', page: 12 },
  { id: 'inf_p13', pdf: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', page: 13 },
  { id: 'inf_p20', pdf: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', page: 20 },
  { id: 'cke2022_p6', pdf: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', page: 6 },
  { id: 'cke2023_maj_p6', pdf: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', page: 6 },
  { id: 'cke2023_maj_p7', pdf: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', page: 7 },
  { id: 'cke2023_cze_p7', pdf: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', page: 7 },
  { id: 'cke2023_cze_p8', pdf: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', page: 8 },
  { id: 'cke2024_maj_p4', pdf: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 4 },
  { id: 'cke2024_maj_p5', pdf: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 5 },
  { id: 'cke2024_cze_p4', pdf: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', page: 4 },
  { id: 'cke2025_cze_p6', pdf: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', page: 6 },
  { id: 'cke2025_cze_p7', pdf: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', page: 7 },
  { id: 'cke2026_sty_p4', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', page: 4 },
  { id: 'cke2026_sty_p6', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', page: 6 },
  { id: 'cke2026_sty_p7', pdf: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', page: 7 }
];

async function run() {
  const browser = await puppeteer.launch({
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
    headless: 'new',
    args: ['--allow-file-access-from-files', '--disable-web-security']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2200 });
  
  const outDir = path.resolve('img/pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  const renderHtmlPath = path.resolve('tools/render.html');

  for (const item of pagesToRender) {
    const pdfPath = path.resolve(item.pdf);
    const targetUrl = 'file:///' + renderHtmlPath.replace(/\\/g, '/') + '?pdf=' + encodeURIComponent('file:///' + pdfPath.replace(/\\/g, '/')) + '&page=' + item.page;
    
    console.log(`Rendering ${item.id} (${item.pdf} p.${item.page})...`);
    await page.goto(targetUrl);
    await page.waitForFunction('window.renderDone === true || window.renderError', { timeout: 20000 });
    
    const err = await page.evaluate(() => window.renderError);
    if (err) {
      console.error(`Error rendering ${item.id}:`, err);
      continue;
    }
    const canvas = await page.$('#pdf-canvas');
    const outPath = path.join(outDir, `${item.id}.png`);
    await canvas.screenshot({ path: outPath });
    console.log(`Saved ${outPath} (${fs.statSync(outPath).size} bytes)`);
  }
  await browser.close();
  console.log('All pages rendered!');
}

run().catch(console.error);
