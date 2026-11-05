const { createCanvas, loadImage } = require('canvas');
const path = require('path');
const fs = require('fs');

async function findDrawingBBoxes() {
  const img6 = await loadImage('tools/rigid-audit/user_pages/user2_p6.png');
  const img7 = await loadImage('tools/rigid-audit/user_pages/user2_p7.png');

  // Let's crop tight around the actual drawings, avoiding "zadanie w stylu maturalnym" which is at x > 800 and y near the top of the task
  // Task 15 drawing: y ~ 640 to 780, x ~ 300 to 800
  // Task 16 drawing: y ~ 890 to 1040, x ~ 300 to 800
  // Task 17 drawing: y ~ 1160 to 1340, x ~ 350 to 750
  // Task 21 drawing: y ~ 600 to 820, x ~ 450 to 750
  // Task 22 drawing: y ~ 980 to 1210, x ~ 350 to 800
  // Task 23 drawing: y ~ 1340 to 1570, x ~ 400 to 750

  const specs = [
    { page: img6, name: 'rigid-zad15-belka.png', x0: 250, x1: 850, y0: 640, y1: 780 },
    { page: img6, name: 'rigid-zad16-belka.png', x0: 250, x1: 850, y0: 890, y1: 1040 },
    { page: img6, name: 'rigid-zad17-belka.png', x0: 300, x1: 850, y0: 1160, y1: 1340 },
    { page: img7, name: 'rigid-zad21-bebny.png', x0: 400, x1: 800, y0: 600, y1: 820 },
    { page: img7, name: 'rigid-zad22-stol.png', x0: 350, x1: 800, y0: 980, y1: 1210 },
    { page: img7, name: 'rigid-zad23-walec.png', x0: 380, x1: 780, y0: 1340, y1: 1570 }
  ];

  for (const s of specs) {
    const w = s.page.width;
    const h = s.page.height;
    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext('2d');
    ctx.drawImage(s.page, 0, 0);
    const data = ctx.getImageData(0, 0, w, h).data;

    let minX = s.x1, maxX = s.x0, minY = s.y1, maxY = s.y0;
    for (let y = s.y0; y <= s.y1; y++) {
      for (let x = s.x0; x <= s.x1; x++) {
        const idx = (y * w + x) * 4;
        if (data[idx] < 220 || data[idx + 1] < 220 || data[idx + 2] < 220) {
          if (x < minX) minX = x;
          if (x > maxX) maxX = x;
          if (y < minY) minY = y;
          if (y > maxY) maxY = y;
        }
      }
    }

    const pad = 12;
    const cropX = Math.max(0, minX - pad);
    const cropY = Math.max(0, minY - pad);
    const cropW = (maxX - minX) + 2 * pad;
    const cropH = (maxY - minY) + 2 * pad;

    console.log(`${s.name}: crop [${cropX}, ${cropY}, ${cropW}, ${cropH}]`);
    const c = createCanvas(cropW, cropH);
    const cctx = c.getContext('2d');
    cctx.fillStyle = '#ffffff';
    cctx.fillRect(0, 0, cropW, cropH);
    cctx.drawImage(s.page, cropX, cropY, cropW, cropH, 0, 0, cropW, cropH);

    const dest = path.join(__dirname, '..', 'img', 'rigid', s.name);
    fs.writeFileSync(dest, c.toBuffer('image/png'));
  }
}

findDrawingBBoxes().catch(console.error);
