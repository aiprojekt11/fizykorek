const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const puppeteer = require('puppeteer');
const { pathToFileURL } = require('url');

function readData() {
  const sandbox = { window: {} };
  vm.runInNewContext(fs.readFileSync('js/data-courses.js', 'utf8'), sandbox);
  return sandbox.window.FIZYKOREK_COURSES;
}

(async () => {
  const section = readData()['matura-fizyka'].sections.find((item) => item.id === 'm-bryla');
  const maturaSubchapter = section.subchapters.find((item) => item.id === 'sub-bryla-matura');
  const tasks = maturaSubchapter.tasks;
  const errors = [];
  const browser = await puppeteer.launch({ headless: true, executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' });
  try {
    const page = await browser.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    await page.setViewport({ width: 1440, height: 1000 });
    await page.goto(pathToFileURL(path.resolve('index.html')).href, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(() => window.app.setCourse('matura-fizyka'));

    async function openAndCheck(task) {
      await page.evaluate((id) => window.app.openTask('m-bryla', id, 'sub-bryla-matura'), task.id);
      await page.waitForFunction(() => [...document.querySelectorAll('#taskProblemText img')].every((image) => image.complete));
      await page.evaluate(() => {
        const solution = document.querySelector('#solutionContainer');
        if (solution.classList.contains('hidden')) document.querySelector('#toggleSolutionBtn').click();
      });
      await page.waitForFunction(() => !document.querySelector('#solutionContainer').classList.contains('hidden'));
      await page.waitForFunction(() => [...document.querySelectorAll('#solutionContainer img')].every((image) => image.complete));
      const result = await page.evaluate(() => ({
        brokenImages: [...document.querySelectorAll('#taskProblemText img, #solutionContainer img')].filter((image) => !image.naturalWidth).map((image) => image.src),
        mathErrors: [...document.querySelectorAll('#taskProblemText .katex-error, #solutionContainer .katex-error')].map((item) => item.textContent),
        unrenderedMath: document.querySelector('#solutionContainer').innerText.includes('$'),
        answerLength: document.querySelector('#solutionContainer').innerText.length,
        hasSource: Boolean(document.querySelector('#solutionContainer a')),
        width: Math.max(document.documentElement.scrollWidth - innerWidth, document.querySelector('#taskProblemText').scrollWidth - document.querySelector('#taskProblemText').clientWidth, document.querySelector('#solutionContainer').scrollWidth - document.querySelector('#solutionContainer').clientWidth)
      }));
      const source = `${task.problem}\n${JSON.stringify(task.solution)}`;
      const formulas = [...source.matchAll(/(?<!\$)\$([^$]+)\$(?!\$)/g)].map((match) => match[1]);
      const invalidFormulas = await page.evaluate((items) => items.map((formula) => {
        const decoder = document.createElement('textarea');
        decoder.innerHTML = formula;
        const decoded = decoder.value;
        try {
          window.katex.renderToString(decoded, { throwOnError: true });
          return null;
        } catch (error) {
          return { formula: decoded, message: error.message };
        }
      }).filter(Boolean), formulas);
      assert.deepEqual(result.brokenImages, [], `${task.id}: uszkodzone obrazy`);
      assert.deepEqual(result.mathErrors, [], `${task.id}: błędy KaTeX: ${JSON.stringify(result.mathErrors)}`);
      assert.deepEqual(invalidFormulas, [], `${task.id}: niepoprawne wzory KaTeX ${JSON.stringify(invalidFormulas)}`);
      assert(!result.unrenderedMath, `${task.id}: niewyrenderowany wzór`);
      assert(result.answerLength > 120, `${task.id}: brak widocznego rozwiązania`);
      assert(result.hasSource, `${task.id}: brak odnośnika do klucza`);
      return result;
    }

    for (const task of tasks) await openAndCheck(task);
    await page.screenshot({ path: 'tools/rigid-audit/desktop-rigid.png', fullPage: true });

    await page.setViewport({ width: 390, height: 844 });
    for (const task of tasks) {
      const result = await openAndCheck(task);
      assert(result.width <= 2, `${task.id}: poziome przepełnienie ${result.width}px`);
    }
    await page.screenshot({ path: 'tools/rigid-audit/mobile-rigid.png', fullPage: true });
    assert.deepEqual(errors, [], `Błędy strony: ${errors.join(' | ')}`);
    console.log(`PASS: ${tasks.length} zadań — obrazy, wzory, rozwiązania, źródła i widok mobilny działają.`);
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
