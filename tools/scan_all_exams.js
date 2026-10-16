const fs = require('fs');
const path = require('path');
const { PDFParse } = require('pdf-parse');

const files = [
  // 2022 grudzień (Formuła 2023 próbna)
  { id: '2022-grudzien', file: 'data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf' },
  // 2023 przykładowy arkusz
  { id: '2023-przykladowy', file: 'data/arkusze_cke/2023/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf' },
  // 2023 maj
  { id: '2023-maj', file: 'data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf' },
  // 2023 czerwiec
  { id: '2023-czerwiec', file: 'data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf' },
  // 2024 maj
  { id: '2024-maj', file: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf' },
  // 2024 czerwiec
  { id: '2024-czerwiec', file: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf' },
  // 2024 grudzień próbna
  { id: '2024-grudzien', file: 'data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona.pdf' },
  // 2025 maj
  { id: '2025-maj', file: 'data/arkusze_cke/2025/fizyka-2025-maj-matura-rozszerzona.pdf' },
  // 2025 czerwiec
  { id: '2025-czerwiec', file: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf' },
  // 2026 styczeń
  { id: '2026-styczen', file: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf' },
  // informatory
  { id: 'informator-2023', file: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf' },
  { id: 'informator-2025', file: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2025.pdf' }
];

async function scan() {
  for (const item of files) {
    if (!fs.existsSync(item.file)) {
      console.log(`Missing: ${item.file}`);
      continue;
    }
    const buf = fs.readFileSync(item.file);
    let text = '';
    try {
      const parser = new PDFParse({ data: buf });
      const res = await parser.getText();
      text = res.text;
      await parser.destroy();
    } catch (e) {
      console.log(`Error parsing ${item.id}:`, e.message);
      continue;
    }
    
    console.log(`\n======================================================`);
    console.log(`ARKUSZ: ${item.id} (długość tekstu: ${text.length})`);
    console.log(`======================================================`);

    // In informator, tasks can go up to 30+, in exams tasks go up to 15-18
    const maxZ = item.id.includes('informator') ? 15 : 6;
    for (let z = 1; z <= maxZ; z++) {
      const reg = new RegExp(`Zadanie\\s+${z}\\.([\\s\\S]{1,500})`, 'i');
      const m = text.match(reg);
      if (m) {
        const clean = m[1].replace(/\s+/g, ' ').trim().slice(0, 300);
        console.log(`\n[Zadanie ${z}]:\n${clean}`);
      }
    }
  }
}

scan().catch(console.error);
