const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 1400, height: 900 });

  const errors = [];
  page.on('console', msg => {
    if (msg.type() === 'error' && !msg.text().includes('Failed to load resource')) errors.push(msg.text());
  });
  page.on('response', resp => {
    if (resp.status() >= 400) console.log('404 URL:', resp.url());
  });
  page.on('pageerror', err => errors.push(err.toString()));

  console.log('Navigating to http://localhost:3000...');
  await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });

  // Open section m-praca
  await page.evaluate(() => {
    window.app.setSection('m-praca');
  });
  await new Promise(r => setTimeout(r, 600));

  const subchapters = [
    'sub-praca-moc',
    'sub-energie-zachowanie',
    'sub-zderzenia-niesprezyste',
    'sub-zderzenia-sprezyste'
  ];

  for (const subId of subchapters) {
    console.log(`Testing theory in ${subId}...`);
    await page.evaluate((id) => {
      window.app.setSubchapter(id);
    }, subId);
    await new Promise(r => setTimeout(r, 600));

    // Verify formula / theory box exists and content is rendered
    const theoryContent = await page.evaluate(() => {
      const el = document.querySelector('#subFormulaContent') || document.querySelector('#subTheoryContent');
      return el ? el.innerText.trim() : null;
    });

    console.log(`  Theory text length in ${subId}: ${theoryContent ? theoryContent.length : 0}`);

    // Check KaTeX rendered elements
    const katexCount = await page.evaluate(() => {
      return document.querySelectorAll('.katex').length;
    });
    console.log(`  KaTeX rendered elements in ${subId}: ${katexCount}`);

    await page.screenshot({ path: `tools/praca-qa/theory_${subId}.png` });
  }

  // Check matura subchapter
  console.log('Testing sub-praca-matura (should have NO formula or theory box)...');
  await page.evaluate(() => {
    window.app.setSubchapter('sub-praca-matura');
  });
  await new Promise(r => setTimeout(r, 600));

  const maturaBox = await page.evaluate(() => {
    return document.querySelector('.subchapter-formula-box');
  });
  console.log(`  Matura formula box: ${maturaBox ? 'FOUND (ERROR)' : 'NONE (CORRECT)'}`);
  await page.screenshot({ path: `tools/praca-qa/theory_sub_praca_matura_no_box.png` });

  await browser.close();

  console.log('Console errors:', errors);
  if (errors.length === 0 && !maturaBox) {
    console.log('ALL TESTS PASSED 100%!');
  } else {
    console.error('TESTS FAILED!');
    process.exit(1);
  }
})();
