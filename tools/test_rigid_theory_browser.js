const puppeteer = require('puppeteer');
const path = require('path');
const assert = require('assert');

(async () => {
  console.log('Testing theory rendering and diagrams in m-bryla via Puppeteer...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    await page.setViewport({ width: 1440, height: 1100 });
    const fileUrl = require('url').pathToFileURL(path.resolve(__dirname, '..', 'index.html')).href;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(() => {
      window.app.setCourse('matura-fizyka');
      window.app.setSection('m-bryla');
    });

    const subIds = [
      'sub-bryla-ruch',
      'sub-bryla-moment-sily',
      'sub-bryla-energia',
      'sub-bryla-moment-pedu'
    ];

    for (const subId of subIds) {
      console.log(`\nValidating theory for ${subId}...`);
      await page.evaluate((sId) => {
        window.app.setSubchapter(sId);
      }, subId);

      // Wait for KaTeX processing & content load
      await page.waitForFunction(() => {
        const el = document.querySelector('#subFormulaContent');
        return el && el.innerHTML.length > 100;
      });

      const state = await page.evaluate(() => {
        const theoryEl = document.querySelector('#subFormulaContent');
        const mathErrors = [...theoryEl.querySelectorAll('.katex-error')].map(e => e.textContent);
        const hasAsterisks = theoryEl.innerText.includes('**');
        const hasRawMath = theoryEl.innerText.includes('$');
        const text = theoryEl.innerText;
        const subTitles = [...theoryEl.querySelectorAll('.theory-subtitle')].map(e => e.textContent.trim());
        const placeholders = [...theoryEl.querySelectorAll('.theory-placeholder')].map(p => ({
          title: p.querySelector('.theory-placeholder-title')?.textContent?.trim(),
          desc: p.querySelector('.theory-placeholder-desc')?.textContent?.trim(),
          caption: p.querySelector('.theory-placeholder-caption')?.textContent?.trim()
        }));
        const imgCount = theoryEl.querySelectorAll('img').length;
        return {
          mathErrors,
          hasAsterisks,
          hasRawMath,
          textLength: text.length,
          subTitles,
          placeholders,
          imgCount
        };
      });

      console.log(`  Subtitles (${state.subTitles.length}):`, state.subTitles);
      console.log(`  Placeholders found (${state.placeholders.length})`);
      console.log(`  Images found: ${state.imgCount}`);

      if (state.mathErrors.length > 0) {
        throw new Error(`${subId} has KaTeX errors: ${JSON.stringify(state.mathErrors)}`);
      }
      if (state.hasAsterisks) {
        throw new Error(`${subId} contains ** in theory text!`);
      }
      if (state.hasRawMath) {
        throw new Error(`${subId} contains unrendered $ math!`);
      }
      assert(state.subTitles.length >= 3, `${subId} should have at least 3 subtitles`);
      assert(state.textLength > 400, `${subId} theory text is too short`);
      assert(state.placeholders.length >= 2, `${subId} must have at least 2 placeholders with drawing descriptions`);
      assert.strictEqual(state.imgCount, 0, `${subId} should have 0 images (user will provide drawings, only descriptions needed)`);

      for (const ph of state.placeholders) {
        assert(ph.title, `Placeholder in ${subId} missing title`);
        assert(ph.desc && ph.desc.length > 30, `Placeholder in ${subId} must have rich desc: ${ph.desc}`);
        assert(ph.caption && ph.caption.length > 15, `Placeholder in ${subId} must have caption: ${ph.caption}`);
        console.log(`    ✓ [${ph.title}] "${ph.desc.slice(0, 75)}..."`);
      }

      console.log(`  ✓ ${subId} theory renders cleanly with placeholders, 0 KaTeX errors, 0 raw math!`);
    }

    if (pageErrors.length > 0) {
      console.warn('Page errors occurred:', pageErrors);
    }
    console.log('\nALL 4 THEORY SECTIONS VALIDATED SUCCESSFULLY IN BROWSER WITH DRAWING DESCRIPTIONS!');
  } finally {
    await browser.close();
  }
})();
