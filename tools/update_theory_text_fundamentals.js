const fs = require('fs');

// --- SUBCHAPTER 1: PRACA I MOC ---
const theorySub1Html = `<div class="theory-section">
  <div class="theory-subtitle">📌 1. Praca jako miara przekazywania energii ($W$)</div>
  <p>Praca siły stałej $\\vec{F}$ na prostoliniowym przemieszczeniu $\\vec{s}$ jest iloczynem skalarnym:</p>
  <div style="text-align:center;margin:6px 0;">$$W = \\vec{F} \\cdot \\vec{s} = F \\cdot s \\cdot \\cos\\alpha$$</div>
  <ul class="theory-list">
    <li><strong>$F$</strong> – wartość siły $[\\text{N}]$, <strong>$s$</strong> – przemieszczenie $[\\text{m}]$, <strong>$\\alpha$</strong> – kąt między wektorem siły a wektorem przemieszczenia.</li>
    <li>Jednostka pracy i energii w układzie SI: $1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = 1\\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$.</li>
    <li><strong>Twierdzenie o pracy i energii:</strong> praca siły wypadkowej jest równa zmianie energii kinetycznej ciała: $W_{\\text{wyp}} = \\Delta E_k$.</li>
  </ul>

  <div class="theory-subtitle">⚖️ 2. Znaki pracy i siły bez pracy (kluczowe na maturze)</div>
  <ul class="theory-list">
    <li><strong>Praca dodatnia ($W > 0$):</strong> gdy $\\alpha < 90^\\circ$ ($\\cos\\alpha > 0$) – siła wspomaga ruch, zwiększając energię kinetyczną.</li>
    <li><strong>Praca równa zero ($W = 0$):</strong> gdy siła działa <u>prostopadle</u> do kierunku ruchu ($\\alpha = 90^\\circ \\implies \\cos 90^\\circ = 0$).<br>
    <em>Ważne:</em> Ciężar ciała ($W_g = 0$) oraz siła reakcji podłoża ($W_N = 0$) <strong>nie wykonują pracy</strong> przy poziomym przemieszczeniu! Podobnie siła dośrodkowa w ruchu po okręgu nie wykonuje pracy ($W_{doś} = 0$).</li>
    <li><strong>Praca ujemna ($W < 0$):</strong> gdy $\\alpha > 90^\\circ$ ($\\cos\\alpha < 0$) – siła hamuje ruch, odbierając ciału energię mechaniczną.<br>
    Dla siły tarcia zwrot jest zawsze przeciwny do przemieszczenia ($\\alpha = 180^\\circ \\implies \\cos 180^\\circ = -1$):
    <div style="text-align:center;margin:4px 0;">$$W_T = -T \\cdot s = -\\mu N s$$</div></li>
  </ul>

  <div class="theory-subtitle">📊 3. Interpretacja geometryczna – pole pod wykresem $F(s)$</div>
  <p>Dla dowolnej siły (stałej lub zmiennej) praca jest równa <strong>polu powierzchni pod wykresem $F(s)$</strong>:</p>
  <ul class="theory-list">
    <li>Dla siły stałej: pole prostokąta $W = F \\cdot s$.</li>
    <li>Dla siły sprężystej $F(x) = kx$: pole trójkąta pod wykresem $W = \\frac{1}{2} k x^2$ (równa energii potencjalnej sprężystości).</li>
  </ul>

  <div class="theory-subtitle">⚡ 4. Moc ($P$) i sprawność urządzeń ($\\eta$)</div>
  <ul class="theory-list">
    <li><strong>Moc średnia:</strong> tempo przekazywania energii: $P = \\frac{W}{t}$ $[\\text{W} = \\text{J}/\\text{s}]$.</li>
    <li><strong>Moc przy stałej prędkości ($v = \\text{const}$):</strong> $P = F \\cdot v$. Gdy pojazd porusza się ruchem jednostajnym, siła napędowa silnika równoważy opory ruchu ($F_{\\text{napęd}} = F_{\\text{op}}$), więc:
    <div style="text-align:center;margin:4px 0;">$$P = F_{\\text{op}} \\cdot v$$</div></li>
    <li><strong>Sprawność urządzenia:</strong> stosunek energii użytecznej do energii całkowitej:
    <div style="text-align:center;margin:4px 0;">$$\\eta = \\frac{W_u}{W_c} = \\frac{P_u}{P_c} \\le 1 \\quad (\\text{lub } \\eta \\cdot 100\\%)$$</div>
    Dla dźwigu podnoszącego masę $m$ na wysokość $h$: $W_u = mgh$, a $W_c = P_{\\text{silnika}} \\cdot t$.</li>
  </ul>
</div>`;

