const fs = require('fs');
const path = require('path');
const { createCanvas, Image } = require('canvas');

// We need to polyfill some DOM elements for pdfjs-dist in Node.js
class DOMMatrix {}
global.DOMMatrix = DOMMatrix;

// Removed static import

const tasks = [
    { year: 2025, file: '../data/arkusze_cke/2025/fizyka-2025-probna-matura-rozszerzona.pdf', page: 2 },
    { year: 2024, file: '../data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2023, file: '../data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2022, file: '../data/arkusze_cke/2022/fizyka-2022-maj-matura-rozszerzona.pdf', page: 2 },
    { year: 2021, file: '../data/arkusze_cke/2021/fizyka-2021-maj-matura-rozszerzona.pdf', page: 2 }
];

async function renderPage(task, pdfjsLib) {
    const pdfPath = path.resolve(__dirname, task.file);
    const outDir = path.resolve(__dirname, '../img/full');
    if (!fs.existsSync(outDir)) {
        fs.mkdirSync(outDir, { recursive: true });
    }
    
    console.log(`Processing ${task.year}...`);
    const data = new Uint8Array(fs.readFileSync(pdfPath));
    const pdfDocument = await pdfjsLib.getDocument({ data }).promise;
    
    const page = await pdfDocument.getPage(task.page);
    const viewport = page.getViewport({ scale: 2.0 }); // 2x scale for better quality
    
    const canvas = createCanvas(viewport.width, viewport.height);
    const context = canvas.getContext('2d');
    
    const renderContext = {
        canvasContext: context,
        viewport: viewport
    };
    
    await page.render(renderContext).promise;
    
    const outPath = path.join(outDir, `cke_${task.year}_page${task.page}.png`);
    const buffer = canvas.toBuffer('image/png');
    fs.writeFileSync(outPath, buffer);
    console.log(`Saved ${outPath}`);
}

async function main() {
    const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
    for (const task of tasks) {
        try {
            await renderPage(task, pdfjsLib);
        } catch (e) {
            console.error(`Error processing ${task.year}:`, e);
        }
    }
}

main();
