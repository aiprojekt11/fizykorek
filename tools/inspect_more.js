const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function getDetails(file, query) {
  const buf = fs.readFileSync(file);
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();
  await parser.destroy();
  const text = res.text;
  
  const idx = text.indexOf(query);
  console.log(`\n======================================================`);
  console.log(`QUERY: "${query}" in ${file}`);
  console.log(`======================================================`);
  if (idx !== -1) {
    console.log(text.slice(idx, idx + 1200).replace(/\s+/g, ' ').trim());
  } else {
    console.log('NOT FOUND');
  }
}

async function run() {
  // Informator Zadanie 2.2
  await getDetails('data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', 'Zadanie 2.2');
  // 2025 czerwiec Zadanie 1
  await getDetails('data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', 'Zadanie 1.');
  // 2024 grudzien Zadanie 3
  await getDetails('data/arkusze_cke/2024/fizyka-2024-grudzien-probna-rozszerzona.pdf', 'Zadanie 3.');
  // 2024 maj Zadanie 2
  await getDetails('data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', 'Zadanie 2.');
  // 2023 maj Zadanie 3
  await getDetails('data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', 'Zadanie 3.');
}

run().catch(console.error);
