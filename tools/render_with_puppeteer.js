const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

async function renderPdfPages() {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 2000, deviceScaleFactor: 2 });

  const targets = [
    { name: '2026_sty_p4', file: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', page: 4 },
    { name: '2026_sty_p5', file: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', page: 5 },
    { name: '2025_cze_p6', file: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', page: 6 },
    { name: '2025_cze_p7', file: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', page: 7 },
    { name: '2024_cze_p4', file: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', page: 4 },
    { name: '2024_cze_p5', file: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', page: 5 },
    { name: '2024_maj_p4', file: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 4 },
    { name: '2024_maj_p5', file: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 5 },
    { name: '2024_maj_p6', file: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 6 },
    { name: 'inf2023_p12', file: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', page: 12 },
    { name: 'inf2023_p13', file: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', page: 13 },
  ];

  const outDir = path.resolve('tools/task_pages_rendered');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const t of targets) {
    const fullPath = path.resolve(t.file);
    const fileUrl = `file:///${fullPath.replace(/\\/g, '/')}#page=${t.page}`;
    console.log(`Rendering ${t.name}...`);
    await page.goto(fileUrl);
    await new Promise(r => setTimeout(r, 4000));
    const outPath = path.join(outDir, `${t.name}.png`);
    await page.screenshot({ path: outPath });
    console.log(`Saved ${outPath}`);
  }

  await browser.close();
}

renderPdfPages().catch(console.error);
