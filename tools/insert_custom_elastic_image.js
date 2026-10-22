const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '../js/data-courses.js');
let content = fs.readFileSync(dataCoursesPath, 'utf8');

const sub4Marker = '"id": "sub-zderzenia-sprezyste",';
const p4 = content.indexOf(sub4Marker);
if (p4 === -1) {
  console.error('Cannot find sub-zderzenia-sprezyste');
  process.exit(1);
}

const theoryMarker = '"theory": "';
const pTheoryStart = content.indexOf(theoryMarker, p4) + theoryMarker.length;
const pTheoryEnd = content.indexOf('</div>",', pTheoryStart);

const newTheorySub4 = '<div class=\\"theory-section\\">\\n' +
  '  <div class=\\"theory-subtitle\\">1. Definicja i fundamentalny układ równań</div>\\n' +
  '  <p>Zderzenie doskonale sprężyste to proces, w którym <strong>nie występują straty energii kinetycznej na ciepło ani odkształcenia trwałe</strong> ($\\\\Delta E_k = 0$). Układ izolowany spełnia jednocześnie <strong>dwa prawa zachowania</strong>:</p>\\n' +
  '  <div style=\\"text-align:center;margin:8px 0;\\">\\n' +
  '  $$\\\\begin{cases} ' +
  'm_1 v_1 + m_2 v_2 = m_1 v_1\' + m_2 v_2\' & \\\\text{(ZZP)} \\\\\\\\ ' +
  '\\\\frac{1}{2}m_1 v_1^2 + \\\\frac{1}{2}m_2 v_2^2 = \\\\frac{1}{2}m_1 (v_1\')^2 + \\\\frac{1}{2}m_2 (v_2\')^2 & \\\\text{(ZZE)} ' +
  '\\\\end{cases}$$\\n' +
  '  </div>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li><strong>$v_1, v_2$</strong> – prędkości ciał przed zderzeniem.</li>\\n' +
  '    <li><strong>$v_1\', v_2\'$</strong> – prędkości ciał po zderzeniu.</li>\\n' +
  '    <li>Warunek sprężystości: $\\\\Delta E_k = 0$ (energia kinetyczna układu zostaje w $100\\\\%$ zachowana).</li>\\n' +
  '  </ul>\\n\\n' +
  '  <div class=\\"theory-subtitle\\">2. Kluczowa zależność prędkości względnych w zderzeniu sprężystym (1D)</div>\\n' +
  '  <p>Z powyższego układu równań (ZZP i ZZE) wynika bezpośrednio fundamentalna zależność:</p>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li><strong>Krok 1 (pogrupowanie mas):</strong>\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1(v_1 - v_1\') = m_2(v_2\' - v_2) \\\\quad \\\\text{(z ZZP)}$$</div>\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1(v_1^2 - (v_1\')^2) = m_2((v_2\')^2 - v_2^2) \\\\quad \\\\text{(z ZZE)}$$</div></li>\\n' +
  '    <li><strong>Krok 2 (różnica kwadratów):</strong> rozpisujemy $a^2 - b^2 = (a - b)(a + b)$ w równaniu energii:\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1(v_1 - v_1\')(v_1 + v_1\') = m_2(v_2\' - v_2)(v_2\' + v_2)$$</div></li>\\n' +
  '    <li><strong>Krok 3 (podzielenie równań stronami):</strong> otrzymujemy relację sum prędkości:\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$v_1 + v_1\' = v_2\' + v_2$$</div></li>\\n' +
  '  </ul>\\n' +
  '  <div class=\\"theory-callout-rule\\">\\n' +
  '    <strong>Fundamentalna reguła prędkości względnych:</strong>\\n' +
  '    <div style=\\"text-align:center;margin:6px 0;font-size:1.15em;\\">$$v_1 - v_2 = -(v_1\' - v_2\')$$</div>\\n' +
  '    <strong>Sens fizyczny:</strong> Prędkość względna ciał po zderzeniu sprężystym ma dokładnie <strong>taką samą wartość, lecz przeciwny zwrot</strong> niż przed zderzeniem (ciała oddalają się od siebie z taką samą szybkością względną, z jaką się zbliżały).\\n' +
  '  </div>\\n\\n' +
  '<figure class=\\"theory-figure\\">\\n' +
  '  <img class=\\"theory-diagram\\" src=\\"img/theory/energy/collision-elastic-custom.png\\" alt=\\"Zderzenie sprężyste 1D: przed zderzeniem prędkość zbliżania v1 - v2, po zderzeniu prędkość oddalania -(v1\' - v2\')\\" loading=\\"eager\\" decoding=\\"async\\">\\n' +
  '</figure>\\n\\n' +
  '  <div class=\\"theory-subtitle\\">3. Zderzenia sprężyste pod kątem (2D)</div>\\n' +
  '  <p>Gdy zderzenie nie zachodzi wzdłuż jednej prostej (ruch w płaszczyźnie $xy$):</p>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li><strong>Zasada Zachowania Pędu (dla każdej osi osobno):</strong>\\n' +
  '    <div style=\\"text-align:center;margin:6px 0;\\">\\n' +
  '    $$\\\\begin{cases} ' +
  'm_1 v_{1x} + m_2 v_{2x} = m_1 v_{1x}\' + m_2 v_{2x}\' \\\\\\\\ ' +
  'm_1 v_{1y} + m_2 v_{2y} = m_1 v_{1y}\' + m_2 v_{2y}\' ' +
  '\\\\end{cases}$$\\n' +
  '    </div></li>\\n' +
  '    <li><strong>Zasada Zachowania Energii (wielkość skalarna):</strong>\\n' +
  '    <div style=\\"text-align:center;margin:6px 0;\\">$$\\\\frac{1}{2}m_1 v_1^2 + \\\\frac{1}{2}m_2 v_2^2 = \\\\frac{1}{2}m_1 (v_1\')^2 + \\\\frac{1}{2}m_2 (v_2\')^2$$</div>\\n' +
  '    gdzie kwadrat prędkości wyznaczamy z twierdzenia Pitagorasa: $v^2 = v_x^2 + v_y^2$.</li>\\n' +
  '  </ul>\\n\\n' +
  '<div class=\\"theory-placeholder\\">\\n' +
  '  <div class=\\"theory-placeholder-title\\">Opis do rysunku (schemat zderzenia sprężystego 2D – zderzające się kulki)</div>\\n' +
  '  <p class=\\"theory-placeholder-desc\\">W płaszczyźnie z układem współrzędnych $xy$ przedstaw zderzenie dwóch kul (np. bilardowych):\\n' +
  '  <br>• <strong>Przed zderzeniem:</strong> Kula 1 o masie $m_1$ porusza się wzdłuż osi $x$ z wektorem prędkości $\\\\vec{v}_1$. Kula 2 o masie $m_2$ spoczywa w początku układu ($\\\\vec{v}_2 = 0$). Zderzenie nie jest centralne (kula 1 trafia w brzeg kuli 2).\\n' +
  '  <br>• <strong>Po zderzeniu:</strong> Kulki rozpraszają się pod kątami – kula 1 odchyla się w górę pod kątem $\\\\alpha$ z prędkością $\\\\vec{v}_1\'$ (jej składowe to $v_{1x}\'$ i $v_{1y}\' > 0$), a kula 2 odskakuje w dół pod kątem $\\\\beta$ z prędkością $\\\\vec{v}_2\'$ (jej składowe to $v_{2x}\'$ i $v_{2y}\' < 0$).\\n' +
  '  <br>• <strong>Pionowe składowe pędów równoważą się:</strong> $m_1 v_{1y}\' + m_2 v_{2y}\' = 0$, a poziome składowe sumują się do pędu początkowego.</p>\\n' +
  '  <div class=\\"theory-placeholder-caption\\">Zderzenie sprężyste 2D: wektory pędów rozpadają się na składowe $x$ i $y$, a całkowita energia kinetyczna kulek przed i po zderzeniu jest równa.</div>\\n' +
  '</div>';

content = content.substring(0, pTheoryStart) + newTheorySub4 + content.substring(pTheoryEnd);
fs.writeFileSync(dataCoursesPath, content, 'utf8');
console.log('Successfully inserted image and updated 2D diagram description!');
