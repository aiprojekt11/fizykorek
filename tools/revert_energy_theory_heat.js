const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const sub = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-energie-zachowanie');

const theoryWithHeat = `<div class="theory-section">
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

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Kulka toczy się bez tarcia z góry na dół: na szczycie ma maksymalną energię potencjalną (Ep), a na dole cała ta energia zamienia się w energię kinetyczną (Ek). Suma obu energii w każdym punkcie jest taka sama.</p>
  <div class="theory-placeholder-caption">Bez oporów ruchu: <strong>energia potencjalna zamienia się w kinetyczną</strong>, a całkowita energia mechaniczna nie ulega zmianie.</div>
</div>

  <div class="theory-subtitle">3. Bilans energii z uwzględnieniem sił oporu i tarcia</div>
  <p>Gdy w układzie występuje tarcie lub opór powietrza, siły te wykonują pracę ujemną ($W_T < 0$), zmniejszając energię mechaniczną układu i zamieniając ją w energię wewnętrzną (ciepło $Q$):</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{pocz}} + W_T = E_{\\text{mech},\\text{końc}} \\iff E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + |W_T|$$</div>
  <p>gdzie wydzielone ciepło to $|W_T| = T \\cdot s = Q$.</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Klocek porusza się w prawo, tarcie działa w lewo, a część energii mechanicznej zamienia się w ciepło.</p>
  <div class="theory-placeholder-caption">Przy tarciu maleje energia mechaniczna, lecz całkowita energia układu nadal jest zachowana — pojawia się <strong>energia wewnętrzna</strong>.</div>
</div>
</div>`;

sub.theory = theoryWithHeat;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully reverted point 3 to the heat / internal energy formulation!');
