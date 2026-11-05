const fs = require('fs');
const path = require('path');
const vm = require('vm');

const theorySub1 = `<div class="theory-section">
  <div class="theory-subtitle">1. Ruch postępowy a ruch obrotowy bryły sztywnej</div>
  <p><strong>Bryła sztywna</strong> to model ciała fizycznego, w którym odległości między dowolnymi dwoma punktami pozostają stałe bez względu na działające siły.</p>
  <ul class="theory-list">
    <li><strong>Ruch postępowy:</strong> każdy odcinek łączący dwa punkty bryły przemieszcza się równolegle do samego siebie. Wszystkie punkty ciała mają w danej chwili identyczną prędkość liniową $\\vec{v}$ i przyspieszenie $\\vec{a}$. Do pełnego opisu ruchu wystarcza analiza ruchu <strong>środka masy (ŚM)</strong>.</li>
    <li><strong>Ruch obrotowy wokół stałej osi:</strong> wszystkie punkty bryły poruszają się po okręgach leżących w płaszczyznach prostopadłych do osi obrotu, a środki tych okręgów leżą na osi obrotu. Punkty leżące na samej osi obrotu spoczywają.</li>
  </ul>

  <div class="theory-subtitle">2. Wielkości kątowe i ich związki z wielkościami liniowymi</div>
  <p>Ruch obrotowy opisujemy za pomocą wielkości kątowych, które mają <strong>dokładnie taką samą wartość dla wszystkich punktów danej bryły</strong>:</p>
  <ul class="theory-list">
    <li><strong>Kąt obrotu ($\\Delta\\alpha$):</strong> miara kątowa przemieszczenia, w układzie SI wyrażana w radianach $[\\text{rad}]$. Pełny obrót to $2\\pi\\text{ rad} = 360^\\circ$.</li>
    <li><strong>Prędkość kątowa ($\\omega$):</strong> szybkość obrotu bryły:
    <div style="text-align:center;margin:6px 0;">$$\\omega = \\frac{\\Delta\\alpha}{\\Delta t} = 2\\pi f = \\frac{2\\pi}{T} \\quad [\\text{rad/s}]$$</div>
    gdzie: $f$ – częstotliwość obrotów $[\\text{Hz} = 1/\\text{s}]$, $T$ – okres jednego pełnego obrotu $[\\text{s}]$.</li>
    <li><strong>Przyspieszenie kątowe ($\\varepsilon$):</strong> szybkość zmiany prędkości kątowej:
    <div style="text-align:center;margin:6px 0;">$$\\varepsilon = \\frac{\\Delta\\omega}{\\Delta t} \\quad [\\text{rad/s}^2]$$</div></li>
  </ul>

  <div class="theory-callout-rule">
    <strong>Związki między wielkościami liniowymi a kątowymi:</strong><br>
    Dla punktu bryły oddalonego o promień $r$ od osi obrotu obowiązują fundamentalne relacje:
    <div style="text-align:center;margin:8px 0;font-size:1.05em;">
      $$v = \\omega r, \\quad a_t = \\varepsilon r, \\quad a_d = \\frac{v^2}{r} = \\omega^2 r$$
    </div>
    <ul class="theory-list" style="margin-top:6px;">
      <li><strong>$v$</strong> – prędkość liniowa (styczna do toru okręgu). Rośnie proporcjonalnie do odległości $r$ od osi.</li>
      <li><strong>$a_t$</strong> – przyspieszenie styczne: odpowiada za zmianę <em>wartości</em> prędkości liniowej.</li>
      <li><strong>$a_d$</strong> – przyspieszenie dośrodkowe: odpowiada za zakrzywianie toru (zmianę <em>kierunku</em> wektora prędkości).</li>
      <li><strong>$a = \\sqrt{a_t^2 + a_d^2}$</strong> – całkowite przyspieszenie liniowe punktu bryły.</li>
    </ul>
  </div>

  <div class="theory-subtitle">3. Toczenie bez poślizgu – ruch złożony (płaski)</div>
  <p>Toczenie koła lub walca po płaskim podłożu to złożenie dwóch równoczesnych ruchów: <strong>ruchu postępowego środka masy</strong> z prędkością $v_{\\text{cm}}$ oraz <strong>ruchu obrotowego wokół środka masy</strong> z prędkością kątową $\\omega$.</p>
  <ul class="theory-list">
    <li><strong>Warunek braku poślizgu:</strong> droga przebyta przez środek koła w jednym obrocie jest równa obwodowi okręgu ($s = 2\\pi R$), skąd:
    <div style="text-align:center;margin:6px 0;">$$v_{\\text{cm}} = \\omega R \\quad \\text{oraz} \\quad a_{\\text{cm}} = \\varepsilon R$$</div></li>
    <li><strong>Rozkład prędkości punktów koła (składanie wektorów prędkości):</strong>
      <br>1. <strong>Punkt najwyższy (szczyt koła):</strong> prędkość postępowa i obrotowa mają ten sam zwrot w prawo:
      <div style="text-align:center;margin:4px 0;">$$v_{\\text{góra}} = v_{\\text{cm}} + \\omega R = 2v_{\\text{cm}}$$</div>
      2. <strong>Środek koła:</strong> prędkość obrotowa wynosi zero, punkt porusza się z prędkością środka masy: $v = v_{\\text{cm}}$.
      <br>3. <strong>Punkt styku z podłożem:</strong> prędkość obrotowa ma zwrot w lewo i znosi się z ruchem postępowym:
      <div style="text-align:center;margin:4px 0;">$$v_{\\text{styk}} = v_{\\text{cm}} - \\omega R = 0$$</div>
      Punkt styku koła z podłożem w każdej chwili <strong>chwilowo spoczywa</strong> i stanowi tzw. <strong>chwilowy środek obrotu</strong>.
      <br>4. <strong>Skrajne punkty poziome:</strong> wektor postępowy i obrotowy są prostopadłe, co daje $v = \\sqrt{v_{\\text{cm}}^2 + (\\omega R)^2} = \\sqrt{2}v_{\\text{cm}}$.</li>
  </ul>

  <div class="theory-subtitle">4. Środek masy układu ciał i bryły jednorodnej</div>
  <p><strong>Środek masy (ŚM)</strong> to punkt charakteryzujący średnie położenie masy w układzie:</p>
  <div style="text-align:center;margin:6px 0;">$$\\vec{r}_{\\text{cm}} = \\frac{\\sum m_i \\vec{r}_i}{\\sum m_i} = \\frac{m_1 \\vec{r}_1 + m_2 \\vec{r}_2 + \\dots}{m_1 + m_2 + \\dots}$$</div>
  <p>Dla brył jednorodnych o symetrii geometrycznej (kula, walec, jednorodny pręt) środek masy pokrywa się dokładnie ze środkiem geometrycznym bryły. W jednorodnym ziemskim polu grawitacyjnym środek masy pokrywa się ze środkiem ciężkości – to w nim zaczepiamy wypadkową siłę grawitacji $Q = Mg$.</p>
</div>`;

