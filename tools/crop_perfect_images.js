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
      // Treat purple bars (e.g. r ~ 180-220, g ~ 150-180, b ~ 220-250) or pure whites as background
      const isPurple = (r > 160 && r < 235 && b > 210 && g < 200);
      if ((r < 248 || g < 248 || b < 248) && !isPurple) {
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

async function crop(srcPath, outName, cropBox, trim = true) {
  const img = await loadImage(srcPath);
  const canvas = createCanvas(cropBox.w, cropBox.h);
  const ctx = canvas.getContext('2d');
  ctx.fillStyle = '#ffffff';
  ctx.fillRect(0, 0, cropBox.w, cropBox.h);
  ctx.drawImage(img, cropBox.x, cropBox.y, cropBox.w, cropBox.h, 0, 0, cropBox.w, cropBox.h);
  
  const finalCanvas = trim ? autoTrim(canvas) : canvas;
  const outPath = path.join('img', outName);
  fs.writeFileSync(outPath, finalCanvas.toBuffer('image/png'));
  console.log(`Saved ${outPath} (${finalCanvas.width}x${finalCanvas.height}, ${fs.statSync(outPath).size} bytes)`);
}

async function run() {
  // 1. Informator Zad 1: tor ruchu (x, y) z punktami A0..A8
  // Ends before the purple bar at y: 920
  await crop('img/pages/inf_p12.png', 'cke_informator_zad1_tor.png', { x: 100, y: 530, w: 1000, h: 390 });

  // 2. Informator Zad 3: stroboskop zderzenia ciał A i B
  await crop('img/pages/inf_p20.png', 'cke_informator_zad3_stroboskop.png', { x: 80, y: 500, w: 1030, h: 690 });

  // 3. 2022 Grudzień Zad 2: Rysunek 1 (K1 i K2)
  await crop('img/pages/cke2022_p6.png', 'cke_2022_grudzien_zad2_rys1.png', { x: 150, y: 410, w: 890, h: 160 });

  // 4. 2023 Maj Zad 2: Rysunek 1 (krążki K1, K2)
  await crop('img/pages/cke2023_maj_p6.png', 'cke_2023_maj_zad2_rys1.png', { x: 150, y: 490, w: 890, h: 400 });
  // Rysunek 2 (siatka wektorów pędu)
  await crop('img/pages/cke2023_maj_p6.png', 'cke_2023_maj_zad2_rys2.png', { x: 150, y: 890, w: 890, h: 360 });

  // 5. 2023 Czerwiec Zad 2: Rysunek 1 (K1 i K2)
  await crop('img/pages/cke2023_cze_p7.png', 'cke_2023_czerwiec_zad2_rys1.png', { x: 150, y: 380, w: 890, h: 110 });

  // 6. 2024 Maj Zad 1: Wykres v(t) opadania kropli
  await crop('img/pages/cke2024_maj_p4.png', 'cke_2024_maj_zad1_wykres.png', { x: 80, y: 350, w: 1020, h: 770 });
  // Diagram 1 i Diagram 2 (siatki z Fg i K) - avoid Brudnopis at bottom (ends before 1380)
  await crop('img/pages/cke2024_maj_p5.png', 'cke_2024_maj_zad1_diagramy.png', { x: 150, y: 910, w: 890, h: 460 });

  // 7. 2024 Czerwiec Zad 1: Rysunek obracającej się deseczki z monetami M1..M3
  // Ends before the text 'Ruch deseczki...' at y: 870
  await crop('img/pages/cke2024_cze_p4.png', 'cke_2024_czerwiec_zad1_rysunek.png', { x: 150, y: 630, w: 890, h: 250 });

  // 8. 2025 Czerwiec Zad 2: Rysunek 1 i Rysunek 2 (waga pozioma i nachylona)
  await crop('img/pages/cke2025_cze_p6.png', 'cke_2025_czerwiec_zad2_rys1.png', { x: 140, y: 430, w: 910, h: 220 });
  // Diagram Zadania 2.1 (siatka kratek z punktem S, wektorem Fg i kątem alpha)
  await crop('img/pages/cke2025_cze_p7.png', 'cke_2025_czerwiec_zad2_rys2.png', { x: 140, y: 110, w: 910, h: 650 });

  // 9. 2026 Styczeń Zad 1: Wykres px(t)
  await crop('img/pages/cke2026_sty_p4.png', 'cke_2026_styczen_zad1_wykres1.png', { x: 130, y: 260, w: 930, h: 320 });

  // 10. 2026 Styczeń Zad 2: Rysunek 1 (przed zderzeniem)
  await crop('img/pages/cke2026_sty_p6.png', 'cke_2026_styczen_zad2_rys1.png', { x: 180, y: 270, w: 830, h: 180 });
  // Rysunek 2 (po zderzeniu)
  await crop('img/pages/cke2026_sty_p6.png', 'cke_2026_styczen_zad2_rys2.png', { x: 180, y: 530, w: 830, h: 190 });
  // Rysunek 3 (zderzenie kul do zadania 2.1)
  await crop('img/pages/cke2026_sty_p6.png', 'cke_2026_styczen_zad2_rys3.png', { x: 200, y: 1150, w: 800, h: 340 });
}

run().catch(console.error);
