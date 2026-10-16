const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const sub = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-energie-zachowanie');

const clearTheory = `<div class="theory-section">
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
  <p>Energia nie znika, lecz zamienia się jedna w drugą – ile energii potencjalnej ubywa, dokładnie tyle energii kinetycznej przybywa ($\Delta E_k = -\Delta E_p$).</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Kulka toczy się bez tarcia z góry na dół: na szczycie ma maksymalną energię potencjalną (Ep), a na dole cała ta energia zamienia się w energię kinetyczną (Ek). Suma obu energii w każdym punkcie jest taka sama.</p>
  <div class="theory-placeholder-caption">Bez oporów ruchu: <strong>energia potencjalna zamienia się w kinetyczną</strong>, a całkowita energia mechaniczna nie ulega zmianie.</div>
</div>

  <div class="theory-subtitle">3. Bilans energii z uwzględnieniem oporów ruchu i tarcia</div>
  <p>Gdy na ciało działa tarcie lub opór powietrza, siły te hamują ruch i zabierają część energii mechanicznej. Wykonana przez nie praca $W_{\\text{op}}$ jest ujemna, więc energia mechaniczna na końcu jest mniejsza niż na początku:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{pocz}} - |W_{\\text{op}}| = E_{\\text{mech},\\text{końc}} \\iff E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + |W_{\\text{op}}|$$</div>
  <p>gdzie praca siły tarcia na drodze $s$ wynosi: $|W_T| = T \\cdot s$.</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Klocek ślizga się po szorstkiej powierzchni: porusza się w prawo z przemieszczeniem s, a siła tarcia T działa w lewo (przeciwnie do ruchu). Strzałka pokazuje 'ubytek energii' równy pracy tarcia W_T = T · s.</p>
  <div class="theory-placeholder-caption">Siły tarcia 'zabierają' energię mechaniczną: <strong>energia początkowa = energia końcowa + praca pokonania oporów (|W_T|)</strong>.</div>
</div>
</div>`;

sub.theory = clearTheory;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully made descriptions super clear, concrete, and intuitive!');
