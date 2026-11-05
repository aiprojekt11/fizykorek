const fs = require('fs');
const path = require('path');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
global.window = {};
require(dataCoursesPath);

const courses = window.FIZYKOREK_COURSES;
const rigidSection = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');

if (!rigidSection) {
  console.error('Section m-bryla not found!');
  process.exit(1);
}

// Subchapter 1: Ruch obrotowy bryły sztywnej
const theorySub1 = `<div class="theory-section">
  <div class="theory-subtitle">1. Wielkości kątowe w ruchu obrotowym</div>
  <p>Bryła sztywna to ciało, w którym odległości między dowolnymi punktami są stałe. W ruchu wokół ustalonej osi wszystkie punkty bryły zakreślają ten sam kąt w tym samym czasie:</p>
  <ul class="theory-list">
    <li><strong>Kąt obrotu (położenie kątowe $\\alpha$):</strong> miara obrotu w radianach $[\\text{rad}]$. Pełny obrót to $2\\pi\\text{ rad} = 360^\\circ$.</li>
    <li><strong>Prędkość kątowa ($\\omega$):</strong> szybkość zmiany kąta obrotu:
    <div style="text-align:center;margin:6px 0;">$$\\omega = \\frac{\\Delta \\alpha}{\\Delta t} = \\frac{2\\pi}{T} = 2\\pi f$$</div>
    gdzie: $T$ – okres obrotu $[\\text{s}]$, $f = \\frac{1}{T}$ – częstotliwość $[\\text{Hz} = 1/\\text{s}]$. Jednostka w SI: $[\\omega] = \\text{rad}/\\text{s} = 1/\\text{s}$.</li>
    <li><strong>Przyspieszenie kątowe ($\\varepsilon$):</strong> szybkość zmiany prędkości kątowej:
    <div style="text-align:center;margin:6px 0;">$$\\varepsilon = \\frac{\\Delta \\omega}{\\Delta t}$$</div>
    Jednostka w SI: $[\\varepsilon] = \\text{rad}/\\text{s}^2 = 1/\\text{s}^2$. Dla ruchu jednostajnego $\\varepsilon = 0$.</li>
  </ul>

  <div class="theory-subtitle">2. Związki między wielkościami kątowymi a liniowymi</div>
  <p>Punkt bryły odległy o promień $r$ od osi obrotu porusza się po okręgu:</p>
  <ul class="theory-list">
    <li><strong>Droga po łuku ($s$):</strong> $s = \\alpha \\cdot r$.</li>
    <li><strong>Prędkość liniowa ($v$):</strong> $v = \\omega \\cdot r$ (punkty na skraju bryły poruszają się najszybciej, w osi $r=0 \\implies v=0$).</li>
    <li><strong>Przyspieszenie styczne ($a_t$):</strong> zmienia wartość prędkości liniowej:
    <div style="text-align:center;margin:4px 0;">$$a_t = \\varepsilon \\cdot r$$</div></li>
    <li><strong>Przyspieszenie dośrodkowe ($a_d$):</strong> zakrzywia tor ruchu (skierowane prostopadle do osi):
    <div style="text-align:center;margin:4px 0;">$$a_d = \\frac{v^2}{r} = \\omega^2 \\cdot r$$</div></li>
    <li><strong>Całkowite przyspieszenie liniowe ($a$):</strong> wektorowa suma prostopadłych składowych:
    <div style="text-align:center;margin:4px 0;">$$a = \\sqrt{a_t^2 + a_d^2}$$</div></li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Ruch obrotowy tarczy wokół osi O: tarcza o promieniu R obracająca się z prędkością kątową omega i przyspieszeniem kątowym epsilon. Na brzegu tarczy w odległości r od osi zaznaczony punkt ze składowymi wektorów: prędkość liniowa v = omega * r (styczna do toru), przyspieszenie styczne a_t = epsilon * r (styczne do toru) oraz przyspieszenie dośrodkowe a_d = omega^2 * r (skierowane wzdłuż promienia do środka obrotu O). Obok wektorowa suma a = sqrt(a_t^2 + a_d^2).</p>
  <div class="theory-placeholder-caption">Wszystkie punkty bryły mają jednakowe omega i epsilon, natomiast wielkości liniowe (v, a_t, a_d) rosną proporcjonalnie do odległości r od osi.</div>
</div>

  <div class="theory-subtitle">3. Kinematyka toczenia bez poślizgu</div>
  <p>Toczenie koła lub walca po podłożu jest złożeniem dwóch jednoczesnych ruchów: <strong>ruchu postępowego</strong> ze stałą prędkością środka masy $v$ oraz <strong>ruchu obrotowego</strong> wokół środka masy z prędkością kątową $\\omega = \\frac{v}{R}$:</p>
  <ul class="theory-list">
    <li><strong>Warunek braku poślizgu:</strong> $v = \\omega R$ oraz $a = \\varepsilon R$.</li>
    <li><strong>Punkt styku z podłożem ($v = 0$):</strong> prędkość postępowa $v$ i liniowa obrotowa $-\\omega R$ znoszą się do zera ($v_{\\text{styk}} = 0$). Jest to <strong>chwilowy środek obrotu</strong> — punkt styku chwilowo spoczywa względem podłoża.</li>
    <li><strong>Środek koła ($v_{\\text{cm}} = v$):</strong> porusza się z prędkością postępową środka masy.</li>
    <li><strong>Najwyższy punkt koła ($v_{\\text{góra}} = 2v$):</strong> wektory prędkości się sumują ($v + \\omega R = 2v$) — szczyt koła porusza się dwa razy szybciej niż środek.</li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Rozkład prędkości w toczącym się kole bez poślizgu: koło o promieniu R toczy się po poziomej powierzchni z prędkością środka masy v. Zaznaczone wektory prędkości w czterech kluczowych punktach: w punkcie styku z podłożem C prędkość wynosi v_C = 0 (chwilowy środek obrotu – punkt styku chwilowo spoczywa); w środku masy O prędkość wynosi v_O = v; na szczycie koła A prędkość wynosi v_A = 2v (skierowana poziomo w prawo); w skrajnym prawym punkcie B prędkość wypadkowa v_B = v * sqrt(2) skierowana pod kątem 45 stopni w dół.</p>
  <div class="theory-placeholder-caption">Toczenie bez poślizgu to złożenie ruchu postępowego i obrotowego: punkt styku z podłożem ma prędkość zero (chwilowy środek obrotu), a szczyt koła porusza się z prędkością 2v.</div>
</div>
</div>`;

