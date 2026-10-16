const puppeteer = require('puppeteer');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    
    // Wait for app to load
    await page.waitForSelector('.course-switch-card');
    
    // Click Matura z Fizyki
    await page.evaluate(() => {
        document.querySelector('[data-course-id="matura-fizyka"]').click();
    });
    
    // Wait for subchapter
    await page.waitForTimeout(500);
    
    // Select Zadanie maturalne CKE (2025 maj)
    await page.evaluate(() => {
        let options = document.querySelectorAll('#taskJumpSelect option');
        for (let o of options) {
            if (o.textContent.includes('2025 maj')) {
                document.getElementById('taskJumpSelect').value = o.value;
                document.getElementById('taskJumpSelect').dispatchEvent(new Event('change'));
                break;
            }
        }
    });
    
    await page.waitForTimeout(1000);
    
    // Check DOM
    let html = await page.evaluate(() => {
        return document.getElementById('taskProblemText').innerHTML;
    });
    
    console.log(html.substring(0, 1500));
    await browser.close();
})();
