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

sub3.formulaCheat = "E_{k,\\text{obr}} = \\frac{1}{2}I\\omega^2, \\quad E_k = \\frac{1}{2}mv^2 + \\frac{1}{2}I\\omega^2, \\quad mgh = E_k, \\quad W = M\\Delta\\alpha, \\quad P = M\\omega";
sub3.desc = "Energia kinetyczna obrotu i toczenia bez poślizgu, zasada zachowania energii na równi pochyłej oraz praca i moc w ruchu obrotowym.";

const simpleTheorySub3 = `<div class="theory-section">
  <div class="theory-subtitle">1. Energia kinetyczna ruchu obrotowego ($E_{k,\\text{obr}}$)</div>
  <p>Bryła sztywna o momencie bezwładności $I$ obracająca się z prędkością kątową $\\omega$ posiada energię kinetyczną obrotu:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{k,\\text{obr}} = \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li>Jest to bezpośredni odpowiednik energii kinetycznej z ruchu postępowego $E_k = \\frac{1}{2}mv^2$ (masę $m$ zastępuje moment bezwładności $I$, a prędkość liniową $v$ – prędkość kątowa $\\omega$).</li>
    <li>Jednostką energii w układzie SI jest dżul $[1\\text{ J}]$.</li>
  </ul>

  <div class="theory-subtitle">2. Całkowita energia kinetyczna w toczeniu bez poślizgu</div>
  <p>Ciało toczące się bez poślizgu wykonuje jednocześnie ruch postępowy i obrotowy. Jego całkowita energia kinetyczna jest sumą obu tych energii:</p>
  <div style="text-align:center;margin:6px 0;">$$E_k = E_{k,\\text{post}} + E_{k,\\text{obr}} = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li><strong>Warunek braku poślizgu:</strong> prędkość środka masy i prędkość kątową wiąże zależność:
    <div style="text-align:center;margin:4px 0;">$$v = \\omega R \\iff \\omega = \\frac{v}{R}$$</div></li>
    <li>W zadaniach w miejsce $I$ wstawiamy wzór z karty wzorów dla danej bryły, a za $\\omega$ podstawiamy $\\frac{v}{R}$.</li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-rolling-energy.svg" alt="Całkowita energia kinetyczna w toczeniu bez poślizgu: suma energii ruchu postępowego i obrotowego." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">3. Zasada Zachowania Energii na równi pochyłej</div>
  <p>Gdy bryła stacza się bez poślizgu ze spoczynku z wysokości $h$, początkowa energia potencjalna grawitacji zamienia się w całkowitą energię kinetyczną:</p>
  <div style="text-align:center;margin:6px 0;">$$mgh = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$$</div>
  <ul class="theory-list">
    <li><strong>Rola tarcia statycznego:</strong> siła tarcia statycznego nie wykonuje pracy ($W_T = 0$), ponieważ punkt styku bryły z podłożem w każdej chwili chwilowo spoczywa. Tarcie wymusza jedynie ruch obrotowy – całkowita energia mechaniczna jest zachowana.</li>
    <li><strong>Wniosek:</strong> ponieważ część energii trafia w ruch obrotowy, tocząca się bryła osiąga na dole równi mniejszą prędkość liniową niż ciało zsuwające się bez tarcia.</li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/rigid/rigid-incline-race.svg" alt="Staczanie się brył z równi pochyłej." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">4. Praca i moc w ruchu obrotowym</div>
  <ul class="theory-list">
    <li><strong>Praca momentu siły ($W$):</strong> praca wykonana przez stały moment siły $M$ przy obrocie o kąt $\\Delta\\alpha$ (w radianach):
    <div style="text-align:center;margin:4px 0;">$$W = M \\cdot \\Delta\\alpha$$</div></li>
    <li><strong>Moc w ruchu obrotowym ($P$):</strong>
    <div style="text-align:center;margin:4px 0;">$$P = M \\cdot \\omega$$</div>
    (odpowiednik wzoru $P = F \\cdot v$ z ruchu postępowego).</li>
  </ul>
</div>`;

sub3.theory = simpleTheorySub3;

fs.writeFileSync(dataCoursesPath, 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n', 'utf8');
console.log('Successfully updated Topic 3 theory with double backslashes for TeX!');
