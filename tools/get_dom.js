const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto('http://localhost:3000');
    
    await page.waitForSelector('.course-switch-card');
    
    await page.evaluate(() => {
        document.querySelector('[data-course-id="matura-fizyka"]').click();
    });
    
    await page.waitForTimeout(500);
    
    await page.evaluate(() => {
        let options = document.querySelectorAll('#taskJumpSelect option');
        for (let o of options) {
            // Find a task that has a table, e.g., 2025 maj, which was moved to m-praca.
            // Let's just find ANY task that contains "Zadanie maturalne CKE"
            if (o.textContent.includes('Zadanie maturalne CKE')) {
                document.getElementById('taskJumpSelect').value = o.value;
                document.getElementById('taskJumpSelect').dispatchEvent(new Event('change'));
                break;
            }
        }
    });
    
    await page.waitForTimeout(1000);
    
    let html = await page.evaluate(() => {
        return document.getElementById('taskProblemText').innerHTML;
    });
    
    fs.writeFileSync('tools/browser_dom.html', html);
    console.log('Saved DOM to tools/browser_dom.html');
    await browser.close();
})();
