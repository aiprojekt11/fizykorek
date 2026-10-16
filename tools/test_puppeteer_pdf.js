const puppeteer = require('puppeteer');
const path = require('path');

async function test() {
    const browser = await puppeteer.launch({
        headless: true,
        args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1200, height: 1600, deviceScaleFactor: 2 });

    const pdfPath = 'file:///' + path.resolve('data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf').replace(/\\/g, '/');
    console.log('Navigating to:', pdfPath);
    await page.goto(pdfPath);
    await new Promise(r => setTimeout(r, 2000));
    await page.screenshot({ path: 'tools/test_pdf_render.png' });
    await browser.close();
    console.log('Screenshot saved!');
}

test().catch(console.error);
