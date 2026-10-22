const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let raw = fs.readFileSync(dataCoursesPath, 'utf8');

// Fragment punktu 1. w sub-zderzenia-niesprezyste
const badFragment = `<div class=\\"theory-subtitle\\">1. Definicja pędu ciała</div>\\n  <p>Pęd ($\vec{p}$) to wielkość wektorowa opisująca stan ruchu ciała o masie $m$ poruszającego się z prędkością $\vec{v}$:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$\vec{p} = m \vec{v}$</div>\\n  <ul class=\\"theory-list\\">\\n    <li>Wektor pędu $\vec{p}$ ma zawsze <strong>taki sam kierunek i zwrot</strong> jak wektor prędkości $\vec{v}$.</li>\\n    <li>Jednostka pędu w układzie SI: $[p] = \text{kg} \cdot \frac{\text{m}}{\text{s}} = \text{N} \cdot \text{s}$.</li>\\n  </ul>`;

const goodFragment = `<div class=\\"theory-subtitle\\">1. Definicja pędu ciała</div>\\n  <p>Pęd ($\\\\vec{p}$) to wielkość wektorowa opisująca stan ruchu ciała o masie $m$ poruszającego się z prędkością $\\\\vec{v}$:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$$\\\\vec{p} = m \\\\vec{v}$$</div>\\n  <ul class=\\"theory-list\\">\\n    <li>Wektor pędu $\\\\vec{p}$ ma zawsze <strong>taki sam kierunek i zwrot</strong> jak wektor prędkości $\\\\vec{v}$.</li>\\n    <li>Jednostka pędu w układzie SI: $[p] = \\\\text{kg} \\\\cdot \\\\frac{\\\\text{m}}{\\\\text{s}} = \\\\text{N} \\\\cdot \\\\text{s}$.</li>\\n  </ul>`;

if (!raw.includes(badFragment)) {
  console.error('BŁĄD: Nie znaleziono badFragment!');
  process.exit(1);
}

raw = raw.replace(badFragment, goodFragment);
console.log('1. Poprawiono backslashe LaTeXa w definicji pędu.');

fs.writeFileSync(dataCoursesPath, raw, 'utf8');
console.log('2. Zapisano data-courses.js.');
