const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const sub = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-energie-zachowanie');

const newTheory = `<div class="theory-section">
  <div class="theory-subtitle">1. Czym jest energia i jej podstawowe formy mechaniczne</div>
  <p><strong>Energia</strong> to skalarna wielkość fizyczna opisująca zdolność układu lub ciała do wykonania pracy. W mechanice klasycznej energię mechaniczną dzielimy na dwie główne formy:</p>
  <ul class="theory-list">
    <li><strong>Energia kinetyczna ($E_k$):</strong> energia związana z ruchem ciała o masie $m$ poruszającego się z prędkością o wartości $v$:
    <div style="text-align:center;margin:6px 0;">$$E_k = \\frac{m v^2}{2}$$</div>
    Zauważ, że energia kinetyczna zależy od <em>kwadratu</em> prędkości – dwukrotny wzrost szybkości oznacza 4-krotny wzrost energii kinetycznej.</li>
    <li><strong>Energia potencjalna grawitacji ($E_p$):</strong> energia wynikająca z wzajemnego oddziaływania grawitacyjnego ciała z Ziemią i jego położenia na wysokości $h$ względem wybranego poziomu odniesienia:
    <div style="text-align:center;margin:6px 0;">$$E_p = mgh$$</div>
    <em>Uwaga:</em> Wartość $E_p$ zależy od wyboru poziomu zerowego ($h = 0$), ale fizyczne znaczenie ma zawsze <strong>zmiana</strong> energii potencjalnej $\\Delta E_p$.</li>
    <li><strong>Energia potencjalna sprężystości ($E_s$):</strong> energia zmagazynowana w sprężyście odkształconym ciele (np. sprężynie o współczynniku sprężystości $k$) przy odkształceniu (rozciągnięciu lub ściśnięciu) o $x$:
    <div style="text-align:center;margin:6px 0;">$$E_s = \\frac{1}{2} k x^2$$</div></li>
  </ul>

  <div class="theory-subtitle">2. Całkowita energia mechaniczna i siły zachowawcze</div>
  <p><strong>Całkowita energia mechaniczna ($E_{\\text{mech}}$)</strong> układu to suma jego energii kinetycznej i potencjalnej:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech}} = E_k + E_p$$</div>
  <p>W fizyce siły dzielimy na dwie fundamentalne grupy ze względu na sposób wykonywania pracy:</p>
  <ul class="theory-list">
    <li><strong>Siły zachowawcze (potencjalne):</strong> siły, których praca zależy wyłącznie od położenia początkowego i końcowego ciała, a nie zależy od kształtu toru ruchu (np. grawitacja, siła sprężystości). Praca siły zachowawczej po dowolnym torze zamkniętym wynosi zero. Każdej sile zachowawczej można przypisać odpowiadającą jej energię potencjalną.</li>
    <li><strong>Siły niezachowawcze (dysypatywne):</strong> siły, których praca zależy od przebytej drogi (np. siła tarcia, opory ośrodka). Powodują one rozpraszanie (dysypację) energii mechanicznej.</li>
  </ul>

  <div class="theory-subtitle">3. Zasada Zachowania Energii Mechanicznej</div>
  <p><strong>Zasada Zachowania Energii Mechanicznej:</strong> Jeżeli w układzie izolowanym na ciała działają wyłącznie siły zachowawcze (lub praca sił zewnętrznych i niezachowawczych wynosi zero), całkowita energia mechaniczna układu pozostaje stała w czasie:</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech}} = \\text{const} \\iff E_{k1} + E_{p1} = E_{k2} + E_{p2}$$</div>
  <p>Oznacza to, że energia nie może powstać z niczego ani zniknąć – może jedynie <strong>przekształcać się</strong> z jednej formy w drugą (np. energia potencjalna zamienia się w kinetyczną i odwrotnie).</p>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Wykres lub schemat przedstawiający wzajemną przemianę energii: spadek energii potencjalnej Ep kosztem wzrostu energii kinetycznej Ek, przy stałej sumie całkowitej energii mechanicznej Emech = const.</p>
  <div class="theory-placeholder-caption">W układzie zachowawczym całkowita energia mechaniczna jest stała: <strong>ubytek jednej formy energii równa się przyrostowi drugiej</strong> (ΔEk = -ΔEp).</div>
</div>

  <div class="theory-subtitle">4. Bilans energii przy obecności sił oporu i tarcia (I zasada termodynamiki w mechanice)</div>
  <p>Gdy na ciała działają siły niezachowawcze (tarcie, opór powietrza), wykonują one pracę przeciwko ruchowi ($W_{\\text{op}} < 0$). W takim przypadku energia mechaniczna <strong>nie jest zachowana</strong> – część energii mechanicznej ulega bezpowrotnej zamianie w energię wewnętrzną układu i otoczenia (wydziela się ciepło $Q$):</p>
  <div style="text-align:center;margin:6px 0;">$$E_{\\text{mech},\\text{końc}} - E_{\\text{mech},\\text{pocz}} = W_{\\text{niezach}} \\iff E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}} + Q$$</div>
  <ul class="theory-list">
    <li>Ilość energii rozproszonej na ciepło jest równa bezwzględnej wartości pracy sił tarcia i oporów: $Q = |W_T| = T \\cdot s$.</li>
    <li><strong>Ogólna Zasada Zachowania Energii:</strong> chociaż maleje energia <em>mechaniczna</em>, to <strong>całkowita energia</strong> (mechaniczna + wewnętrzna) całego układu wraz z otoczeniem jest zawsze ściśle zachowana.</li>
  </ul>

<div class="theory-placeholder">
  <div class="theory-placeholder-title">Opis schematu (miejsce na grafikę)</div>
  <p class="theory-placeholder-desc">Schemat bilansu energii: energia mechaniczna początkowa równa się energii mechanicznej końcowej powiększonej o wydzielone ciepło (rozproszoną energię wewnętrzną Q).</p>
  <div class="theory-placeholder-caption">Siły tarcia rozpraszają energię mechaniczną w ciepło: <strong>Emech,pocz = Emech,końc + Q</strong>.</div>
</div>
</div>`;

sub.theory = newTheory;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully updated theory for sub-energie-zachowanie!');