// --- SUBCHAPTER 2: RODZAJE ENERGII I ZACHOWANIE ENERGII ---
const theorySub2Html = `<div class="theory-section">
  <div class="theory-subtitle">🔄 1. Formy energii mechanicznej</div>
  <ul class="theory-list">
    <li><strong>Energia kinetyczna:</strong> energia ruchu ciała o masie $m$:
    <div style="text-align:center;margin:4px 0;">$$E_k = \\frac{m v^2}{2}$$</div>
    <em>Zależność kwadratowa:</em> dwukrotny wzrost prędkości oznacza 4-krotny wzrost energii kinetycznej i 4-krotnie dłuższą drogę hamowania!</li>
    <li><strong>Energia potencjalna grawitacji:</strong> energia układu ciało–Ziemia na wysokości $h$:
    <div style="text-align:center;margin:4px 0;">$$E_p = mgh$$</div></li>
    <li><strong>Energia potencjalna sprężystości:</strong> energia sprężyny o współczynniku $k$ odkształconej o $x$:
    <div style="text-align:center;margin:4px 0;">$$E_s = \\frac{1}{2} k x^2$$</div></li>
  </ul>

  <div class="theory-subtitle">⚖️ 2. Zasada Zachowania Energii Mechanicznej</div>
  <p>W układzie izolowanym, gdy na ciała działają wyłącznie <strong>siły zachowawcze</strong> (grawitacja, siła sprężystości), całkowita energia mechaniczna pozostaje stała:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech}} = E_k + E_p = \\text{const} \\implies E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</div>
  <ul class="theory-list">
    <li><strong>Spadek swobodny lub zsuwanie z równi bez tarcia:</strong> zamiana całej energii potencjalnej w kinetyczną ($mgh = \\frac{mv^2}{2}$) daje prędkość na dole:
    <div style="text-align:center;margin:4px 0;">$$v = \\sqrt{2gh}$$</div>
    Prędkość ta zależy wyłącznie od różnicy wysokości $h$, a <strong>nie zależy od masy ciała ani kąta nachylenia równi</strong>.</li>
  </ul>

  <div class="theory-subtitle">🔥 3. Bilans energii z uwzględnieniem sił oporu i tarcia</div>
  <p>Gdy w układzie występuje tarcie lub opór powietrza, siły te wykonują pracę ujemną ($W_T < 0$), zmniejszając energię mechaniczną układu i zamieniając ją w energię wewnętrzną (ciepło $Q$):</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{pocz}} + W_T = E_{\\text{mech},\\text{końc}} \\iff E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + |W_T|$$</div>
  <p>gdzie wydzielone ciepło to $|W_T| = T \\cdot s = Q$.</p>

  <div class="theory-subtitle">🎡 4. Ruch po okręgu w płaszczyźnie pionowej (wahadło)</div>
  <ul class="theory-list">
    <li>Z Zasady Zachowania Energii wyznaczamy prędkość w najniższym punkcie toru: $\\frac{mv^2}{2} = mgh \\implies v = \\sqrt{2gh}$.</li>
    <li>Z II zasady dynamiki w najniższym punkcie siła wypadkowa pełni rolę siły dośrodkowej:
    <div style="text-align:center;margin:4px 0;">$$F_n - mg = \\frac{m v^2}{R} \\implies F_n = mg + \\frac{m v^2}{R}$$</div>
    Siła naciągu nici $F_n$ jest więc <strong>zawsze większa od ciężaru ciała</strong> o wartość siły dośrodkowej.</li>
  </ul>
</div>`;

