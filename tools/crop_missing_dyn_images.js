const { loadImage, createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

function autoTrim(canvas, padding = 15) {
  const ctx = canvas.getContext('2d');
  const w = canvas.width;
  const h = canvas.height;
  const imgData = ctx.getImageData(0, 0, w, h).data;
  
  let minX = w, maxX = 0, minY = h, maxY = 0;
  for (let y = 0; y < h; y++) {
    for (let x = 0; x < w; x++) {
      const idx = (y * w + x) * 4;
      const r = imgData[idx], g = imgData[idx+1], b = imgData[idx+2];
      if (r < 245 || g < 245 || b < 245) {
        if (x < minX) minX = x;
        if (x > maxX) maxX = x;
        if (y < minY) minY = y;
        if (y > maxY) maxY = y;
      }
    }
  }
  
  if (minX > maxX || minY > maxY) return canvas;
  
  minX = Math.max(0, minX - padding);
  maxX = Math.min(w, maxX + padding);
  minY = Math.max(0, minY - padding);
  maxY = Math.min(h, maxY + padding);
  
  const trimW = maxX - minX;
  const trimH = maxY - minY;
  
  const trimmed = createCanvas(trimW, trimH);
  const tCtx = trimmed.getContext('2d');
  tCtx.fillStyle = '#ffffff';
  tCtx.fillRect(0, 0, trimW, trimH);
  tCtx.drawImage(canvas, minX, minY, trimW, trimH, 0, 0, trimW, trimH);
  return trimmed;
}

async function crop(srcPath, outName, cropBox) {
  const img = await loadImage(srcPath);
  const canvas = createCanvas(cropBox.w, cropBox.h);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, cropBox.w, cropBox.h);
  ctx.drawImage(img, cropBox.x, cropBox.y, cropBox.w, cropBox.h, 0, 0, cropBox.w, cropBox.h);
  
  const trimmed = autoTrim(canvas);
  const outPath = path.join('img', outName);
  fs.writeFileSync(outPath, trimmed.toBuffer('image/png'));
  console.log(`Saved ${outPath} (${trimmed.width}x${trimmed.height})`);
}

async function run() {
  // 1. Informator Zad 1: opcje A-D
  // inf_p12: start right above A. (y approx 1100 out of 1683)
  await crop('img/pages/inf_p12.png', 'cke_informator_zad1_opcje.png', {
    x: 140,
    y: 1100,
    w: 920,
    h: 440
  });

  // 2. 2023 Czerwiec Zad 2: opcje A-D
  // cke2023_cze_p7: start right above A. (y = 800), end before Brudnopis (y = 1300)
  await crop('img/pages/cke2023_cze_p7.png', 'cke_2023_czerwiec_zad2_opcje.png', {
    x: 120,
    y: 800,
    w: 800,
    h: 495
  });

  // 3. 2023 Maj Zad 2.2: opcje A-D
  // cke2023_maj_p7: avoid purple box on right (w=1050), start at y=360, height 1040
  await crop('img/pages/cke2023_maj_p7.png', 'cke_2023_maj_zad2_opcje.png', {
    x: 60,
    y: 365,
    w: 1000,
    h: 1040
  });

  // 4. 2022 Grudzień Zad 2: Rysunek 1 i Rysunek 2
  // cke2022_p6: start at y=390, end at y=770
  await crop('img/pages/cke2022_p6.png', 'cke_2022_grudzien_zad2_rys1_2.png', {
    x: 230,
    y: 395,
    w: 750,
    h: 380
  });
}

run().catch(console.error);
