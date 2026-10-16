// tools/test_praca_new_tasks.js
const puppeteer = require('puppeteer');
const path = require('url');
const fs = require('fs');
const assert = require('assert');

(async () => {
  console.log('Launching browser to test new Praca, Moc i Energia tasks...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  try {
    const page = await browser.newPage();
    const errors = [];
    page.on('pageerror', e => errors.push(e.message));

    await page.setViewport({ width: 1440, height: 1100 });
    const fileUrl = require('url').pathToFileURL(require('path').resolve('index.html')).href;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(async () => {
      await document.fonts.ready;
      document.documentElement.style.scrollBehavior = 'auto';
    });

    // Switch to matura-fizyka
    await page.evaluate(() => window.app.setCourse('matura-fizyka'));

    // Check that section m-praca is visible and has the subchapters
    const subchaptersInfo = await page.evaluate(() => {
      const praca = window.app.courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');
      return praca.subchapters.map(sc => ({ id: sc.id, title: sc.title, tasksCount: sc.tasks.length }));
    });
    console.log('m-praca subchapters in browser:', subchaptersInfo);

    assert.equal(subchaptersInfo.length, 5);
    assert.equal(subchaptersInfo[0].tasksCount, 12);
    assert.equal(subchaptersInfo[1].tasksCount, 13);
    assert.equal(subchaptersInfo[2].tasksCount, 8);
    assert.equal(subchaptersInfo[3].tasksCount, 9);
    assert.equal(subchaptersInfo[4].tasksCount, 9);

    // Test a selection of representative tasks
    const testTaskIds = [
      { id: 'p-zad-1', sub: 'sub-praca-moc', desc: 'Simple work task' },
      { id: 'p-zad-3', sub: 'sub-praca-moc', desc: 'Closed question task' },
      { id: 'p-zad-7', sub: 'sub-praca-moc', desc: 'F(s) SVG chart task' },
      { id: 'p-zad-12', sub: 'sub-praca-moc', desc: 'P(t) SVG chart task' },
      { id: 'p-zad-18', sub: 'sub-energie-zachowanie', desc: 'Closed question gravity' },
      { id: 'p-zad-23', sub: 'sub-energie-zachowanie', desc: 'Ep(h) SVG chart task' },
      { id: 'p-zad-25', sub: 'sub-energie-zachowanie', desc: 'Multi-step ramp + friction' },
      { id: 'p-zad-26', sub: 'sub-zderzenia-niesprezyste', desc: 'Inelastic collision' },
      { id: 'p-zad-33', sub: 'sub-zderzenia-niesprezyste', desc: 'Ramp + inelastic collision' },
      { id: 'p-zad-34', sub: 'sub-zderzenia-sprezyste', desc: 'Closed question elastic condition' },
      { id: 'p-zad-39', sub: 'sub-zderzenia-sprezyste', desc: '2D elastic collision 90 deg' },
      { id: 'p-zad-42', sub: 'sub-zderzenia-sprezyste', desc: 'Multi-part analytic derivation' }
    ];

    if (!fs.existsSync('tools/praca-qa')) {
      fs.mkdirSync('tools/praca-qa', { recursive: true });
    }

    for (const item of testTaskIds) {
      console.log(`Testing task ${item.id} (${item.desc})...`);
      await page.evaluate((taskId, subId) => {
        window.app.openTask('m-praca', taskId, subId);
      }, item.id, item.sub);

      await page.waitForFunction(() => window.scrollY === 0);

      // Check task problem text
      const problemState = await page.evaluate(() => {
        return {
          title: document.querySelector('#taskTitle')?.textContent,
          mathErrors: [...document.querySelectorAll('#taskProblemText .katex-error')].map(x => x.textContent),
          hasSvg: !!document.querySelector('#taskProblemText svg, .chart-container-svg svg'),
          hasOptions: !!document.querySelector('#taskProblemText .problem-options-list'),
          text: document.querySelector('#taskProblemText')?.innerText
        };
      });

      assert.equal(problemState.mathErrors.length, 0, `Math error in task ${item.id} problem: ${problemState.mathErrors.join(', ')}`);

      if (item.id === 'p-zad-7' || item.id === 'p-zad-12' || item.id === 'p-zad-23') {
        assert(problemState.hasSvg, `Task ${item.id} should have an SVG chart!`);
      }
      if (item.id === 'p-zad-3' || item.id === 'p-zad-18' || item.id === 'p-zad-26' || item.id === 'p-zad-34') {
        assert(problemState.hasOptions, `Task ${item.id} should have options!`);
      }

      // Open solution
      const isSolutionHiddenBefore = await page.evaluate(() => document.querySelector('#solutionContainer').classList.contains('hidden'));
      assert(isSolutionHiddenBefore, `Solution should initially be hidden for ${item.id}`);

      await page.evaluate(() => {
        document.querySelector('#toggleSolutionBtn').click();
      });

      const isSolutionHiddenAfter = await page.evaluate(() => document.querySelector('#solutionContainer').classList.contains('hidden'));
      assert(!isSolutionHiddenAfter, `Solution should be visible after click for ${item.id}`);

      // Check solution content
      const solState = await page.evaluate(() => {
        const solEl = document.querySelector('#solutionContainer');
        return {
          mathErrors: [...solEl.querySelectorAll('.katex-error')].map(x => x.textContent),
          stepCount: solEl.querySelectorAll('.step-item').length,
          hasAnswer: solEl.querySelector('.answer-highlight') !== null,
          text: solEl.innerText
        };
      });

      assert.equal(solState.mathErrors.length, 0, `Math error in solution for ${item.id}: ${solState.mathErrors.join(', ')}`);
      assert(solState.stepCount > 0, `Solution for ${item.id} should have at least 1 step`);
      assert(solState.hasAnswer, `Solution for ${item.id} should have an answer block`);

      // Screenshot for review
      await page.screenshot({ path: `tools/praca-qa/${item.id}.png`, fullPage: false });
    }

    console.log('All tests passed successfully! Screenshots saved in tools/praca-qa/');
    assert.equal(errors.length, 0, `Page errors: ${errors.join(', ')}`);

  } finally {
    await browser.close();
  }
})();
