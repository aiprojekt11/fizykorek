const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let raw = fs.readFileSync(dataCoursesPath, 'utf8');

// 1. Zastąpienie placeholderu grafiką zderzenia 2 klocków (z bezpiecznym escape'owaniem znaków wewnątrz cudzysłowu JS)
const placeholderStr = '<div class=\\"theory-placeholder\\">\\n  <div class=\\"theory-placeholder-title\\">Opis schematu (miejsce na grafikę)</div>\\n  <p class=\\"theory-placeholder-desc\\">Przed zderzeniem dwa ciała poruszają się osobno, a po zderzeniu są sczepione i mają wspólną prędkość.</p>\\n  <div class=\\"theory-placeholder-caption\\">Po sczepieniu ciała mają <strong>wspólną prędkość</strong>. Pęd jest zachowany, lecz część energii kinetycznej przechodzi w ciepło i odkształcenia.</div>\\n</div>';

const figureStr = '<figure class=\\"theory-figure\\">\\n  <img class=\\"theory-diagram\\" src=\\"img/theory/energy/collision-inelastic-custom.png\\" alt=\\"Zderzenie niesprężyste dwóch klocków: przed zderzeniem klocki m1 i m2 poruszają się naprzeciwko siebie z prędkościami v1 i v2, po zderzeniu klocki sczepiają się i poruszają razem ze wspólną prędkością v.\\" loading=\\"eager\\" decoding=\\"async\\">\\n</figure>';

if (!raw.includes(placeholderStr)) {
  console.error('BŁĄD: Nie znaleziono placeholderStr!');
  process.exit(1);
}

raw = raw.replace(placeholderStr, figureStr);
console.log('1. Podmieniono placeholder na grafikę zderzenia klocków.');

// 2. Usunięcie wzoru w ubytku energii
const oldFormulaStr = '$$Q = \\\\Delta E_k = E_{k,\\\\text{pocz}} - E_{k,\\\\text{końc}} = \\\\left(\\\\frac{m_1 v_1^2}{2} + \\\\frac{m_2 v_2^2}{2}\\\\right) - \\\\frac{(m_1 + m_2) v^2}{2} > 0$$';
const newFormulaStr = '$$Q = \\\\Delta E_k = E_{k,\\\\text{pocz}} - E_{k,\\\\text{końc}} > 0$$';

if (!raw.includes(oldFormulaStr)) {
  console.error('BŁĄD: Nie znaleziono oldFormulaStr!');
  process.exit(1);
}

raw = raw.replace(oldFormulaStr, newFormulaStr);
console.log('2. Usunięto wzór w ubytku energii.');

fs.writeFileSync(dataCoursesPath, raw, 'utf8');
console.log('3. Zapisano plik data-courses.js');
