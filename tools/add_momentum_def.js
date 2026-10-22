const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let raw = fs.readFileSync(dataCoursesPath, 'utf8');

// 1. Zastąpienie nagłówka sekcji i dodanie punktu 1. Definicja pędu wraz z diagramem przed Zasadą Zachowania Pędu
const oldSectionStart = `<div class=\\"theory-section\\">\\n  <div class=\\"theory-subtitle\\">1. Zasada Zachowania Pędu (ZZP)</div>`;

const newSectionStart = `<div class=\\"theory-section\\">\\n  <div class=\\"theory-subtitle\\">1. Definicja pędu ciała</div>\\n  <p>Pęd ($\\vec{p}$) to wielkość wektorowa opisująca stan ruchu ciała o masie $m$ poruszającego się z prędkością $\\vec{v}$:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$$\\vec{p} = m \\vec{v}$$</div>\\n  <ul class=\\"theory-list\\">\\n    <li>Wektor pędu $\\vec{p}$ ma zawsze <strong>taki sam kierunek i zwrot</strong> jak wektor prędkości $\\vec{v}$.</li>\\n    <li>Jednostka pędu w układzie SI: $[p] = \\text{kg} \\cdot \\frac{\\text{m}}{\\text{s}} = \\text{N} \\cdot \\text{s}$.</li>\\n  </ul>\\n\\n<figure class=\\"theory-figure\\">\\n  <img class=\\"theory-diagram\\" src=\\"img/theory/energy/momentum-definition.svg\\" alt=\\"Definicja pędu: ciało o masie m z wektorem prędkości v i wektorem pędu p = m · v oraz jednostką kg · m/s\\" loading=\\"eager\\" decoding=\\"async\\">\\n</figure>\\n\\n  <div class=\\"theory-subtitle\\">2. Zasada Zachowania Pędu (ZZP)</div>`;

if (!raw.includes(oldSectionStart)) {
  console.error('BŁĄD: Nie znaleziono oldSectionStart!');
  process.exit(1);
}
raw = raw.replace(oldSectionStart, newSectionStart);
console.log('1. Dodano definicję pędu wraz z diagramem SVG.');

// 2. Przenumerowanie kolejnych punktów:
// '2. Zderzenie doskonale niesprężyste' -> '3. Zderzenie doskonale niesprężyste'
// '3. Bilans energii' -> '4. Bilans energii'
// '4. Zjawisko odrzutu' -> '5. Zjawisko odrzutu'
raw = raw.replace(
  '<div class=\\"theory-subtitle\\">2. Zderzenie doskonale niesprężyste',
  '<div class=\\"theory-subtitle\\">3. Zderzenie doskonale niesprężyste'
);
raw = raw.replace(
  '<div class=\\"theory-subtitle\\">3. Bilans energii',
  '<div class=\\"theory-subtitle\\">4. Bilans energii'
);
raw = raw.replace(
  '<div class=\\"theory-subtitle\\">4. Zjawisko odrzutu',
  '<div class=\\"theory-subtitle\\">5. Zjawisko odrzutu'
);
console.log('2. Przenumerowano punkty.');

// 3. Usunięcie calloutu "Klasyczny przypadek z zadań CKE"
const calloutCKE = `\\n  <div class=\\"theory-callout-rule\\">\\n    <strong>Klasyczny przypadek z zadań CKE:</strong> Gdy ciało o masie $m$ zderza się niesprężyście z nieruchomym ciałem o <em>takiej samej</em> masie $m$, wspólna prędkość wynosi $v = \\\\frac{v_1}{2}$, a utracie na ciepło ulega <strong>dokładnie 50%</strong> początkowej energii kinetycznej.\\n  </div>`;

if (!raw.includes(calloutCKE)) {
  console.error('BŁĄD: Nie znaleziono calloutu CKE!');
  process.exit(1);
}
raw = raw.replace(calloutCKE, '');
console.log('3. Usunięto callout "Klasyczny przypadek z zadań CKE".');

fs.writeFileSync(dataCoursesPath, raw, 'utf8');
console.log('4. Zapisano pomyślnie data-courses.js');