const theorySub2 = `<div class="theory-section">
  <div class="theory-subtitle">1. Moment siły względem punktu i osi obrotu ($M$)</div>
  <p><strong>Moment siły</strong> jest wektorową miarą zdolności siły do wprawiania bryły w ruch obrotowy wokół wybranego punktu lub osi:</p>
  <div style="text-align:center;margin:6px 0;">$$M = F \\cdot r \\cdot \\sin\\alpha = F \\cdot d$$</div>
  <ul class="theory-list">
    <li><strong>$F$</strong> – wartość działającej siły $[\\text{N}]$.</li>
    <li><strong>$r$</strong> – odległość punktu przyłożenia siły od osi obrotu $[\\text{m}]$.</li>
    <li><strong>$\\alpha$</strong> – kąt między wektorem promienia wodzącego $\\vec{r}$ a wektorem siły $\\vec{F}$.</li>
    <li><strong>Ramię siły ($d = r\\sin\\alpha$):</strong> najkrótsza (prostopadła) odległość osi obrotu od prostej, wzdłuż której działa siła (linii działania siły).</li>
    <li><strong>Siły o zerowym momencie ($M = 0$):</strong> gdy linia działania siły przecina oś obrotu ($d = 0$, $\\alpha = 0^\\circ$ lub $180^\\circ$). Taka siła nie może obrócić bryły.</li>
    <li><strong>Znak momentu siły:</strong> obrót przeciwny do ruchu wskazówek zegara (CCW) przyjmuje się za dodatni ($M > 0$), a obrót zgodny z ruchem wskazówek zegara (CW) za ujemny ($M < 0$).</li>
    <li>Jednostka momentu siły w układzie SI: niutonometr $[1\\text{ N}\\cdot\\text{m}]$. <em>Uwaga:</em> nie wyrażamy momentu siły w dżulach!</li>
  </ul>

  <div class="theory-subtitle">2. Warunki równowagi statycznej bryły sztywnej</div>
  <p>Aby bryła sztywna pozostawała w spoczynku (statyka), muszą być spełnione jednocześnie <strong>dwa warunki równowagi</strong>:</p>
  <div class="theory-callout-rule">
    <strong>Warunki równowagi bryły:</strong>
    <ol style="margin:6px 0;padding-left:20px;">
      <li><strong>Równowaga sił (brak przyspieszenia postępowego):</strong>
      <div style="text-align:center;margin:4px 0;">$$\\sum \\vec{F} = 0 \\iff \\sum F_x = 0 \\quad \\text{oraz} \\quad \\sum F_y = 0$$</div></li>
      <li><strong>Równowaga momentów sił (brak przyspieszenia kątowego):</strong>
      <div style="text-align:center;margin:4px 0;">$$\\sum M = 0 \\quad (\\text{względem dowolnie wybranej osi lub punktu})$$</div></li>
    </ol>
  </div>
  <p><strong>Wskazówka maturalna:</strong> W zadaniach z belkami, dźwigniami lub drabinami oś obrotu wybieraj w punkcie przyłożenia siły nieznanej (np. w punkcie podparcia lub zawiasie). Ramię tej siły wyniesie wtedy zero, co natychmiast eliminuje ją z równania momentów!</p>

  <div class="theory-subtitle">3. Moment bezwładności ($I$)</div>
  <p><strong>Moment bezwładności</strong> to miara bezwładności ciała w ruchu obrotowym – jest obrotowym odpowiednikiem masy bezwładnej:</p>
  <div style="text-align:center;margin:6px 0;">$$I = \\sum m_i r_i^2 \\quad [\\text{kg}\\cdot\\text{m}^2]$$</div>
  <ul class="theory-list">
    <li>Zależy od masy ciała oraz od jej <strong>geometrycznego rozkładu względem osi obrotu</strong> (rośnie z kwadratem odległości $r^2$). Im dalej od osi skupiona jest masa, tym trudniej zmienić prędkość kątową bryły.</li>
    <li><strong>Wzory na momenty bezwładności typowych brył (karta wzorów CKE):</strong>
      <ul style="margin-top:4px;">
        <li>Cienki pierścień / obręcz o promieniu $R$: $I = mR^2$</li>
        <li>Jednorodny walec / pełna tarcza o promieniu $R$: $I = \\frac{1}{2}mR^2$</li>
        <li>Jednorodna kula o promieniu $R$: $I = \\frac{2}{5}mR^2$</li>
        <li>Cienka sfera (powłoka kulista) o promieniu $R$: $I = \\frac{2}{3}mR^2$</li>
        <li>Cienki pręt o długości $l$ (oś prostopadła przez środek): $I = \\frac{1}{12}ml^2$</li>
      </ul>
    </li>
  </ul>

  <div class="theory-subtitle">4. II zasada dynamiki dla ruchu obrotowego</div>
  <p>Wypadkowy moment sił nadaje bryle przyspieszenie kątowe proporcjonalne do momentu i odwrotnie proporcjonalne do momentu bezwładności:</p>
  <div style="text-align:center;margin:6px 0;">$$\\sum M = I \\varepsilon \\iff \\varepsilon = \\frac{\\sum M}{I}$$</div>
  <ul class="theory-list">
    <li>Jest to ścisły odpowiednik II zasady dynamiki Newtona ($F = ma \\longleftrightarrow M = I\\varepsilon$).</li>
    <li><strong>Sprzężenie ruchu postępowego i obrotowego (np. bloczek z masami):</strong>
    Naprężenia nici po obu stronach masywnego krążka nie są równe ($T_1 > T_2$), a ich różnica wywołuje obrót bloczka:
    <div style="text-align:center;margin:4px 0;">$$(T_1 - T_2)R = I \\varepsilon = I \\frac{a}{R} \\implies T_1 - T_2 = \\frac{I}{R^2} a$$</div></li>
  </ul>
</div>`;

