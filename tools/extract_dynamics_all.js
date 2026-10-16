const fs = require('fs');
const path = require('path');
const PDFParser = require('pdf2json');

function extractPdf(filePath) {
  return new Promise((resolve, reject) => {
    const pdfParser = new PDFParser();
    pdfParser.on("pdfParser_dataError", errData => reject(errData.parserError));
    pdfParser.on("pdfParser_dataReady", pdfData => {
      let fullText = "";
      pdfData.Pages.forEach((page, pageIndex) => {
        fullText += `\n--- PAGE ${pageIndex + 1} ---\n`;
        let lastY = -1;
        let line = "";
        page.Texts.forEach(textItem => {
          const str = decodeURIComponent(textItem.R.map(r => r.T).join(""));
          if (Math.abs(textItem.y - lastY) > 0.4) {
            if (line.trim()) fullText += line.trim() + "\n";
            line = str + " ";
            lastY = textItem.y;
          } else {
            line += str + " ";
          }
        });
        if (line.trim()) fullText += line.trim() + "\n";
      });
      resolve(fullText);
    });
    pdfParser.loadPDF(filePath);
  });
}

async function main() {
  const files = [
    { name: '2026-styczen', path: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf' },
    { name: '2025-maj', path: 'data/arkusze_cke/2025/fizyka-2025-maj-matura-rozszerzona.pdf' },
    { name: '2025-czerwiec', path: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf' },
    { name: '2024-grudzien', path: 'data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona.pdf' },
    { name: '2024-maj', path: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf' },
    { name: '2024-czerwiec', path: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf' },
    { name: '2023-maj', path: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf' },
    { name: '2023-czerwiec', path: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf' },
    { name: '2022-grudzien', path: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf' },
    { name: 'informator-2023', path: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf' }
  ];

  for (const f of files) {
    if (!fs.existsSync(f.path)) {
      console.log('File not found:', f.path);
      continue;
    }
    console.log('Extracting:', f.name);
    const txt = await extractPdf(f.path);
    fs.writeFileSync(`tools/raw_${f.name}.txt`, txt, 'utf-8');
  }
  console.log('All extracted!');
}

main().catch(console.error);
