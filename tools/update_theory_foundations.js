const fs = require('fs');

let content = fs.readFileSync('js/data-courses.js', 'utf8');

// 1. Zlokalizuj sekcję 4 w sub-praca-moc
const sub1Marker = '"id": "sub-praca-moc",';
const p1 = content.indexOf(sub1Marker);
const sec4Marker = '<div class=\\"theory-subtitle\\">4.';
const pSec4 = content.indexOf(sec4Marker, p1);

// Koniec sekcji 4 w sub-praca-moc to </div>", przed "formulaCheat"
const formulaCheatMarker = '"formulaCheat":';
const pEndSec4 = content.indexOf('</div>",', pSec4);

console.log('Found Sec4 in sub-praca-moc at index', pSec4, 'to', pEndSec4);

const newSec4 = '<div class=\\"theory-subtitle\\">4. Moc ($P$) i sprawność ($\\\\eta$)</div>\\n  <ul class=\\"theory-list\\">\\n    <li><strong>Moc średnia ($P$):</strong> szybkość przekazywania energii (wykonywania pracy):\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$P = \\\\frac{W}{t}$$</div>\\n    gdzie: $W$ – praca $[\\\\text{J}]$, $t$ – czas $[\\\\text{s}]$. Jednostka w SI: wat $[1\\\\text{ W} = 1\\\\text{ J}/\\\\text{s}]$.</li>\\n    <li><strong>Wyprowadzenie wzoru na moc ze stałą prędkością ($P = F \\\\cdot v$):</strong><br>Wychodzimy bezpośrednio z definicji pracy siły stałej $W = F \\\\cdot s$ wzdłuż toru ruchu i podstawiamy do definicji mocy:\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$P = \\\\frac{W}{t} = \\\\frac{F \\\\cdot s}{t} = F \\\\cdot \\\\left(\\\\frac{s}{t}\\\\right) = F \\\\cdot v$$</div>\\n    gdzie: $F$ – wartość siły, $v = \\\\frac{s}{t}$ – stała prędkość ciała. Wzór ten łączy dynamikę z kinematyką.</li>\\n    <li><strong>Sprawność ($\\\\eta$):</strong> stosunek energii użytecznej do całkowicie dostarczonej:\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$\\\\eta = \\\\frac{W_u}{W_c} = \\\\frac{P_u}{P_c} \\\\le 1 \\\\quad (\\\\text{lub } \\\\eta \\\\cdot 100\\\\%)$$</div>\\n    gdzie: $W_u, P_u$ – praca i moc użyteczna, $W_c, P_c$ – praca i moc całkowita (dostarczona). Ze względu na straty (tarcia, opory, ciepło) sprawność jest zawsze mniejsza od $1$ ($100\\\\%$).</li>\\n  </ul>';

content = content.substring(0, pSec4) + newSec4 + content.substring(pEndSec4);
console.log('Replaced Section 4 in sub-praca-moc!');

// 2. Zlokalizuj i zamień teorię w sub-zderzenia-sprezyste (Temat 4)
const sub4Marker = '"id": "sub-zderzenia-sprezyste",';
const p4 = content.indexOf(sub4Marker);
const theoryMarker = '"theory": "';
const pTheory4 = content.indexOf(theoryMarker, p4) + theoryMarker.length;
const pTheory4End = content.indexOf('</div>",', pTheory4);

console.log('Found Theory in sub-zderzenia-sprezyste at', pTheory4, 'to', pTheory4End);

