const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const fs = require('fs');

const userPagesDir = path.join(__dirname, 'rigid-audit', 'user_pages');
const outDir = path.join(__dirname, '..', 'img', 'rigid');
fs.mkdirSync(outDir, { recursive: true });

async function cropBox(srcFile, outFile, minX, maxX, minY, maxY) {
  const img = await loadImage(path.join(userPagesDir, srcFile));
  const w = img.width;
  const h = img.height;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h).data;

  // Find tight bounds of non-white pixels
  let bx0 = maxX, bx1 = minX, by0 = maxY, by1 = minY;
  for (let y = minY; y <= maxY; y++) {
    for (let x = minX; x <= maxX; x++) {
      const idx = (y * w + x) * 4;
      if (data[idx] < 220 || data[idx + 1] < 220 || data[idx + 2] < 220) {
        if (x < bx0) bx0 = x;
        if (x > bx1) bx1 = x;
        if (y < by0) by0 = y;
        if (y > by1) by1 = y;
      }
    }
  }

  const pad = 10;
  const cropX = Math.max(0, bx0 - pad);
  const cropY = Math.max(0, by0 - pad);
  const cropW = Math.min(w - cropX, (bx1 - bx0) + 2 * pad);
  const cropH = Math.min(h - cropY, (by1 - by0) + 2 * pad);

  console.log(`${outFile}: [${cropX}, ${cropY}, ${cropW}, ${cropH}]`);
  const c = createCanvas(cropW, cropH);
  const cctx = c.getContext('2d');
  cctx.fillStyle = '#ffffff';
  cctx.fillRect(0, 0, cropW, cropH);
  cctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

  const dest = path.join(outDir, outFile);
  fs.writeFileSync(dest, c.toBuffer('image/png'));
  console.log(`Saved: ${dest}`);
}

(async () => {
  // Page 6 (1190 x 1683)
  // Task 15 drawing is below text of 15 and above text of 16
  // Task 15 text: y ~ 540-580. Drawing ~ 600-750.
  // Task 16 text: y ~ 780-840. Drawing ~ 860-1020.
  // Task 17 text: y ~ 1040-1120. Drawing ~ 1140-1300.
  console.log('Cropping page 6 diagrams...');
  await cropBox('user2_p6.png', 'rigid-zad15-belka.png', 100, 1090, 600, 780);
  await cropBox('user2_p6.png', 'rigid-zad16-belka.png', 100, 1090, 850, 1040);
  await cropBox('user2_p6.png', 'rigid-zad17-belka.png', 100, 1090, 1140, 1340);

  // Page 7 (1190 x 1683)
  // Task 21 text: y ~ 450-540. Drawing ~ 560-840.
  // Task 22 text: y ~ 850-930. Drawing ~ 950-1200.
  // Task 23 text: y ~ 1220-1300. Drawing ~ 1320-1550.
  console.log('Cropping page 7 diagrams...');
  await cropBox('user2_p7.png', 'rigid-zad21-bebny.png', 100, 1090, 560, 840);
  await cropBox('user2_p7.png', 'rigid-zad22-stol.png', 100, 1090, 950, 1220);
  await cropBox('user2_p7.png', 'rigid-zad23-walec.png', 100, 1090, 1310, 1580);
})();