// Subchapter 2: Moment siły, moment bezwładności i II zasada dynamiki
const theorySub2 = `<div class="theory-section">
  <div class="theory-subtitle">1. Moment siły ($M$) i ramię siły ($d$)</div>
  <p>Moment siły względem osi obrotu opisuje zdolność siły do wywołania lub zmiany ruchu obrotowego bryły:</p>
  <div style="text-align:center;margin:6px 0;">$$M = F \\cdot r \\cdot \\sin\\alpha = F \\cdot d$$</div>
  <ul class="theory-list">
    <li><strong>$F$</strong> – wartość działającej siły $[\\text{N}]$, <strong>$r$</strong> – odległość punktu przyłożenia od osi $[\\text{m}]$, <strong>$\\alpha$</strong> – kąt między wektorem położenia $\\vec{r}$ a wektorem siły $\\vec{F}$.</li>
    <li><strong>Ramię siły ($d = r\\sin\\alpha$):</strong> najkrótsza (prostopadła) odległość osi obrotu od prostej, wzdłuż której działa siła.</li>
    <li>Jednostka w SI: $[M] = \\text{N} \\cdot \\text{m}$ (niutonometr).</li>
    <li><strong>Warunek zerowego momentu ($M = 0$):</strong> gdy prosta działania siły przechodzi przez oś obrotu ($d = 0 \\implies M = 0$). Taka siła nie jest w stanie wywołać obrotu.</li>
    <li>Maksymalny moment uzyskujemy przy działaniu prostopadłym ($\\alpha = 90^\\circ \\implies \\sin 90^\\circ = 1 \\implies M = F \\cdot r$).</li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Ramię siły i moment siły: dźwignia zamocowana na nieruchomej osi obrotu O. W odległości r przyłożona jest siła F pod kątem alfa do ramienia dźwigni. Zaznaczona linia działania siły oraz ramię siły d = r * sin(alfa) jako odcinek prostopadły poprowadzony od osi obrotu O do linii działania siły. Drugi schemat obok: siła F, której linia działania przechodzi przez oś obrotu O (alfa = 0 lub 180 stopni), gdzie ramię d = 0 i moment siły M = 0.</p>
  <div class="theory-placeholder-caption">Moment siły zależy od prostopadłego ramienia: M = F * d = F * r * sin(alfa). Siła przechodząca przez oś obrotu ma ramię d = 0 i nie wywołuje obrotu.</div>
</div>

  <div class="theory-subtitle">2. Moment bezwładności ($I$) i twierdzenie Steinera</div>
  <p>Moment bezwładności to miara oporu bryły przeciwko zmianie jej stanu ruchu obrotowego (odpowiednik masy w ruchu postępowym):</p>
  <div style="text-align:center;margin:6px 0;">$$I = \\sum m_i r_i^2$$</div>
  <ul class="theory-list">
    <li>Zależy od masy bryły oraz od tego, jak ta masa jest geometrycznie rozłożona wokół osi. Im dalej od osi znajduje się masa, tym większy moment bezwładności. Jednostka w SI: $[I] = \\text{kg} \\cdot \\text{m}^2$.</li>
    <li>Wzory dla podstawowych brył (względem osi symetrii):
      <ul style="margin:4px 0 4px 18px;">
        <li>Walec / krążek pełny: $I_0 = \\frac{1}{2}mR^2$</li>
        <li>Kula pełna: $I_0 = \\frac{2}{5}mR^2$</li>
        <li>Obręcz cienkościenna: $I_0 = mR^2$</li>
        <li>Cienki pręt wokół osi przez środek ($L$): $I_0 = \\frac{1}{12}mL^2$</li>
      </ul>
    </li>
    <li><strong>Twierdzenie Steinera:</strong> moment bezwładności względem dowolnej osi równoległej przesuniętej o odległość $d$ od środka masy:
    <div style="text-align:center;margin:4px 0;">$$I = I_0 + m d^2$$</div>
    gdzie: $I_0$ – moment bezwładności względem osi przechodzącej przez środek masy, $m$ – masa bryły, $d$ – odległość między obiema osiami.</li>
  </ul>

  <div class="theory-subtitle">3. II zasada dynamiki dla ruchu obrotowego</div>
  <p>Wypadkowy moment sił zewnętrznych nadaje bryle przyspieszenie kątowe wprost proporcjonalne do tego momentu:</p>
  <div style="text-align:center;margin:6px 0;">$$M_{\\text{wyp}} = I \\cdot \\varepsilon \\iff \\varepsilon = \\frac{M_{\\text{wyp}}}{I}$$</div>

  <div class="theory-subtitle">4. Warunki równowagi statycznej bryły sztywnej</div>
  <p>Aby bryła sztywna pozostawała w spoczynku, spełnione muszą być <strong>jednocześnie dwa warunki równowagi</strong>:</p>
  <div style="text-align:center;margin:6px 0;">
  $$\\begin{cases} \\sum \\vec{F} = \\vec{0} & \\text{(I warunek: brak ruchu postępowego – wypadkowa sił równa zero)} \\\\ \\sum M = 0 & \\text{(II warunek: brak obrotu – suma momentów sił względem dowolnego punktu równa zero)} \\end{cases}$$
  </div>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Warunki równowagi belki na dwóch podporach: jednorodna pozioma belka o długości L i ciężarze Q = mg spoczywająca na podporze A (na lewym końcu) i podporze B (na prawym końcu). W środku belki (w odległości L/2) zaznaczony wektor siły ciężkości Q skierowany pionowo w dół. Na końcach zaznaczone wektory sił reakcji podpór R_A i R_B skierowane pionowo w górę. Zaznaczony bilans sił: R_A + R_B = Q oraz bilans momentów sił względem podpory A: R_B * L - Q * (L/2) = 0.</p>
  <div class="theory-placeholder-caption">Równowaga bryły wymaga spełnienia dwóch warunków: zerowej sumy sił (brak przesunięcia) oraz zerowej sumy momentów sił względem dowolnego punktu (brak obrotu).</div>
</div>
</div>`;

