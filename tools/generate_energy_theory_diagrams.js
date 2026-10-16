const fs = require('fs');
const path = require('path');

const outDir = path.join(__dirname, '..', 'img', 'theory', 'energy');
fs.mkdirSync(outDir, { recursive: true });

const shell = (title, desc, body, height = 340) => `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 760 ${height}" role="img" aria-labelledby="title desc">
  <title id="title">${title}</title>
  <desc id="desc">${desc}</desc>
  <defs>
    <marker id="arrow-blue" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#2563eb"/></marker>
    <marker id="arrow-red" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#dc2626"/></marker>
    <marker id="arrow-green" markerWidth="10" markerHeight="10" refX="8" refY="3" orient="auto"><path d="M0,0 L0,6 L9,3 z" fill="#16a34a"/></marker>
    <style>
      .t{font-family:Inter,Arial,sans-serif;fill:#0f172a}.label{font-size:20px;font-weight:700}.small{font-size:16px;font-weight:600}.muted{fill:#64748b}.blue{fill:#2563eb}.green{fill:#15803d}.red{fill:#dc2626}.amber{fill:#b45309}.line{stroke:#0f172a;stroke-width:3;stroke-linecap:round;stroke-linejoin:round;fill:none}.thin{stroke-width:2}.dash{stroke-dasharray:7 7}.surface{stroke:#94a3b8;stroke-width:3}.panel{fill:#f8fafc;stroke:#dbe5f1;stroke-width:2}.box{fill:#dbeafe;stroke:#2563eb;stroke-width:3}.ball{fill:#bfdbfe;stroke:#2563eb;stroke-width:3}
    </style>
  </defs>
  ${body}
</svg>`;

