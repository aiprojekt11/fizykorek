const puppeteer = require('puppeteer');
const path = require('path');
const { pathToFileURL } = require('url');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe',
    args: ['--no-sandbox', '--disable-gpu']
  });
  try {
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1000 });
    await page.goto(pathToFileURL(path.resolve('index.html')).href, { waitUntil: 'networkidle0' });
    await page.waitForFunction(() => window.app);

    const start = await page.evaluate(() => ({
      choices: document.querySelectorAll('.course-choice-card').length,
      chooserVisible: !document.querySelector('#courseSelectionView').classList.contains('hidden'),
      dashboardHidden: document.querySelector('#dashboardView').classList.contains('hidden')
    }));
    if (start.choices !== 2 || !start.chooserVisible || !start.dashboardHidden) throw new Error(`Błędny ekran początkowy: ${JSON.stringify(start)}`);

    await page.evaluate(() => document.querySelector('[data-course-id="ii-klasa"]').click());
    await page.waitForFunction(() => !document.querySelector('#dashboardView').classList.contains('hidden'));
    const classTwo = await page.evaluate(() => ({
      title: document.querySelector('#courseHeroTitle').textContent,
      sections: [...document.querySelectorAll('.course-section-card .sec-card-title')].map((item) => item.textContent),
      topics: [...document.querySelectorAll('.stepper-step-card .step-card-title')].map((item) => item.textContent),
      active: document.querySelector('#activeCourseLabel').textContent.trim(),
      empty: document.querySelector('.empty-topic-state')?.textContent.trim()
    }));
    if (classTwo.topics.length !== 6 || classTwo.sections[0] !== 'Termodynamika') throw new Error(`Błędny kurs II klasy: ${JSON.stringify(classTwo)}`);
    await page.screenshot({ path: 'tools/course-selector-desktop.png', fullPage: true });

    await page.click('#logoBtn');
    await page.waitForFunction(() => !document.querySelector('#courseSelectionView').classList.contains('hidden'));
    await page.evaluate(() => document.querySelector('[data-course-id="matura-fizyka"]').click());
    await page.waitForFunction(() => document.querySelector('#courseHeroTitle').textContent.includes('Matura'));
    const matura = await page.evaluate(() => ({
      title: document.querySelector('#courseHeroTitle').textContent,
      sectionCount: document.querySelectorAll('.course-section-card').length
    }));
    if (matura.sectionCount < 1) throw new Error(`Kurs maturalny nie został wyrenderowany: ${JSON.stringify(matura)}`);

    await page.setViewport({ width: 390, height: 844 });
    await page.click('#logoBtn');
    await page.screenshot({ path: 'tools/course-selector-mobile.png', fullPage: true });
    const overflow = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
    if (overflow > 2) throw new Error(`Poziome przepełnienie mobilne: ${overflow}px`);

    console.log(JSON.stringify({ start, classTwo, matura, mobileOverflow: overflow }, null, 2));
  } finally {
    await browser.close();
  }
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
