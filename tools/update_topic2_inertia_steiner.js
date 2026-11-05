const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
const rawContent = fs.readFileSync(dataCoursesPath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(rawContent, sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;

const bryla = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');
const sub1 = bryla.subchapters.find(s => s.id === 'sub-bryla-moment-sily');

const updatedTheorySub2 = `<div class="theory-section">
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

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-torque-arm.png" alt="Ramię siły i moment siły: z lewej strony siła F pod kątem alfa z ramieniem d = r sin alfa; z prawej strony siła wzdłuż osi ramienia z d = 0 i momentem M = 0." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">2. Moment bezwładności ($I$) i twierdzenie Steinera</div>
  <p><strong>Moment bezwładności ($I$)</strong> jest miarą bezwładności bryły w ruchu obrotowym (odpowiednikiem masy $m$ w ruchu postępowym) i określa, jak trudno zmienić prędkość kątową ciała:</p>
  <div style="text-align:center;margin:6px 0;">$$I = \\sum m_i r_i^2 \\quad [\\text{kg} \\cdot \\text{m}^2]$$</div>
  <ul class="theory-list">
    <li><strong>Zależność od rozkładu masy:</strong> wartość $I$ zależy nie tylko od całkowitej masy bryły $m$, ale przede wszystkim od tego, jak daleko od osi obrotu masa ta jest rozmieszczona (rośnie z kwadratem odległości $r^2$). Im dalej od osi skupiona jest masa, tym większy moment bezwładności.</li>
    <li><strong>Momenty bezwładności podstawowych brył jednorodnych ($I_0$)</strong> względem osi przechodzącej przez środek masy:
      <ul style="margin:4px 0 4px 18px;">
        <li><strong>Obręcz cienkościenna (pierścień):</strong> $I_0 = mR^2$ (cała masa w odległości $R$ od osi)</li>
        <li><strong>Walec / krążek pełny:</strong> $I_0 = \\frac{1}{2}mR^2$ (oś wzdłuż osi symetrii walca)</li>
        <li><strong>Kula pełna:</strong> $I_0 = \\frac{2}{5}mR^2$ (oś przez środek kuli)</li>
        <li><strong>Cienki pręt o długości $L$:</strong> $I_0 = \\frac{1}{12}mL^2$ (oś prostopadła do pręta przez jego środek)</li>
      </ul>
    </li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-moments-of-inertia.svg" alt="Momenty bezwładności podstawowych brył względem osi symetrii przechodzącej przez środek masy: obręcz cienkościenna I0 = mR^2, walec pełny I0 = 1/2 mR^2, kula pełna I0 = 2/5 mR^2, cienki pręt I0 = 1/12 mL^2." loading="eager" decoding="async">
</figure>

  <ul class="theory-list">
    <li><strong>Twierdzenie Steinera (o osiach równoległych):</strong> jeżeli bryłę obracamy wokół nowej osi, która jest <u>równoległa</u> do osi przechodzącej przez środek masy $S$ i przesunięta względem niej o odległość $d$, to moment bezwładności $I$ względem tej nowej osi wynosi:
    <div style="text-align:center;margin:6px 0;">$$I = I_0 + m d^2$$</div>
    gdzie:
      <ul style="margin:4px 0 4px 18px;">
        <li><strong>$I_0$</strong> – moment bezwładności bryły względem osi przechodzącej przez jej środek masy $S$,</li>
        <li><strong>$m$</strong> – całkowita masa bryły,</li>
        <li><strong>$d$</strong> – prostopadła odległość między osią przechodzącą przez środek masy a nową osią obrotu.</li>
      </ul>
    </li>
    <li><strong>Przykłady zastosowania twierdzenia Steinera:</strong>
      <ul style="margin:4px 0 4px 18px;">
        <li>Walec obracany wokół osi na pobocznicy ($d = R$): $I = \\frac{1}{2}mR^2 + mR^2 = \\frac{3}{2}mR^2$.</li>
        <li>Cienki pręt obracany wokół osi na jego końcu ($d = \\frac{L}{2}$): $I = \\frac{1}{12}mL^2 + m\\left(\\frac{L}{2}\\right)^2 = \\frac{1}{3}mL^2$.</li>
      </ul>
    </li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-steiner-theorem.svg" alt="Twierdzenie Steinera o osiach równoległych: przesunięcie osi obrotu ze środka masy S o odległość d zwiększa moment bezwładności zgodnie ze wzorem I = I0 + md^2." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">3. II zasada dynamiki dla ruchu obrotowego</div>
  <p>Wypadkowy moment sił zewnętrznych nadaje bryle przyspieszenie kątowe wprost proporcjonalne do tego momentu:</p>
  <div style="text-align:center;margin:6px 0;">$$M_{\\text{wyp}} = I \\cdot \\varepsilon \\iff \\varepsilon = \\frac{M_{\\text{wyp}}}{I}$$</div>

  <div class="theory-subtitle">4. Warunki równowagi statycznej bryły sztywnej</div>
  <p>Aby bryła sztywna pozostawała w spoczynku, spełnione muszą być <strong>jednocześnie dwa warunki równowagi</strong>:</p>
  <div style="text-align:center;margin:6px 0;">
  $$\\begin{cases} \\sum \\vec{F} = \\vec{0} & \\text{(I warunek: brak ruchu postępowego – wypadkowa sił równa zero)} \\\\ \\sum M = 0 & \\text{(II warunek: brak obrotu – suma momentów sił względem dowolnego punktu równa zero)} \\end{cases}$$
  </div>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-beam-equilibrium.png" alt="Warunki równowagi belki na dwóch podporach: równowaga sił R_A + R_B = Q oraz równowaga momentów względem podpory A: Q * (L/2) = R_B * L." loading="eager" decoding="async">
</figure>
</div>`;

sub1.theory = updatedTheorySub2;

fs.writeFileSync(dataCoursesPath, 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n', 'utf8');
console.log('Successfully updated Topic 2 description and added both SVG diagrams!');

