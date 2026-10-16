const fs = require('fs');
const path = require('path');
const pdfParse = require('pdf-parse');

async function findTaskPages() {
  const list = [
    { name: '2026-styczen', file: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', match: 'Zadanie 1' },
    { name: '2025-czerwiec', file: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', match: 'Zadanie 2' },
    { name: '2024-czerwiec', file: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', match: 'Zadanie 1' },
    { name: '2024-maj', file: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', match: 'Zadanie 1' },
    { name: 'informator-2023', file: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', match: 'Impulsowe działanie siły' },
  ];

  for (const item of list) {
    const dataBuffer = fs.readFileSync(item.file);
    const pdfData = await pdfParse(dataBuffer);
    console.log(`=== ${item.name} total pages: ${pdfData.numpages} ===`);
  }
}

findTaskPages().catch(console.error);