const theorySub3 = `<div class="theory-section">
  <div class="theory-subtitle">1. Energia kinetyczna ruchu obrotowego</div>
  <p>Obracająca się bryła sztywna posiada energię kinetyczną wynikającą z ruchu po okręgach tworzących ją cząstek:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{obr}} = \\frac{1}{2}I\\omega^2 \\quad [\\text{J}]$$</div>
  <ul class="theory-list">
    <li>Stanowi ścisły odpowiednik energii kinetycznej ruchu postępowego: $E_{\\text{post}} = \\frac{1}{2}mv^2 \\longleftrightarrow E_{\\text{obr}} = \\frac{1}{2}I\\omega^2$.</li>
    <li>Podwojenie prędkości kątowej przy stałym momencie bezwładności powoduje <strong>czterokrotny wzrost energii obrotowej</strong>.</li>
  </ul>

  <div class="theory-subtitle">2. Całkowita energia kinetyczna w toczeniu bez poślizgu</div>
  <p>Ciało toczące się bez poślizgu wykonuje ruch złożony, więc jego całkowita energia kinetyczna jest sumą dwóch składników (tzw. twierdzenie Königa):</p>
  <div style="text-align:center;margin:6px 0;">$$E_k = E_{\\text{post}} + E_{\\text{obr}} = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$</div>
  <ul class="theory-list">
    <li>Dla bryły o momencie bezwładności $I = \\beta mR^2$ przy toczeniu bez poślizgu ($\\omega = v/R$):
    <div style="text-align:center;margin:6px 0;">$$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}(\\beta mR^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}(1 + \\beta)mv^2$$</div></li>
    <li><strong>Rozkład energii dla brył toczących się:</strong>
      <ul style="margin-top:4px;">
        <li><strong>Jednorodna kula ($\\beta = 0{,}4$):</strong> $E_k = \\frac{7}{10}mv^2$ (ruch postępowy stanowi $71{,}4\\%$, a obrotowy $28{,}6\\%$ energii).</li>
        <li><strong>Jednorodny walec ($\\beta = 0{,}5$):</strong> $E_k = \\frac{3}{4}mv^2$ (ruch postępowy stanowi $66{,}7\\%$, a obrotowy $33{,}3\\%$ energii).</li>
        <li><strong>Cienki pierścień ($\\beta = 1{,}0$):</strong> $E_k = mv^2$ (ruch postępowy i obrotowy dzielą się energią dokładnie po $50\\%$).</li>
      </ul>
    </li>
  </ul>

  <div class="theory-subtitle">3. Staczanie się z równi pochyłej i „wyścig brył”</div>
  <p>Gdy bryła stacza się bez poślizgu ze spoczynku z wysokości $h$, początkowa energia potencjalna przechodzi w całkowitą energię kinetyczną:</p>
  <div style="text-align:center;margin:6px 0;">$$mgh = \\frac{1}{2}(1 + \\beta)mv^2 \\implies v = \\sqrt{\\frac{2gh}{1 + \\beta}}$$</div>
  <div class="theory-callout-rule">
    <strong>Fundamentalna reguła staczania brył:</strong><br>
    Prędkość na dole równi oraz przyspieszenie liniowe $a = \\frac{g\\sin\\alpha}{1 + \\beta}$ <strong>nie zależą od masy $m$ ani od promienia $R$ bryły</strong>, lecz wyłącznie od współczynnika kształtu $\\beta$!
    <div style="text-align:center;margin:8px 0;font-size:1.05em;">
      $$\\beta_{\\text{kula}} (0{,}4) < \\beta_{\\text{walec}} (0{,}5) < \\beta_{\\text{pierścień}} (1{,}0) \\implies v_{\\text{kula}} > v_{\\text{walec}} > v_{\\text{pierścień}}$$
    </div>
    Im mniejszy moment bezwładności (masa bardziej skupiona przy osi), tym mniej energii „pochłania” ruch obrotowy i tym szybciej bryła zjeżdża z równi! Kula zawsze wygra wyścig z walcem i pierścieniem.
  </div>

  <div class="theory-subtitle">4. Rola siły tarcia statycznego w toczeniu bez poślizgu</div>
  <p>W ruchu tocznym bez poślizgu punkt styku koła z podłożem w każdej chwili czasu <strong>ma zerową prędkość chwilową</strong> ($v = 0$). Wektor przemieszczenia punktu przyłożenia siły tarcia wynosi zero ($d\\vec{s} = 0$), z czego wynika, że:</p>
  <div style="text-align:center;margin:6px 0;">$$W_{T_s} = \\vec{F}_s \\cdot d\\vec{s} = 0$$</div>
  <p><strong>Siła tarcia statycznego nie wykonuje pracy i nie rozprasza energii na ciepło!</strong> Jej jedyną rolą jest wymuszenie obrotu bryły i realizacja więzu kinematycznego $v_{\\text{cm}} = \\omega R$.</p>

  <div class="theory-subtitle">5. Praca i moc mechaniczna w ruchu obrotowym</div>
  <ul class="theory-list">
    <li><strong>Praca w ruchu obrotowym:</strong> praca stałego momentu siły $M$ przy obrocie o kąt $\\Delta\\alpha$:
    <div style="text-align:center;margin:4px 0;">$$W = M \\cdot \\Delta\\alpha \\quad [\\text{J}]$$</div></li>
    <li><strong>Moc chwilowa silnika lub wału obrotowego:</strong>
    <div style="text-align:center;margin:4px 0;">$$P = \\frac{W}{\\Delta t} = M \\cdot \\frac{\\Delta\\alpha}{\\Delta t} = M \\cdot \\omega \\quad [\\text{W}]$$</div></li>
  </ul>
</div>`;

