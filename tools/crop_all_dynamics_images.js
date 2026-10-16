const { loadImage, createCanvas } = require('canvas');
const fs = require('fs');
const path = require('path');

// Helper to auto-trim white borders around an image on a canvas
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
  console.log(`Saved ${outPath} (${trimmed.width}x${trimmed.height}, ${fs.statSync(outPath).size} bytes)`);
}

async function run() {
  // 1. Informator Zad 1: tor ruchu (x, y) z punktami A0..A8
  // On inf_p12: approx y: 550 to 850
  await crop('img/pages/inf_p12.png', 'cke_informator_zad1_tor.png', { x: 120, y: 550, w: 950, h: 320 });

  // 2. Informator Zad 3: stroboskop zderzenia ciał A i B
  // On inf_p20: approx y: 510 to 1150
  await crop('img/pages/inf_p20.png', 'cke_informator_zad3_stroboskop.png', { x: 100, y: 500, w: 990, h: 650 });

  // 3. 2022 Grudzień Zad 2: Rysunek 1 (K1 i K2)
  // On cke2022_p6: approx y: 460 to 550
  await crop('img/pages/cke2022_p6.png', 'cke_2022_grudzien_zad2_rys1.png', { x: 180, y: 460, w: 830, h: 120 });

  // 4. 2023 Maj Zad 2: Rysunek 1 (krążki K1, K2 w (x, y))
  // On cke2023_maj_p6: y: 500 to 860
  await crop('img/pages/cke2023_maj_p6.png', 'cke_2023_maj_zad2_rys1.png', { x: 200, y: 510, w: 790, h: 350 });
  // Rysunek 2 (siatka do narysowania wektorów pędu)
  // On cke2023_maj_p7: y: 470 to 820
  await crop('img/pages/cke2023_maj_p7.png', 'cke_2023_maj_zad2_rys2.png', { x: 250, y: 470, w: 700, h: 350 });

  // 5. 2023 Czerwiec Zad 2: Rysunek 1 (K1 i K2)
  // On cke2023_cze_p7: y: 390 to 470
  await crop('img/pages/cke2023_cze_p7.png', 'cke_2023_czerwiec_zad2_rys1.png', { x: 200, y: 390, w: 800, h: 90 });
  // Rysunek 2 (wykres / siatka zderzenia)
  // On cke2023_cze_p7: y: 1280 to 1550
  await crop('img/pages/cke2023_cze_p7.png', 'cke_2023_czerwiec_zad2_rys2.png', { x: 150, y: 1280, w: 900, h: 270 });

  // 6. 2024 Maj Zad 1: Wykres v(t) opadania kropli
  // On cke2024_maj_p4: y: 370 to 1100
  await crop('img/pages/cke2024_maj_p4.png', 'cke_2024_maj_zad1_wykres.png', { x: 150, y: 370, w: 900, h: 730 });
  // Diagram 1 i Diagram 2 (siatka z wektorami Fg i punktem K)
  // On cke2024_maj_p5: y: 940 to 1380
  await crop('img/pages/cke2024_maj_p5.png', 'cke_2024_maj_zad1_diagramy.png', { x: 150, y: 940, w: 900, h: 450 });

  // 7. 2024 Czerwiec Zad 1: Rysunek z wirującą deseczką i 3 monetami M1, M2, M3
  // On cke2024_cze_p4: y: 460 to 1050
  await crop('img/pages/cke2024_cze_p4.png', 'cke_2024_czerwiec_zad1_rysunek.png', { x: 150, y: 460, w: 890, h: 520 });

  // 8. 2025 Czerwiec Zad 2: Rysunek 1 i Rysunek 2 (waga na poziomej i nachylonej ławce)
  // On cke2025_cze_p6: y: 450 to 620
  await crop('img/pages/cke2025_cze_p6.png', 'cke_2025_czerwiec_zad2_rys1.png', { x: 150, y: 450, w: 890, h: 180 });
  // Diagram Zadania 2.1 (siatka kratek z punktem S i wektorem Fg)
  // On cke2025_cze_p7: y: 170 to 700
  await crop('img/pages/cke2025_cze_p7.png', 'cke_2025_czerwiec_zad2_rys2.png', { x: 150, y: 170, w: 890, h: 540 });

  // 9. 2026 Styczeń Zad 1: Wykres px(t)
  // On cke2026_sty_p4: y: 280 to 560
  await crop('img/pages/cke2026_sty_p4.png', 'cke_2026_styczen_zad1_wykres1.png', { x: 150, y: 280, w: 890, h: 290 });

  // 10. 2026 Styczeń Zad 2: Rysunek 1 i 2 (zderzenie kul)
  // On cke2026_sty_p6: y: 320 to 670
  await crop('img/pages/cke2026_sty_p6.png', 'cke_2026_styczen_zad2_rys1_2.png', { x: 180, y: 320, w: 830, h: 360 });
  // Rysunek 3 (do zadania 2.1)
  // On cke2026_sty_p6: y: 1190 to 1470
  await crop('img/pages/cke2026_sty_p6.png', 'cke_2026_styczen_zad2_rys3.png', { x: 250, y: 1190, w: 700, h: 290 });
}

run().catch(console.error);
