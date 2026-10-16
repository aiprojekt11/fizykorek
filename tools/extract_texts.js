const fs = require('fs');
const path = require('path');
const PDFParser = require('pdf2json');

function extractText(pdfPath) {
    return new Promise((resolve, reject) => {
        const pdfParser = new PDFParser(null, 1);
        pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
        pdfParser.on("pdfParser_dataReady", () => {
            const raw = pdfParser.getRawTextContent();
            resolve(raw);
        });
        pdfParser.loadPDF(pdfPath);
    });
}

async function run() {
    const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018'];
    for (const y of years) {
        const dir = path.join(__dirname, '..', 'data', 'arkusze_cke', y);
        if (!fs.existsSync(dir)) continue;
        const files = fs.readdirSync(dir).filter(f => f.endsWith('.pdf') && !f.includes('odpowiedzi'));
        for (const f of files) {
            const pdfPath = path.join(dir, f);
            try {
                const text = await extractText(pdfPath);
                const outTxt = path.join(dir, f.replace('.pdf', '.txt'));
                fs.writeFileSync(outTxt, text, 'utf8');
                console.log(`Extracted text for ${y}/${f} (${text.length} chars)`);
            } catch (e) {
                console.error(`Error for ${y}/${f}:`, e.message);
            }
        }
    }
}

run();