// Subchapter 3: Energia kinetyczna w ruchu obrotowym i praca
const theorySub3 = `<div class="theory-section">
  <div class="theory-subtitle">1. Energia kinetyczna ruchu obrotowego ($E_{k,\\text{obr}}$)</div>
  <p>Obracająca się bryła o momencie bezwładności $I$ z prędkością kątową $\\omega$ posiada energię kinetyczną obrotu:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{k,\\text{obr}} = \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li>Jest to ścisły odpowiednik energii ruchu postępowego $E_{k,\\text{post}} = \\frac{1}{2}mv^2$, gdzie masa $m$ odpowiada momentowi bezwładności $I$, a prędkość $v$ prędkości kątowej $\\omega$.</li>
    <li>Jednostka w układzie SI: $[E_k] = \\text{J}$ (dżul).</li>
  </ul>

  <div class="theory-subtitle">2. Całkowita energia kinetyczna w toczeniu bez poślizgu</div>
  <p>Ciało toczące się bez poślizgu posiada jednocześnie energię ruchu postępowego i obrotowego:</p>
  <div style="text-align:center;margin:6px 0;">$$E_k = E_{k,\\text{post}} + E_{k,\\text{obr}} = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li>Z warunku toczenia bez poślizgu $\\omega = \\frac{v}{R}$. Podstawiając $I = c \\cdot m R^2$ (gdzie $c$ to współczynnik kształtu):
    <div style="text-align:center;margin:4px 0;">$$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}(c m R^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}(1 + c) m v^2$$</div></li>
    <li>Dla kuli pełnej ($c = 0.4$): $E_k = 0.5 mv^2 + 0.2 mv^2 = 0.7 mv^2$ ($71.4\\%$ energii przypada na ruch postępowy, a $28.6\\%$ na ruch obrotowy).</li>
    <li>Dla walca pełnego ($c = 0.5$): $E_k = 0.5 mv^2 + 0.25 mv^2 = 0.75 mv^2$ ($66.7\\%$ postępowa, $33.3\\%$ obrotowa).</li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Rozkład energii kinetycznej w toczeniu bryły: toczące się ciało (kula lub walec) o masie m i promieniu R poruszające się z prędkością środka masy v i prędkością kątową omega = v/R. Schematyczne rozbicie energii kinetycznej na dwa słupki/diagramy: energię ruchu postępowego E_k,post = (1/2) * m * v^2 oraz energię ruchu obrotowego E_k,obr = (1/2) * I * omega^2. Dla kuli pełnej udział procentowy: 71.4% energia postępowa, 28.6% energia obrotowa.</p>
  <div class="theory-placeholder-caption">Całkowita energia kinetyczna toczącego się ciała to suma energii postępu i obrotu: E_k = (1/2)mv^2 + (1/2)I*omega^2 = (1/2)(1 + c)mv^2.</div>
</div>

  <div class="theory-subtitle">3. Staczanie się brył z równi pochyłej (Zasada Zachowania Energii)</div>
  <p>Podczas staczania bez poślizgu z wysokości $h$ początkowa energia potencjalna $mgh$ zamienia się w całkowitą energię kinetyczną:</p>
  <div style="text-align:center;margin:6px 0;">$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2 = \\frac{1}{2}(1 + c)mv^2 \\implies v = \\sqrt{\\frac{2gh}{1 + c}}$$</div>
  <div class="theory-callout-rule">
    <strong>Wyścig brył na równi pochyłej:</strong>
    <p>Prędkość końcowa na dole równi <strong>nie zależy od masy $m$ ani promienia $R$ bryły</strong>! Zależy wyłącznie od geometrii rozkładu masy (współczynnika $c$):</p>
    <ul class="theory-list" style="margin-top:6px;">
      <li><strong>1. Kula pełna ($c = 0.4$):</strong> $v = \\sqrt{\\frac{10}{7}gh} \\approx 1.20\\sqrt{gh}$ — wygrywa wyścig, dociera na dół pierwsza!</li>
      <li><strong>2. Walec pełny ($c = 0.5$):</strong> $v = \\sqrt{\\frac{4}{3}gh} \\approx 1.15\\sqrt{gh}$ — drugi na dole.</li>
      <li><strong>3. Pierścień cienkościenny ($c = 1.0$):</strong> $v = \\sqrt{gh} \\approx 1.00\\sqrt{gh}$ — ostatni na dole.</li>
    </ul>
  </div>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Wyścig brył staczających się z równi pochyłej: równia pochyła o wysokości h i kącie nachylenia alfa. Trzy bryły o jednakowej masie m i promieniu R startujące jednocześnie z samego szczytu bez poślizgu: kula pełna (c = 0.4), walec pełny (c = 0.5) oraz cienkościenny pierścień (c = 1.0). Na dole równi zaznaczona kolejność: pierwsza linie mety przekracza kula z największą prędkością v = sqrt(10/7 gh), drugi jest walec z v = sqrt(4/3 gh), a ostatni pierścień z v = sqrt(gh).</p>
  <div class="theory-placeholder-caption">Prędkość na dole nie zależy od masy ani promienia bryły, lecz wyłącznie od współczynnika rozkładu masy c: bryła o mniejszym c stacza się szybciej.</div>
</div>

  <div class="theory-subtitle">4. Praca i moc w ruchu obrotowym</div>
  <ul class="theory-list">
    <li><strong>Praca stałego momentu siły ($W$):</strong>
    <div style="text-align:center;margin:4px 0;">$$W = M \\cdot \\Delta \\alpha$$</div>
    gdzie: $M$ – moment siły $[\\text{N}\\cdot\\text{m}]$, $\\Delta\\alpha$ – kąt obrotu w radianach $[\\text{rad}]$.</li>
    <li><strong>Twierdzenie o pracy i energii w obrocie:</strong> praca wypadkowego momentu sił jest równa zmianie energii kinetycznej obrotowej: $W_{\\text{wyp}} = \\Delta E_{k,\\text{obr}}$.</li>
    <li><strong>Moc w ruchu obrotowym ($P$):</strong>
    <div style="text-align:center;margin:4px 0;">$$P = \\frac{W}{t} = M \\cdot \\left(\\frac{\\Delta\\alpha}{t}\\right) = M \\cdot \\omega$$</div>
    gdzie: $P$ – moc $[\\text{W}]$, $\\omega$ – prędkość kątowa $[\\text{rad}/\\text{s}]$.</li>
  </ul>
</div>`;

