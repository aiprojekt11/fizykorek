const fs = require('fs');
const path = require('path');
const PDFParser = require('pdf2json');

const filesToProcess = [
    { year: 2020, pdf: '../data/arkusze_cke/2020/fizyka-2020-czerwiec-matura-rozszerzona.pdf' },
    { year: 2019, pdf: '../data/arkusze_cke/2019/fizyka-2019-maj-matura-rozszerzona.pdf' },
    { year: 2018, pdf: '../data/arkusze_cke/2018/fizyka-2018-maj-matura-rozszerzona.pdf' },
    { year: 2017, pdf: '../data/arkusze_cke/2017/fizyka-2017-maj-matura-rozszerzona.pdf' },
    { year: 2016, pdf: '../data/arkusze_cke/2016/fizyka-2016-maj-matura-rozszerzona.pdf' },
    { year: 2015, pdf: '../data/arkusze_cke/2015/fizyka-2015-maj-matura-rozszerzona.pdf' }
];

function extractText(pdfPath) {
    return new Promise((resolve, reject) => {
        if (!fs.existsSync(pdfPath)) {
            console.log("File not found:", pdfPath);
            resolve("");
            return;
        }
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
    for (const item of filesToProcess) {
        const fullPath = path.resolve(__dirname, item.pdf);
        const text = await extractText(fullPath);
        if (text) {
            fs.writeFileSync(path.resolve(__dirname, `../data/arkusze_cke/${item.year}/text.txt`), text, 'utf8');
            console.log(`Extracted text for ${item.year}, length: ${text.length}`);
        }
    }
}

run().catch(console.error);
