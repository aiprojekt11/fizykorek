const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const sub = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-praca-moc');

console.log('Original sub-praca-moc theory found');

const newTheory = `<div class="theory-section">
  <div class="theory-subtitle">1. Praca jako miara przekazywania energii ($W$)</div>
  <p>Praca siły stałej $\\vec{F}$ na prostoliniowym przemieszczeniu $\\vec{s}$ jest iloczynem skalarnym:</p>
  <div style="text-align:center;margin:6px 0;">$$W = \\vec{F} \\cdot \\vec{s} = F \\cdot s \\cdot \\cos\\alpha$$</div>
  <ul class="theory-list">
    <li><strong>$F$</strong> – wartość siły $[\\text{N}]$, <strong>$s$</strong> – przemieszczenie $[\\text{m}]$, <strong>$\\alpha$</strong> – kąt między wektorem siły a wektorem przemieszczenia.</li>
    <li>Jednostka pracy i energii w układzie SI: $1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = 1\\text{ kg} \\cdot \\text{m}^2/\\text{s}^2$.</li>
    <li><strong>Twierdzenie o pracy i energii:</strong> praca siły wypadkowej jest równa zmianie energii kinetycznej ciała: $W_{\\text{wyp}} = \\Delta E_k$.</li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/energy/work-angle-custom.png" alt="Klocek przesuwa się w prawo, a siła F działa pod kątem alfa. Zaznaczono składową F cos alfa równoległą do przemieszczenia." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">2. Znaki pracy i siły bez pracy (kluczowe na maturze)</div>
  <ul class="theory-list">
    <li><strong>Praca dodatnia ($W > 0$):</strong> gdy $\\alpha < 90^\\circ$ ($\\cos\\alpha > 0$) – siła wspomaga ruch, zwiększając energię kinetyczną.</li>
    <li><strong>Praca równa zero ($W = 0$):</strong> gdy siła działa <u>prostopadle</u> do kierunku ruchu ($\\alpha = 90^\\circ \\implies \\cos 90^\\circ = 0$).<br>
    <em>Ważne:</em> Ciężar ciała ($W_g = 0$) oraz siła reakcji podłoża ($W_N = 0$) <strong>nie wykonują pracy</strong> przy poziomym przemieszczeniu! Podobnie siła dośrodkowa w ruchu po okręgu nie wykonuje pracy ($W_{doś} = 0$).</li>
    <li><strong>Praca ujemna ($W < 0$):</strong> gdy $\\alpha > 90^\\circ$ ($\\cos\\alpha < 0$) – siła hamuje ruch, odbierając ciału energię mechaniczną.<br>
    Dla siły tarcia zwrot jest zawsze przeciwny do przemieszczenia ($\\alpha = 180^\\circ \\implies \\cos 180^\\circ = -1$):
    <div style="text-align:center;margin:4px 0;">$$W_T = -T \\cdot s = -\\mu N s$$</div></li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/energy/work-signs-custom.png" alt="Trzy schematy: siła zgodna z ruchem wykonuje pracę dodatnią, prostopadła pracę zerową, a przeciwna pracę ujemną." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">3. Interpretacja geometryczna – pole pod wykresem $F(s)$</div>
  <p>Dla dowolnej siły (stałej lub zmiennej) praca jest równa <strong>polu powierzchni pod wykresem $F(s)$</strong>:</p>
  <ul class="theory-list">
    <li>Dla siły stałej: pole prostokąta $W = F \\cdot s$.</li>
    <li>Dla siły sprężystej $F(x) = kx$: pole trójkąta pod wykresem $W = \\frac{1}{2} k x^2$ (równa energii potencjalnej sprężystości).</li>
  </ul>

<figure class="theory-figure">
  <img class="theory-diagram" src="img/theory/energy/work-graph-custom.png" alt="Wykresy siły od drogi dla siły stałej oraz siły sprężystości (zmiennej)." loading="eager" decoding="async">
</figure>

  <div class="theory-subtitle">4. Moc ($P$) i sprawność urządzeń ($\\eta$)</div>
  <ul class="theory-list">
    <li><strong>Moc średnia:</strong> tempo przekazywania energii: $P = \\frac{W}{t}$ $[\\text{W} = \\text{J}/\\text{s}]$.</li>
    <li><strong>Moc przy stałej prędkości ($v = \\text{const}$):</strong> $P = F \\cdot v$. Gdy pojazd porusza się ruchem jednostajnym, siła napędowa silnika równoważy opory ruchu ($F_{\\text{napęd}} = F_{\\text{op}}$), więc:
    <div style="text-align:center;margin:4px 0;">$$P = F_{\\text{op}} \\cdot v$$</div></li>
    <li><strong>Sprawność urządzenia:</strong> stosunek energii użytecznej do energii całkowitej:
    <div style="text-align:center;margin:4px 0;">$$\\eta = \\frac{W_u}{W_c} = \\frac{P_u}{P_c} \\le 1 \\quad (\\text{lub } \\eta \\cdot 100\\%)$$</div>
    Dla dźwigu podnoszącego masę $m$ na wysokość $h$: $W_u = mgh$, a $W_c = P_{\\text{silnika}} \\cdot t$.</li>
  </ul>
</div>`;

sub.theory = newTheory;

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully updated js/data-courses.js with the 3 images and removed 4th placeholder!');
