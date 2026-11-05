const fs = require('fs');
const path = require('path');
const { createCanvas, loadImage } = require('canvas');

const root = path.resolve(__dirname, '..');
const pageDir = path.join(__dirname, 'rigid-audit', 'pages');
const outDir = path.join(root, 'img', 'rigid');
fs.mkdirSync(outDir, { recursive: true });

const crops = [
  ['2026-styczen-paper-p8.png', '2026-styczen-z3-rys1.png', 180, 650, 850, 170],
  ['2026-styczen-paper-p9.png', '2026-styczen-z3-rys2.png', 160, 370, 860, 145],
  ['2026-styczen-key-p14.png', '2026-styczen-z3-rozwiazanie.png', 250, 835, 710, 215],

  ['2024-grudzien-paper-p8.png', '2024-grudzien-z3-rys1.png', 130, 300, 900, 325],
  ['2024-grudzien-paper-p8.png', '2024-grudzien-z3-rys2.png', 430, 1225, 600, 305],
  ['2024-grudzien-paper-p10.png', '2024-grudzien-z3-rys3.png', 430, 1210, 620, 350],
  ['2024-grudzien-key-p14.png', '2024-grudzien-z3-rozwiazanie.png', 150, 895, 900, 335],

  ['2024-czerwiec-paper-p6.png', '2024-czerwiec-z2-rys1.png', 135, 610, 900, 335],
  ['2024-czerwiec-paper-p6.png', '2024-czerwiec-z2-rys2.png', 80, 1115, 970, 440],
  ['2024-czerwiec-key-p8.png', '2024-czerwiec-z2-rozwiazanie.png', 130, 500, 950, 400],

  ['2023-czerwiec-paper-p9.png', '2023-czerwiec-z3-rys1.png', 165, 255, 860, 180],
  ['2023-czerwiec-paper-p9.png', '2023-czerwiec-z3-rys2.png', 155, 580, 860, 320],
  ['2023-czerwiec-paper-p9.png', '2023-czerwiec-z3-rys3.png', 150, 1060, 870, 360],

  ['2023-pokazowy-paper-p4.png', '2023-pokazowy-z2-rys12.png', 150, 305, 900, 305],
  ['2023-pokazowy-paper-p4.png', '2023-pokazowy-z2-rys34.png', 150, 725, 900, 275],
  ['2023-pokazowy-paper-p4.png', '2023-pokazowy-z2-rys-zad21.png', 410, 1240, 390, 230],
  ['2023-pokazowy-key-p5.png', '2023-pokazowy-z2-rozwiazanie.png', 410, 620, 340, 230],

  ['informator-2025-p24.png', 'informator-2025-z4-rysunki.png', 140, 635, 920, 350],
  ['informator-2025-p26.png', 'informator-2025-z4-rozwiazanie.png', 280, 1230, 700, 360],
  ['informator-2023-p24.png', 'informator-2023-z4-rysunki.png', 140, 635, 920, 350],
  ['informator-2023-p26.png', 'informator-2023-z4-rozwiazanie.png', 280, 1230, 700, 360],
];

async function crop([source, output, x, y, width, height]) {
  const image = await loadImage(path.join(pageDir, source));
  const canvas = createCanvas(width, height);
  const context = canvas.getContext('2d');
  context.fillStyle = '#fff';
  context.fillRect(0, 0, width, height);
  context.drawImage(image, x, y, width, height, 0, 0, width, height);
  const outPath = path.join(outDir, output);
  fs.writeFileSync(outPath, canvas.toBuffer('image/png'));
  console.log(path.relative(root, outPath).replaceAll('\\', '/'), `${width}x${height}`);
}

(async () => {
  for (const item of crops) await crop(item);
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
