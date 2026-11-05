const fs = require('fs');
const path = require('path');
const vm = require('vm');
const puppeteer = require('puppeteer');

const root = path.resolve(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js', 'data-courses.js'), 'utf8'), sandbox);
const course = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'];

const sectionsToTest = [
  { sectionId: 'm-praca', subId: 'sub-praca-matura' },
  { sectionId: 'm-bryla', subId: 'sub-bryla-matura' }
];

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    await page.setViewport({ width: 1440, height: 1100 });
    const indexUrl = require('url').pathToFileURL(path.join(root, 'index.html')).href;
    await page.goto(indexUrl, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(async () => {
      await document.fonts.ready;
      document.documentElement.style.scrollBehavior = 'auto';
    });
    await page.addStyleTag({
      content: '*, *::before, *::after { transition: none !important; animation: none !important; scroll-behavior: auto !important; }'
    });

    await page.evaluate(() => window.app.setCourse('matura-fizyka'));

    let testedCount = 0;

    for (const { sectionId, subId } of sectionsToTest) {
      const section = course.sections.find(s => s.id === sectionId);
      const sub = section.subchapters.find(s => s.id === subId);
      console.log(`\nTesting ${sectionId} -> ${subId} (${sub.tasks.length} tasks)...`);

      for (const task of sub.tasks) {
        testedCount++;
        await page.evaluate((secId, taskId, sId) => window.app.openTask(secId, taskId, sId), sectionId, task.id, subId);
        await page.waitForFunction(() => window.scrollY === 0);

        // Click to open solution
        const btn = await page.$('#toggleSolutionBtn');
        if (!btn) {
          throw new Error(`${task.id}: #toggleSolutionBtn not found`);
        }
        await page.evaluate(() => {
          document.querySelector('#toggleSolutionBtn').scrollIntoView({ block: 'center', behavior: 'instant' });
        });
        await page.click('#toggleSolutionBtn');

        // Wait for images to load
        await page.waitForFunction(() => {
          const imgs = Array.from(document.querySelectorAll('#taskProblemText img, #solutionContainer img'));
          return imgs.every(img => img.complete);
        });

        const state = await page.evaluate(() => {
          const brokenImgs = [...document.querySelectorAll('#taskProblemText img, #solutionContainer img')]
            .filter(i => !i.naturalWidth)
            .map(i => i.src);
          const mathErrors = [...document.querySelectorAll('#taskProblemText .katex-error, #solutionContainer .katex-error')]
            .map(x => x.textContent);
          const solText = document.querySelector('#solutionContainer').innerText;
          const solHidden = document.querySelector('#solutionContainer').classList.contains('hidden');
          const stepTitles = [...document.querySelectorAll('#solutionContainer .step-item-title')].map(x => x.textContent);
          const solHtml = document.querySelector('#solutionContainer').innerHTML;

          return {
            brokenImgs,
            mathErrors,
            solText,
            solHidden,
            stepTitles,
            hasDoubleAsterisk: solText.includes('**') || solHtml.includes('**'),
            hasRawMath: solText.includes('$')
          };
        });

        if (state.solHidden) {
          throw new Error(`${task.id}: solution container remains hidden after toggle`);
        }
        if (state.brokenImgs.length > 0) {
          throw new Error(`${task.id}: broken images: ${state.brokenImgs.join(', ')}`);
        }
        if (state.mathErrors.length > 0) {
          throw new Error(`${task.id}: KaTeX errors: ${JSON.stringify(state.mathErrors)}`);
        }
        if (state.hasDoubleAsterisk) {
          throw new Error(`${task.id}: contains ** in solution!`);
        }
        if (state.hasRawMath) {
          throw new Error(`${task.id}: contains unrendered $ formula in solution text`);
        }

        console.log(`  ✓ ${task.id} (${state.stepTitles.length} steps, OK)`);
      }
    }

    console.log(`\nALL ${testedCount} TASKS PASSED BROWSER VERIFICATION!`);
    if (pageErrors.length > 0) {
      console.warn('Page errors occurred:', pageErrors);
    }
  } finally {
    await browser.close();
  }
})();
