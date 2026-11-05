const fs = require('fs');
const path = require('path');
const vm = require('vm');

const dataCoursesPath = path.join(__dirname, '..', 'js', 'data-courses.js');
const rawContent = fs.readFileSync(dataCoursesPath, 'utf8');

const sandbox = { window: {} };
vm.runInNewContext(rawContent, sandbox);
const courses = sandbox.window.FIZYKOREK_COURSES;

const bryla = courses['matura-fizyka'].sections.find(s => s.id === 'm-bryla');
const sub3 = bryla.subchapters.find(s => s.id === 'sub-bryla-energia');

// 1. Zaktualizuj formulaCheat i desc
sub3.formulaCheat = "E_{k,\\text{obr}} = \\frac{1}{2}I\\omega^2, \\quad E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2, \\quad mgh = E_{k,\\text{końc}}, \\quad W = M\\Delta\\alpha, \\quad P = M\\omega";
sub3.desc = "Energia kinetyczna obrotu i toczenia bez poślizgu, bilans energii na równi pochyłej, staczanie brył, rola tarcia statycznego, praca i moc.";

// 2. Nowa treść teorii w stylu maturalnym
const newTheorySub3 = `<div class="theory-section">
  <div class="theory-subtitle">1. Energia kinetyczna ruchu obrotowego ($E_{k,\\text{obr}}$)</div>
  <p>Bryła sztywna o momencie bezwładności $I$ obracająca się wokół ustalonej osi z prędkością kątową $\\omega$ posiada energię kinetyczną obrotu:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{k,\\text{obr}} = \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li><strong>Odpowiednik ruchu postępowego:</strong> wzór ma identyczną strukturę jak wzór na energię ruchu postępowego $E_{k,\\text{post}} = \\frac{1}{2}mv^2$, gdzie masę $m$ zastępuje moment bezwładności $I$, a prędkość liniową $v$ – prędkość kątowa $\\omega$.</li>
    <li><strong>Jednostka w układzie SI:</strong> dżul $[1\\text{ J} = 1\\text{ kg}\\cdot\\text{m}^2/\\text{s}^2 = 1\\text{ N}\\cdot\\text{m}]$.</li>
  </ul>

  <div class="theory-subtitle">2. Całkowita energia kinetyczna w toczeniu bez poślizgu</div>
  <p>Ruch toczącego się ciała (np. koła, walca czy kuli) jest złożeniem dwóch jednoczesnych ruchów: <strong>ruchu postępowego środka masy</strong> oraz <strong>ruchu obrotowego wokół środka masy</strong>. Jego całkowita energia kinetyczna jest sumą obu tych form:</p>
  <div style="text-align:center;margin:6px 0;">$$E_k = E_{k,\\text{post}} + E_{k,\\text{obr}} = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li><strong>Warunek braku poślizgu:</strong> prędkość liniowa środka masy wiąże się z prędkością kątową zależnością $\\omega = \\frac{v}{R}$. Podstawiając to do wzoru na energię obrotu:
    <div style="text-align:center;margin:4px 0;">$$E_{k,\\text{obr}} = \\frac{1}{2} I \\left(\\frac{v}{R}\\right)^2$$</div></li>
    <li><strong>Podstawienia dla konkretnych brył z karty wzorów CKE:</strong>
      <ul style="margin:4px 0 4px 18px;">
        <li><strong>Walec pełny ($I = \\frac{1}{2}mR^2$):</strong>
        <div style="margin:3px 0;">$$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{1}{2}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2$$</div>
        Na ruch postępowy przypada $\\frac{2}{3}$ całkowitej energii (ok. $66{,}7\\%$) a na obrót $\\frac{1}{3}$ (ok. $33{,}3\\%$).</li>
        <li><strong>Kula pełna ($I = \\frac{2}{5}mR^2$):</strong>
        <div style="margin:3px 0;">$$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}\\left(\\frac{2}{5}mR^2\\right)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2 = 0{,}7 mv^2$$</div>
        Na ruch postępowy przypada $\\frac{5}{7}$ całkowitej energii (ok. $71{,}4\\%$) a na obrót $\\frac{2}{7}$ (ok. $28{,}6\\%$).</li>
        <li><strong>Obręcz cienkościenna ($I = mR^2$):</strong>
        <div style="margin:3px 0;">$$E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}(mR^2)\\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 = mv^2$$</div>
        Energia dzieli się dokładnie po połowie ($50\\%$ ruch postępowy, $50\\%$ obrót).</li>
      </ul>
    </li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-rolling-energy.svg" alt="Całkowita energia kinetyczna w toczeniu bez poślizgu: suma energii ruchu postępowego i obrotowego wraz z rozbiciem dla walca pełnego i kuli." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">3. Staczanie się brył z równi pochyłej (Zasada Zachowania Energii)</div>
  <p>Gdy bryła stacza się bez poślizgu z równi pochyłej o wysokości $h$ ze spoczynku, a opory toczenia i powietrza pomijamy, <strong>początkowa energia potencjalna grawitacji zamienia się w całkowitą energię kinetyczną</strong>:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{pocz}} = E_{\\text{końc}} \\iff mgh = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li><strong>Dlaczego tarcie statyczne nie powoduje strat energii mechanicznej?</strong> Punkt styku bryły z podłożem w każdej chwili chwilowo spoczywa ($v_{\\text{styk}} = 0$). Siła tarcia statycznego nie wykonuje więc pracy ($W_T = 0$), a jedynie umożliwia obrót, przenosząc energię między ruchem postępowym a obrotowym. Całkowita energia mechaniczna pozostaje zachowana!</li>
    <li><strong>Wyprowadzenie prędkości na dole równi dla konkretnych brył:</strong>
      <ul style="margin:4px 0 4px 18px;">
        <li><strong>Kula pełna:</strong> $mgh = \\frac{7}{10}mv^2 \\implies v = \\sqrt{\\frac{10}{7}gh} \\approx 1{,}20\\sqrt{gh}$</li>
        <li><strong>Walec pełny:</strong> $mgh = \\frac{3}{4}mv^2 \\implies v = \\sqrt{\\frac{4}{3}gh} \\approx 1{,}15\\sqrt{gh}$</li>
        <li><strong>Obręcz cienkościenna:</strong> $mgh = mv^2 \\implies v = \\sqrt{gh} = 1{,}00\\sqrt{gh}$</li>
      </ul>
    </li>
  </ul>

  <div class="theory-callout-rule">
    <strong>Wyścig brył na równi pochyłej:</strong>
    <p>Prędkość końcowa bryły na dole równi <strong>nie zależy od jej masy $m$ ani od promienia $R$</strong> (skracają się w równaniu bilansu energii). Zależy wyłącznie od tego, jak dużą część masy bryła ma skupioną blisko osi obrotu:</p>
    <ul class="theory-list" style="margin-top:6px;">
      <li><strong>1. miejsce – Kula pełna ($v = \\sqrt{\\frac{10}{7}gh}$):</strong> najmniejszy ułamek energii trafia w obrót, dlatego kula dociera na dół pierwsza!</li>
      <li><strong>2. miejsce – Walec pełny ($v = \\sqrt{\\frac{4}{3}gh}$):</strong> dociera na dół jako drugi.</li>
      <li><strong>3. miejsce – Obręcz cienkościenna ($v = \\sqrt{gh}$):</strong> cała masa leży na skraju, więc aż połowa energii musi pójść w obrót – dociera na dół ostatnia.</li>
    </ul>
  </div>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-incline-race.svg" alt="Wyścig brył staczających się z równi pochyłej: kolejność na dole równi – kula pełna, walec pełny, obręcz cienkościenna." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">4. Praca i moc w ruchu obrotowym</div>
  <ul class="theory-list">
    <li><strong>Praca stałego momentu siły ($W$):</strong> gdy moment siły $M$ obraca bryłę o kąt $\\Delta\\alpha$:
    <div style="text-align:center;margin:4px 0;">$$W = M \\cdot \\Delta\\alpha$$</div>
    gdzie: $M$ – moment siły $[\\text{N}\\cdot\\text{m}]$, $\\Delta\\alpha$ – kąt obrotu w radianach $[\\text{rad}]$.</li>
    <li><strong>Twierdzenie o pracy i energii w ruchu obrotowym:</strong> praca wykonana przez wypadkowy moment sił jest równa zmianie energii kinetycznej obrotowej bryły:
    <div style="text-align:center;margin:4px 0;">$$W_{\\text{wyp}} = \\Delta E_{k,\\text{obr}} = \\frac{1}{2} I \\omega_k^2 - \\frac{1}{2} I \\omega_0^2$$</div></li>
    <li><strong>Moc w ruchu obrotowym ($P$):</strong> szybkość wykonywania pracy przez moment siły:
    <div style="text-align:center;margin:4px 0;">$$P = \\frac{W}{t} = M \\cdot \\left(\\frac{\\Delta\\alpha}{t}\\right) = M \\cdot \\omega$$</div>
    gdzie: $P$ – moc $[\\text{W}]$, $\\omega$ – prędkość kątowa $[\\text{rad/s}]$. Odpowiednik wzoru $P = F \\cdot v$ z ruchu postępowego.</li>
  </ul>
</div>`;