// --- SUBCHAPTER 3: ZDERZENIA NIESPRĘŻYSTE ---
const theorySub3Html = `<div class="theory-section">
  <div class="theory-subtitle">💥 1. Zasada Zachowania Pędu (ZZP)</div>
  <p>Dla układu ciał, na który nie działają zewnętrzne siły wypadkowe, całkowity wektor pędu układu pozostaje stały:</p>
  <div style="text-align:center;margin:6px 0;">$$\\sum \\vec{p}_{\\text{pocz}} = \\sum \\vec{p}_{\\text{końc}} \\implies m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = \\text{const}$$</div>

  <div class="theory-subtitle">🤝 2. Zderzenie doskonale niesprężyste (sczepianie ciał)</div>
  <p>W zderzeniu doskonale niesprężystym ciała łączą się po zderzeniu i poruszają z jedną, wspólną prędkością $\\vec{v}$:</p>
  <div style="text-align:center;margin:6px 0;">$$m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = (m_1 + m_2) \\vec{v} \\implies \\vec{v} = \\frac{m_1 \\vec{v}_1 + m_2 \\vec{v}_2}{m_1 + m_2}$$</div>
  <ul class="theory-list">
    <li>Dla ciał poruszających się naprzeciwko siebie na jednej prostej uwzględniamy zwroty wektorów:
    <div style="text-align:center;margin:4px 0;">$$m_1 v_1 - m_2 v_2 = (m_1 + m_2) v$$</div>
    Znak prędkości $v$ wskazuje kierunek dalszego wspólnego ruchu układu.</li>
  </ul>

  <div class="theory-subtitle">🔥 3. Bilans energii – ubytek energii kinetycznej na ciepło</div>
  <p>W zderzeniu niesprężystym <strong>energia kinetyczna NIE jest zachowana</strong>. Część energii mechanicznej ulega zamianie na pracę trwałych odkształceń i energię wewnętrzną (ciepło $Q$):</p>
  <div style="text-align:center;margin:6px 0;">$$Q = \\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = \\left(\\frac{m_1 v_1^2}{2} + \\frac{m_2 v_2^2}{2}\\right) - \\frac{(m_1 + m_2) v^2}{2} > 0$$</div>
  <div class="theory-callout-rule">
    <strong>🎯 Klasyczny przypadek z zadań CKE:</strong> Gdy ciało o masie $m$ zderza się niesprężyście z nieruchomym ciałem o <em>takiej samej</em> masie $m$, wspólna prędkość wynosi $v = \\frac{v_1}{2}$, a utracie na ciepło ulega <strong>dokładnie 50%</strong> początkowej energii kinetycznej.
  </div>

  <div class="theory-subtitle">🎯 4. Wahadło balistyczne (dwuetapowy schemat)</div>
  <ul class="theory-list">
    <li><strong>Etap 1 (zderzenie):</strong> Pocisk o masie $m$ wbija się w wiszący klocek o masie $M$. Proces trwa ułamek sekundy – stosujemy <strong>Zasadę Zachowania Pędu</strong>:
    <div style="text-align:center;margin:4px 0;">$$m v = (m + M) u \\implies u = \\frac{m}{m + M} v$$</div></li>
    <li><strong>Etap 2 (wznoszenie):</strong> Klocek z pociskiem wznosi się na wysokość $h$. Po zderzeniu nie ma oporów – stosujemy <strong>Zasadę Zachowania Energii</strong>:
    <div style="text-align:center;margin:4px 0;">$$\\frac{(m + M) u^2}{2} = (m + M) gh \\implies u = \\sqrt{2gh}$$</div></li>
  </ul>

  <div class="theory-subtitle">🚀 5. Zjawisko odrzutu</div>
  <p>Dla układu początkowo spoczywającego ($p_{\\text{pocz}} = 0$):</p>
  <div style="text-align:center;margin:6px 0;">$$0 = m v_p - M v_{\\text{od}} \\implies v_{\\text{od}} = \\frac{m}{M} v_p$$</div>
</div>`;

