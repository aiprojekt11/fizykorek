const fs = require('fs');

async function findCoords(pdfPath, pageNum, queries) {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  const data = new Uint8Array(fs.readFileSync(pdfPath));
  const doc = await pdfjsLib.getDocument({ data }).promise;
  const page = await doc.getPage(pageNum);
  const tc = await page.getTextContent();
  const vp = page.getViewport({ scale: 2.0 });
  
  console.log('=== ' + pdfPath + ' p.' + pageNum + ' (vp: ' + Math.round(vp.width) + 'x' + Math.round(vp.height) + ') ===');
  for (const it of tc.items) {
    for (const q of queries) {
      if (it.str.includes(q)) {
        const canvasX = it.transform[4] * 2;
        const canvasY = vp.height - it.transform[5] * 2;
        console.log(`  [${it.str}]: x=${Math.round(canvasX)}, y=${Math.round(canvasY)}`);
      }
    }
  }
}

async function run() {
  await findCoords('data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', 12, ['A 1', 'A 4', 'A 8', 'Zadanie 1.1']);
  await findCoords('data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', 20, ['A 1', 'B 1', 'B 6', 'Zadanie 3.1']);
  await findCoords('data/arkusze_cke/2022/fizyka-2022-grudzien-probna-rozszerzona.pdf', 6, ['Rysunek 1', 'Zadanie 2']);
  await findCoords('data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', 6, ['Rysunek 1', 'Zadanie 2.1']);
  await findCoords('data/arkusze_cke/2023/fizyka-2023-maj-matura-rozszerzona.pdf', 7, ['Rysunek 2', 'Zadanie 2.2']);
  await findCoords('data/arkusze_cke/2023/fizyka-2023-czerwiec-matura-rozszerzona.pdf', 7, ['Rysunek 1', 'Rysunek 2', 'Zadanie 2.1', 'Zadanie 2.2']);
  await findCoords('data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', 4, ['v ,', 't ,', 'Zadanie 1.1']);
  await findCoords('data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', 5, ['Diagram 1', 'Diagram 2', '1.2.']);
  await findCoords('data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', 4, ['Rysunek', 'M1', 'Zadanie 1.1']);
  await findCoords('data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', 6, ['Rysunek 1', 'Rysunek 2', 'Zadanie 2.1']);
  await findCoords('data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', 7, ['Diagram', 'Zadanie 2.2']);
  await findCoords('data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', 4, ['p x', 't ,', 'Zadanie 1.1']);
  await findCoords('data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', 6, ['Rysunek 1', 'Rysunek 2', 'Rysunek 3', 'Zadanie 2.1']);
}
run();
