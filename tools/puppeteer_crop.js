const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

const tasks = [
    { year: 2025, file: '../data/arkusze_cke/2025/fizyka-2025-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2024, file: '../data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2023, file: '../data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2022, file: '../data/arkusze_cke/2022/fizyka-2022-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2021, file: '../data/arkusze_cke/2021/fizyka-2021-maj-matura-rozszerzona.pdf', page: 2 }
];

async function main() {
    // headless: false but we can run it in background
    // Headless "new" supports the PDF viewer!
    const browser = await puppeteer.launch({ headless: 'new' });
    const page = await browser.newPage();
    
    // Set a large viewport so the PDF fits without scrolling
    await page.setViewport({ width: 1200, height: 1600 });
    
    const outDir = path.resolve(__dirname, '../img/full');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }

    for (const task of tasks) {
        const pdfPath = path.resolve(__dirname, task.file);
        if (!fs.existsSync(pdfPath)) continue;

        const pdfUrl = `file:///${pdfPath.replace(/\\/g, '/')}#page=${task.page}`;
        console.log(`Processing ${task.year} page ${task.page}...`);
        
        await page.goto(pdfUrl);
        // Give it 5 seconds to render the native PDF viewer
        await new Promise(resolve => setTimeout(resolve, 5000));
        
        const outPath = path.join(outDir, `cke_${task.year}_page${task.page}.png`);
        await page.screenshot({ path: outPath });
        console.log(`Saved ${outPath}`);
    }

    await browser.close();
}

main().catch(console.error);
