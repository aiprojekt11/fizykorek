const fs = require('fs');
const pdf = require('pdf-parse');

async function extract() {
  const dataBuffer = fs.readFileSync('data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf');
  const data = await pdf(dataBuffer);
  console.log('Total pages:', data.numpages);
  fs.writeFileSync('tools/extracted_2026_styczen.txt', data.text, 'utf8');
  console.log('Saved to tools/extracted_2026_styczen.txt. Length:', data.text.length);
  console.log('\n--- FIRST 2000 CHARS ---\n');
  console.log(data.text.substring(0, 2000));
}

extract().catch(console.error);
