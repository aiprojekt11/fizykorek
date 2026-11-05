const { createCanvas, loadImage } = require('canvas');
const path = require('path');

const userPagesDir = path.join(__dirname, 'rigid-audit', 'user_pages');

async function scanPage(srcFile) {
  const img = await loadImage(path.join(userPagesDir, srcFile));
  const w = img.width;
  const h = img.height;
  const canvas = createCanvas(w, h);
  const ctx = canvas.getContext('2d');
  ctx.drawImage(img, 0, 0);
  const imgData = ctx.getImageData(0, 0, w, h);
  const data = imgData.data;

  console.log(`\nScanning ${srcFile} (${w}x${h}):`);
  // Look at lines with dark pixels between x in [250, w-250]
  const rowCounts = [];
  for (let y = 0; y < h; y += 10) {
    let count = 0;
    for (let x = 250; x < w - 250; x++) {
      const idx = (y * w + x) * 4;
      if (data[idx] < 150) count++;
    }
    if (count > 20) {
      rowCounts.push(y);
    }
  }

  // Print clusters of dark rows
  let clusters = [];
  let curr = [];
  for (const y of rowCounts) {
    if (curr.length === 0 || y - curr[curr.length - 1] <= 30) {
      curr.push(y);
    } else {
      clusters.push({ start: curr[0], end: curr[curr.length - 1], height: curr[curr.length - 1] - curr[0] });
      curr = [y];
    }
  }
  if (curr.length) clusters.push({ start: curr[0], end: curr[curr.length - 1], height: curr[curr.length - 1] - curr[0] });

  console.log(clusters);
}

(async () => {
  await scanPage('user_pdf_p6.png');
  await scanPage('user_pdf_p7.png');
})();
