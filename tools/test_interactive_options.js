const puppeteer = require('puppeteer');
const assert = require('assert');

(async () => {
  console.log('Testing interactive options and unasterisked answers in browser...');
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });

  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1100 });
    const fileUrl = require('url').pathToFileURL(require('path').resolve('index.html')).href;
    await page.goto(fileUrl, { waitUntil: 'networkidle0' });

    await page.waitForFunction(() => window.app && window.katex);
    await page.evaluate(() => window.app.setCourse('matura-fizyka'));

    // --- TEST 1: Introductory closed task p-zad-3 (correct: A) ---
    console.log('Testing p-zad-3...');
    await page.evaluate(() => window.app.openTask('m-praca', 'p-zad-3', 'sub-praca-moc'));
    await page.waitForSelector('.problem-options-list');

    // Click option B (incorrect)
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
    console.log('p-zad-3 after clicking B:', stateB);
    assert(stateB[1].isIncorrect, 'Option B should be marked incorrect');
    assert(stateB[0].isCorrect, 'Option A should be marked correct');
    await page.screenshot({ path: 'tools/praca-qa/interactive_p_zad_3_wrong.png' });

    // Click option A (correct)
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
    console.log('p-zad-3 after clicking A:', stateA);
    assert(stateA[0].isCorrect, 'Option A should be marked correct');
    assert(!stateA[1].isIncorrect, 'Option B should not be marked incorrect after selecting A');
    await page.screenshot({ path: 'tools/praca-qa/interactive_p_zad_3_correct.png' });

    // Verify solution answer doesn't have **
    await page.evaluate(() => document.querySelector('#toggleSolutionBtn').click());
    const solAnswerText = await page.evaluate(() => document.querySelector('.answer-highlight')?.textContent || '');
    console.log('p-zad-3 solution answer text:', solAnswerText);
    assert(!solAnswerText.includes('**'), 'Solution answer should not contain ** asterisks');

    // --- TEST 2: Matura CKE task 2023 czerwiec zad 2 (correct: B) ---
    console.log('Testing matura-cke-praca-2023-czerwiec-zad-2...');
    await page.evaluate(() => window.app.openTask('m-praca', 'matura-cke-praca-2023-czerwiec-zad-2', 'sub-praca-matura'));
    await page.waitForSelector('.problem-options-list');

    // Click option D (incorrect)
    await page.evaluate(() => {
      const items = document.querySelectorAll('.problem-options-list .problem-option-item');
      items[3].click(); // Option D
    });
    let maturaStateD = await page.evaluate(() => {
      const items = [...document.querySelectorAll('.problem-options-list .problem-option-item')];
      return items.map(it => ({
        letter: it.querySelector('.problem-option-letter')?.textContent.trim(),
        isCorrect: it.classList.contains('is-correct'),
        isIncorrect: it.classList.contains('is-incorrect')
      }));
    });
    console.log('Matura 2023-czerwiec after clicking D:', maturaStateD);
    assert(maturaStateD[3].isIncorrect, 'Option D should be marked incorrect');
    assert(maturaStateD[1].isCorrect, 'Option B should be marked correct');
    await page.screenshot({ path: 'tools/praca-qa/interactive_matura_2023_cze.png' });

    // --- TEST 3: Matura CKE task 2026 czerwiec zad 3 (P/F table) ---
    console.log('Testing matura-cke-praca-2026-czerwiec-zad-3 (P/F table)...');
    await page.evaluate(() => window.app.openTask('m-praca', 'matura-cke-praca-2026-czerwiec-zad-3', 'sub-praca-matura'));
    await page.waitForSelector('.cke-table');

    // Click F in row 1 (wrong) and P in row 2 (correct)
    await page.evaluate(() => {
      const rows = document.querySelectorAll('.cke-table tr[data-correct]');
      const row1F = rows[0].querySelectorAll('.pf-box')[1]; // F
      row1F.click();
      const row2P = rows[1].querySelectorAll('.pf-box')[0]; // P
      row2P.click();
    });

    let pfState = await page.evaluate(() => {
      const rows = [...document.querySelectorAll('.cke-table tr[data-correct]')];
      return rows.map(r => {
        const boxes = [...r.querySelectorAll('.pf-box')];
        return boxes.map(b => ({
          val: b.textContent.trim(),
          isCorrect: b.classList.contains('is-correct'),
          isIncorrect: b.classList.contains('is-incorrect')
        }));
      });
    });
    console.log('P/F table state:', pfState);
    assert(pfState[0][1].isIncorrect, 'Row 1 F should be incorrect');
    assert(pfState[0][0].isCorrect, 'Row 1 P should be highlighted correct');
    assert(pfState[1][0].isCorrect, 'Row 2 P should be marked correct');
    // --- TEST 4: Matura CKE task 2026 maj zad 2 (correct: B) ---
    console.log('Testing matura-cke-praca-2026-maj-zad-2...');
    await page.evaluate(() => window.app.openTask('m-praca', 'matura-cke-praca-2026-maj-zad-2', 'sub-praca-matura'));
    await page.waitForSelector('.problem-options-list');

    await page.evaluate(() => {
      const items = document.querySelectorAll('.problem-options-list .problem-option-item');
      items[1].click(); // Option B (correct)
    });

    let majStateB = await page.evaluate(() => {
      const items = [...document.querySelectorAll('.problem-options-list .problem-option-item')];
      return items.map(it => ({
        letter: it.querySelector('.problem-option-letter')?.textContent.trim(),
        isCorrect: it.classList.contains('is-correct'),
        isIncorrect: it.classList.contains('is-incorrect')
      }));
    });
    console.log('Matura 2026-maj after clicking B:', majStateB);
    assert(majStateB[1].isCorrect, 'Option B should be marked correct');
    await page.screenshot({ path: 'tools/praca-qa/interactive_matura_2026_maj.png' });

    console.log('ALL TESTS PASSED WITH 100% SUCCESS!');
  } finally {
    await browser.close();
  }
})();
