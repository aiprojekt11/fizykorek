const fs = require('fs');
const { PDFParse } = require('pdf-parse');
const path = require('path');

(async () => {
  fs.mkdirSync('tools/dynamics-audit', { recursive: true });
  const jobs = [
    ['2026-maj', '2026/fizyka-2026-maj-matura-rozszerzona.pdf', [6,7,8]],
    ['2026-czerwiec', '2026/fizyka-2026-czerwiec-matura-rozszerzona.pdf', [6,7,8,9]],
    ['2026-styczen', '2026/fizyka-2026-styczen-probna-rozszerzona.pdf', [6,7]],
    ['2023-maj', '2023/fizyka-2023-maj-matura-rozszerzona.pdf', [6,7]],
    ['2023-czerwiec', '2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', [7,8]],
    ['2024-grudzien', '2024/fizyka-2024-grudzien-probna-rozszerzona.pdf', [6,7]],
    ['informator-2023', 'informatory/informator-maturalny-fizyka-2023.pdf', [12,15,16,17,18,20,22]],
    ['informator-2025', 'informatory/informator-maturalny-fizyka-2025.pdf', [12,15,16,17,18,20,22]],
  ];
  for (const [id, file, pages] of jobs) {
    const p = new PDFParse({data: fs.readFileSync(path.join('data/arkusze_cke', file))});
    const text = await p.getText();
    fs.writeFileSync(`tools/dynamics-audit/${id}.json`, JSON.stringify(text.pages, null, 2));
    const result = await p.getScreenshot({partial:pages, scale:1.5});
    for (const page of result.pages) fs.writeFileSync(`tools/dynamics-audit/${id}-${page.pageNumber}.png`,page.data);
    await p.destroy();
    console.log(id, 'extracted and rendered');
  }
})().catch(e => {console.error(e); process.exitCode=1;});
