const puppeteer = require('puppeteer');
(async () => {
    try {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();
        
        page.on('console', msg => {
            if (msg.type() === 'error') {
                console.log('PAGE ERROR LOG:', msg.text());
            } else {
                console.log('PAGE LOG:', msg.text());
            }
        });
        page.on('pageerror', err => console.log('PAGE ERROR:', err.message));
        
        await page.goto('http://localhost:3000/', {waitUntil: 'networkidle0'});
        
        // click on Dział 1: Kinematyka to trigger rendering of subchapters
        await page.evaluate(() => {
            const el = Array.from(document.querySelectorAll('.chapter-title')).find(el => el.textContent.includes('Dział 1'));
            if (el) el.click();
        });
        
        await new Promise(r => setTimeout(r, 2000));
        
        await browser.close();
    } catch (e) {
        console.error('Script error:', e);
    }
})();
