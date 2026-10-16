const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const sub = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-energie-zachowanie');

const conciseTheory = `<div class="theory-section">
  <div class="theory-subtitle">1. Formy energii mechanicznej</div>
  <ul class="theory-list">
    <li><strong>Energia kinetyczna ($E_k$):</strong> energia ruchu ciała o masie $m$ z prędkością $v$:
    <div style="text-align:center;margin:4px 0;">$$E_k = \\frac{m v^2}{2}$$</div></li>
    <li><strong>Energia potencjalna grawitacji ($E_p$):</strong> energia ciała na wysokości $h$ względem poziomu odniesienia:
    <div style="text-align:center;margin:4px 0;">$$E_p = mgh$$</div></li>
    <li><strong>Energia potencjalna sprężystości ($E_s$):</strong> energia sprężyny o współczynniku $k$ odkształconej o $x$:
    <div style="text-align:center;margin:4px 0;">$$E_s = \\frac{1}{2} k x^2$$</div></li>
  </ul>

  <div class="theory-subtitle">2. Zasada Zachowania Energii Mechanicznej</div>
  <p>Gdy na ciała działają wyłącznie <strong>siły zachowawcze</strong> (grawitacja, siła sprężystości), całkowita energia mechaniczna układu jest stała:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech}} = E_k + E_p = \\text{const} \\iff E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</div>
  <p>Ubytek jednej formy energii jest równy przyrostowi drugiej: $\\Delta E_k = -\\Delta E_p$.</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Schemat przemiany energii mechanicznej: spadek energii potencjalnej Ep kosztem wzrostu energii kinetycznej Ek, przy stałej sumie Emech = const.</p>
  <div class="theory-placeholder-caption">W układzie zachowawczym suma energii pozostaje stała: <strong>E_k + E_p = const</strong>.</div>
</div>

  <div class="theory-subtitle">3. Bilans energii z uwzględnieniem tarcia i oporów</div>
  <p>Siły niezachowawcze (tarcie, opór powietrza) rozpraszają energię mechaniczną, zamieniając ją w ciepło ($Q = |W_T|$):</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + Q$$</div>
  <p>Chociaż maleje energia mechaniczna, <strong>całkowita energia układu wraz z otoczeniem jest zawsze zachowana</strong>.</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Schemat bilansu energii z tarciem: energia mechaniczna początkowa przechodzi w energię mechaniczną końcową oraz wydzielone ciepło Q.</p>
  <div class="theory-placeholder-caption">Siły tarcia rozpraszają część energii na ciepło: <strong>Emech,pocz = Emech,końc + Q</strong>.</div>
</div>
</div>`;

sub.theory = conciseTheory;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully made theory for sub-energie-zachowanie concise and clean!');