// --- SUBCHAPTER 4: ZDERZENIA SPRĘŻYSTE ---
const theorySub4Html = `<div class="theory-section">
  <div class="theory-subtitle">⚪ 1. Definicja zderzenia doskonale sprężystego</div>
  <p>Zderzenie, w którym <strong>nie występują straty energii na ciepło ani odkształcenia trwałe</strong>. Obowiązuje fundamentalny układ dwóch zasad zachowania:</p>
  <div style="text-align:center;margin:8px 0;">
  $$\\begin{cases} 
  m_1 \\vec{v}_1 + m_2 \\vec{v}_2 = m_1 \\vec{v}_1' + m_2 \\vec{v}_2' & \\text{(Zasada Zachowania Pędu)} \\\\[8pt]
  \\dfrac{m_1 v_1^2}{2} + \\dfrac{m_2 v_2^2}{2} = \\dfrac{m_1 v_1'^2}{2} + \\dfrac{m_2 v_2'^2}{2} & \\text{(Zasada Zachowania Energii)}
  \\end{cases}$$
  </div>

  <div class="theory-subtitle">🎯 2. Szczególny przypadek: równe masy ($m_1 = m_2$)</div>
  <p>Z układu powyższych dwóch równań wynika fundamentalny wniosek: przy centralnym zderzeniu sprężystym ciał o jednakowych masach dochodzi do <strong>całkowitej wymiany prędkości</strong>:</p>
  <div style="text-align:center;margin:6px 0;">$$v_1' = v_2 \\quad \\text{oraz} \\quad v_2' = v_1$$</div>
  <ul class="theory-list">
    <li>Gdy ciało 1 uderza w spoczywające ciało 2 ($v_2 = 0$):
    <div style="text-align:center;margin:4px 0;">$$v_1' = 0 \\quad (\\text{ciało 1 zatrzymuje się w miejscu}), \\qquad v_2' = v_1 \\quad (\\text{ciało 2 przejmuje całą prędkość i energię})$$</div></li>
  </ul>

  <div class="theory-subtitle">🌀 3. Zderzenie za pośrednictwem sprężyny (bilans energii w stanie pośrednim)</div>
  <p>Gdy klocek uderza w drugi klocek połączony ze sprężyną (zadanie z matury CKE 2026):</p>
  <ul class="theory-list">
    <li><strong>W chwili maksymalnego ściśnięcia sprężyny:</strong> prędkość względna klocków wynosi zero ($v_{\\text{wzgl}} = 0$). Oba klocki poruszają się z tą samą prędkością $v_{\\text{śr}} = \\frac{m_1 v_1}{m_1 + m_2}$ (z ZZP).</li>
    <li><strong>Bilans energii z ZZE:</strong> różnica początkowej i chwilowej energii kinetycznej układu została zmagazynowana w sprężynie jako energia potencjalna sprężystości:
    <div style="text-align:center;margin:4px 0;">$$E_s = \\frac{1}{2} k (\\Delta x_{\\max})^2 = E_{k,\\text{pocz}} - E_{k,\\text{śr}}$$</div>
    Gdy sprężyna się rozpręży, oddaje 100% tej energii z powrotem do energii kinetycznej klocków.</li>
  </ul>

  <div class="theory-subtitle">🧱 4. Odbicie sprężyste od ściany ($M \\gg m$)</div>
  <p>Gdy ciało o masie $m$ uderza prostopadle ze sprężystością w nieruchomą ścianę lub podłoże o bardzo dużej masie ($M \\to \\infty$):</p>
  <ul class="theory-list">
    <li>Z Zasady Zachowania Energii wartość prędkości nie ulega zmianie: $|v'| = |v|$.</li>
    <li>Zwrot wektora prędkości ulega odwróceniu: $v' = -v$.</li>
    <li>Zmiana pędu ciała wynosi: $\\Delta p = m v' - m v = m(-v) - mv = -2mv$ (wartość bezwzględna $|\\Delta p| = 2mv$).</li>
  </ul>
</div>`;

// Update add_work_energy_tasks.js
let code = fs.readFileSync('tools/add_work_energy_tasks.js', 'utf8');