// Subchapter 4: Moment pędu i Zasada Zachowania Momentu Pędu
const theorySub4 = `<div class="theory-section">
  <div class="theory-subtitle">1. Definicja momentu pędu ($\\vec{L}$)</div>
  <p>Moment pędu jest miarą ilości ruchu obrotowego bryły sztywnej wokół osi (obrotowy odpowiednik pędu liniowego $\\vec{p} = m\\vec{v}$):</p>
  <div style="text-align:center;margin:6px 0;">$$\\vec{L} = I \\vec{\\omega} \\implies L = I \\omega$$</div>
  <ul class="theory-list">
    <li><strong>Dla punktu materialnego:</strong> $\\vec{L} = \\vec{r} \\times \\vec{p} \\implies L = m v r \\sin\\alpha$. Dla toru kołowego ($r \\perp v$): $L = mvr$.</li>
    <li>Wektor $\\vec{L}$ leży na osi obrotu i ma taki sam zwrot jak wektor prędkości kątowej $\\vec{\\omega}$ (wyznaczany <strong>regułą prawej dłoni</strong>: zgięte palce wskazują obrót, odgięty kciuk wskazuje $\\vec{L}$).</li>
    <li>Jednostka w układzie SI: $[L] = \\text{kg} \\cdot \\text{m}^2/\\text{s} = \\text{J} \\cdot \\text{s} = \\text{N} \\cdot \\text{m} \\cdot \\text{s}$.</li>
    <li><strong>Związek z momentem siły (uogólniona II zasada dynamiki):</strong>
    <div style="text-align:center;margin:4px 0;">$$M_{\\text{wyp}} = \\frac{\\Delta L}{\\Delta t}$$</div>
    Moment siły jest szybkością zmiany momentu pędu.</li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Moment pędu bryły i reguła prawej dłoni: bryła (dysk) obracająca się wokół pionowej osi z z prędkością kątową omega. Zaznaczony zwrot obrotu bryły oraz wektory prędkości kątowej omega i momentu pędu L = I * omega leżące na osi obrotu i skierowane pionowo w górę. Obok schemat prawej dłoni: cztery zgięte palce wskazują kierunek obrotu bryły, a odgięty kciuk wskazuje wektor momentu pędu L.</p>
  <div class="theory-placeholder-caption">Wektor momentu pędu L = I * omega ma ten sam kierunek i zwrot co wektor prędkości kątowej omega, wyznaczany za pomocą reguły prawej dłoni.</div>
</div>

  <div class="theory-subtitle">2. Zasada Zachowania Momentu Pędu (ZZMP)</div>
  <p>Gdy na układ ciał nie działają zewnętrzne momenty sił lub ich suma wektorowa jest równa zero ($M_{\\text{zewn,wyp}} = 0$):</p>
  <div style="text-align:center;margin:6px 0;">$$\\vec{L}_{\\text{całk}} = \\text{const} \\iff I_1 \\omega_1 = I_2 \\omega_2$$</div>

  <div class="theory-subtitle">3. Zjawisko piruetu (efekt łyżwiarza)</div>
  <p>Gdy łyżwiarz przyciąga rozłożone ramiona do osi obrotu:</p>
  <ul class="theory-list">
    <li>Masa przybliża się do osi $\\implies$ <strong>moment bezwładności maleje</strong> ($I_2 < I_1$).</li>
    <li>Z Zasady Zachowania Momentu Pędu ($I_1 \\omega_1 = I_2 \\omega_2$) wynika, że <strong>prędkość kątowa rośnie</strong>:
    <div style="text-align:center;margin:4px 0;">$$\\omega_2 = \\frac{I_1}{I_2} \\omega_1 > \\omega_1$$</div></li>
    <li><strong>Bilans energii kinetycznej:</strong> zapisując energię obrotową przez moment pędu:
    <div style="text-align:center;margin:4px 0;">$$E_k = \\frac{1}{2}I\\omega^2 = \\frac{L^2}{2I}$$</div>
    Ponieważ $I$ zmalało, a $L = \\text{const}$, energia kinetyczna <strong>rośnie</strong> ($E_{k2} > E_{k1}$) kosztem pracy wykonanej przez mięśnie łyżwiarza przyciągające ramiona ($W_{\\text{mięśni}} = \\Delta E_k > 0$).</li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Efekt łyżwiarza (Zasada Zachowania Momentu Pędu): dwa etapy piruetu łyżwiarza. Etap 1: łyżwiarz z szeroko rozłożonymi ramionami o dużym momencie bezwładności I_1 i małej prędkości kątowej omega_1. Etap 2: łyżwiarz z ramionami mocno przyciągniętymi do klatki piersiowej o małym momencie bezwładności I_2 &lt; I_1 i dużej prędkości kątowej omega_2 &gt; omega_1. Pomiędzy etapami równość I_1 * omega_1 = I_2 * omega_2 oraz adnotacja, że energia kinetyczna wzrosła kosztem pracy mięśni rąk.</p>
  <div class="theory-placeholder-caption">Przyciągnięcie ramion zmniejsza moment bezwładności i zwiększa prędkość kątową (L = const). Energia kinetyczna rośnie kosztem pracy mięśni łyżwiarza.</div>
</div>

  <div class="theory-subtitle">4. Zderzenia i oddziaływania z obracającą się bryłą</div>
  <p>Gdy punkt materialny (np. pocisk) o masie $m$ poruszający się z prędkością $v$ wbija się w spoczywający pręt w odległości $r$ od osi obrotu:</p>
  <ul class="theory-list">
    <li>Początkowy moment pędu układu względem osi obrotu: $L_{\\text{pocz}} = mvr$.</li>
    <li>Końcowy moment bezwładności po wbiciu pocisku: $I_{\\text{końc}} = I_{\\text{pręta}} + mr^2$.</li>
    <li>Z Zasady Zachowania Momentu Pędu wyznaczamy prędkość kątową układu:
    <div style="text-align:center;margin:4px 0;">$$mvr = (I_{\\text{pręta}} + mr^2)\\omega \\implies \\omega = \\frac{mvr}{I_{\\text{pręta}} + mr^2}$$</div></li>
  </ul>
</div>`;

const sub1 = rigidSection.subchapters.find(s => s.id === 'sub-bryla-ruch');
const sub2 = rigidSection.subchapters.find(s => s.id === 'sub-bryla-moment-sily');
const sub3 = rigidSection.subchapters.find(s => s.id === 'sub-bryla-energia');
const sub4 = rigidSection.subchapters.find(s => s.id === 'sub-bryla-moment-pedu');

if (sub1) sub1.theory = theorySub1;
if (sub2) sub2.theory = theorySub2;
if (sub3) sub3.theory = theorySub3;
if (sub4) sub4.theory = theorySub4;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync(dataCoursesPath, newFileContent, 'utf8');
console.log('Successfully updated rigid body theory with placeholders only (no images)!');
