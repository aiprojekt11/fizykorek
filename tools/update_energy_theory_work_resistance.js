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

  <div class="theory-subtitle">3. Bilans energii z uwzględnieniem pracy sił oporu i tarcia</div>
  <p>Gdy na ciało działają siły oporu lub tarcia, wykonują one pracę ujemną ($W_{\\text{op}} < 0$), co zmniejsza energię mechaniczną układu:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{pocz}} + W_{\\text{op}} = E_{\\text{mech},\\text{końc}} \\iff E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + |W_{\\text{op}}|$$</div>
  <p>gdzie praca siły tarcia wynosi: $|W_T| = T \\cdot s$.</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Schemat bilansu energii z siłami oporu: energia mechaniczna początkowa jest równa sumie energii mechanicznej końcowej oraz bezwzględnej wartości pracy sił oporu |W_op|.</p>
  <div class="theory-placeholder-caption">Praca sił oporu zmniejsza energię mechaniczną: <strong>Emech,pocz = Emech,końc + |W_op|</strong>.</div>
</div>
</div>`;

sub.theory = conciseTheory;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully updated point 3 to focus strictly on work of resistive forces (W_op / W_T) without heat!');