const diagrams = {
  'work-angle.svg': shell(
    'Praca siły działającej pod kątem',
    'Klocek przesuwa się w prawo, a siła działa pod kątem alfa. Pracę wykonuje składowa siły równoległa do przemieszczenia.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <line class="surface" x1="72" y1="246" x2="694" y2="246"/>
     <rect class="box" x="238" y="178" width="122" height="68" rx="12"/>
     <text class="t label" x="299" y="220" text-anchor="middle">ciało</text>
     <line x1="299" y1="178" x2="435" y2="76" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/>
     <text class="t label blue" x="449" y="74">F</text>
     <line x1="299" y1="178" x2="455" y2="178" stroke="#2563eb" stroke-width="3" stroke-dasharray="8 6" marker-end="url(#arrow-blue)"/>
     <text class="t small blue" x="391" y="168">F cos α</text>
     <path d="M354 178 A55 55 0 0 0 343 145" class="line thin"/>
     <text class="t small" x="363" y="148">α</text>
     <line x1="188" y1="286" x2="505" y2="286" stroke="#16a34a" stroke-width="5" marker-end="url(#arrow-green)"/>
     <text class="t label green" x="346" y="316" text-anchor="middle">przemieszczenie s</text>
     <text class="t small muted" x="500" y="132">pracę wykonuje składowa</text>
     <text class="t small muted" x="500" y="154">równoległa do ruchu</text>`),

  'work-signs.svg': shell(
    'Dodatnia, zerowa i ujemna praca',
    'Trzy przypadki zależne od kąta między siłą a przemieszczeniem: siła zgodna z ruchem, prostopadła i przeciwna do ruchu.',
    `<rect class="panel" x="18" y="18" width="226" height="304" rx="20"/><rect class="panel" x="267" y="18" width="226" height="304" rx="20"/><rect class="panel" x="516" y="18" width="226" height="304" rx="20"/>
     <text class="t label green" x="131" y="54" text-anchor="middle">W &gt; 0</text><text class="t small muted" x="131" y="80" text-anchor="middle">siła pomaga</text>
     <rect class="box" x="78" y="143" width="106" height="60" rx="10"/><line x1="104" y1="124" x2="191" y2="124" stroke="#16a34a" stroke-width="4" marker-end="url(#arrow-green)"/><text class="t small green" x="103" y="113">F</text><line x1="72" y1="238" x2="193" y2="238" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"/><text class="t small blue" x="131" y="270" text-anchor="middle">s, α = 0°</text>
     <text class="t label amber" x="380" y="54" text-anchor="middle">W = 0</text><text class="t small muted" x="380" y="80" text-anchor="middle">siła prostopadła</text>
     <rect class="box" x="327" y="143" width="106" height="60" rx="10"/><line x1="380" y1="141" x2="380" y2="85" stroke="#d97706" stroke-width="4" marker-end="url(#arrow-red)"/><text class="t small amber" x="394" y="104">F</text><line x1="321" y1="238" x2="442" y2="238" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"/><text class="t small blue" x="380" y="270" text-anchor="middle">s, α = 90°</text>
     <text class="t label red" x="629" y="54" text-anchor="middle">W &lt; 0</text><text class="t small muted" x="629" y="80" text-anchor="middle">siła hamuje</text>
     <rect class="box" x="576" y="143" width="106" height="60" rx="10"/><line x1="657" y1="124" x2="570" y2="124" stroke="#dc2626" stroke-width="4" marker-end="url(#arrow-red)"/><text class="t small red" x="654" y="113">F</text><line x1="570" y1="238" x2="691" y2="238" stroke="#2563eb" stroke-width="4" marker-end="url(#arrow-blue)"/><text class="t small blue" x="629" y="270" text-anchor="middle">s, α = 180°</text>`),

  'work-graph.svg': shell(
    'Praca jako pole pod wykresem siły od drogi',
    'Po lewej pole prostokąta dla siły stałej, po prawej pole trójkąta dla siły sprężystości rosnącej z wychyleniem.',
    `<rect class="panel" x="18" y="18" width="350" height="304" rx="20"/><rect class="panel" x="392" y="18" width="350" height="304" rx="20"/>
     <text class="t label" x="193" y="52" text-anchor="middle">siła stała</text><line class="line" x1="72" y1="268" x2="327" y2="268" marker-end="url(#arrow-blue)"/><line class="line" x1="72" y1="268" x2="72" y2="78" marker-end="url(#arrow-blue)"/><rect x="74" y="124" width="192" height="142" fill="#bfdbfe" opacity=".78"/><line x1="74" y1="124" x2="266" y2="124" stroke="#2563eb" stroke-width="4"/><line class="line thin dash" x1="266" y1="124" x2="266" y2="268"/><text class="t small" x="48" y="91">F</text><text class="t small" x="317" y="293">s</text><text class="t label blue" x="170" y="204" text-anchor="middle">W = F·s</text>
     <text class="t label" x="567" y="52" text-anchor="middle">sprężyna: F = kx</text><line class="line" x1="446" y1="268" x2="701" y2="268" marker-end="url(#arrow-blue)"/><line class="line" x1="446" y1="268" x2="446" y2="78" marker-end="url(#arrow-blue)"/><path d="M448 266 L640 102 L640 266 Z" fill="#bbf7d0" opacity=".9"/><line x1="448" y1="266" x2="640" y2="102" stroke="#16a34a" stroke-width="4"/><line class="line thin dash" x1="640" y1="102" x2="640" y2="268"/><text class="t small" x="422" y="91">F</text><text class="t small" x="691" y="293">x</text><text class="t label green" x="557" y="216" text-anchor="middle">W = ½kx²</text>`),

  'power-efficiency.svg': shell(
    'Moc i sprawność urządzenia',
    'Energia pobrana przepływa przez urządzenie. Część staje się energią użyteczną, a część stratami. Moc mówi, jak szybko energia jest przekazywana.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <text class="t label" x="380" y="54" text-anchor="middle">ile energii w każdej sekundzie?</text>
     <rect x="60" y="122" width="154" height="76" rx="16" fill="#dbeafe" stroke="#2563eb" stroke-width="3"/><text class="t small blue" x="137" y="151" text-anchor="middle">energia</text><text class="t small blue" x="137" y="176" text-anchor="middle">pobrana E₍c₎</text>
     <line x1="216" y1="160" x2="292" y2="160" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/>
     <rect x="301" y="104" width="160" height="112" rx="20" fill="#eff6ff" stroke="#0f172a" stroke-width="3"/><circle cx="381" cy="148" r="24" fill="none" stroke="#2563eb" stroke-width="5"/><path d="M381 120v56M353 148h56" stroke="#2563eb" stroke-width="3"/><text class="t label" x="381" y="202" text-anchor="middle">urządzenie</text>
     <line x1="463" y1="140" x2="544" y2="106" stroke="#16a34a" stroke-width="5" marker-end="url(#arrow-green)"/><text class="t small green" x="555" y="96">E użyteczna</text>
     <line x1="463" y1="181" x2="544" y2="222" stroke="#dc2626" stroke-width="5" marker-end="url(#arrow-red)"/><text class="t small red" x="555" y="232">straty: ciepło</text>
     <text class="t label blue" x="178" y="273" text-anchor="middle">P = W / t</text><text class="t label green" x="530" y="273" text-anchor="middle">η = Eᵤ / E꜀</text>`),

  'energy-conversion.svg': shell(
    'Zamiana energii potencjalnej w kinetyczną',
    'Ciało zsuwa się bez tarcia. Na górze ma dużą energię potencjalną, a na dole dużą energię kinetyczną. Suma obu energii jest stała.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/>
     <path d="M92 91 C240 90 275 246 500 246 L690 246" fill="none" stroke="#94a3b8" stroke-width="9" stroke-linecap="round"/>
     <circle class="ball" cx="126" cy="82" r="27"/><line x1="126" y1="115" x2="126" y2="246" stroke="#64748b" stroke-width="2" stroke-dasharray="7 7"/><path d="M110 231h32M110 115h32" class="line thin"/><text class="t small muted" x="88" y="183">h</text>
     <circle class="ball" cx="536" cy="218" r="27"/><line x1="570" y1="218" x2="659" y2="218" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="612" y="202">v</text>
     <rect x="86" y="278" width="170" height="18" rx="9" fill="#16a34a"/><rect x="86" y="298" width="32" height="10" rx="5" fill="#2563eb"/><text class="t small green" x="86" y="270">duże Eₚ</text>
     <rect x="482" y="278" width="32" height="18" rx="9" fill="#16a34a"/><rect x="482" y="298" width="170" height="10" rx="5" fill="#2563eb"/><text class="t small blue" x="552" y="270">duże Eₖ</text>
     <text class="t label" x="380" y="52" text-anchor="middle">Eₚ + Eₖ = const</text>`),

  'friction-energy.svg': shell(
    'Energia mechaniczna przy tarciu',
    'Klocek porusza się w prawo, a tarcie działa w lewo. Część energii mechanicznej zamienia się w ciepło.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><line class="surface" x1="70" y1="225" x2="690" y2="225"/>
     <rect class="box" x="246" y="153" width="132" height="72" rx="13"/><line x1="311" y1="132" x2="454" y2="132" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t label blue" x="390" y="116">v</text>
     <line x1="294" y1="250" x2="182" y2="250" stroke="#dc2626" stroke-width="5" marker-end="url(#arrow-red)"/><text class="t small red" x="222" y="278">tarcie T</text>
     <path d="M468 172c-12-18 15-25 2-45M505 172c-12-18 15-25 2-45M542 172c-12-18 15-25 2-45" fill="none" stroke="#f97316" stroke-width="5" stroke-linecap="round"/>
     <text class="t label amber" x="511" y="202" text-anchor="middle">ciepło Q</text>
     <text class="t label" x="380" y="55" text-anchor="middle">Eₘₑcₕ,pocz = Eₘₑcₕ,końc + Q</text><text class="t small muted" x="380" y="88" text-anchor="middle">tarcie wykonuje pracę ujemną</text>`),

  'pendulum-energy.svg': shell(
    'Przemiany energii w wahadle',
    'W skrajnym położeniu wahadło ma dużą energię potencjalną i zerową prędkość. W najniższym punkcie prędkość i energia kinetyczna są największe.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><circle cx="380" cy="66" r="9" fill="#0f172a"/>
     <path d="M213 194 A205 205 0 0 0 547 194" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="8 7"/>
     <line x1="380" y1="66" x2="232" y2="194" class="line thin"/><circle class="ball" cx="232" cy="194" r="24"/><text class="t small green" x="92" y="171">Eₚ max</text><text class="t small muted" x="92" y="196">v = 0</text>
     <line x1="380" y1="66" x2="380" y2="266" class="line"/><circle class="ball" cx="380" cy="266" r="24"/><line x1="412" y1="266" x2="491" y2="266" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="449" y="249">v max</text>
     <line x1="380" y1="66" x2="528" y2="194" class="line thin"/><circle cx="528" cy="194" r="24" fill="#e2e8f0" stroke="#94a3b8" stroke-width="3" opacity=".55"/>
     <text class="t small blue" x="543" y="252">Eₖ max</text><text class="t small muted" x="543" y="277">Eₚ min</text><text class="t label" x="380" y="42" text-anchor="middle">Eₚ ⇄ Eₖ</text>`),

  'collision-inelastic.svg': shell(
    'Zderzenie doskonale niesprężyste',
    'Dwa ciała przed zderzeniem mają osobne prędkości. Po zderzeniu są sczepione i poruszają się razem. Pęd jest zachowany, energia kinetyczna maleje.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><text class="t label" x="190" y="54" text-anchor="middle">PRZED</text><text class="t label" x="575" y="54" text-anchor="middle">PO</text><line x1="380" y1="72" x2="380" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="7 7"/>
     <line class="surface" x1="58" y1="224" x2="338" y2="224"/><rect class="box" x="70" y="158" width="92" height="66" rx="11"/><text class="t label" x="116" y="199" text-anchor="middle">m₁</text><line x1="88" y1="137" x2="191" y2="137" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="128" y="120">v₁</text><rect x="246" y="158" width="76" height="66" rx="11" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><text class="t label" x="284" y="199" text-anchor="middle">m₂</text>
     <line class="surface" x1="420" y1="224" x2="702" y2="224"/><rect class="box" x="474" y="158" width="90" height="66" rx="11"/><rect x="564" y="158" width="76" height="66" rx="11" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><text class="t label" x="557" y="199" text-anchor="middle">m₁+m₂</text><line x1="511" y1="137" x2="630" y2="137" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="565" y="120">wspólna v</text>
     <text class="t small green" x="190" y="274" text-anchor="middle">pęd zachowany</text><text class="t small red" x="575" y="274" text-anchor="middle">Eₖ mniejsza → ciepło</text>`),

  'ballistic-pendulum.svg': shell(
    'Wahadło balistyczne w dwóch etapach',
    'Najpierw pocisk wbija się w klocek i stosuje się zachowanie pędu. Następnie układ wznosi się i stosuje się zachowanie energii.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><text class="t label blue" x="188" y="53" text-anchor="middle">1. ZDERZENIE</text><text class="t label green" x="568" y="53" text-anchor="middle">2. WZNOSZENIE</text><line x1="380" y1="72" x2="380" y2="289" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="7 7"/>
     <circle cx="68" cy="190" r="12" fill="#0f172a"/><line x1="88" y1="190" x2="175" y2="190" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="127" y="173">v</text><line x1="282" y1="88" x2="282" y2="151" class="line"/><rect class="box" x="235" y="151" width="94" height="82" rx="13"/><text class="t label" x="282" y="200" text-anchor="middle">M</text><text class="t small muted" x="188" y="268" text-anchor="middle">m·v = (m+M)·u</text>
     <circle cx="500" cy="88" r="8" fill="#0f172a"/><line x1="500" y1="88" x2="500" y2="246" class="line thin dash"/><path d="M500 246 A158 158 0 0 0 640 162" fill="none" stroke="#cbd5e1" stroke-width="3" stroke-dasharray="7 7"/><line x1="500" y1="88" x2="640" y2="162" class="line"/><rect class="box" x="610" y="147" width="60" height="58" rx="12"/><circle cx="620" cy="176" r="7" fill="#0f172a"/><line x1="685" y1="246" x2="685" y2="176" stroke="#16a34a" stroke-width="3"/><path d="M676 188l9-12 9 12M676 234l9 12 9-12" fill="none" stroke="#16a34a" stroke-width="3"/><text class="t small green" x="700" y="216">h</text><text class="t small muted" x="568" y="282" text-anchor="middle">½(m+M)u² = (m+M)gh</text>`),

  'collision-elastic.svg': shell(
    'Sprężyste zderzenie ciał o jednakowych masach',
    'Pierwsze ciało porusza się, drugie spoczywa. Po centralnym zderzeniu pierwsze się zatrzymuje, a drugie przejmuje jego prędkość.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><text class="t label" x="190" y="54" text-anchor="middle">PRZED</text><text class="t label" x="575" y="54" text-anchor="middle">PO</text><line x1="380" y1="72" x2="380" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="7 7"/>
     <line class="surface" x1="58" y1="224" x2="338" y2="224"/><circle class="ball" cx="118" cy="184" r="40"/><text class="t label" x="118" y="191" text-anchor="middle">m</text><line x1="87" y1="129" x2="192" y2="129" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="133" y="112">v</text><circle cx="280" cy="184" r="40" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><text class="t label" x="280" y="191" text-anchor="middle">m</text><text class="t small muted" x="280" y="120" text-anchor="middle">v = 0</text>
     <line class="surface" x1="420" y1="224" x2="702" y2="224"/><circle class="ball" cx="478" cy="184" r="40"/><text class="t label" x="478" y="191" text-anchor="middle">m</text><text class="t small muted" x="478" y="120" text-anchor="middle">v′ = 0</text><circle cx="625" cy="184" r="40" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><text class="t label" x="625" y="191" text-anchor="middle">m</text><line x1="594" y1="129" x2="699" y2="129" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="638" y="112">v′ = v</text>
     <text class="t small green" x="575" y="274" text-anchor="middle">zachowane p oraz Eₖ</text>`),

  'spring-collision.svg': shell(
    'Zderzenie za pośrednictwem sprężyny',
    'W stanie maksymalnego ściśnięcia oba klocki poruszają się z jednakową prędkością, a część energii kinetycznej jest zgromadzona w sprężynie.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><text class="t label" x="190" y="54" text-anchor="middle">ZBLIŻANIE</text><text class="t label" x="575" y="54" text-anchor="middle">MAKS. ŚCIŚNIĘCIE</text><line x1="380" y1="72" x2="380" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="7 7"/>
     <line class="surface" x1="56" y1="230" x2="340" y2="230"/><rect class="box" x="68" y="162" width="88" height="68" rx="11"/><line x1="86" y1="139" x2="177" y2="139" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><path d="M218 196h13l9-18 18 36 18-36 18 36 9-18h18" class="line"/><rect x="302" y="162" width="36" height="68" rx="9" fill="#fef3c7" stroke="#d97706" stroke-width="3"/>
     <line class="surface" x1="420" y1="230" x2="704" y2="230"/><rect class="box" x="456" y="162" width="88" height="68" rx="11"/><path d="M544 196h7l7-18 12 36 12-36 12 36 7-18h7" class="line"/><rect x="608" y="162" width="70" height="68" rx="11" fill="#fef3c7" stroke="#d97706" stroke-width="3"/><line x1="505" y1="139" x2="610" y2="139" stroke="#16a34a" stroke-width="5" marker-end="url(#arrow-green)"/><text class="t small green" x="555" y="119">wspólna v</text><text class="t small blue" x="575" y="273" text-anchor="middle">Eₛ = ½k(Δx)²</text>`),

  'wall-bounce.svg': shell(
    'Sprężyste odbicie od ściany',
    'Przed zderzeniem ciało porusza się do ściany, po zderzeniu z taką samą szybkością w przeciwną stronę. Zmiana pędu ma wartość dwa m v.',
    `<rect class="panel" x="18" y="18" width="724" height="304" rx="22"/><text class="t label" x="202" y="54" text-anchor="middle">PRZED</text><text class="t label" x="558" y="54" text-anchor="middle">PO</text><line x1="380" y1="72" x2="380" y2="280" stroke="#cbd5e1" stroke-width="2" stroke-dasharray="7 7"/>
     <path d="M314 92v170M328 92v170" stroke="#64748b" stroke-width="5"/><path d="M328 102l26-18M328 132l26-18M328 162l26-18M328 192l26-18M328 222l26-18M328 252l26-18" stroke="#94a3b8" stroke-width="3"/><circle class="ball" cx="174" cy="181" r="42"/><line x1="123" y1="122" x2="261" y2="122" stroke="#2563eb" stroke-width="5" marker-end="url(#arrow-blue)"/><text class="t small blue" x="181" y="104">v</text>
     <path d="M446 92v170M432 92v170" stroke="#64748b" stroke-width="5"/><path d="M432 102l-26-18M432 132l-26-18M432 162l-26-18M432 192l-26-18M432 222l-26-18M432 252l-26-18" stroke="#94a3b8" stroke-width="3"/><circle class="ball" cx="586" cy="181" r="42"/><line x1="637" y1="122" x2="499" y2="122" stroke="#dc2626" stroke-width="5" marker-end="url(#arrow-red)"/><text class="t small red" x="579" y="104">v′ = −v</text><text class="t label" x="558" y="283" text-anchor="middle">|Δp| = 2mv</text>`)
};

for (const [name, svg] of Object.entries(diagrams)) {
  fs.writeFileSync(path.join(outDir, name), svg, 'utf8');
}

console.log(`Wygenerowano ${Object.keys(diagrams).length} schematów w ${outDir}`);
