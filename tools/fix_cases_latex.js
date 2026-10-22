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

// Note: To get a literal '\\' newline inside LaTeX cases at browser runtime:
// In the JS file on disk we need '\\\\' (4 backslashes).
// When constructing this JS string in this script, we need 8 backslashes: '\\\\\\\\'
const newTheorySub4 = '<div class=\\"theory-section\\">\\n' +
  '  <div class=\\"theory-subtitle\\">1. Definicja i fundamentalny układ równań</div>\\n' +
  '  <p>Zderzenie doskonale sprężyste to proces, w którym <strong>nie występują straty energii kinetycznej na ciepło ani odkształcenia trwałe</strong> ($\\\\Delta E_k = 0$). Układ izolowany spełnia jednocześnie <strong>dwa fundamentalne prawa zachowania</strong>:</p>\\n' +
  '  <div style=\\"text-align:center;margin:8px 0;\\">\\n' +
  '  $$\\\\begin{cases} ' +
  'm_1 v_1 + m_2 v_2 = m_1 u_1 + m_2 u_2 & \\\\text{(ZZP)} \\\\\\\\ ' +
  '\\\\frac{1}{2}m_1 v_1^2 + \\\\frac{1}{2}m_2 v_2^2 = \\\\frac{1}{2}m_1 u_1^2 + \\\\frac{1}{2}m_2 u_2^2 & \\\\text{(ZZE)} ' +
  '\\\\end{cases}$$\\n' +
  '  </div>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li><strong>$v_1, v_2$</strong> – prędkości ciał przed zderzeniem.</li>\\n' +
  '    <li><strong>$u_1, u_2$</strong> – prędkości ciał po zderzeniu.</li>\\n' +
  '    <li>Brak strat energii kinetycznej ($\\\\Delta E_k = 0$) odróżnia zderzenie sprężyste od zderzenia niesprężystego.</li>\\n' +
  '  </ul>\\n\\n' +
  '  <div class=\\"theory-subtitle\\">2. Skąd wynika zależność prędkości względnych?</div>\\n' +
  '  <p>Z powyższego układu równań wynika bezpośrednio fundamentalna własność każdego zderzenia sprężystego w jednym wymiarze (1D):</p>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li><strong>Krok 1 (przeniesienie na strony):</strong> grupowanie wyrazów o tych samych masach:\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1(v_1 - u_1) = m_2(u_2 - v_2) \\\\quad \\\\text{(z ZZP)}$$</div>\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1(v_1^2 - u_1^2) = m_2(u_2^2 - v_2^2) \\\\quad \\\\text{(z ZZE)}$$</div></li>\\n' +
  '    <li><strong>Krok 2 (różnica kwadratów):</strong> rozpisujemy $a^2 - b^2 = (a - b)(a + b)$ w równaniu energii:\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$m_1(v_1 - u_1)(v_1 + u_1) = m_2(u_2 - v_2)(u_2 + v_2)$$</div></li>\\n' +
  '    <li><strong>Krok 3 (dzielenie stronami):</strong> dzielimy równanie energii przez równanie pędu:\\n' +
  '    <div style=\\"text-align:center;margin:4px 0;\\">$$v_1 + u_1 = u_2 + v_2 \\\\implies v_1 - v_2 = -(u_1 - u_2)$$</div>\\n' +
  '    <strong>Wniosek:</strong> Prędkość względna ciał po zderzeniu ma taką samą wartość, lecz przeciwny zwrot niż przed zderzeniem (ciała oddalają się z taką samą szybkością, z jaką się zbliżały).</li>\\n' +
  '  </ul>\\n\\n' +
  '  <div class=\\"theory-subtitle\\">3. Wymiana prędkości dla ciał o równych masach ($m_1 = m_2$)</div>\\n' +
  '  <p>Gdy zderzają się ciała o jednakowej masie ($m_1 = m_2$), układ równań pędu i prędkości względnych przyjmuje prostą postać:</p>\\n' +
  '  <div style=\\"text-align:center;margin:6px 0;\\">\\n' +
  '  $$\\\\begin{cases} ' +
  'v_1 + v_2 = u_1 + u_2 \\\\\\\\ ' +
  'v_1 - v_2 = -u_1 + u_2 ' +
  '\\\\end{cases}$$\\n' +
  '  </div>\\n' +
  '  <p>Dodając i odejmując te równania stronami, otrzymujemy bezpośrednio:</p>\\n' +
  '  <div style=\\"text-align:center;margin:6px 0;\\">$$u_1 = v_2 \\\\quad \\\\text{oraz} \\\\quad u_2 = v_1$$</div>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li>Ciała o jednakowych masach w centralnym zderzeniu sprężystym <strong>wymieniają się prędkościami</strong>.</li>\\n' +
  '    <li>Gdy ciało drugie spoczywało ($v_2 = 0$): pierwsze ciało zatrzymuje się w miejscu ($u_1 = 0$), a drugie przejmuje całą jego prędkość ($u_2 = v_1$) oraz energię.</li>\\n' +
  '  </ul>\\n\\n' +
  '<div class=\\"theory-placeholder\\">\\n' +
  '  <div class=\\"theory-placeholder-title\\">Opis do rysunku (schemat zderzenia ciał o równych masach)</div>\\n' +
  '  <p class=\\"theory-placeholder-desc\\">Na poziomej prostej przedstaw dwa stany: <strong>PRZED ZDERZENIEM</strong> oraz <strong>PO ZDERZENIU</strong>.<br>\\n' +
  '  • <em>Przed zderzeniem:</em> Kula 1 o masie $m$ porusza się w prawo z wektorem prędkości $\\\\vec{v}_1 = \\\\vec{v}$. Kula 2 o masie $m$ spoczywa ($v_2 = 0$).<br>\\n' +
  '  • <em>Po zderzeniu:</em> Kula 1 zatrzymuje się w miejscu ($u_1 = 0$). Kula 2 odjeżdża w prawo z przejętym wektorem prędkości $\\\\vec{u}_2 = \\\\vec{v}$.</p>\\n' +
  '  <div class=\\"theory-placeholder-caption\\">Zderzenie sprężyste ciał o jednakowych masach: <strong>całkowita wymiana pędu i energii kinetycznej</strong>.</div>\\n' +
  '</div>\\n\\n' +
  '  <div class=\\"theory-subtitle\\">4. Zderzenia sprężyste pod kątem (2D)</div>\\n' +
  '  <p>Gdy zderzenie nie zachodzi wzdłuż jednej prostej (ruch w płaszczyźnie $xy$):</p>\\n' +
  '  <ul class=\\"theory-list\\">\\n' +
  '    <li><strong>Zasada Zachowania Pędu:</strong> rozpisujemy niezależnie dla każdej osi:\\n' +
  '    <div style=\\"text-align:center;margin:6px 0;\\">\\n' +
  '    $$\\\\begin{cases} ' +
  'm_1 v_{1x} + m_2 v_{2x} = m_1 u_{1x} + m_2 u_{2x} \\\\\\\\ ' +
  'm_1 v_{1y} + m_2 v_{2y} = m_1 u_{1y} + m_2 u_{2y} ' +
  '\\\\end{cases}$$\\n' +
  '    </div></li>\\n' +
  '    <li><strong>Zasada Zachowania Energii:</strong> energia kinetyczna jest skalarem, więc sumujemy wartości całkowite bez rozkładania na kierunki osi:\\n' +
  '    <div style=\\"text-align:center;margin:6px 0;\\">$$\\\\frac{1}{2}m_1 v_1^2 + \\\\frac{1}{2}m_2 v_2^2 = \\\\frac{1}{2}m_1 u_1^2 + \\\\frac{1}{2}m_2 u_2^2$$</div>\\n' +
  '    gdzie kwadrat prędkości wyznaczamy z twierdzenia Pitagorasa: $v^2 = v_x^2 + v_y^2$.</li>\\n' +
  '  </ul>';

content = content.substring(0, pTheoryStart) + newTheorySub4 + content.substring(pTheoryEnd);
fs.writeFileSync(dataCoursesPath, content, 'utf8');
console.log('Successfully written with correct double-escaped newlines!');
