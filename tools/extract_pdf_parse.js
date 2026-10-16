const fs = require('fs');
const pdf = require('pdf-parse');
const path = require('path');

async function run() {
  const years = ['2025', '2024', '2023', '2022', '2021', '2020', '2019', '2018', '2017', '2016', '2015'];
  for (const yr of years) {
    const dir = path.join('data/arkusze_cke', yr);
    if (!fs.existsSync(dir)) continue;
    const files = fs.readdirSync(dir);
    const pdfFile = files.find(f => f.endsWith('.pdf') && !f.includes('odpowiedzi') && !f.includes('stara'));
    if (!pdfFile) continue;
    const dataBuffer = fs.readFileSync(path.join(dir, pdfFile));
    try {
      const data = await pdf(dataBuffer);
      const text = data.text;
      
      const idx1 = text.indexOf('Zadanie 1');
      const idx2 = text.indexOf('Zadanie 2');
      const idx3 = text.indexOf('Zadanie 3');
      const idx4 = text.indexOf('Zadanie 4');
      
      let end = idx1 + 2500;
      if (idx3 > idx1) end = idx3;
      else if (idx2 > idx1) end = idx2;
      
      if (idx1 > -1) {
        let chunk = text.slice(idx1, end);
        chunk = chunk.replace(/\n{2,}/g, '\n\n');
        fs.writeFileSync(path.join(dir, 'parsed_text.txt'), chunk);
        console.log(`Saved parsed_text.txt for ${yr}`);
      }
    } catch (e) {
      console.error('Error parsing', yr, e);
    }
  }
}
run();
