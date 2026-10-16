const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

class DOMMatrix {}
global.DOMMatrix = DOMMatrix;

async function renderPages() {
  const pdfjsLib = await import('pdfjs-dist/legacy/build/pdf.mjs');
  
  const tasks = [
    { id: '2026-styczen', file: 'data/arkusze_cke/2026/fizyka-2026-styczen-probna-rozszerzona.pdf', search: 'Zadanie 1.' },
    { id: '2025-czerwiec', file: 'data/arkusze_cke/2025/fizyka-2025-czerwiec-matura-rozszerzona.pdf', search: 'Zadanie 2.' },
    { id: '2024-czerwiec', file: 'data/arkusze_cke/2024/fizyka-2024-czerwiec-matura-rozszerzona.pdf', search: 'Zadanie 1.' },
    { id: '2024-maj', file: 'data/arkusze_cke/2024/fizyka-2024-maj-matura-rozszerzona.pdf', search: 'Zadanie 1.' },
    { id: 'informator-2023', file: 'data/arkusze_cke/informatory/informator-maturalny-fizyka-2023.pdf', search: 'Impulsowe działanie siły' },
  ];

  const outDir = path.resolve('tools/rendered_pages');
  if (!fs.existsSync(outDir)) fs.mkdirSync(outDir, { recursive: true });

  for (const t of tasks) {
    const data = new Uint8Array(fs.readFileSync(t.file));
    const doc = await pdfjsLib.getDocument({ data }).promise;
    console.log(`Checking ${t.id} (${doc.numPages} pages)...`);
    
    // Find matching pages
    for (let p = 1; p <= doc.numPages; p++) {
      const page = await doc.getPage(p);
      const textContent = await page.getTextContent();
      const str = textContent.items.map(i => i.str).join(' ');
      if (str.includes(t.search)) {
        console.log(`Found "${t.search}" in ${t.id} on page ${p}`);
        // Render this page and next page(s)
        for (let renderP of [p, p+1, p+2]) {
          if (renderP <= doc.numPages) {
            const rPage = await doc.getPage(renderP);
            const viewport = rPage.getViewport({ scale: 1.5 });
            const canvas = createCanvas(viewport.width, viewport.height);
            const ctx = canvas.getContext('2d');
            await rPage.render({ canvasContext: ctx, viewport }).promise;
            const filename = `${t.id}_page_${renderP}.png`;
            fs.writeFileSync(path.join(outDir, filename), canvas.toBuffer('image/png'));
            console.log(` Rendered ${filename}`);
          }
        }
        break;
      }
    }
  }
}

renderPages().catch(console.error);