const theorySub4 = `<div class="theory-section">
  <div class="theory-subtitle">1. Definicja momentu pędu ($\\vec{L}$)</div>
  <p><strong>Moment pędu</strong> to wektorowa wielkość fizyczna opisująca stan ruchu obrotowego ciała lub układu ciał:</p>
  <ul class="theory-list">
    <li><strong>Dla bryły sztywnej</strong> obracającej się wokół stałej osi symetrii:
    <div style="text-align:center;margin:6px 0;">$$\\vec{L} = I \\vec{\\omega} \\quad [\\text{kg}\\cdot\\text{m}^2/\\text{s} = \\text{J}\\cdot\\text{s}]$$</div>
    Wektor momentu pędu leży na osi obrotu, a jego zwrot wyznacza reguła prawej dłoni (gdy ugięte palce wskazują zwrot obrotu, kciuk wskazuje wektor $\\vec{L}$).</li>
    <li><strong>Dla punktu materialnego</strong> o masie $m$ i prędkości $\\vec{v}$ względem wybranego punktu odniesienia:
    <div style="text-align:center;margin:6px 0;">$$\\vec{L} = \\vec{r} \\times \\vec{p} \\implies L = m v r \\sin\\alpha = m v d$$</div>
    gdzie: $d = r\\sin\\alpha$ to ramię pędu (najkrótsza odległość osi od prostej, wzdłuż której porusza się ciało).</li>
  </ul>

  <div class="theory-subtitle">2. Impuls momentu siły i twierdzenie o zmianie momentu pędu</div>
  <p>Zmiana momentu pędu bryły jest skutkiem działania wypadkowego momentu sił zewnętrznych w określonym przedziale czasu:</p>
  <div style="text-align:center;margin:6px 0;">$$\\vec{M} = \\frac{d\\vec{L}}{dt} \\iff \\Delta\\vec{L} = \\vec{M} \\cdot \\Delta t$$</div>
  <p>Jest to uogólniona II zasada dynamiki dla ruchu obrotowego (obrotowy odpowiednik relacji $\\Delta\\vec{p} = \\vec{F}\\Delta t$).</p>

  <div class="theory-subtitle">3. Zasada Zachowania Momentu Pędu (ZZMP)</div>
  <p>Dla układu izolowanego, na który nie działają zewnętrzne momenty sił ($M_{\\text{zew}} = 0$):</p>
  <div class="theory-callout-rule">
    <strong>Zasada Zachowania Momentu Pędu:</strong>
    <div style="text-align:center;margin:6px 0;font-size:1.15em;">
      $$\\sum \\vec{L}_{\\text{pocz}} = \\sum \\vec{L}_{\\text{końc}} = \\text{const} \\iff I_1 \\omega_1 = I_2 \\omega_2$$
    </div>
    Jeżeli wypadkowy zewnętrzny moment sił jest zerowy, to całkowity wektor momentu pędu układu pozostaje stały w czasie.
  </div>

  <div class="theory-subtitle">4. Efekt łyżwiarza i bilans energii</div>
  <p>Gdy obracające się ciało zmienia rozkład swojej masy bez udziału zewnętrznych sił (np. łyżwiarz przyciąga ramiona do ciała, zmniejszając moment bezwładności z $I_1$ do $I_2 < I_1$):</p>
  <ul class="theory-list">
    <li>Z warunku $I_1 \\omega_1 = I_2 \\omega_2$ wynika, że prędkość kątowa rośnie: $\\omega_2 = \\frac{I_1}{I_2}\\omega_1$.</li>
    <li><strong>Zmiana energii kinetycznej:</strong> energię wyrażamy przez moment pędu $L$:
    <div style="text-align:center;margin:6px 0;">$$E_k = \\frac{L^2}{2I}$$</div>
    Gdy $I$ maleje przy stałym $L$, energia kinetyczna <strong>rośnie</strong> ($E_{k2} > E_{k1}$)!</li>
    <li><strong>Skąd bierze się ta energia?</strong> Łyżwiarz wykonuje dodatnią pracę wewnętrzną swoimi mięśniami wbrew sile odśrodkowej bezwładności: $W_{\\text{mięśni}} = \\Delta E_k$.</li>
  </ul>

  <div class="theory-subtitle">5. Zderzenia obrotowe i sprzęgła cierne</div>
  <ul class="theory-list">
    <li><strong>Niesprężyste zderzenie z prętem:</strong> pocisk o masie $m$ i prędkości $v$ uderza w spoczywający pręt o momencie $I_p$ w odległości $r$ od osi i w nim grzęźnie:
    <div style="text-align:center;margin:4px 0;">$$L_{\\text{pocz}} = m v r = (I_p + m r^2)\\omega_k \\implies \\omega_k = \\frac{mvr}{I_p + mr^2}$$</div></li>
    <li><strong>Dociskane tarcze (sprzęgło):</strong> tarcza o $I_1, \\omega_1$ łączy się z tarczą $I_2$ (początkowo spoczywającą):
    <div style="text-align:center;margin:4px 0;">$$I_1 \\omega_1 = (I_1 + I_2)\\omega_k \\implies \\omega_k = \\frac{I_1 \\omega_1}{I_1 + I_2}$$</div>
    W zderzeniu tym moment pędu jest zachowany, lecz energia kinetyczna maleje na skutek pracy tarcia poślizgowego między tarczami (zamiana na ciepło $Q = E_{k1} - E_{k2}$).</li>
  </ul>
</div>`;

