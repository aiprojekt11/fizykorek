const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let raw = fs.readFileSync(dataCoursesPath, 'utf8');

// Fragment do usunięcia:
// od \n\n  <div class=\"theory-subtitle\">4. Wahadło balistyczne
// aż do \n\n    <div class=\"theory-subtitle\">5. Zjawisko odrzutu
// a "5. Zjawisko odrzutu" zamieniamy na "4. Zjawisko odrzutu"

const toRemove = `\\n\\n  <div class=\\"theory-subtitle\\">4. Wahadło balistyczne (dwuetapowy schemat)</div>\\n  <ul class=\\"theory-list\\">\\n    <li><strong>Etap 1 (zderzenie):</strong> Pocisk o masie $m$ wbija się w wiszący klocek o masie $M$. Proces trwa ułamek sekundy – stosujemy <strong>Zasadę Zachowania Pędu</strong>:\\n    <div style=\\"text-align:center;margin:4px 0;\\">$$m v = (m + M) u \\\\implies u = \\\\frac{m}{m + M} v$$</div></li>\\n    <li><strong>Etap 2 (wznoszenie):</strong> Klocek z pociskiem wznosi się na wysokość $h$. Po zderzeniu nie ma oporów – stosujemy <strong>Zasadę Zachowania Energii</strong>:\\n    <div style=\\"text-align:center;margin:4px 0;\\">$$\\\\frac{(m + M) u^2}{2} = (m + M) gh \\\\implies u = \\\\sqrt{2gh}$$</div></li>\\n  </ul>\\n\\n<div class=\\"theory-placeholder\\">\\n  <div class=\\"theory-placeholder-title\\">Opis schematu (miejsce na grafikę)</div>\\n  <p class=\\"theory-placeholder-desc\\">Dwa etapy wahadła balistycznego: pocisk wbija się w klocek, a następnie połączone ciała wznoszą się na wysokość h.</p>\\n  <div class=\\"theory-placeholder-caption\\">Rozdziel proces na etapy: podczas krótkiego zderzenia stosuj <strong>zachowanie pędu</strong>, a podczas wznoszenia <strong>zachowanie energii</strong>.</div>\\n</div>\\n\\n    <div class=\\"theory-subtitle\\">5. Zjawisko odrzutu</div>`;

const replacement = `\\n\\n  <div class=\\"theory-subtitle\\">4. Zjawisko odrzutu</div>`;

if (!raw.includes(toRemove)) {
  console.error('BŁĄD: Nie znaleziono fragmentu wahadła balistycznego!');
  process.exit(1);
}

raw = raw.replace(toRemove, replacement);
console.log('1. Usunięto sekcję wahadła balistycznego i przenumerowano zjawisko odrzutu.');

fs.writeFileSync(dataCoursesPath, raw, 'utf8');
console.log('2. Zapisano plik data-courses.js');
