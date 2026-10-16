const fs = require('fs');
const { PDFParse } = require('pdf-parse');

const files = [
    'data/arkusze_cke/2025/fizyka-2025-maj-matura-rozszerzona.pdf',
    'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf',
    'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf'
];

async function run() {
    for (const file of files) {
        if (fs.existsSync(file)) {
            const buf = fs.readFileSync(file);
            const parser = new PDFParse({ data: buf });
            const res = await parser.getText();
            const text = res.text || '';
            const z1 = text.indexOf('Zadanie 1');
            const z4 = text.indexOf('Zadanie 4');
            console.log(`\n--- ${file} ---`);
            console.log(text.substring(z1, z4 !== -1 ? z4 : z1 + 3000));
        } else {
            console.log(`File not found: ${file}`);
        }
    }
}
run();
