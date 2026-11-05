const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'img', 'theory', 'rigid');
fs.mkdirSync(outDir, { recursive: true });

const shell = (title, desc, body, height = 340) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${desc}</desc>
  <defs>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/></marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#dc2626"/></marker>
    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#16a34a"/></marker>
    <marker id="arrow-amber" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#d97706"/></marker>
    <marker id="arrow-purple" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#7c3aed"/></marker>
    <style>
      .t{font-family:Inter,Arial,sans-serif;fill:#0f172a}.label{font-size:20px;font-weight:700}.small{font-size:15px;font-weight:600}.tiny{font-size:13px;font-weight:500}.muted{fill:#64748b}.blue{fill:#2563eb}.green{fill:#15803d}.red{fill:#dc2626}.amber{fill:#b45309}.purple{fill:#7c3aed}.line{stroke:#0f172a;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;fill:none}.thin{stroke-width:2}.dash{stroke-dasharray:6 6}.surface{stroke:#94a3b8;stroke-width:3}.panel{fill:#f8fafc;stroke:#dbe5f1;stroke-width:2}.box{fill:#dbeafe;stroke:#2563eb;stroke-width:3}.disc{fill:#e0e7ff;stroke:#4f46e5;stroke-width:3}
    </style>
  </defs>
  ${body}
</svg>`;

const diagrams = {
  // 1. sub-bryla-ruch: Związki liniowe i kątowe na tarczy
  'rigid-rotation-kinematics.svg': shell(
    'Ruch obrotowy tarczy – wielkości kątowe i liniowe',
    'Tarcza obracająca się wokół osi O. Prędkość kątowa omega i przyspieszenie kątowe epsilon. W punkcie na brzegu: v = omega*r, at = epsilon*r, ad = omega^2*r.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Tarcza -->
     <circle cx="240" cy="170" r="110" class="disc" opacity="0.85"/>
     <circle cx="240" cy="170" r="5" fill="#4f46e5"/>
     <text class="t small" x="228" y="195">O</text>
     <!-- Promień -->
     <line x1="240" y1="170" x2="318" y2="92" class="line thin dash" stroke="#4f46e5"/>
     <text class="t small purple" x="265" y="125">r</text>
     <!-- Kąt obrotu / zwrot omega -->
     <path d="M 240 100 A 70 70 0 0 1 310 170" class="line thin" stroke="#7c3aed" marker-end="url(#arrow-purple)"/>
     <text class="t label purple" x="320" y="145">ω, ε</text>
     <!-- Punkt na brzegu -->
     <circle cx="318" cy="92" r="6" fill="#2563eb"/>
     <!-- Wektor prędkości liniowej v -->
     <line x1="318" y1="92" x2="395" y2="15" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"/>
     <text class="t label blue" x="405" y="25">v = ωr</text>
     <!-- Przyspieszenie styczne a_t -->
     <line x1="318" y1="92" x2="370" y2="40" stroke="#16a34a" stroke-width="3" stroke-dasharray="6 4" marker-end="url(#arrow-green)"/>
     <text class="t small green" x="380" y="55">a_t = εr</text>
     <!-- Przyspieszenie dośrodkowe a_d -->
     <line x1="318" y1="92" x2="265" y2="145" stroke="#dc2626" stroke-width="3" marker-end="url(#arrow-red)"/>
     <text class="t small red" x="285" y="165">a_d = ω²r</text>
     <!-- Prawy panel podsumowujący -->
     <rect x="470" y="45" width="245" height="250" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="592" y="78" text-anchor="middle">Związki kinematyczne</text>
     <line x1="490" y1="92" x2="695" y2="92" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small" x="490" y="120">Łuk: <tspan class="blue">s = α · r</tspan></text>
     <text class="t small" x="490" y="152">Prędkość: <tspan class="blue">v = ω · r</tspan></text>
     <text class="t small" x="490" y="184">Styczne: <tspan class="green">a_t = ε · r</tspan></text>
     <text class="t small" x="490" y="216">Dośrodkowe: <tspan class="red">a_d = v²/r = ω²r</tspan></text>
     <line x1="490" y1="234" x2="695" y2="234" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small" x="490" y="262">Całkowite: <tspan class="purple">a = √(a_t² + a_d²)</tspan></text>`
  ),

  // 2. sub-bryla-ruch: Rozkład prędkości w toczącym się kole
  'rigid-rolling-wheel.svg': shell(
    'Rozkład prędkości w toczącym się kole (bez poślizgu)',
    'Koło toczy się w prawo. W punkcie styku C prędkość wynosi 0 (chwilowy środek obrotu). W środku koła v, na samej górze 2v, a po bokach v*sqrt(2).',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Podłoże -->
     <line class="surface" x1="50" y1="270" x2="710" y2="270"/>
     <line x1="50" y1="274" x2="710" y2="274" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="8 6"/>
     <!-- Koło -->
     <circle cx="340" cy="160" r="110" class="disc" opacity="0.9"/>
     <circle cx="340" cy="160" r="6" fill="#4f46e5"/>
     <!-- Środek masy O -->
     <line x1="340" y1="160" x2="445" y2="160" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"/>
     <text class="t label blue" x="455" y="166">v_cm = v</text>
     <text class="t small" x="325" y="150">O</text>
     <!-- Szczyt A -->
     <circle cx="340" cy="50" r="6" fill="#16a34a"/>
     <line x1="340" y1="50" x2="550" y2="50" stroke="#16a34a" stroke-width="5" marker-end="url(#arrow-green)"/>
     <text class="t label green" x="560" y="56">v_A = 2v</text>
     <text class="t small" x="325" y="42">A</text>
     <!-- Punkt styku C (chwilowy środek obrotu) -->
     <circle cx="340" cy="270" r="6" fill="#dc2626"/>
     <text class="t label red" x="355" y="295">v_C = 0</text>
     <text class="t small" x="325" y="262">C</text>
     <!-- Prawy punkt B -->
     <circle cx="450" cy="160" r="6" fill="#d97706"/>
     <line x1="450" y1="160" x2="525" y2="235" stroke="#d97706" stroke-width="4" marker-end="url(#arrow-amber)"/>
     <text class="t small amber" x="535" y="245">v_B = v√2</text>
     <!-- Lewy panel objaśniający -->
     <rect x="40" y="45" width="230" height="205" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="155" y="78" text-anchor="middle">Chwilowy środek obrotu</text>
     <line x1="55" y1="90" x2="255" y2="90" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small" x="55" y="118">Punkt styku <tspan class="red">C</tspan> spoczywa:</text>
     <text class="t small red" x="55" y="142">v_C = v_postęp - ωR = 0</text>
     <text class="t small" x="55" y="172">Szczyt <tspan class="green">A</tspan> sumuje prędkości:</text>
     <text class="t small green" x="55" y="196">v_A = v_postęp + ωR = 2v</text>
     <text class="t tiny muted" x="55" y="230">Toczenie = postęp + obrót</text>`
  ),

  // 3. sub-bryla-moment-sily: Moment siły i ramię siły
  'rigid-torque-arm.svg': shell(
    'Definicja momentu siły i ramię siły',
    'Siła F działa na ramieniu r pod kątem alfa. Ramię siły d = r*sin(alfa) to odległość osi od linii działania siły. M = F*d.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Oś obrotu O -->
     <circle cx="160" cy="200" r="14" fill="#f1f5f9" stroke="#0f172a" stroke-width="3"/>
     <circle cx="160" cy="200" r="5" fill="#0f172a"/>
     <text class="t label" x="135" y="206">O</text>
     <!-- Dźwignia / wektor r -->
     <line x1="160" y1="200" x2="460" y2="200" stroke="#0f172a" stroke-width="6" stroke-linecap="round"/>
     <text class="t label" x="300" y="225" text-anchor="middle">wektor położenia r</text>
     <!-- Punkt przyłożenia P -->
     <circle cx="460" cy="200" r="6" fill="#2563eb"/>
     <text class="t small" x="465" y="220">P</text>
     <!-- Linia działania siły F pod kątem alfa -->
     <line x1="390" y1="270" x2="580" y2="80" stroke="#94a3b8" stroke-width="2" stroke-dasharray="6 4"/>
     <!-- Wektor siły F -->
     <line x1="460" y1="200" x2="550" y2="110" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/>
     <text class="t label blue" x="560" y="110">F</text>
     <!-- Kąt alfa -->
     <path d="M 500 200 A 40 40 0 0 0 488 172" class="line thin" stroke="#7c3aed"/>
     <text class="t small purple" x="505" y="185">α</text>
     <!-- Ramię siły d (prostopadła od O do linii działania siły) -->
     <line x1="160" y1="200" x2="275" y2="85" stroke="#dc2626" stroke-width="3" stroke-dasharray="6 4"/>
     <line x1="275" y1="85" x2="425" y2="235" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4"/>
     <!-- Kąt prosty przy ramieniu -->
     <rect x="268" y="85" width="12" height="12" fill="none" stroke="#dc2626" stroke-width="2" transform="rotate(45 275 85)"/>
     <text class="t label red" x="195" y="135">d = r · sin α</text>
     <!-- Prawy panel reguł -->
     <rect x="490" y="45" width="225" height="245" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="602" y="78" text-anchor="middle">Wzór na moment</text>
     <line x1="510" y1="90" x2="695" y2="90" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t label blue" x="602" y="125" text-anchor="middle">M = F · r · sin α</text>
     <text class="t label red" x="602" y="160" text-anchor="middle">M = F · d</text>
     <line x1="510" y1="180" x2="695" y2="180" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small green" x="510" y="208">α = 90°: max moment</text>
     <text class="t small red" x="510" y="236">α = 0°: M = 0 (linia przez O)</text>
     <text class="t tiny muted" x="510" y="268">Jednostka: [M] = N · m</text>`
  ),

  // 4. sub-bryla-moment-sily: Warunki równowagi belki
  'rigid-beam-equilibrium.svg': shell(
    'Warunki równowagi statycznej belki na dwóch podporach',
    'Belka o długości L podparta w punktach A i B. Ciężar Q w środku. Siły reakcji Ra i Rb równoważą ciężar. Suma sił = 0, suma momentów = 0.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Belka -->
     <rect x="100" y="130" width="560" height="24" rx="6" fill="#cbd5e1" stroke="#475569" stroke-width="3"/>
     <!-- Podpora A (trójkąt) -->
     <polygon points="160,185 140,225 180,225" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
     <line class="surface" x1="120" y1="225" x2="200" y2="225"/>
     <text class="t label" x="130" y="250">Podpora A</text>
     <!-- Podpora B (trójkąt) -->
     <polygon points="600,185 580,225 620,225" fill="#94a3b8" stroke="#475569" stroke-width="2"/>
     <line class="surface" x1="560" y1="225" x2="640" y2="225"/>
     <text class="t label" x="570" y="250">Podpora B</text>
     <!-- Siła reakcji R_A -->
     <line x1="160" y1="185" x2="160" y2="70" stroke="#16a34a" stroke-width="4" marker-end="url(#arrow-green)"/>
     <text class="t label green" x="175" y="85">R_A</text>
     <!-- Siła reakcji R_B -->
     <line x1="600" y1="185" x2="600" y2="70" stroke="#16a34a" stroke-width="4" marker-end="url(#arrow-green)"/>
     <text class="t label green" x="615" y="85">R_B</text>
     <!-- Ciężar belki Q w środku masy -->
     <circle cx="380" cy="142" r="5" fill="#dc2626"/>
     <line x1="380" y1="142" x2="380" y2="250" stroke="#dc2626" stroke-width="5" marker-end="url(#arrow-red)"/>
     <text class="t label red" x="395" y="235">Q = mg</text>
     <!-- Wymiary L/2 i L -->
     <line x1="160" y1="115" x2="380" y2="115" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
     <line x1="380" y1="115" x2="160" y2="115" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
     <text class="t small blue" x="260" y="108">L / 2</text>
     <line x1="380" y1="115" x2="600" y2="115" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
     <line x1="600" y1="115" x2="380" y2="115" stroke="#64748b" stroke-width="1.5" marker-end="url(#arrow-blue)"/>
     <text class="t small blue" x="480" y="108">L / 2</text>
     <!-- Dolny panel z warunkami -->
     <rect x="235" y="260" width="290" height="42" rx="10" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t small" x="380" y="287" text-anchor="middle">ΣF = 0 ⇒ R_A + R_B = Q  |  ΣM_A = 0</text>`
  ),

  // 5. sub-bryla-energia: Rozkład energii w toczeniu
  'rigid-rolling-energy.svg': shell(
    'Energia kinetyczna toczącej się bryły sztywnej',
    'Toczące się ciało posiada dwie formy energii: postępową Ek,post = 1/2 m v^2 oraz obrotową Ek,obr = 1/2 I omega^2. Ich suma stanowi całkowitą energię kinetyczną.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Kula tocząca się -->
     <circle cx="210" cy="160" r="85" class="disc" opacity="0.9"/>
     <circle cx="210" cy="160" r="5" fill="#4f46e5"/>
     <line class="surface" x1="40" y1="245" x2="380" y2="245"/>
     <!-- Wektor prędkości postępowej -->
     <line x1="210" y1="160" x2="310" y2="160" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"/>
     <text class="t label blue" x="250" y="145">v</text>
     <!-- Obrót omega -->
     <path d="M 210 100 A 60 60 0 0 1 270 160" class="line thin" stroke="#7c3aed" marker-end="url(#arrow-purple)"/>
     <text class="t label purple" x="280" y="125">ω</text>
     <!-- Prawy panel: podział energii -->
     <rect x="400" y="40" width="315" height="255" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="557" y="72" text-anchor="middle">Całkowita energia kinetyczna</text>
     <line x1="420" y1="85" x2="695" y2="85" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t label" x="557" y="118" text-anchor="middle">E_k = <tspan class="blue">E_k,post</tspan> + <tspan class="purple">E_k,obr</tspan></text>
     <text class="t label blue" x="557" y="152" text-anchor="middle">E_k,post = ½ m v²</text>
     <text class="t label purple" x="557" y="186" text-anchor="middle">E_k,obr = ½ I ω²</text>
     <line x1="420" y1="205" x2="695" y2="205" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small" x="425" y="232">Dla kuli pełnej (I = ⅖mR²):</text>
     <text class="t small green" x="425" y="258">E_k = ½mv² + ⅕mv² = <tspan font-weight="700">0.7 m v²</tspan></text>
     <text class="t tiny muted" x="425" y="282">71.4% energia postępowa, 28.6% obrotowa</text>`
  ),

  // 6. sub-bryla-energia: Wyścig brył na równi pochyłej
  'rigid-incline-race.svg': shell(
    'Wyścig brył na równi pochyłej (toczenie bez poślizgu)',
    'Trzy bryły staczają się z równi z wysokości h: kula, walec i pierścień. Kula dociera pierwsza (największa prędkość v = sqrt(10/7 gh)), drugi walec, ostatni pierścień. Wynik nie zależy od masy ani promienia.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Równia pochyła -->
     <polygon points="60,260 520,260 60,70" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2"/>
     <line class="surface" x1="40" y1="260" x2="540" y2="260"/>
     <!-- Kula (na przedzie) -->
     <circle cx="360" cy="200" r="24" fill="#bfdbfe" stroke="#2563eb" stroke-width="3"/>
     <text class="t tiny" x="360" y="204" text-anchor="middle">kula</text>
     <!-- Walec (w środku) -->
     <circle cx="270" cy="155" r="24" fill="#bbf7d0" stroke="#16a34a" stroke-width="3"/>
     <text class="t tiny" x="270" y="159" text-anchor="middle">walec</text>
     <!-- Pierścień (z tyłu) -->
     <circle cx="170" cy="105" r="24" fill="#fef08a" stroke="#ca8a04" stroke-width="3"/>
     <circle cx="170" cy="105" r="14" fill="#e2e8f0" stroke="#ca8a04" stroke-width="2"/>
     <text class="t tiny" x="170" y="108" text-anchor="middle">obręcz</text>
     <!-- Wysokość h -->
     <line x1="55" y1="70" x2="55" y2="260" stroke="#dc2626" stroke-width="2" marker-end="url(#arrow-red)"/>
     <text class="t label red" x="32" y="170">h</text>
     <!-- Prawy panel wyników wyścigu -->
     <rect x="535" y="35" width="195" height="260" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="632" y="65" text-anchor="middle">Kolejność na dole</text>
     <line x1="550" y1="78" x2="715" y2="78" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small blue" x="550" y="105">1. Kula (c = 0.4)</text>
     <text class="t tiny" x="565" y="125">v = √(10/7 gh) ≈ 1.20√gh</text>
     <text class="t small green" x="550" y="155">2. Walec (c = 0.5)</text>
     <text class="t tiny" x="565" y="175">v = √(4/3 gh) ≈ 1.15√gh</text>
     <text class="t small amber" x="550" y="205">3. Pierścień (c = 1.0)</text>
     <text class="t tiny" x="565" y="225">v = √(gh) = 1.00√gh</text>
     <line x1="550" y1="240" x2="715" y2="240" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t tiny red" x="632" y="265" text-anchor="middle">Masa m i promień R skracają się!</text>`
  ),

  // 7. sub-bryla-moment-pedu: Moment pędu bryły i reguła prawej dłoni
  'rigid-angular-momentum.svg': shell(
    'Moment pędu bryły sztywnej i reguła prawej dłoni',
    'Obracająca się tarcza o momencie bezwładności I i prędkości kątowej omega. Wektor momentu pędu L = I*omega skierowany wzdłuż osi zgodnie z regułą prawej dłoni.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Oś pionowa z -->
     <line x1="280" y1="290" x2="280" y2="40" stroke="#0f172a" stroke-width="3" stroke-dasharray="6 4"/>
     <text class="t label" x="290" y="50">oś z</text>
     <!-- Tarcza widziana w rzucie izometrycznym/elipsa -->
     <ellipse cx="280" cy="190" rx="130" ry="45" fill="#e0e7ff" stroke="#4f46e5" stroke-width="3" opacity="0.85"/>
     <circle cx="280" cy="190" r="5" fill="#4f46e5"/>
     <!-- Zwrot obrotu tarczy -->
     <path d="M 230 225 A 110 35 0 0 0 350 220" class="line" stroke="#7c3aed" stroke-width="4" marker-end="url(#arrow-purple)"/>
     <text class="t label purple" x="365" y="235">kierunek obrotu</text>
     <!-- Wektor prędkości kątowej omega -->
     <line x1="280" y1="190" x2="280" y2="105" stroke="#7c3aed" stroke-width="5" marker-end="url(#arrow-purple)"/>
     <text class="t label purple" x="295" y="125">ω</text>
     <!-- Wektor momentu pędu L -->
     <line x1="280" y1="190" x2="280" y2="60" stroke="#2563eb" stroke-width="5" stroke-dasharray="8 4" marker-end="url(#arrow-blue)"/>
     <text class="t label blue" x="295" y="80">L = I · ω</text>
     <!-- Prawy panel objaśniający -->
     <rect x="470" y="45" width="245" height="245" rx="14" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="592" y="78" text-anchor="middle">Reguła prawej dłoni</text>
     <line x1="490" y1="92" x2="695" y2="92" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small" x="490" y="122">1. Zgięte palce prawej dłoni</text>
     <text class="t small purple" x="505" y="146">wskazują zwrot obrotu.</text>
     <text class="t small" x="490" y="180">2. Odgięty kciuk</text>
     <text class="t small blue" x="505" y="204">wskazuje wektory <tspan font-weight="700">ω</tspan> oraz <tspan font-weight="700">L</tspan>.</text>
     <line x1="490" y1="225" x2="695" y2="225" stroke="#e2e8f0" stroke-width="2"/>
     <text class="t small green" x="592" y="255" text-anchor="middle">Jednostka: kg · m² / s = J · s</text>`
  ),

  // 8. sub-bryla-moment-pedu: Efekt łyżwiarza (Zasada Zachowania Momentu Pędu)
  'rigid-figure-skater.svg': shell(
    'Zasada Zachowania Momentu Pędu – efekt piruetu łyżwiarza',
    'Łyżwiarz z rozłożonymi ramionami ma duży moment bezwładności I1 i małą prędkość kątową omega1. Po przyciągnięciu rąk moment bezwładności maleje, a prędkość kątowa rośnie. I1*omega1 = I2*omega2.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <!-- Stan 1: ramiona rozłożone -->
     <rect x="40" y="45" width="310" height="245" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="195" y="78" text-anchor="middle">1. Ramiona rozłożone</text>
     <!-- Schemat łyżwiarza 1 -->
     <circle cx="195" cy="115" r="14" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
     <line x1="195" y1="129" x2="195" y2="215" stroke="#0f172a" stroke-width="4"/>
     <!-- Rozłożone ramiona -->
     <line x1="100" y1="150" x2="290" y2="150" stroke="#2563eb" stroke-width="5"/>
     <circle cx="100" cy="150" r="8" fill="#2563eb"/>
     <circle cx="290" cy="150" r="8" fill="#2563eb"/>
     <text class="t small blue" x="195" y="240" text-anchor="middle">Duży moment bezwładności: <tspan font-weight="700">I_1</tspan></text>
     <text class="t small purple" x="195" y="265" text-anchor="middle">Mała prędkość kątowa: <tspan font-weight="700">ω_1</tspan></text>
     <!-- Stan 2: ramiona przyciągnięte -->
     <rect x="390" y="45" width="310" height="245" rx="16" fill="#ffffff" stroke="#cbd5e1" stroke-width="1.5"/>
     <text class="t label" x="545" y="78" text-anchor="middle">2. Ramiona przy klatce</text>
     <!-- Schemat łyżwiarza 2 -->
     <circle cx="545" cy="115" r="14" fill="#cbd5e1" stroke="#0f172a" stroke-width="2"/>
     <line x1="545" y1="129" x2="545" y2="215" stroke="#0f172a" stroke-width="4"/>
     <!-- Przyciągnięte ramiona -->
     <line x1="520" y1="150" x2="570" y2="150" stroke="#16a34a" stroke-width="5"/>
     <circle cx="520" cy="150" r="8" fill="#16a34a"/>
     <circle cx="570" cy="150" r="8" fill="#16a34a"/>
     <text class="t small green" x="545" y="240" text-anchor="middle">Mały moment bezwładności: <tspan font-weight="700">I_2 &lt; I_1</tspan></text>
     <text class="t small red" x="545" y="265" text-anchor="middle">Duża prędkość kątowa: <tspan font-weight="700">ω_2 &gt; ω_1</tspan></text>
     <!-- Centralna strzałka przejścia -->
     <line x1="335" y1="160" x2="375" y2="160" stroke="#475569" stroke-width="3" marker-end="url(#arrow-blue)"/>`
  )
};

for (const [filename, content] of Object.entries(diagrams)) {
  fs.writeFileSync(path.join(outDir, filename), content, 'utf8');
  console.log(`Generated: ${filename}`);
}

console.log('All 8 rigid body theory diagrams generated successfully!');
