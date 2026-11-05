const fs = require('fs');
const path = require('path');
const vm = require('vm');
const puppeteer = require('puppeteer');
const assert = require('assert');

const root = path.resolve(__dirname, '..');
const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync(path.join(root, 'js', 'data-courses.js'), 'utf8'), sandbox);
const course = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'];
const bryla = course.sections.find(s => s.id === 'm-bryla');

// 1. Structure check
console.log('--- 1. Structure Check ---');
const subCounts = bryla.subchapters.map(s => ({ id: s.id, count: s.tasks.length }));
console.log('Subchapter task counts:', subCounts);
assert.equal(bryla.subchapters[0].tasks.length, 11, 'Sub 1 should have 11 tasks');
assert.equal(bryla.subchapters[1].tasks.length, 12, 'Sub 2 should have 12 tasks');
assert.equal(bryla.subchapters[2].tasks.length, 11, 'Sub 3 should have 11 tasks');
assert.equal(bryla.subchapters[3].tasks.length, 10, 'Sub 4 should have 10 tasks');
assert.equal(bryla.subchapters[4].tasks.length, 13, 'Sub 5 should have 13 tasks');

// Check for asterisks **
let asteriskCount = 0;
bryla.subchapters.forEach(sub => {
  sub.tasks.forEach(t => {
    const json = JSON.stringify(t);
    if (json.includes('**')) {
      console.error(`ERROR: Task ${t.id} contains **!`);
      asteriskCount++;
    }
  });
});
console.log('Total tasks with ** in m-bryla:', asteriskCount);
assert.equal(asteriskCount, 0, 'There should be 0 asterisks');

// Check closed tasks
const closedTasks = [];
bryla.subchapters.slice(0, 4).forEach(sub => {
  sub.tasks.forEach(t => {
    if (t.problem.includes('problem-options-list')) {
      closedTasks.push(t.id);
      assert(t.correctOption, `Task ${t.id} must have correctOption`);
      assert(t.problem.includes(`data-correct="${t.correctOption}"`), `Task ${t.id} must have matching data-correct`);
    }
  });
});
console.log(`Found ${closedTasks.length} closed tasks with interactive options:`, closedTasks);
assert.equal(closedTasks.length, 12, 'Should have exactly 12 closed tasks');

// 2. Browser Verification
(async () => {
  console.log('\n--- 2. Browser Puppeteer Verification ---');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  try {
    const page = await browser.newPage();
    const pageErrors = [];
    page.on('pageerror', err => pageErrors.push(err.message));

    await page.setViewport({ width: 1440, height: 1100 });
    const fileUrl = require('url').pathToFileURL(path.join(root, 'index.html')).href;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(() => window.app.setCourse('matura-fizyka'));

    // Test a closed task interactivity: b-zad-1 (correct: B)
    console.log('Testing interactivity on b-zad-1 (correct: B)...');
    await page.evaluate(() => window.app.openTask('m-bryla', 'b-zad-1', 'sub-bryla-ruch'));
    await page.waitForSelector('.problem-options-list');

    // Click option A (incorrect)
    await page.evaluate(() => {
      const items = document.querySelectorAll('.problem-options-list .problem-option-item');
      items[0].click(); // Option A
    });

    let stateA = await page.evaluate(() => {
      const items = [...document.querySelectorAll('.problem-options-list .problem-option-item')];
      return items.map(it => ({
        letter: it.querySelector('.problem-option-letter')?.textContent.trim(),
        isCorrect: it.classList.contains('is-correct'),
        isIncorrect: it.classList.contains('is-incorrect')
      }));
    });
    console.log('b-zad-1 after clicking option A:', stateA);
    assert(stateA[0].isIncorrect, 'Option A should be marked incorrect');
    assert(stateA[1].isCorrect, 'Option B should be marked correct');

    // Click option B (correct)
    await page.evaluate(() => {
      const items = document.querySelectorAll('.problem-options-list .problem-option-item');
      items[1].click(); // Option B
    });

    let stateB = await page.evaluate(() => {
      const items = [...document.querySelectorAll('.problem-options-list .problem-option-item')];
      return items.map(it => ({
        letter: it.querySelector('.problem-option-letter')?.textContent.trim(),
        isCorrect: it.classList.contains('is-correct'),
        isIncorrect: it.classList.contains('is-incorrect')
      }));
    });
    console.log('b-zad-1 after clicking option B:', stateB);
    assert(stateB[1].isCorrect, 'Option B should be marked correct');
    assert(!stateB[0].isIncorrect, 'Option A should not be marked incorrect after selecting B');

    // Test all 44 tasks in browser for KaTeX and accordion toggle
    console.log('\nChecking all 44 intro tasks rendering in browser...');
    for (let sIdx = 0; sIdx < 4; sIdx++) {
      const sub = bryla.subchapters[sIdx];
      for (const t of sub.tasks) {
        await page.evaluate((secId, taskId, subId) => {
          window.app.openTask(secId, taskId, subId);
        }, 'm-bryla', t.id, sub.id);

        // Click solution toggle
        await page.click('#toggleSolutionBtn');

        const res = await page.evaluate(() => {
          const mathErrors = [...document.querySelectorAll('.katex-error')].map(e => e.textContent);
          const hasAsterisks = document.querySelector('#solutionContainer').innerText.includes('**');
          const hasRawMath = document.querySelector('#solutionContainer').innerText.includes('$');
          const solText = document.querySelector('#solutionContainer').innerText;
          return { mathErrors, hasAsterisks, hasRawMath, len: solText.length };
        });

        if (res.mathErrors.length > 0) {
          throw new Error(`${t.id} has KaTeX errors: ${JSON.stringify(res.mathErrors)}`);
        }
        if (res.hasAsterisks) {
          throw new Error(`${t.id} has asterisks in rendered solution!`);
        }
        if (res.hasRawMath) {
          throw new Error(`${t.id} has unrendered $ math!`);
        }
        assert(res.len > 50, `${t.id} solution text should not be empty`);
      }
      console.log(`  ✓ Subchapter ${sub.id} (${sub.tasks.length} tasks) fully validated.`);
    }

    console.log('\nALL TESTS PASSED! Everything is functional, interactive, and correctly rendered.');
  } finally {
    await browser.close();
  }
})();
