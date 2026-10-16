const fs = require('fs');
const { PDFParse } = require('pdf-parse');

async function inspectTask(file, zNum, maxChars = 2000) {
  const buf = fs.readFileSync(file);
  const parser = new PDFParse({ data: buf });
  const res = await parser.getText();
  await parser.destroy();
  const text = res.text;
  
  const pattern = new RegExp(`Zadanie\\s+${zNum}\\.([\\s\\S]*?)(?=Zadanie\\s+${zNum+1}\\.|$)`, 'i');
  const m = text.match(pattern);
  console.log(`\n======================================================`);
  console.log(`FILE: ${file} | ZADANIE ${zNum}`);
  console.log(`======================================================`);
  if (m) {
    console.log(m[1].slice(0, maxChars).replace(/\s+/g, ' ').trim());
  } else {
    console.log('NOT FOUND');
  }
}

async function run() {
  // 2025 czerwiec zad 1
  await inspectTask('data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', 1);
  // 2023 czerwiec zad 1
  await inspectTask('data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', 1);
  // 2022 grudzien zad 1
  await inspectTask('data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', 1);
  // informator zad 2
  await inspectTask('data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', 2);
}

run().catch(console.error);