const newTheorySub4 = '<div class=\\"theory-section\\">\\n  <div class=\\"theory-subtitle\\">1. Definicja i warunek zderzenia sprężystego</div>\\n  <p>Zderzenie doskonale sprężyste to proces, w którym <strong>nie występują straty energii mechanicznej na ciepło ani odkształcenia trwałe</strong>. W układzie izolowanym spełnione są jednocześnie <strong>dwa fundamentalne prawa zachowania</strong>:</p>\\n  <ul class=\\"theory-list\\">\\n    <li><strong>Zasada Zachowania Pędu (ZZP):</strong>\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$\\\\sum \\\\vec{p}_{\\\\text{pocz}} = \\\\sum \\\\vec{p}_{\\\\text{końc}} \\\\implies m_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2 = m_1 \\\\vec{u}_1 + m_2 \\\\vec{u}_2$$</div>\\n    gdzie: $\\\\vec{v}_1, \\\\vec{v}_2$ – prędkości początkowe, $\\\\vec{u}_1, \\\\vec{u}_2$ – prędkości końcowe po zderzeniu.</li>\\n    <li><strong>Zasada Zachowania Energii Kinetycznej (ZZE):</strong>\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$\\\\sum E_{k,\\\\text{pocz}} = \\\\sum E_{k,\\\\text{końc}} \\\\implies \\\\frac{1}{2}m_1 v_1^2 + \\\\frac{1}{2}m_2 v_2^2 = \\\\frac{1}{2}m_1 u_1^2 + \\\\frac{1}{2}m_2 u_2^2$$</div>\\n    Brak ubytku energii kinetycznej ($\\\\Delta E_k = 0$) odróżnia zderzenie sprężyste od zderzenia niesprężystego.</li>\\n  </ul>\\n\\n  <div class=\\"theory-subtitle\\">2. Centralne zderzenie sprężyste w jednym wymiarze (1D)</div>\\n  <p>Gdy ruch odbywa się wzdłuż jednej prostej, wektory zastępujemy wartościami ze znakiem (+ dla ruchu w prawo, − dla ruchu w lewo). Układ dwóch równań zachowania (ZZP i ZZE) po przekształceniu algebraicznym prowadzi do fundamentalnej zależności prędkości względnych:</p>\\n  <div style=\\"text-align:center;margin:6px 0;\\\">$$v_1 - v_2 = -(u_1 - u_2)$$</div>\\n  <ul class=\\"theory-list\\">\\n    <li><strong>Prędkość względna ciał po zderzeniu ma taką samą wartość, lecz przeciwny zwrot</strong> niż przed zderzeniem (ciała oddalają się od siebie z taką samą szybkością względną, z jaką się zbliżały).</li>\\n    <li><strong>Wymiana prędkości przy równych masach ($m_1 = m_2$):</strong><br>Dla jednakowych mas rozwiązaniem układu równań jest dokładna zamiana prędkości:\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$u_1 = v_2 \\\\quad \\\\text{oraz} \\\\quad u_2 = v_1$$</div>\\n    Gdy drugie ciało spoczywa ($v_2 = 0$), ciało pierwsze zatrzymuje się w miejscu ($u_1 = 0$), a drugie przejmuje całą jego prędkość ($u_2 = v_1$) i energię.</li>\\n  </ul>\\n\\n<figure class=\\"theory-figure\\">\\n  <img class=\\"theory-diagram\\" src=\\"img/theory/energy/collision-elastic.svg\\" alt=\\"Centralne sprężyste zderzenie kul: pierwsza kula uderza w drugą spoczywającą, po czym pierwsza się zatrzymuje, a druga przejmuje całą jej prędkość i energię.\\" loading=\\"eager\\" decoding=\\"async\\">\\n</figure>\\n\\n  <div class=\\"theory-subtitle\\">3. Zderzenia sprężyste pod kątem (2D)</div>\\n  <p>Gdy zderzenie nie zachodzi wzdłuż jednej prostej (ciała rozpraszają się w płaszczyźnie $xy$):</p>\\n  <ul class=\\"theory-list\\">\\n    <li><strong>Zasadę Zachowania Pędu stosujemy niezależnie dla każdej osi:</strong>\\n    <div style=\\"text-align:center;margin:6px 0;\\\">$$\\\\begin{cases} m_1 v_{1x} + m_2 v_{2x} = m_1 u_{1x} + m_2 u_{2x} \\\\[4pt] m_1 v_{1y} + m_2 v_{2y} = m_1 u_{1y} + m_2 u_{2y} \\\\end{cases}$$</div></li>\\n    <li><strong>Energia kinetyczna jako skalarna suma:</strong> sumujemy energie bez rozbijania na kierunki osi: $E_k = \\\\frac{1}{2}m(u_x^2 + u_y^2)$. Całkowita energia kinetyczna układu pozostaje niezmienna.</li>\\n  </ul>';

content = content.substring(0, pTheory4) + newTheorySub4 + content.substring(pTheory4End);
console.log('Replaced Theory in sub-zderzenia-sprezyste!');

fs.writeFileSync('js/data-courses.js', content, 'utf8');
console.log('Successfully written data-courses.js!');