console.log('Loading js/data-courses.js...');
const dataPath = path.join(__dirname, '..', 'js', 'data-courses.js');
const content = fs.readFileSync(dataPath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(content, sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;
const bryla = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');

if (!bryla) throw new Error('m-bryla not found!');

// Subchapter 1
bryla.subchapters[0].desc = "Kinematyka ruchu obrotowego i postępowego, związki wielkości liniowych i kątowych, toczenie bez poślizgu oraz środek masy.";
bryla.subchapters[0].formulaCheat = "\\omega = 2\\pi f = \\frac{2\\pi}{T}, \\quad v = \\omega r, \\quad a_t = \\varepsilon r, \\quad a_d = \\omega^2 r, \\quad v_{\\text{cm}} = \\omega R";
bryla.subchapters[0].theory = theorySub1;

// Subchapter 2
bryla.subchapters[1].desc = "Definicja i ramię momentu siły, warunki równowagi statycznej belki i drabiny, moment bezwładności oraz II zasada dynamiki obrotowej.";
bryla.subchapters[1].formulaCheat = "M = F \\cdot r \\cdot \\sin\\alpha = F \\cdot d, \\quad \\sum \\vec{F} = 0, \\quad \\sum M = 0, \\quad I = \\sum m_i r_i^2, \\quad M = I \\varepsilon";
bryla.subchapters[1].theory = theorySub2;

// Subchapter 3
bryla.subchapters[2].desc = "Energia kinetyczna obrotu i toczenia bez poślizgu, bilans energii na równi pochyłej, wyścig brył, rola tarcia statycznego, praca i moc.";
bryla.subchapters[2].formulaCheat = "E_{\\text{obr}} = \\frac{1}{2}I\\omega^2, \\quad E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2, \\quad v = \\sqrt{\\frac{2gh}{1+\\beta}}, \\quad P = M\\omega";
bryla.subchapters[2].theory = theorySub3;

// Subchapter 4
bryla.subchapters[3].desc = "Moment pędu bryły i cząstki punktowej, impuls momentu siły, zasada zachowania momentu pędu, efekt łyżwiarza i zderzenia obrotowe.";
bryla.subchapters[3].formulaCheat = "L = I\\omega, \\quad L = mvr\\sin\\alpha, \\quad \\Delta L = M\\Delta t, \\quad I_1\\omega_1 = I_2\\omega_2 \\ (\\text{gdy } M_{\\text{zew}} = 0)";
bryla.subchapters[3].theory = theorySub4;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 4) + ';\n';
fs.writeFileSync(dataPath, newFileContent, 'utf8');

console.log('Successfully updated theory for all 4 subchapters in m-bryla!');
