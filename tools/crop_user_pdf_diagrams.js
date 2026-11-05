const { createCanvas, loadImage } = require('canvas');
const fs = require('fs');
const path = require('path');

const userPagesDir = path.join(__dirname, 'rigid-audit', 'user_pages');
const outDir = path.join(__dirname, '..', 'img', 'rigid');
fs.mkdirSync(outDir, { recursive: true });

async function autoCrop(srcFile, outFile, approxYStart, approxYEnd) {
  const img = await loadImage(path.join(userPagesDir, srcFile));
  const w = img.width;
  const h = img.height;

  // Search within [approxYStart, approxYEnd] and horizontal range [120, w - 120]
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);

  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  let minX = w, maxX = 0, minY = h, maxY = 0;

  for (let y = approxYStart; y <= approxYEnd; y++) {
    for (let x = 120; x < w - 120; x++) {
      const idx = (y * w + x) * 4;
      const r = data[idx];
      const g = data[idx + 1];
      const b = data[idx + 2];
      // Dark pixel (drawing or text)
      if (r < 200 || g < 200 || b < 200) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  // Add padding
  const pad = 12;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(w - cropX, (maxX - minX) + 2 * pad);
  const cropH = Math.min(h - cropY, (maxY - minY) + 2 * pad);

  console.log(`${outFile}: bbox [x=${cropX}, y=${cropY}, w=${cropW}, h=${cropH}]`);

  const cropCanvas = createCanvas(cropW, cropH);
  const cropCtx = cropCanvas.getContext('2d');
  cropCtx.fillStyle = '#ffffff';
  cropCtx.fillRect(0, 0, cropW, cropH);
  cropCtx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

  const destPath = path.join(outDir, outFile);
  fs.writeFileSync(destPath, cropCanvas.toBuffer('image/png'));
  console.log(`Saved: ${destPath}`);
}

(async () => {
  // Page 6 height is ~3367 px (deviceScaleFactor = 2, so 1190*2 x 1684*2 = 2381 x 3367)
  const img6 = await loadImage(path.join(userPagesDir, 'user_pdf_p6.png'));
  console.log(`P6 dimensions: ${img6.width} x ${img6.height}`);

  // Fractions of page 6:
  // Task 15 is around y ~ 0.38 - 0.49
  // Task 16 is around y ~ 0.57 - 0.68
  // Task 17 is around y ~ 0.74 - 0.86
  const H6 = img6.height;
  await autoCrop('user_pdf_p6.png', 'rigid-zad15-belka.png', Math.round(H6 * 0.40), Math.round(H6 * 0.50));
  await autoCrop('user_pdf_p6.png', 'rigid-zad16-belka.png', Math.round(H6 * 0.58), Math.round(H6 * 0.69));
  await autoCrop('user_pdf_p6.png', 'rigid-zad17-belka.png', Math.round(H6 * 0.75), Math.round(H6 * 0.86));

  const img7 = await loadImage(path.join(userPagesDir, 'user_pdf_p7.png'));
  const H7 = img7.height;
  console.log(`P7 dimensions: ${img7.width} x ${img7.height}`);
  // Fractions of page 7:
  // Task 21 is around y ~ 0.35 - 0.52
  // Task 22 is around y ~ 0.60 - 0.75
  // Task 23 is around y ~ 0.80 - 0.96
  await autoCrop('user_pdf_p7.png', 'rigid-zad21-bebny.png', Math.round(H7 * 0.37), Math.round(H7 * 0.53));
  await autoCrop('user_pdf_p7.png', 'rigid-zad22-stol.png', Math.round(H7 * 0.61), Math.round(H7 * 0.74));
  await autoCrop('user_pdf_p7.png', 'rigid-zad23-walec.png', Math.round(H7 * 0.82), Math.round(H7 * 0.96));
})();
