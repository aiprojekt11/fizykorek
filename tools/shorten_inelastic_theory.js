const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let raw = fs.readFileSync(dataCoursesPath, 'utf8');

// Nowy, zwięzły, konkretny opis bez zbędnego lania wody i bez tematu zjawiska odrzutu
const conciseTheory = `<div class=\\"theory-section\\">\\n  <div class=\\"theory-subtitle\\">1. Definicja pędu ciała</div>\\n  <p>Pęd ($\\\\vec{p}$) opisuje stan ruchu ciała – jest miarą tego, jak trudno jest ciało rozpędzić lub zatrzymać:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$$\\\\vec{p} = m \\\\vec{v}$$</div>\\n  <ul class=\\"theory-list\\">\\n    <li>Wektor $\\\\vec{p}$ ma zawsze ten sam kierunek i zwrot co wektor prędkości $\\\\vec{v}$.</li>\\n    <li>Jednostka w SI: $[p] = \\\\text{kg} \\\\cdot \\\\frac{\\\\text{m}}{\\\\text{s}} = \\\\text{N} \\\\cdot \\\\text{s}$.</li>\\n  </ul>\\n\\n<figure class=\\"theory-figure\\">\\n  <img class=\\"theory-diagram\\" src=\\"img/theory/energy/momentum-definition-custom.png\\" alt=\\"Definicja pędu: ciało o masie m porusza się z prędkością v, wektor pędu p = mv ma ten sam kierunek i zwrot\\" loading=\\"eager\\" decoding=\\"async\\">\\n</figure>\\n\\n  <div class=\\"theory-subtitle\\">2. Zasada Zachowania Pędu (ZZP)</div>\\n  <p>Dla izolowanego układu ciał (brak zewnętrznych sił wypadkowych) całkowity pęd jest stały:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$$\\\\sum \\\\vec{p}_{\\\\text{pocz}} = \\\\sum \\\\vec{p}_{\\\\text{końc}} \\\\implies m_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2 = \\\\text{const}$$</div>\\n\\n  <div class=\\"theory-subtitle\\">3. Zderzenie doskonale niesprężyste (sczepianie ciał)</div>\\n  <p>Ciała łączą się i poruszają z jedną, wspólną prędkością $\\\\vec{v}$:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$$m_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2 = (m_1 + m_2) \\\\vec{v} \\\\implies \\\\vec{v} = \\\\frac{m_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2}{m_1 + m_2}$$</div>\\n  <ul class=\\"theory-list\\">\\n    <li>Ruch naprzeciwko siebie po jednej prostej (uwzględniamy zwroty):\\n    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1 v_1 - m_2 v_2 = (m_1 + m_2) v$$</div>\\n    Znak prędkości $v$ wyznacza kierunek ruchu sczepionych ciał.</li>\\n  </ul>\\n\\n<figure class=\\"theory-figure\\">\\n  <img class=\\"theory-diagram\\" src=\\"img/theory/energy/collision-inelastic-custom.png\\" alt=\\"Zderzenie niesprężyste dwóch klocków: przed zderzeniem klocki m1 i m2 poruszają się naprzeciwko siebie z prędkościami v1 i v2, po zderzeniu klocki sczepiają się i poruszają razem ze wspólną prędkością v.\\" loading=\\"eager\\" decoding=\\"async\\">\\n</figure>\\n\\n  <div class=\\"theory-subtitle\\">4. Bilans energii – ubytek energii kinetycznej na ciepło</div>\\n  <p>W zderzeniu niesprężystym pęd jest zachowany, lecz energia kinetyczna maleje – część energii mechanicznej zamienia się w ciepło ($Q$) i pracę odkształceń:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\">$$Q = \\\\Delta E_k = E_{k,\\\\text{pocz}} - E_{k,\\\\text{końc}} > 0$$</div>\\n</div>`;

// Zaktualizuj też opis podrozdziału (usunięcie słowa odrzut z "desc")
const descRegex = /("id":\s*"sub-zderzenia-niesprezyste"[\s\S]*?"desc":\s*")[^"]*(")/;
if (descRegex.test(raw)) {
  raw = raw.replace(descRegex, `$1Zasada zachowania pędu, sczepianie ciał i ubytek energii kinetycznej w zderzeniu.$2`);
}

const theoryRegex = /("id":\s*"sub-zderzenia-niesprezyste"[\s\S]*?"theory":\s*)"[\s\S]*?"(\s*,\s*"formulaCheat")/g;
if (!theoryRegex.test(raw)) {
  console.error('BŁĄD: Nie dopasowano bloku sub-zderzenia-niesprezyste!');
  process.exit(1);
}

raw = raw.replace(theoryRegex, `$1"${conciseTheory}"$2`);
fs.writeFileSync(dataCoursesPath, raw, 'utf8');
console.log('Pomyślnie zaktualizowano teorię (zwięzła wersja bez odrzutu)!');