// Also update sub4.formulaCheat to remove v_2' - v_1' = v_1 - v_2
const oldSub4Formula = "formulaCheat: '\\\\sum \\\\vec{p}_i = \\\\sum \\\\vec{p}_f, \\\\quad \\\\sum E_{k,i} = \\\\sum E_{k,f}, \\\\quad v_2\\' - v_1\\' = v_1 - v_2',";
const newSub4Formula = "formulaCheat: '\\\\sum \\\\vec{p}_{\\\\text{pocz}} = \\\\sum \\\\vec{p}_{\\\\text{końc}}, \\\\quad \\\\sum E_{k,\\\\text{pocz}} = \\\\sum E_{k,\\\\text{końc}}',";

if (code.includes(oldSub4Formula)) {
  code = code.replace(oldSub4Formula, newSub4Formula);
}

// Check if theory variables already exist
const markerStart = 'const theorySub1 = ';
const markerEnd = '// Define the 4 introductory subchapters';

const startIndex = code.indexOf(markerStart);
const endIndex = code.indexOf(markerEnd);

const newTheories = `const theorySub1 = ${JSON.stringify(theorySub1Html)};\n\nconst theorySub2 = ${JSON.stringify(theorySub2Html)};\n\nconst theorySub3 = ${JSON.stringify(theorySub3Html)};\n\nconst theorySub4 = ${JSON.stringify(theorySub4Html)};\n\n`;

if (startIndex !== -1 && endIndex !== -1) {
  code = code.substring(0, startIndex) + newTheories + code.substring(endIndex);
} else {
  // Insert before markerEnd
  const endIdx = code.indexOf(markerEnd);
  if (endIdx !== -1) {
    code = code.substring(0, endIdx) + newTheories + code.substring(endIdx);
  } else {
    console.error('Could not find insertion marker!');
    process.exit(1);
  }
}

// Ensure sub1..sub4 have theory properties attached
code = code.replace("  formulaCheat: 'W = F \\\\cdot s \\\\cdot \\\\cos\\\\alpha, \\\\quad P = \\\\frac{W}{t} = F \\\\cdot v, \\\\quad \\\\eta = \\\\frac{P_u}{P_c}',\n  tasks: tasksSub1", "  theory: theorySub1,\n  formulaCheat: 'W = F \\\\cdot s \\\\cdot \\\\cos\\\\alpha, \\\\quad P = \\\\frac{W}{t} = F \\\\cdot v, \\\\quad \\\\eta = \\\\frac{P_u}{P_c}',\n  tasks: tasksSub1");

code = code.replace("  formulaCheat: 'E_k = \\\\frac{m v^2}{2}, \\\\quad E_p = mgh, \\\\quad E_s = \\\\frac{k x^2}{2}, \\\\quad W_w = \\\\Delta E_k, \\\\quad W_t = \\\\Delta E_{\\\\text{mech}}',\n  tasks: tasksSub2", "  theory: theorySub2,\n  formulaCheat: 'E_k = \\\\frac{m v^2}{2}, \\\\quad E_p = mgh, \\\\quad E_s = \\\\frac{k x^2}{2}, \\\\quad W_w = \\\\Delta E_k, \\\\quad W_t = \\\\Delta E_{\\\\text{mech}}',\n  tasks: tasksSub2");

code = code.replace("  formulaCheat: 'm_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2 = (m_1 + m_2)\\\\vec{v}, \\\\quad \\\\Delta E_k = E_{k,i} - E_{k,f}',\n  tasks: tasksSub3", "  theory: theorySub3,\n  formulaCheat: 'm_1 \\\\vec{v}_1 + m_2 \\\\vec{v}_2 = (m_1 + m_2)\\\\vec{v}, \\\\quad \\\\Delta E_k = E_{k,i} - E_{k,f}',\n  tasks: tasksSub3");

code = code.replace("  tasks: tasksSub4\n};", "  theory: theorySub4,\n  tasks: tasksSub4\n};");

fs.writeFileSync('tools/add_work_energy_tasks.js', code, 'utf8');
console.log('add_work_energy_tasks.js updated with fundamental theories (no SVGs, based on ZZE & ZZP)!');
