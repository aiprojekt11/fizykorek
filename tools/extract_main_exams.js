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

const mainExams = [
    '2025/fizyka-2025-maj-matura-rozszerzona.pdf',
    '2025/fizyka-2025-maj-matura-rozszerzona-odpowiedzi.pdf',
    '2024/fizyka-2024-maj-matura-rozszerzona.pdf',
    '2024/fizyka-2024-maj-matura-rozszerzona-odpowiedzi.pdf',
    '2023/fizyka-2023-maj-matura-rozszerzona.pdf',
    '2023/fizyka-2023-maj-matura-rozszerzona-odpowiedzi.pdf',
    '2022/fizyka-2022-maj-matura-rozszerzona.pdf',
    '2022/fizyka-2022-maj-matura-rozszerzona-odpowiedzi.pdf',
    '2021/fizyka-2021-maj-matura-rozszerzona.pdf',
    '2021/fizyka-2021-maj-matura-rozszerzona-odpowiedzi.pdf',
    '2020/fizyka-2020-czerwiec-matura-rozszerzona.pdf',
    '2020/fizyka-2020-czerwiec-matura-rozszerzona-odpowiedzi.pdf',
    '2019/fizyka-2019-maj-matura-rozszerzona.pdf',
    '2019/fizyka-2019-maj-matura-rozszerzona-odpowiedzi.pdf',
    '2018/fizyka-2018-maj-matura-rozszerzona.pdf',
    '2018/fizyka-2018-maj-matura-rozszerzona-odpowiedzi.pdf'
];

async function run() {
    for (const rel of mainExams) {
        const fullPdf = path.join(__dirname, '..', 'data', 'arkusze_cke', rel);
        const outTxt = fullPdf.replace('.pdf', '.txt');
        if (fs.existsSync(outTxt) && fs.statSync(outTxt).size > 1000) {
            console.log(`Already exists: ${rel}`);
            continue;
        }
        if (!fs.existsSync(fullPdf)) {
            console.log(`Missing PDF: ${rel}`);
            continue;
        }
        try {
            console.log(`Extracting: ${rel}...`);
            const text = await extractText(fullPdf);
            fs.writeFileSync(outTxt, text, 'utf8');
            console.log(`Saved: ${rel} (${text.length} chars)`);
        } catch (e) {
            console.error(`Error on ${rel}:`, e.message);
        }
    }
    console.log('Finished extraction of main exams.');
}

run();
