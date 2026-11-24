const assert = require('assert');
const fs = require('fs');
const path = require('path');
const vm = require('vm');
const puppeteer = require('puppeteer');
const { pathToFileURL } = require('url');

const sandbox = { window: {} };
vm.runInNewContext(fs.readFileSync('js/data-courses.js', 'utf8'), sandbox);
const section = sandbox.window.FIZYKOREK_COURSES['matura-fizyka'].sections.find((item) => item.id === 'm-bryla');
const wanted = new Map([
  ['b-zad-17', 'sub-bryla-moment-sily'],
  ['b-zad-29', 'sub-bryla-energia'],
  ['b-zad-33', 'sub-bryla-energia'],
  ['b-zad-35', 'sub-bryla-moment-pedu']
]);
const tasks = [];
for (const subchapter of section.subchapters) {
  for (const task of subchapter.tasks || []) {
    if (wanted.has(task.id)) tasks.push({ ...task, subchapterId: subchapter.id });
  }
}

assert.equal(tasks.length, 4);
assert(!tasks.find((task) => task.id === 'b-zad-29').title.includes('Moc'));
const task33Text = JSON.stringify(tasks.find((task) => task.id === 'b-zad-33').solution);
assert(task33Text.includes('Metoda I — dynamiczna'));
assert(task33Text.includes('Metoda II — energetyczna'));

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const errors = [];
  try {
    const page = await browser.newPage();
    page.on('pageerror', (error) => errors.push(error.message));
    await page.setViewport({ width: 1440, height: 1000 });
    await page.goto(pathToFileURL(path.resolve('index.html')).href, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(() => window.app.setCourse('matura-fizyka'));

    async function checkTask(task) {
      await page.evaluate(
        ({ id, subchapterId }) => window.app.openTask('m-bryla', id, subchapterId),
        task
      );
      await page.waitForFunction(() => [...document.querySelectorAll('#taskProblemText img')].every((image) => image.complete));
      await page.evaluate(() => {
        const solution = document.querySelector('#solutionContainer');
        if (solution.classList.contains('hidden')) document.querySelector('#toggleSolutionBtn').click();
      });
      await page.waitForFunction(() => !document.querySelector('#solutionContainer').classList.contains('hidden'));
      await page.waitForFunction(() => [...document.querySelectorAll('#solutionContainer img')].every((image) => image.complete));
      const state = await page.evaluate(() => ({
        brokenImages: [...document.querySelectorAll('#taskProblemText img, #solutionContainer img')]
          .filter((image) => !image.naturalWidth)
          .map((image) => image.src),
        mathErrors: document.querySelectorAll('#taskProblemText .katex-error, #solutionContainer .katex-error').length,
        width: Math.max(
          document.documentElement.scrollWidth - innerWidth,
          document.querySelector('#taskProblemText').scrollWidth - document.querySelector('#taskProblemText').clientWidth,
          document.querySelector('#solutionContainer').scrollWidth - document.querySelector('#solutionContainer').clientWidth
        )
      }));
      assert.deepEqual(state.brokenImages, [], `${task.id}: uszkodzony obraz`);
      assert.equal(state.mathErrors, 0, `${task.id}: błąd KaTeX`);
      assert(state.width <= 2, `${task.id}: poziome przepełnienie ${state.width}px`);
    }

    for (const task of tasks) await checkTask(task);
    await page.setViewport({ width: 390, height: 844 });
    for (const task of tasks) await checkTask(task);
    assert.deepEqual(errors, [], `Błędy strony: ${errors.join(' | ')}`);
    console.log('PASS: zadania 17, 29, 33 i 35 działają na desktopie i telefonie.');
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
