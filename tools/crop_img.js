const puppeteer = require('puppeteer');
const fs = require('fs');

(async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    
    await page.setContent(`
        <html>
            <body style="margin: 0; padding: 0;">
                <img id="img" src="file:///C:/Users/barto/.gemini/antigravity-ide/brain/94da4a30-0c31-4271-a362-8dc315661b2e/.user_uploaded/media_1789644249110.png" style="position: absolute; top: -110px; left: -50px;">
            </body>
        </html>
    `);
    
    // Wait for image to load
    await page.waitForTimeout(1000);
    
    // The diagram is approx 500x250, we need to adjust clip manually if we know dimensions.
    // Let's just clip a 600x350 region near the top
    await page.screenshot({
        path: 'c:\\Users\\barto\\Desktop\\aplikacja\\img\\cke_2022_zad1.png',
        clip: { x: 0, y: 0, width: 450, height: 260 }
    });
    
    console.log('Image cropped and saved');
    await browser.close();
})();
