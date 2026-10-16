const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const sub = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-energie-zachowanie');

const newTheory = `<div class="theory-section">
  <div class="theory-subtitle">1. Formy energii mechanicznej</div>
  <ul class="theory-list">
    <li><strong>Energia kinetyczna ($E_k$):</strong> energia ciała w ruchu o masie $m$ i szybkości $v$:
    <div style="text-align:center;margin:4px 0;">$$E_k = \\frac{m v^2}{2}$$</div></li>
    <li><strong>Energia potencjalna grawitacji ($E_p$):</strong> energia ciała uniesionego na wysokość $h$:
    <div style="text-align:center;margin:4px 0;">$$E_p = mgh$$</div></li>
    <li><strong>Energia potencjalna sprężystości ($E_s$):</strong> energia sprężyny odkształconej o $x$:
    <div style="text-align:center;margin:4px 0;">$$E_s = \\frac{1}{2} k x^2$$</div></li>
  </ul>

  <div class="theory-subtitle">2. Zasada Zachowania Energii Mechanicznej</div>
  <p>Gdy w układzie nie ma oporów ani tarcia, suma energii kinetycznej i potencjalnej jest stała w każdej chwili ruchu:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech}} = E_k + E_p = \\text{const} \\iff E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</div>
  <p>Energia nie znika, lecz zamienia się jedna w drugą – ile energii potencjalnej ubywa, dokładnie tyle energii kinetycznej przybywa ($\\Delta E_k = -\\Delta E_p$).</p>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/energy/energy-conservation-custom.png" alt="Zasada zachowania energii mechanicznej: Ek + Ep = const. Ciało zsuwa się bez tarcia z góry na dół, zamieniając energię potencjalną w kinetyczną." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">3. Bilans energii z uwzględnieniem tarcia i oporów</div>
  <p>Siły niezachowawcze (tarcie, opór powietrza) rozpraszają energię mechaniczną, zamieniając ją w ciepło ($Q = |W_T|$):</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + Q$$</div>
  <p>Chociaż maleje energia mechaniczna, całkowita energia układu wraz z otoczeniem jest zawsze zachowana.</p>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/energy/friction-heat-custom.png" alt="Bilans energii z uwzględnieniem tarcia i oporów: Emech,pocz = Emech,końc + Q. Energia mechaniczna początkowa przechodzi w energię mechaniczną końcową oraz wydzielone ciepło Q." loading="eager" decoding="async">
</figure>
</div>`;

sub.theory = newTheory;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully updated sub-energie-zachowanie with the 2 new images and requested text!');
