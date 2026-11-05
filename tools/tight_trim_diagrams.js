const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const fs = require('fs');

const outDir = path.join(__dirname, '..', 'img', 'rigid');

async function tightTrim(filename) {
  const file = path.join(outDir, filename);
  const img = await loadImage(file);
  const w = img.width;
  const h = img.height;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const data = ctx.getImageData(0, 0, w, h).data;

  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      // non-white pixel
      if (data[idx] < 240 || data[idx + 1] < 240 || data[idx + 2] < 240) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }

  const pad = 8;
  const cropX = Math.max(0, minX - pad);
  const cropY = Math.max(0, minY - pad);
  const cropW = Math.min(w - cropX, (maxX - minX) + 2 * pad);
  const cropH = Math.min(h - cropY, (maxY - minY) + 2 * pad);

  console.log(`${filename}: trimmed to ${cropW}x${cropH} (from ${w}x${h})`);
  const c = createCanvas(cropW, cropH);
  const cctx = c.getContext('2d');
  cctx.fillStyle = '#ffffff';
  cctx.fillRect(0, 0, cropW, cropH);
  cctx.drawImage(img, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);
  fs.writeFileSync(file, c.toBuffer('image/png'));
}

(async () => {
  const files = [
    'rigid-zad15-belka.png',
    'rigid-zad16-belka.png',
    'rigid-zad17-belka.png',
    'rigid-zad21-bebny.png',
    'rigid-zad22-stol.png',
    'rigid-zad23-walec.png'
  ];
  for (const f of files) await tightTrim(f);
})();