sub3.theory = newTheorySub3;

// 3. Sprawdź też pułapki w zadaniach 27 i 32, aby usunąć tam zwrot "współczynnik kształtu"
const t27 = sub3.tasks.find(t => t.id === 'b-zad-27');
if (t27 && t27.solution && t27.solution.trap) {
  t27.solution.trap = "Stosunek ten dla toczącej się kuli wynosi dokładnie 2/5 i wynika wprost z podstawienia wzoru na moment bezwładności do ilorazu energii.";
}

const t32 = sub3.tasks.find(t => t.id === 'b-zad-32');
if (t32 && t32.solution) {
  if (t32.solution.steps && t32.solution.steps[0]) {
    t32.solution.steps[0].title = "Wyznaczenie prędkości końcowej z bilansu energii";
    t32.solution.steps[0].content = "Z zasady zachowania energii początkowa energia potencjalna zamienia się w sumę energii kinetycznej postępowej i obrotowej:\\n$$mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2$$\\nPodstawiając warunek toczenia bez poślizgu $\\omega = \\frac{v}{R}$ dla każdej z brył:\\n1. Kula pełna ($I = \\frac{2}{5}mR^2$): $mgh = \\frac{1}{2}mv^2 + \\frac{1}{5}mv^2 = \\frac{7}{10}mv^2 \\implies v_k = \\sqrt{\\frac{10}{7}gh} \\approx 1{,}20\\sqrt{gh}$\\n2. Walec pełny ($I = \\frac{1}{2}mR^2$): $mgh = \\frac{1}{2}mv^2 + \\frac{1}{4}mv^2 = \\frac{3}{4}mv^2 \\implies v_w = \\sqrt{\\frac{4}{3}gh} \\approx 1{,}15\\sqrt{gh}$\\n3. Pierścień ($I = mR^2$): $mgh = \\frac{1}{2}mv^2 + \\frac{1}{2}mv^2 = mv^2 \\implies v_p = \\sqrt{gh} = 1{,}00\\sqrt{gh}$\\nZatem $v_k > v_w > v_p$. Kula dociera na dół najszybciej, a pierścień najwolniej.";
  }
  if (t32.solution.trap) {
    t32.solution.trap = "Masa $m$ oraz promień $R$ skracają się w równaniu zachowania energii – o prędkości końcowej decyduje to, jak duża część energii zostaje związana w ruchu obrotowym danej bryły.";
  }
}

fs.writeFileSync(dataCoursesPath, 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n', 'utf8');
console.log('Successfully updated Topic 3 theory, formulaCheat, and task explanations!');

