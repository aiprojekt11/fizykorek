const puppeteer = require('puppeteer');
const fs = require('fs');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch({
    headless: true,
    executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe'
  });
  const page = await browser.newPage();
  await page.setViewport({ width: 2600, height: 3800 });

  const pdfPath = 'C:/Users/barto/.gemini/antigravity-ide/brain/51a6f491-c1dc-4e1e-a52c-1e52d45b9ad7/.user_uploaded/media_1793708086134.pdf';
  const outDir = path.join(__dirname, 'rigid-audit', 'user_pages');
  fs.mkdirSync(outDir, { recursive: true });

  const html = `
  <!DOCTYPE html>
  <html>
  <head>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.min.js"></script>
  </head>
  <body style="margin:0; background:white;">
    <canvas id="pdfCanvas"></canvas>
    <script>
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      async function renderPage(pdfData, pageNum) {
        const loadingTask = pdfjsLib.getDocument({ data: atob(pdfData) });
        const pdf = await loadingTask.promise;
        const page = await pdf.getPage(pageNum);
        const viewport = page.getViewport({ scale: 2.0 });
        const canvas = document.getElementById('pdfCanvas');
        canvas.width = viewport.width;
        canvas.height = viewport.height;
        const ctx = canvas.getContext('2d');
        await page.render({ canvasContext: ctx, viewport: viewport }).promise;
        return { width: viewport.width, height: viewport.height };
      }
    </script>
  </body>
  </html>
  `;

  await page.setContent(html);
  const pdfBytes = fs.readFileSync(pdfPath);
  const base64Pdf = pdfBytes.toString('base64');

  for (const pageNum of [6, 7]) {
    console.log(`Rendering page ${pageNum}...`);
    const dims = await page.evaluate(async (b64, pNum) => {
      return await window.renderPage(b64, pNum);
    }, base64Pdf, pageNum);

    const canvasHandle = await page.$('#pdfCanvas');
    const outPath = path.join(outDir, `user_pdf_p${pageNum}.png`);
    await canvasHandle.screenshot({ path: outPath, captureBeyondViewport: true });
    console.log(`Saved: ${outPath} (${dims.width}x${dims.height})`);
  }

  await browser.close();
  console.log('Done rendering user PDF pages 6 and 7.');
})();
