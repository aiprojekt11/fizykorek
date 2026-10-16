const fs = require('fs');
const path = require('path');

// Read existing tasks
const fileData = fs.readFileSync('js/data-courses.js', 'utf8');
const headerMatch = fileData.match(/^(\/\*\*[\s\S]*?\*\/\s*window\.FIZYKOREK_COURSES\s*=\s*)/);
const headerText = headerMatch[1];
const jsonText = fileData.slice(headerText.length).replace(/;\s*$/, '');
const data = JSON.parse(jsonText);

let existingTasks = [];
data['matura-fizyka'].sections.forEach(sec => {
  if (sec.subchapters) {
    sec.subchapters.forEach(sub => {
      if (sub.id === 'sub-matura-cke') {
        existingTasks = sub.tasks || [];
      }
    });
  }
});

console.log(`Found ${existingTasks.length} existing tasks in sub-matura-cke.`);

// New official CKE tasks to add
const newCkeTasks = [
  // 1. 2025 Czerwiec (Termin dodatkowy)
  {
    id: 'matura-cke-2025-czerwiec-zad-1',
    number: 202506,
    title: 'Zadanie maturalne CKE (2025 czerwiec)',
    year: '2025 czerwiec',
    difficulty: 3,
    source: 'Matura CKE 2025 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2025-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch prostoliniowy', 'Równania ruchu', 'Kinematyka'],
    image: 'img/cke_2025_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ciało $\\mathcal{C}$ porusza się wzdłuż osi $x$. Zależność współrzędnej położenia $x$ ciała $\\mathcal{C}$ od czasu $t$ opisują równania:</p>
<p style="text-align:center;">
$x = x(t) = \\begin{cases} 4 + 16t - 4t^2 & \\text{dla } 0\\text{ s} \\le t \\le 3\\text{ s} \\\\ 40 - 8t & \\text{dla } 3\\text{ s} < t \\le 5\\text{ s} \\end{cases}$
</p>
<p>Wszystkie współczynniki w tych równaniach wyrażone są domyślnie przy pomocy jednostek podstawowych układu SI.</p>
<p>Na wykresie 1. przedstawiono opisaną zależność $x(t)$ dla $0\\text{ s} \\le t \\le 5\\text{ s}$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2025_czerwiec_zad1_wykres1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p>Drogę przebytą przez ciało $\\mathcal{C}$ od chwili $t = 0\\text{ s}$ do chwili $t = 5\\text{ s}$ oznaczymy jako $s_C$.</p>
<p>Wektor przemieszczenia ciała $\\mathcal{C}$ od chwili $t = 0\\text{ s}$ do chwili $t = 5\\text{ s}$ oznaczymy jako $\\Delta \\vec{x}_C$.</p>
<p>Czas ruchu ciała $\\mathcal{C}$ od chwili $t = 0\\text{ s}$ do chwili $t = 5\\text{ s}$ oznaczymy jako $\\Delta t_C$.</p>
<p><strong>Dokończ zdania. Wpisz właściwe liczby w wykropkowane miejsca.</strong></p>
<ol>
<li>Droga przebyta przez ciało $\\mathcal{C}$ w czasie $\\Delta t_C$ jest równa $s_C = \\dots\\dots\\dots\\dots\\text{ m}$.</li>
<li>Wartość wektora $\\frac{\\Delta \\vec{x}_C}{\\Delta t_C}$ jest równa $\\left|\\frac{\\Delta \\vec{x}_C}{\\Delta t_C}\\right| = \\dots\\dots\\dots\\dots\\text{ m/s}$.</li>
</ol>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<p>W chwili $t = 1\\text{ s}$:</p>
<ol>
<li>wartość przyśpieszenia ciała $\\mathcal{C}$ jest równa $16\\text{ m/s}^2$. <strong>[ P / F ]</strong></li>
<li>wartość prędkości ciała $\\mathcal{C}$ jest równa $16\\text{ m/s}$. <strong>[ P / F ]</strong></li>
<li>położenie ciała $\\mathcal{C}$ ma współrzędną $16\\text{ m}$. <strong>[ P / F ]</strong></li>
</ol>

<h4>Zadanie 1.3. (0–2)</h4>
<p>Współrzędną prędkości ciała $\\mathcal{C}$ oznaczymy jako $v_x$. Dodatnia wartość $v_x$ będzie oznaczała, że zwrot wektora prędkości ciała $\\mathcal{C}$ jest zgodny ze zwrotem osi $x$, a ujemna wartość – że zwrot wektora prędkości ciała $\\mathcal{C}$ jest przeciwny do zwrotu osi $x$.</p>
<p><strong>Na wykresie 2. narysuj zależność $v_x$ od czasu $t$ dla $0\\text{ s} \\le t \\le 5\\text{ s}$.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2025_czerwiec_zad1_wykres2.png]
</div>
</div>`,
    solution: {
      intuition: 'Ruch w pierwszym etapie jest ruchem jednostajnie opóźnionym z zawróceniem ciała (wierzchołek paraboli), a w drugim ruchem jednostajnym w stronę ujemną osi x.',
      givens: '$x_1(t) = 4 + 16t - 4t^2$, $x_2(t) = 40 - 8t$',
      steps: [
        { title: 'Zadanie 1.1', content: 'W chwili $t=0: x=4\\text{ m}$. Ciało zawraca w chwili, gdy $v_x = x\'(t) = 16 - 8t = 0 \\implies t = 2\\text{ s}$. Wtedy $x(2) = 4 + 32 - 16 = 20\\text{ m}$. Od $t=0$ do $t=2$ przebyło $16\\text{ m}$. W $t=5: x(5) = 40 - 40 = 0\\text{ m}$. Od $x=20$ do $x=0$ przebyło kolejne $20\\text{ m}$. Całkowita droga $s_C = 16 + 20 = 36\\text{ m}$. Przemieszczenie $\\Delta x_C = x(5) - x(0) = 0 - 4 = -4\\text{ m}$, więc $|\\Delta x_C / \\Delta t_C| = 4/5 = 0{,}8\\text{ m/s}$.' },
        { title: 'Zadanie 1.2', content: 'Dla $t=1\\text{ s}$: $a_x = x\'\'(t) = -8\\text{ m/s}^2$ (wartość 8, a nie 16) -> F; $v_x(1) = 16 - 8(1) = 8\\text{ m/s}$ (a nie 16) -> F; $x(1) = 4 + 16 - 4 = 16\\text{ m}$ -> P. Odpowiedź: F, F, P.' },
        { title: 'Zadanie 1.3', content: 'Wykres $v_x(t)$: odcinek prostoliniowy od $(0, 16)$ przez $(2, 0)$ do $(3, -8)$, a od $t=3\\text{ s}$ do $t=5\\text{ s}$ odcinek poziomy na poziomie $v_x = -8\\text{ m/s}$.' }
      ],
      numerical: '1.1: $s_C = 36\\text{ m}$, $0{,}8\\text{ m/s}$; 1.2: F, F, P',
      answer: '1.1: 1. $36\\text{ m}$, 2. $0{,}8\\text{ m/s}$; 1.2: 1-F, 2-F, 3-P; 1.3: wykres liniowy od 16 do -8, potem stały -8.',
      trap: 'Droga to suma długości przebytych odcinków (trzeba uwzględnić zawrócenie w t=2 s), a przemieszczenie to różnica współrzędnych końcowej i początkowej.'
    }
  },

  // 2. 2024 Grudzień (Próbna CKE)
  {
    id: 'matura-cke-2024-grudzien-zad-1',
    number: 202412,
    title: 'Zadanie maturalne CKE (2024 grudzień próbna)',
    year: '2024 grudzień',
    difficulty: 3,
    source: 'Matura próbna CKE Grudzień 2024',
    link: 'https://arkusze.pl/maturalne/fizyka-2024-grudzien-probna-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch po okręgu', 'Przyspieszenie kątowe', 'Kinematyka'],
    image: 'img/cke_2024_grudzien_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>W chwili $t_0 = 0\\text{ s}$ początkowo nieruchoma, sztywna platforma w kształcie koła o środku $S$ rozpoczyna obrót dookoła osi prostopadłej do platformy i przechodzącej przez $S$. Do chwili $t_1 = 8\\text{ s}$ platforma obraca się ze stałym przyśpieszeniem kątowym $\\epsilon$ i wykonuje w tym czasie dokładnie jeden obrót. W chwili $t_1$ platforma uzyskała prędkość kątową $\\omega$. Od chwili $t_1$ platforma obraca się ze stałą prędkością kątową $\\omega$. Promień platformy wynosi $R = 4\\text{ m}$.</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p>Rysunki 1. i 2. przedstawiają platformę w czasie, gdy jej ruch obrotowy jest jednostajnie przyśpieszony. Na rysunku 1. narysowano wektor $\\vec{v}$ prędkości punktu $P$, leżącego na brzegu platformy.</p>
<p><strong>Na rysunku 2. narysuj składową styczną $\\vec{a}_s$ oraz składową dośrodkową $\\vec{a}_r$ wektora przyśpieszenia $\\vec{a}$ punktu $P$. Następnie wyznacz graficznie i narysuj wektor $\\vec{a}$. Podpisz wszystkie narysowane wektory.</strong></p>
<p><em>Uwaga! Długości składowej stycznej $a_s$ oraz składowej dośrodkowej $a_r$ wektora przyśpieszenia $a$ mogą być na rysunku umowne.</em></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2024_grudzien_zad1_rysunki.png]
</div>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<p>W chwili czasu $t = 5\\text{ s}$:</p>
<ol>
<li>wszystkie punkty platformy różne od punktu $S$ mają takie samo przyśpieszenie kątowe. <strong>[ P / F ]</strong></li>
<li>największą wartość prędkości liniowej mają punkty leżące na brzegu platformy. <strong>[ P / F ]</strong></li>
<li>wszystkie punkty platformy mają tę samą wartość przyśpieszenia dośrodkowego. <strong>[ P / F ]</strong></li>
</ol>

<h4>Zadanie 1.3. (0–3)</h4>
<p><strong>Oblicz, ile obrotów wykona platforma w czasie $\\Delta t = 60\\text{ s}$, liczonym od chwili $t_0 = 0\\text{ s}$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'W ruchu obrotowym przyspieszonym przyspieszenie całkowite jest sumą geometryczną przyspieszenia stycznego (zmieniającego wartość prędkości) i dośrodkowego (zmieniającego kierunek prędkości).',
      givens: '$t_1 = 8\\text{ s}$, $n_1 = 1$, $\\Delta t = 60\\text{ s}$, $R = 4\\text{ m}$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Wektor $\\vec{a}_s$ jest styczny do okręgu i ma zwrot zgodny z $\\vec{v}$. Wektor $\\vec{a}_r$ jest skierowany wzdłuż promienia do środka $S$. Wektor wypadkowy $\\vec{a} = \\vec{a}_s + \\vec{a}_r$ jest przekątną prostokąta utworzonego przez te wektory.' },
        { title: 'Zadanie 1.2', content: '1. P (dla bryły sztywnej $\\epsilon$ jest jednakowe dla wszystkich punktów). 2. P ($v = \\omega r$, największe na brzegu, gdzie $r=R$). 3. F ($a_r = \\omega^2 r$ zależy wprost proporcjonalnie od odległości $r$ od osi). Odpowiedź: P, P, F.' },
        { title: 'Zadanie 1.3', content: 'W czasie $t_1 = 8\\text{ s}$: $\\Delta \\alpha_1 = 2\\pi$ (1 obrót), $\\Delta \\alpha_1 = \\frac{1}{2}\\epsilon t_1^2 \\implies \\epsilon = \\frac{4\\pi}{64} = \\frac{\\pi}{16}\\text{ rad/s}^2$. Prędkość kątowa w chwili $t_1$: $\\omega = \\epsilon t_1 = \\frac{\\pi}{2}\\text{ rad/s}$. W czasie pozostałych $\\Delta t\' = 60 - 8 = 52\\text{ s}$ ruch jest jednostajny: $\\Delta \\alpha_2 = \\omega \\cdot \\Delta t\' = \\frac{\\pi}{2} \\cdot 52 = 26\\pi\\text{ rad}$. Liczba obrotów w drugim etapie: $n_2 = \\frac{26\\pi}{2\\pi} = 13$. Łączna liczba obrotów: $n = 1 + 13 = 14$ obrotów.' }
      ],
      numerical: '1.2: P, P, F; 1.3: $n = 14$ obrotów',
      answer: '1.2: P, P, F; 1.3: $n = 14$ obrotów.',
      trap: 'Pamiętaj, że w czasie pierwszych 8 sekund ruch był przyspieszony (1 obrót), a przez pozostałe 52 sekundy jednostajny (13 obrotów).'
    }
  },

  // 3. 2024 Czerwiec (Termin dodatkowy)
  {
    id: 'matura-cke-2024-czerwiec-zad-1',
    number: 202406,
    title: 'Zadanie maturalne CKE (2024 czerwiec)',
    year: '2024 czerwiec',
    difficulty: 3,
    source: 'Matura CKE 2024 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2024-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch po okręgu', 'Droga hamowania', 'Kinematyka'],
    image: 'img/cke_2024_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Deseczka z wycięciami, w których umieszczono trzy jednakowe monety: M1, M2, M3, obraca się ze stałą prędkością kątową $\\omega$ po poziomej powierzchni blatu stołu wokół osi obrotu, przechodzącej przez punkt $O$. W wyniku tego obrotu torami ruchów środków tych monet są okręgi o wspólnym środku $O$.</p>
<p>Masy monet są jednakowe i równe $m$:</p>
<p style="text-align:center;">$m_1 = m_2 = m_3 = m$</p>
<p>Odległości środków monet M1, M2, M3 od osi obrotu oznaczymy – odpowiednio – jako: $r_1, r_2, r_3$ (zobacz rysunek). Stosunki tych odległości wynoszą $r_1 : r_2 : r_3 = 1 : 2 : 3$, to znaczy:</p>
<p style="text-align:center;">$\\frac{r_1}{r_2} = \\frac{1}{2} \\qquad \\frac{r_1}{r_3} = \\frac{1}{3} \\qquad \\frac{r_2}{r_3} = \\frac{2}{3}$</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2024_czerwiec_zad1_rysunek.png]
</div>

<p>Ruch deseczki i monet rozpatrujemy w inercjalnym układzie odniesienia związanym z ziemią, w jednorodnym, ziemskim polu grawitacyjnym.</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p>Rozważamy sytuację, gdy deseczka z monetami obraca się ze stałą prędkością kątową $\\omega$.</p>
<p><strong>Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<ol>
<li>Wektory przyśpieszeń w ruchu postępowym monet są skierowane do osi obrotu $O$. <strong>[ P / F ]</strong></li>
<li>Siła wypadkowa działająca na monetę M3 ma trzy razy większą wartość od wartości siły wypadkowej działającej na monetę M1. <strong>[ P / F ]</strong></li>
<li>Prędkości liniowe (prędkości w ruchu postępowym) monet M1, M2 i M3 mają te same wartości. <strong>[ P / F ]</strong></li>
</ol>

<h4>Zadanie 1.2. (0–4)</h4>
<p>Obracająca się deseczka została nagle zatrzymana, wskutek czego monety wypadły z wycięć i poruszały się dalej po stole wzdłuż linii prostych. Rozważamy ruch postępowy monet od chwili zatrzymania się deseczki do chwili zatrzymania się ostatniej monety na stole. W tym czasie monety M1, M2 i M3 przebyły drogi równe odpowiednio: $s_1, s_2$ i $s_3$.</p>
<p>Przyjmij, że współczynnik tarcia kinetycznego o stół jest taki sam dla wszystkich monet oraz że monety nie obracały się podczas tego ruchu.</p>
<p><strong>Oblicz $s_1 : s_2 : s_3$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'W ruchu jednostajnym po okręgu przyspieszenie jest dośrodkowe i proporcjonalne do promienia. Droga hamowania przy stałym opóźnieniu zależy od kwadratu prędkości początkowej.',
      givens: '$r_1 : r_2 : r_3 = 1 : 2 : 3$, $\\omega = \\text{const}$, współczynnik tarcia $\\mu = \\text{const}$',
      steps: [
        { title: 'Zadanie 1.1', content: '1. P (ruch po okręgu ze stałą prędkością kątową posiada tylko przyspieszenie dośrodkowe skierowane do środka O). 2. P ($F_w = m\\omega^2 r$, dla M3 $r_3 = 3r_1$, więc siła jest 3 razy większa). 3. F ($v = \\omega r$, prędkości liniowe rosną wraz z odległością od osi: $v_1 : v_2 : v_3 = 1 : 2 : 3$). Odpowiedź: P, P, F.' },
        { title: 'Zadanie 1.2', content: 'Prędkości początkowe monet tuż po wypadnięciu: $v_1 = \\omega r_1$, $v_2 = 2\\omega r_1$, $v_3 = 3\\omega r_1$. Każda moneta hamuje ze stałym opóźnieniem $a = \\mu g$. Droga do zatrzymania: $s = \\frac{v^2}{2a} = \\frac{(\\omega r)^2}{2\\mu g}$. Zatem stosunek dróg wynosi $s_1 : s_2 : s_3 = r_1^2 : r_2^2 : r_3^2 = 1^2 : 2^2 : 3^2 = 1 : 4 : 9$.' }
      ],
      numerical: '1.1: P, P, F; 1.2: $1 : 4 : 9$',
      answer: '1.1: 1-P, 2-P, 3-F; 1.2: $s_1 : s_2 : s_3 = 1 : 4 : 9$.',
      trap: 'Droga hamowania zależy od kwadratu prędkości ($s \\sim v^2$), a nie liniowo od prędkości.'
    }
  },

  // 4. 2023 Pokazowy CKE (Marzec 2022)
  {
    id: 'matura-cke-2023-pokazowy-zad-1',
    number: 202300,
    title: 'Zadanie maturalne CKE (2023 arkusz pokazowy)',
    year: '2023 pokazowy',
    difficulty: 3,
    source: 'Arkusz pokazowy CKE (Formuła 2023)',
    link: 'https://arkusze.pl/maturalne/fizyka-2023-przykladowy-arkusz-cke-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Równanie toru', 'Kinematyka'],
    image: 'img/cke_2023_pokazowy_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Z niewielkiej wysokości nad poziomym podłożem uczniowie rzucili małą metalową kulkę. Prędkość $\\vec{v}_0$ kulki w chwili początkowej ruchu ($t_0 = 0$) miała kierunek poziomy. Gdy kulka się poruszała, uczniowie wykonali serię zdjęć stroboskopowych (w jednakowych odstępach czasu) kulki w płaszczyźnie ruchu. Na zdjęciu przedstawiającym położenia kulki uczniowie dorysowali kartezjański układ współrzędnych $(x, y)$ oraz tor ruchu kulki (zobacz rysunek poniżej).</p>
<p>Następnie uczniowie wyznaczyli równanie toru ruchu kulki. W tym celu założyli, że torem ruchu jest fragment paraboli. W równaniu toru współczynniki liczbowe wyrażono w podstawowych jednostkach układu SI:</p>
<p style="text-align:center;">$y = 2 - \\frac{1}{18} x^2$</p>
<p>W zadaniach 1.1.–1.2. pomiń opór powietrza i przyjmij do obliczeń wartość przyśpieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2023_pokazowy_zad1_tor.png]
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz właściwą odpowiedź spośród podanych.</strong></p>
<p>Czas lotu kulki od chwili $t_0$ do chwili uderzenia o podłoże wynosi w zaokrągleniu:</p>
<ol type="A">
<li>$t \\approx 0{,}24\\text{ s}$</li>
<li>$t \\approx 0{,}64\\text{ s}$</li>
<li>$t \\approx 1{,}11\\text{ s}$</li>
<li>$t \\approx 1{,}41\\text{ s}$</li>
</ol>

<h4>Zadanie 1.2. (0–3)</h4>
<p><strong>Oblicz $v_0$ – wartość prędkości początkowej tej kulki. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Równanie toru rzutu poziomego wynika z eliminacji czasu ze wzorów na współrzędne x(t) i y(t). Z postaci równania odczytujemy wysokość początkową i współczynnik wiążący g z v0.',
      givens: '$y(x) = 2 - \\frac{1}{18}x^2$, $g = 9{,}81\\text{ m/s}^2$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Dla $x=0$ mamy $y_0 = h = 2\\text{ m}$. Kulka uderza o podłoże, gdy $y=0$. Czas swobodnego spadania z wysokości $h$: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{4}{9{,}81}} \\approx 0{,}6387\\text{ s} \\approx 0{,}64\\text{ s}$. Poprawna odpowiedź B.' },
        { title: 'Zadanie 1.2', content: 'Równania ruchu: $x = v_0 t \\implies t = \\frac{x}{v_0}$. $y = h - \\frac{g t^2}{2} = h - \\frac{g}{2v_0^2} x^2$. Porównując ze wzorem $y = 2 - \\frac{1}{18}x^2$, otrzymujemy: $\\frac{g}{2v_0^2} = \\frac{1}{18} \\implies v_0^2 = 9g = 9 \\cdot 9{,}81 = 88{,}29\\text{ m}^2/\\text{s}^2 \\implies v_0 = 3\\sqrt{9{,}81} \\approx 9{,}40\\text{ m/s}$.' }
      ],
      numerical: '1.1: B ($0{,}64\\text{ s}$); 1.2: $v_0 \\approx 9{,}4\\text{ m/s}$',
      answer: '1.1: B; 1.2: $v_0 \\approx 9{,}4\\text{ m/s}$.',
      trap: 'Pamiętaj, że współczynnik przy x^2 w równaniu toru to g / (2*v_0^2), a nie samo g / v_0^2.'
    }
  },

  // 5. 2023 Czerwiec (Termin dodatkowy)
  {
    id: 'matura-cke-2023-czerwiec-zad-1',
    number: 202306,
    title: 'Zadanie maturalne CKE (2023 czerwiec)',
    year: '2023 czerwiec',
    difficulty: 3,
    source: 'Matura CKE 2023 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2023-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch jednostajnie opóźniony', 'Wyprowadzenie wzoru', 'Kinematyka'],
    image: 'img/cke_2023_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Ze szczytu równi pochyłej puszczano kulkę. Kulka staczała się z równi bez poślizgu. Po stoczeniu się z równi kulka poruszała się dalej wzdłuż prostej po poziomo ułożonym dywanie. Ruch kulki po dywanie został sfilmowany. Dzięki temu wyznaczono wartości $v$ prędkości kulki na dywanie w kilku ustalonych położeniach $x$, licząc od punktu $x = 0$ końca równi pochyłej. Następnie obliczono wartości $v^2$. Wyniki doświadczenia oraz niepewności $\\Delta(v^2)$ wielkości $v^2$ przedstawiono w poniższej tabeli. Pomiar $x$ przyjmij za dokładny.</p>

<table style="width:100%; border-collapse: collapse; text-align:center; margin: 15px 0;" border="1">
<tr><th>$x$, m</th><td>0</td><td>0,20</td><td>0,40</td><td>0,60</td><td>0,80</td></tr>
<tr><th>$v^2$, $\\text{m}^2/\\text{s}^2$</th><td>0,098</td><td>0,078</td><td>0,054</td><td>0,037</td><td>0,014</td></tr>
<tr><th>$\\Delta(v^2)$, $\\text{m}^2/\\text{s}^2$</th><td>0,004</td><td>0,004</td><td>0,003</td><td>0,003</td><td>0,002</td></tr>
</table>

<p>W zadaniach 1.1.–1.2. przyjmij, że ruch postępowy kulki po dywanie był ruchem jednostajnie opóźnionym z przyśpieszeniem o wartości bezwzględnej $a$. Prędkość kulki na początku ruchu po dywanie, czyli w $x = 0$, oznaczymy jako $v_0$. Zależność między kwadratem wartości prędkości kulki a przebytą drogą $s = x$ i wartością przyśpieszenia $a$ wyraża się wzorem:</p>
<p style="text-align:center;">$v^2 = v_0^2 - 2as$</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Wyprowadź wzór $v^2 = v_0^2 - 2as$ podany we wstępie do zadania 1. Zapisz odpowiednie równania oraz przekształcenia prowadzące do uzyskania powyższej postaci tego wzoru.</strong></p>

<h4>Zadanie 1.2. (0–4)</h4>
<p>W układzie współrzędnych $(s, v^2)$ poniżej narysuj wykres zależności $v^2(s)$ – kwadratu prędkości kulki na dywanie od drogi. Zaznacz punkty pomiarowe oraz niepewności $\\Delta(v^2)$ oraz narysuj prostą najlepiej dopasowaną do punktów pomiarowych.</p>
<p><strong>Na podstawie wykresu wyznacz wartość przyśpieszenia $a$ kulki na dywanie oraz drogę $s_z$, jaką przebyła kulka na dywanie aż do zatrzymania się.</strong></p>
<p><em>Uwaga! Rozwiązania prowadzące do wyznaczenia $a$ oraz $s_z$, które nie wykorzystują wykresu (tylko same dane z tabeli), nie będą zgodne z poleceniem.</em></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2023_czerwiec_zad1_siatka.png]
</div>
</div>`,
    solution: {
      intuition: 'Wzór bezczasowy v^2 = v0^2 - 2as otrzymujemy, eliminując czas t z podstawowych równań ruchu jednostajnie opóźnionego: v(t) = v0 - at oraz s(t) = v0*t - at^2/2.',
      givens: 'Punkty pomiarowe z tabeli, zależność liniowa $v^2$ od $s$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Z równania prędkości: $v = v_0 - at \\implies t = \\frac{v_0 - v}{a}$. Wstawiamy do równania drogi: $s = v_0 t - \\frac{at^2}{2} = v_0 \\left(\\frac{v_0 - v}{a}\\right) - \\frac{a}{2}\\left(\\frac{v_0 - v}{a}\\right)^2 = \\frac{2v_0^2 - 2v_0 v - (v_0^2 - 2v_0 v + v^2)}{2a} = \\frac{v_0^2 - v^2}{2a}$. Mnożąc obustronnie przez $2a$: $2as = v_0^2 - v^2 \\implies v^2 = v_0^2 - 2as$.' },
        { title: 'Zadanie 1.2', content: 'Z wykresu prostej dopasowanej odczytujemy współczynnik kierunkowy $b = -2a$. Nachylenie prostej wynosi około $-0{,}105\\text{ m/s}^2$, skąd $a = -\\frac{b}{2} \\approx 0{,}052\\text{ m/s}^2$ (akceptowany zakres w kluczu: $0{,}050 - 0{,}055\\text{ m/s}^2$). Miejsce zerowe prostej ($v^2=0$) daje drogę zatrzymania $s_z \\approx 0{,}94\\text{ m}$ (zakres: $0{,}90 - 0{,}98\\text{ m}$).' }
      ],
      numerical: '$a \\approx 0{,}052\\text{ m/s}^2$, $s_z \\approx 0{,}94\\text{ m}$',
      answer: '1.1: Wyprowadzenie algebraiczne; 1.2: $a \\approx 0{,}052\\text{ m/s}^2$, $s_z \\approx 0{,}94\\text{ m}$.',
      trap: 'Zadanie 1.2 wymaga wyznaczenia wielkości z narysowanej prostej dopasowanej, a nie z pojedynczych punktów tabeli.'
    }
  },

  // 6. 2022 Grudzień (Próbna CKE)
  {
    id: 'matura-cke-2022-grudzien-zad-1',
    number: 202212,
    title: 'Zadanie maturalne CKE (2022 grudzień próbna)',
    year: '2022 grudzień',
    difficulty: 3,
    source: 'Matura próbna CKE Grudzień 2022',
    link: 'https://arkusze.pl/maturalne/fizyka-2022-grudzien-probna-rozszerzona.pdf',
    tags: ['Matura CKE', 'Tor ruchu', 'Ruch po okręgu', 'Kinematyka'],
    image: 'img/cke_2022_grudzien_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Na wykresie 1. przedstawiono w kartezjańskim układzie współrzędnych $(x, y)$ tor ruchu ciała w inercjalnym układzie odniesienia. Ruch ciała odbywał się następująco:</p>
<ul>
<li>Ciało rozpoczęło ruch w punkcie $A$ (od zerowej prędkości początkowej) i dalej poruszało się ruchem jednostajnie przyśpieszonym prostoliniowym aż do punktu $B$. W punkcie $B$ ciało osiągnęło prędkość o wartości $v_B = v$.</li>
<li>Od punktu $B$ do $C$ ciało poruszało się po półokręgu z prędkością o stałej wartości $v$.</li>
<li>Od punktu $C$ do $D$ ciało poruszało się ruchem jednostajnie opóźnionym prostoliniowym. W punkcie $D$ ciało się zatrzymało ($v_D = 0$).</li>
</ul>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2022_grudzien_zad1_wykres1.png]
</div>

<h4>Zadanie 1.1. (0–4)</h4>
<p>Długość boku kratki na wykresie 2. odpowiada umownej jednostce siły. Wartość siły wypadkowej działającej na ciało w punkcie $Z$ wyrażona w tych jednostkach siły wynosi 4.</p>
<p><strong>Na wykresie 2. narysuj w punktach $Y$ oraz $Z$ wektory sił wypadkowych działających na ciało. Uwzględnij odpowiednie: (1) kierunki, (2) zwroty oraz (3) długości wektorów, odpowiadające wartościom sił wypadkowych. Zapisz obliczenia uzasadniające długość wektora w punkcie $Y$.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2022_grudzien_zad1_wykres2.png]
</div>

<h4>Zadanie 1.2. (0–3)</h4>
<p>Wartość prędkości, z jaką ciało poruszało się od punktu $B$ do $C$, jest równa $v = 2{,}0\\text{ m/s}$.</p>
<p><strong>Oblicz czas ruchu ciała od punktu $A$ do punktu $D$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Ruch składa się z trzech etapów: prostoliniowego przyspieszonego, jednostajnego po półokręgu oraz prostoliniowego opóźnionego. Czas każdego etapu obliczamy z kinematyki danego ruchu.',
      givens: '$v = 2{,}0\\text{ m/s}$, współrzędne z wykresu: $A=(2,0)$, $B=(10,0)$, $C=(10,8)$, $D=(4,8)$',
      steps: [
        { title: 'Zadanie 1.1', content: 'W punkcie Z (na półokręgu): siła dośrodkowa $F_Z = m\\frac{v^2}{R} = 4$ kratki. Promień półokręgu $R = 4\\text{ m}$. Wektor $\\vec{F}_Z$ ma zwrot w dół (do środka okręgu w $(10, 4)$). Na odcinku AB: ruch jednostajnie przyspieszony od 0 do $v$ na drodze $s_{AB} = 8\\text{ m}$. Przyspieszenie $a_{AB} = \\frac{v^2}{2 s_{AB}} = \\frac{v^2}{16}$. Zatem siła $F_Y = ma_{AB} = m\\frac{v^2}{16} = \\frac{1}{4} F_Z = 1$ kratka. Wektor $\\vec{F}_Y$ jest poziomy, skierowany w prawo.' },
        { title: 'Zadanie 1.2', content: 'Etap 1 (A->B): $s_1 = 8\\text{ m}$, $v_{\\text{śr}} = \\frac{v}{2} = 1{,}0\\text{ m/s} \\implies t_1 = \\frac{8}{1} = 8\\text{ s}$. Etap 2 (B->C): półokrąg $s_2 = \\pi R = 4\\pi\\text{ m}$, ruch jednostajny $v = 2{,}0\\text{ m/s} \\implies t_2 = \\frac{4\\pi}{2} = 2\\pi\\text{ s} \\approx 6{,}28\\text{ s}$. Etap 3 (C->D): $s_3 = 10 - 4 = 6\\text{ m}$, $v_{\\text{śr}} = 1{,}0\\text{ m/s} \\implies t_3 = \\frac{6}{1} = 6\\text{ s}$. Całkowity czas: $t = 8 + 2\\pi + 6 = 14 + 2\\pi \\approx 20{,}3\\text{ s}$.' }
      ],
      numerical: '1.1: $F_Y = 1$ kratka w prawo, $F_Z = 4$ kratki w dół; 1.2: $t \\approx 20{,}3\\text{ s}$',
      answer: '1.1: Długość wektora w Y to 1 kratka; 1.2: $t = 14 + 2\\pi \\approx 20{,}3\\text{ s}$.',
      trap: 'Pamiętaj, że długość półokręgu to $\\pi R$, a nie $2\\pi R$. Średnia prędkość w ruchu jednostajnie zmiennym od zera do v wynosi v/2.'
    }
  },

  // 7. 2022 Czerwiec (Termin dodatkowy)
  {
    id: 'matura-cke-2022-czerwiec-zad-1',
    number: 202206,
    title: 'Zadanie maturalne CKE (2022 czerwiec)',
    year: '2022 czerwiec',
    difficulty: 2,
    source: 'Matura CKE 2022 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2022-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wektory przemieszczenia', 'Droga', 'Kinematyka'],
    image: 'img/cke_2022_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Robot sprzątający rozpoczął ruch po płaskiej powierzchni. Ten robot może przemieszczać się wzdłuż odcinków prostych w dowolnym kierunku. Kolejne przemieszczenia robota, od chwili początkowej $t = 0$, opisano za pomocą współrzędnych $(x, y)$. W chwili $t = 0$ robot znajdował się w punkcie $P(0, 0)$. Ruch robota składał się z trzech kolejnych etapów:</p>
<ul>
<li>Etap I: ruch jednostajny z punktu $P$ z prędkością o wartości $10\\text{ cm/s}$ wzdłuż linii prostej do punktu o współrzędnych $x = 30\\text{ cm}$, $y = 40\\text{ cm}$.</li>
<li>Etap II: przemieszczenie o wektor $\\Delta \\vec{r}_2 = [40\\text{ cm}; 30\\text{ cm}]$ wzdłuż linii prostej ruchem jednostajnym z prędkością o wartości $10\\text{ cm/s}$.</li>
<li>Etap III: przemieszczenie do punktu o współrzędnych $x = 110\\text{ cm}$, $y = 40\\text{ cm}$ wzdłuż linii prostej ruchem jednostajnym z prędkością o wartości $10\\text{ cm/s}$.</li>
</ul>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>W układzie współrzędnych $(x, y)$ przedstaw tor ruchu robota od chwili $t = 0$ do końca trzeciego etapu ruchu. Wyskaluj osie i nanieś odpowiednie wartości.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2022_czerwiec_zad1_siatka.png]
</div>

<h4>Zadanie 1.2. (0–3)</h4>
<p><strong>Oblicz czas ruchu robota od chwili $t = 0$ do końca trzeciego etapu ruchu. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Ruch składa się z trzech prostoliniowych odcinków o stałej prędkości. Długość każdego odcinka wyznaczamy z twierdzenia Pitagorasa.',
      givens: '$v = 10\\text{ cm/s}$, kolejne punkty toru: $(0,0) \\to (30,40) \\to (70,70) \\to (110,40)$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Rysujemy trzy odcinki łączące punkty: $(0,0) \\to (30,40) \\to (70,70) \\to (110,40)$.' },
        { title: 'Zadanie 1.2', content: 'Długość etapu 1: $s_1 = \\sqrt{30^2 + 40^2} = 50\\text{ cm}$. Długość etapu 2: $s_2 = \\sqrt{40^2 + 30^2} = 50\\text{ cm}$. Długość etapu 3: $\\Delta x = 110 - 70 = 40\\text{ cm}$, $\\Delta y = 40 - 70 = -30\\text{ cm} \\implies s_3 = \\sqrt{40^2 + (-30)^2} = 50\\text{ cm}$. Całkowita droga: $s = 50 + 50 + 50 = 150\\text{ cm}$. Czas ruchu: $t = \\frac{s}{v} = \\frac{150\\text{ cm}}{10\\text{ cm/s}} = 15\\text{ s}$.' }
      ],
      numerical: '$s = 150\\text{ cm}$, $t = 15\\text{ s}$',
      answer: '1.1: Tor z trzech odcinków o długości 50 cm; 1.2: $t = 15\\text{ s}$.',
      trap: 'Uważaj na współrzędne drugiego punktu: po dodaniu wektora [40, 30] do (30, 40) otrzymujemy (70, 70).'
    }
  },

  // 8. 2021 Czerwiec (Termin dodatkowy)
  {
    id: 'matura-cke-2021-czerwiec-zad-1',
    number: 202106,
    title: 'Zadanie maturalne CKE (2021 czerwiec)',
    year: '2021 czerwiec',
    difficulty: 3,
    source: 'Matura CKE 2021 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2021-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Równanie paraboli', 'Kinematyka'],
    image: 'img/cke_2021_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Z wieży obserwacyjnej wystrzelono małą kulkę. Prędkość $\\vec{v}_0$ kulki w chwili początkowej ruchu ($t_0 = 0$) miała kierunek poziomy. Na wykresie poniżej, w układzie współrzędnych $(x, y)$, przedstawiono tor lotu kulki od chwili $t_0$ aż do momentu uderzenia kulki w poziome podłoże.</p>
<p>Przyjmij do obliczeń przyśpieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$. W zadaniach 1.1.–1.3. pomiń opory ruchu.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2021_czerwiec_zad1_tor.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Na podstawie danych odczytanych z wykresu oblicz czas lotu kulki od chwili $t_0 = 0$, aż do chwili uderzenia kulki o ziemię.</strong></p>

<h4>Zadanie 1.2. (0–4)</h4>
<p>Torem ruchu kulki jest fragment paraboli opisanej równaniem:</p>
<p style="text-align:center;">$y = -0{,}0125 \\cdot x^2 + 20 \\qquad \\text{gdzie } x \\in [0; 40]$</p>
<p>Współczynniki liczbowe w tym równaniu wyrażone są (domyślnie) w podstawowych jednostkach układu SI.</p>
<p><strong>Wyprowadź powyższe równanie toru lotu kulki na podstawie równań ruchu rzutu poziomego oraz położenia początkowego i końcowego kulki podczas lotu.</strong></p>

<h4>Zadanie 1.3. (0–1)</h4>
<p><strong>Na rysunku poniżej narysuj wektor siły działającej na kulkę podczas lotu, gdy znajduje się ona w punkcie $A$. Zapisz obok rysunku nazwę tej siły.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2021_czerwiec_zad1_punktA.png]
</div>
</div>`,
    solution: {
      intuition: 'Rzut poziomy składa się z jednostajnego ruchu w poziomie i jednostajnie przyspieszonego spadku swobodnego w pionie.',
      givens: '$h = 20\\text{ m}$, $z = 40\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Z wykresu odczytujemy wysokość początkową $h = 20\\text{ m}$. Czas spadania: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{40}{9{,}81}} \\approx 2{,}02\\text{ s}$.' },
        { title: 'Zadanie 1.2', content: 'Równania ruchu: $x(t) = v_0 t \\implies t = \\frac{x}{v_0}$. $y(t) = h - \\frac{gt^2}{2} = 20 - \\frac{g}{2v_0^2}x^2$. Kulka uderza w ziemię w $x=40\\text{ m}$ w czasie $t_k$: $v_0 = \\frac{x_k}{t_k} = \\frac{40\\text{ m}}{\\sqrt{40/g}} = \\sqrt{40g} \\implies v_0^2 = 40g$. Wtedy współczynnik przy $x^2$: $-\\frac{g}{2v_0^2} = -\\frac{g}{2 \\cdot 40g} = -\\frac{1}{80} = -0{,}0125$. Stąd $y = -0{,}0125 x^2 + 20$.' },
        { title: 'Zadanie 1.3', content: 'Wektor skierowany pionowo w dół, przyłożony w punkcie A. Nazwa siły: siła grawitacji (ciężar / siła ciężkości).' }
      ],
      numerical: '1.1: $t \\approx 2{,}02\\text{ s}$; 1.2: wyprowadzenie $y = -0{,}0125x^2 + 20$; 1.3: siła ciężkości w dół',
      answer: '1.1: $t \\approx 2{,}02\\text{ s}$; 1.2: Wyprowadzenie algebraiczne; 1.3: Wektor siły ciężkości pionowo w dół.',
      trap: 'Nie myl czasu lotu z zasięgiem. Czas zależy wyłącznie od wysokości początkowej i g.'
    }
  },

  // 9. 2021 Marzec (Próbna CKE)
  {
    id: 'matura-cke-2021-marzec-zad-1',
    number: 202103,
    title: 'Zadanie maturalne CKE (2021 marzec próbna)',
    year: '2021 marzec',
    difficulty: 3,
    source: 'Matura próbna CKE Marzec 2021',
    link: 'https://arkusze.pl/maturalne/fizyka-2021-marzec-probna-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch windy', 'Wykres siły nacisku', 'Droga', 'Kinematyka'],
    image: 'img/cke_2021_marzec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Rozważamy ruch windy, gdy wjeżdżała ona na taras widokowy pewnego wieżowca. W chwili początkowej $t_0 = 0$ winda ruszyła z miejsca i przez pewien czas jechała do góry ze stałym przyśpieszeniem o wartości $0{,}80\\text{ m/s}^2$. Od chwili, gdy winda osiągnęła prędkość maksymalną o wartości $18\\text{ m/s}$, dalej poruszała się przez $9\\text{ s}$ ruchem jednostajnym. Ostatni etap trasy winda jechała ruchem jednostajnie opóźnionym z przyśpieszeniem (potocznie – opóźnieniem) o wartości $0{,}80\\text{ m/s}^2$ – aż do zatrzymania się. W windzie stał człowiek o masie $75\\text{ kg}$. Przyjmij do obliczeń przyśpieszenie ziemskie $g = 9{,}8\\text{ m/s}^2$.</p>

<h4>Zadanie 1.1. (0–3)</h4>
<p><strong>Na poniższym diagramie współrzędnych narysuj wykres zależności $F(t)$ – wartości $F$ siły nacisku, z jaką człowiek działał na podłogę windy, od czasu $t$ ruchu windy, podczas całego opisanego ruchu, licząc od chwili $t_0$. Wykonaj i zapisz odpowiednie obliczenia.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2021_marzec_zad1_diagram.png]
</div>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Oblicz drogę, jaką przejechała winda podczas całego opisanego ruchu, licząc od chwili $t_0$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Ruch windy składa się z trzech etapów: przyspieszenia, ruchu jednostajnego i hamowania. Siła nacisku zależy od pozornego przyspieszenia w układzie nieinercjalnym windy, a droga jest polem pod wykresem v(t).',
      givens: '$a_1 = 0{,}8\\text{ m/s}^2$, $v_{\\max} = 18\\text{ m/s}$, $\\Delta t_2 = 9\\text{ s}$, $a_3 = 0{,}8\\text{ m/s}^2$, $m = 75\\text{ kg}$, $g = 9{,}8\\text{ m/s}^2$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Czas rozpędzania: $t_1 = \\frac{v_{\\max}}{a} = \\frac{18}{0{,}8} = 22{,}5\\text{ s}$. Siła nacisku: $F_1 = m(g+a) = 75 \\cdot (9{,}8 + 0{,}8) = 75 \\cdot 10{,}6 = 795\\text{ N}$. Czas ruchu jednostajnego: od $22{,}5\\text{ s}$ do $31{,}5\\text{ s}$. Siła: $F_2 = mg = 75 \\cdot 9{,}8 = 735\\text{ N}$. Czas hamowania: $t_3 = 22{,}5\\text{ s}$, czyli do $t_k = 54\\text{ s}$. Siła: $F_3 = m(g-a) = 75 \\cdot (9{,}8 - 0{,}8) = 75 \\cdot 9{,}0 = 675\\text{ N}$. Wykres składa się z trzech poziomych odcinków na wysokościach: 795 N, 735 N i 675 N.' },
        { title: 'Zadanie 1.2', content: 'Wykres $v(t)$ jest trapezem o podstawach $54\\text{ s}$ oraz $9\\text{ s}$ i wysokości $18\\text{ m/s}$. Całkowita droga równa się polu trapezu: $s = \\frac{(54 + 9) \\cdot 18}{2} = 63 \\cdot 9 = 567\\text{ m}$.' }
      ],
      numerical: '1.1: $F_1 = 795\\text{ N}, F_2 = 735\\text{ N}, F_3 = 675\\text{ N}$; 1.2: $s = 567\\text{ m}$',
      answer: '1.1: Trzy odcinki poziome na wykresie F(t); 1.2: $s = 567\\text{ m}$.',
      trap: 'Zwróć uwagę, że czas hamowania wynosi 22,5 s, a nie 9 s (9 s trwał etap jazdy ze stałą prędkością).'
    }
  },

  // 10. 2020 Lipiec (Termin dodatkowy CKE)
  {
    id: 'matura-cke-2020-lipiec-zad-1',
    number: 202007,
    title: 'Zadanie maturalne CKE (2020 lipiec)',
    year: '2020 lipiec',
    difficulty: 2,
    source: 'Matura CKE 2020 Lipiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2020-lipiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch jednostajnie przyspieszony', 'Droga startu', 'Kinematyka'],
    image: 'img/cke_2020_lipiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Pewien samolot pasażerski odrywa się od ziemi po osiągnięciu prędkości o wartości $288\\text{ km/h}$ w kierunku poziomym.</p>
<p>W zadaniach 1.1.–1.2. przyjmij uproszczony model zjawiska oparty na założeniu, że prędkość samolotu w chwili początkowej $t_0 = 0$ wynosiła zero i aż do momentu oderwania się od ziemi samolot poruszał się ruchem jednostajnie przyśpieszonym prostoliniowym względem ziemi.</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p>Gdy ten samolot rozpędzał się po poziomym pasie startowym lotniska, to przebył drogę $45\\text{ m}$ w czasie od chwili $t_7 = 7\\text{ s}$ do chwili $t_{10} = 10\\text{ s}$.</p>
<p><strong>Oblicz wartość przyśpieszenia samolotu w tej sytuacji. Zapisz obliczenia.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p>Innym razem ten sam samolot rozpędzał się po pasie startowym, poruszając się ze stałym przyśpieszeniem o wartości $1{,}4\\text{ m/s}^2$.</p>
<p><strong>Ustal i zapisz, czy w takim przypadku samolot mógłby oderwać się od ziemi, gdyby rozpędził się po pasie startowym o długości $1\\,900\\text{ m}$. Wykonaj niezbędne obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Ruch jednostajnie przyspieszony bez prędkości początkowej opisywany jest równaniem s(t) = at^2 / 2.',
      givens: '$v_k = 288\\text{ km/h} = 80\\text{ m/s}$, $\\Delta s = 45\\text{ m}$ między 7 a 10 s',
      steps: [
        { title: 'Zadanie 1.1', content: 'Droga przebyta między 7 a 10 s: $\\Delta s = s(10) - s(7) = \\frac{a \\cdot 10^2}{2} - \\frac{a \\cdot 7^2}{2} = \\frac{a}{2}(100 - 49) = 25{,}5 a$. $25{,}5 a = 45\\text{ m} \\implies a = \\frac{45}{25{,}5} = \\frac{90}{51} \\approx 1{,}76\\text{ m/s}^2$.' },
        { title: 'Zadanie 1.2', content: 'Droga potrzebna do uzyskania prędkości oderwania $v = 80\\text{ m/s}$ przy przyspieszeniu $a = 1{,}4\\text{ m/s}^2$: $s = \\frac{v^2}{2a} = \\frac{80^2}{2 \\cdot 1{,}4} = \\frac{6400}{2{,}8} \\approx 2286\\text{ m}$. Ponieważ wymagana droga $2286\\text{ m} > 1900\\text{ m}$, samolot nie zdoła oderwać się od ziemi.' }
      ],
      numerical: '1.1: $a \\approx 1{,}76\\text{ m/s}^2$; 1.2: Nie, wymagana droga to ok. $2286\\text{ m}$',
      answer: '1.1: $a \\approx 1{,}76\\text{ m/s}^2$; 1.2: Nie, pas $1900\\text{ m}$ jest za krótki (potrzeba ok. $2286\\text{ m}$).',
      trap: 'Pamiętaj o przeliczeniu prędkości $288\\text{ km/h}$ na jednostki SI: $288 / 3{,}6 = 80\\text{ m/s}$.'
    }
  },

  // 11. 2020 Kwiecień (Próbna CKE)
  {
    id: 'matura-cke-2020-kwiecien-zad-1',
    number: 202004,
    title: 'Zadanie maturalne CKE (2020 kwiecień próbna)',
    year: '2020 kwiecień',
    difficulty: 3,
    source: 'Matura próbna CKE Kwiecień 2020',
    link: 'https://arkusze.pl/maturalne/fizyka-2020-kwiecien-probna-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch jednostajny', 'Wyprowadzenie wzoru', 'Kinematyka'],
    image: 'img/cke_2020_kwiecien_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Samochód A jedzie z maksymalną prędkością dozwoloną na danym odcinku trasy. Wartość tej prędkości wynosi $v_{\\max}$. Samochód B jedzie z prędkością mniejszą od $v_{\\max}$ o wartość $\\Delta v$. Oba samochody poruszają się ruchem jednostajnym. Czas, w jakim samochód B pokona odcinek trasy o długości $d$, jest dłuższy od czasu, w jakim samochód A pokona ten sam odcinek trasy, o wartość:</p>
<p style="text-align:center;">$\\Delta t = \\frac{d \\cdot \\Delta v}{v_{\\max}^2 - v_{\\max} \\Delta v}$</p>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Wyprowadź powyższy wzór na różnicę czasów, w jakich oba samochody pokonują odcinek trasy o długości $d$.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p>Maksymalna dozwolona wartość prędkości dla pojazdów osobowych poruszających się po autostradzie wynosi $140\\text{ km/h}$. Samochód B pokonał odcinek autostrady o długości $10\\text{ km}$ w czasie o pół minuty dłuższym niż samochód A.</p>
<p><strong>Oblicz, ile wynosi różnica wartości prędkości samochodów A i B. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Różnica czasów przejazdu tego samego odcinka z różnymi stałymi prędkościami sprowadza się do odjęcia ułamków d/vB - d/vA.',
      givens: '$v_A = v_{\\max}$, $v_B = v_{\\max} - \\Delta v$, $v_{\\max} = 140\\text{ km/h}$, $d = 10\\text{ km}$, $\\Delta t = 0{,}5\\text{ min} = \\frac{1}{120}\\text{ h}$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Czas samochodu A: $t_A = \\frac{d}{v_{\\max}}$. Czas samochodu B: $t_B = \\frac{d}{v_{\\max} - \\Delta v}$. Różnica czasów: $\\Delta t = t_B - t_A = \\frac{d}{v_{\\max} - \\Delta v} - \\frac{d}{v_{\\max}} = \\frac{d \\cdot v_{\\max} - d(v_{\\max} - \\Delta v)}{v_{\\max}(v_{\\max} - \\Delta v)} = \\frac{d \\cdot \\Delta v}{v_{\\max}^2 - v_{\\max}\\Delta v}$.' },
        { title: 'Zadanie 1.2', content: 'Wstawiamy dane: $\\frac{1}{120} = \\frac{10 \\cdot \\Delta v}{140^2 - 140 \\Delta v} \\implies 19600 - 140\\Delta v = 1200 \\Delta v \\implies 1340 \\Delta v = 19600 \\implies \\Delta v = \\frac{19600}{1340} \\approx 14{,}6\\text{ km/h}$.' }
      ],
      numerical: '1.2: $\\Delta v \\approx 14{,}6\\text{ km/h}$',
      answer: '1.1: Wyprowadzenie algebraiczne; 1.2: $\\Delta v \\approx 14{,}6\\text{ km/h}$.',
      trap: 'Zwróć uwagę na spójność jednostek: pół minuty to 1/120 godziny, a prędkość jest w km/h.'
    }
  },

  // 12. 2019 Czerwiec (Termin dodatkowy CKE)
  {
    id: 'matura-cke-2019-czerwiec-zad-1',
    number: 201906,
    title: 'Zadanie maturalne CKE (2019 czerwiec)',
    year: '2019 czerwiec',
    difficulty: 3,
    source: 'Matura CKE 2019 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2019-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wykres przyspieszenia', 'Całkowanie graficzne', 'Kinematyka'],
    image: 'img/cke_2019_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Pewne ciało porusza się ruchem prostoliniowym wzdłuż osi $x$. Zamieszczony poniżej wykres przedstawia zależność współrzędnej $a_x$ przyspieszenia ciała od czasu $t$ w tym ruchu. Wartość prędkości początkowej ciała wynosi zero.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2019_czerwiec_zad1_wykres_a.png]
</div>

<h4>Zadanie 1.1. (0–3)</h4>
<p><strong>Narysuj wykres zależności współrzędnej $v_x$ prędkości ciała od czasu $t$ w ruchu opisanym powyżej (od $t = 0\\text{ s}$ do $t = 12\\text{ s}$). Zapisz obliczenia pozwalające ustalić wartość $v_x$ w $t = 5\\text{ s}$ ruchu oraz w $t = 12\\text{ s}$ ruchu.</strong></p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2019_czerwiec_zad1_siatka_v.png]
</div>

<h4>Zadanie 1.2. (0–3)</h4>
<p><strong>Uzupełnij tabelę przedstawioną poniżej. W drugiej kolumnie podkreśl właściwe określenie dotyczące wartości prędkości ciała w danym przedziale czasu. W trzeciej kolumnie wpisz drogę przebytą przez ciało w danym przedziale czasu.</strong></p>

<table style="width:100%; border-collapse: collapse; text-align:center; margin: 15px 0;" border="1">
<tr><th>Przedział czasu</th><th>Wartość prędkości</th><th>Droga $s$, m</th></tr>
<tr><td>$0\\text{ s} < t \\le 5\\text{ s}$</td><td>rośnie / maleje / pozostaje stała</td><td>&nbsp;</td></tr>
<tr><td>$5\\text{ s} < t \\le 10\\text{ s}$</td><td>rośnie / maleje / pozostaje stała</td><td>&nbsp;</td></tr>
<tr><td>$10\\text{ s} < t \\le 12\\text{ s}$</td><td>rośnie / maleje / pozostaje stała</td><td>&nbsp;</td></tr>
</table>
</div>`,
    solution: {
      intuition: 'Pole pod wykresem przyspieszenia a(t) odpowiada zmianie prędkości delta v, a pole pod wykresem prędkości v(t) odpowiada przebytej drodze.',
      givens: '$v_0 = 0$, $a_x(t)$ schodkowe: $2\\text{ m/s}^2$ dla $0-5\\text{ s}$, $0$ dla $5-10\\text{ s}$, $-3\\text{ m/s}^2$ dla $10-12\\text{ s}$',
      steps: [
        { title: 'Zadanie 1.1', content: 'W $t=5\\text{ s}$: $v_x(5) = 0 + 2 \\cdot 5 = 10\\text{ m/s}$. W przedziale $5-10\\text{ s}$: $a=0$, więc $v_x = 10\\text{ m/s}$. W $t=12\\text{ s}$: $v_x(12) = 10 + (-3) \\cdot 2 = 4\\text{ m/s}$. Wykres: linia prosta od $(0,0)$ do $(5,10)$, pozioma od $(5,10)$ do $(10,10)$, opadająca prosta od $(10,10)$ do $(12,4)$.' },
        { title: 'Zadanie 1.2', content: '1. $0-5\\text{ s}$: wartość prędkości rośnie, droga $s_1 = \\frac{1}{2} \\cdot 5 \\cdot 10 = 25\\text{ m}$. 2. $5-10\\text{ s}$: wartość prędkości pozostaje stała, droga $s_2 = 5 \\cdot 10 = 50\\text{ m}$. 3. $10-12\\text{ s}$: wartość prędkości maleje, droga $s_3 = \\frac{10 + 4}{2} \\cdot 2 = 14\\text{ m}$.' }
      ],
      numerical: '1.1: $v(5) = 10\\text{ m/s}, v(12) = 4\\text{ m/s}$; 1.2: drogi: $25\\text{ m}, 50\\text{ m}, 14\\text{ m}$',
      answer: '1.1: Wykres v(t) o wierzchołkach (0,0)-(5,10)-(10,10)-(12,4); 1.2: rośnie ($25\\text{ m}$), stała ($50\\text{ m}$), maleje ($14\\text{ m}$).',
      trap: 'Zauważ, że w przedziale 10-12 s prędkość maleje z 10 do 4 m/s, ale wciąż jest dodatnia, więc droga nadal przyrasta.'
    }
  },

  // 13. 2016 Czerwiec (Termin dodatkowy CKE)
  {
    id: 'matura-cke-2016-czerwiec-zad-1',
    number: 201606,
    title: 'Zadanie maturalne CKE (2016 czerwiec)',
    year: '2016 czerwiec',
    difficulty: 2,
    source: 'Matura CKE 2016 Czerwiec (Termin dodatkowy)',
    link: 'https://arkusze.pl/maturalne/fizyka-2016-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wykres v(t)', 'Spotkanie pojazdów', 'Kinematyka'],
    image: 'img/cke_2016_czerwiec_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1. (0–2)</h4>
<p>Samochód i motocykl poruszały się wzdłuż tej samej prostej z prędkościami o takich samych zwrotach. Na wykresie poniżej przedstawiono zależności wartości prędkości od czasu w ruchu tych pojazdów. W chwili początkowej samochód i motocykl znajdowały się obok siebie.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2016_czerwiec_zad1_wykres.png]
</div>

<p><strong>Oceń prawdziwość poniższych zdań. Zaznacz P, jeśli zdanie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<ol>
<li>Droga, jaką przebył motocykl w ciągu pierwszych 6 sekund, była większa od drogi, jaką przebył w tym samym czasie samochód. <strong>[ P / F ]</strong></li>
<li>Po 2 s ruchu pojazdy ponownie znajdowały się obok siebie. <strong>[ P / F ]</strong></li>
<li>Maksymalna prędkość osiągnięta przez motocyklistę wyniosła 90 km/h, a średnia prędkość samochodu w ciągu 9 s ruchu wynosiła 900 m/min. <strong>[ P / F ]</strong></li>
<li>W chwili $t = 4\\text{ s}$ wartość przyspieszenia motocykla wynosiła $5\\text{ m/s}^2$, a wartość przyspieszenia samochodu wynosiła 0. <strong>[ P / F ]</strong></li>
</ol>
</div>`,
    solution: {
      intuition: 'Analiza wykresu v(t): droga odpowiada polu pod wykresem, przyspieszenie jest nachyleniem prostej, a ponowne spotkanie oznacza równość pól.',
      givens: 'Wykres v(t): samochód $v = 15\\text{ m/s} = \\text{const}$, motocykl przyspiesza od 0 do $25\\text{ m/s}$ w 5 s, potem $25\\text{ m/s} = \\text{const}$',
      steps: [
        { title: 'Zdanie 1', content: 'Droga samochodu w 6 s: $15 \\cdot 6 = 90\\text{ m}$. Droga motocykla w 6 s: trójkąt $\\frac{5 \\cdot 25}{2} = 62{,}5\\text{ m}$ plus prostokąt $1 \\cdot 25 = 25\\text{ m}$, łącznie $87{,}5\\text{ m}$. $87{,}5 < 90$, więc zdanie jest FAŁSZYWE.' },
        { title: 'Zdanie 2', content: 'W $t=2\\text{ s}$: samochód przebył $30\\text{ m}$, motocykl $\\frac{2 \\cdot 10}{2} = 10\\text{ m}$. Nie znajdowały się obok siebie -> FAŁSZ.' },
        { title: 'Zdanie 3', content: '$v_{\\max}$ motocykla: $25\\text{ m/s} = 25 \\cdot 3{,}6 = 90\\text{ km/h}$ (Prawda). Samochód: $v = 15\\text{ m/s} = 15 \\cdot 60 = 900\\text{ m/min}$ (Prawda). Całe zdanie jest PRAWDZIWE.' },
        { title: 'Zdanie 4', content: 'Dla motocykla $a = \\frac{25}{5} = 5\\text{ m/s}^2$, dla samochodu ruch jednostajny $a = 0$. Zdanie jest PRAWDZIWE.' }
      ],
      numerical: '1-F, 2-F, 3-P, 4-P',
      answer: '1. F, 2. F, 3. P, 4. P.',
      trap: 'Punkt przecięcia wykresów prędkości oznacza jedynie równość prędkości w danej chwili, a NIE ponowne spotkanie pojazdów.'
    }
  },

  // 14. 2015 Przykładowy CKE
  {
    id: 'matura-cke-2015-przykladowy-zad-1',
    number: 201500,
    title: 'Zadanie maturalne CKE (2015 przykładowy)',
    year: '2015 przykładowy',
    difficulty: 2,
    source: 'Przykładowy arkusz CKE (Formuła 2015)',
    link: 'https://arkusze.pl/maturalne/fizyka-2015-przykladowy-arkusz-cke-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Opór powietrza', 'Kinematyka'],
    image: 'img/cke_2015_przykladowy_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1. (0–3)</h4>
<p>Podczas gry w badmintona zawodniczka uderzyła lotkę na wysokości $2\\text{ m}$, nadając jej poziomą prędkość o wartości $5\\text{ m/s}$. Lotka upadła w pewnej odległości od zawodniczki. Jest to odległość o jedną trzecią mniejsza od odległości upadku lotki przy pominięciu oporu powietrza. Przyjmij, że po uderzeniu lotki zawodniczka nie zmieniła swojego położenia.</p>
<p><strong>Oblicz, w jakiej odległości od zawodniczki upadła lotka. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Najpierw obliczamy teoretyczny zasięg rzutu poziomego bez oporów ruchu, a następnie zmniejszamy go o 1/3 zgodnie z treścią zadania.',
      givens: '$h = 2\\text{ m}$, $v_0 = 5\\text{ m/s}$, zasięg rzeczywisty $x = \\frac{2}{3} x_{\\text{teor}}$',
      steps: [
        { title: 'Krok 1: Zasięg bez oporów', content: 'Czas spadania z wysokości $h$: $t = \\sqrt{\\frac{2h}{g}} = \\sqrt{\\frac{4}{9{,}81}} \\approx 0{,}6388\\text{ s}$. Zasięg teoretyczny: $x_{\\text{teor}} = v_0 t = 5 \\cdot 0{,}6388 \\approx 3{,}194\\text{ m}$.' },
        { title: 'Krok 2: Zasięg rzeczywisty', content: 'Zasięg poziomy z uwzględnieniem oporu powietrza: $x = \\left(1 - \\frac{1}{3}\\right) x_{\\text{teor}} = \\frac{2}{3} \\cdot 3{,}194 \\approx 2{,}13\\text{ m}$.' },
        { title: 'Krok 3: Odległość od zawodniczki', content: 'Jeśli odległość mierzymy w poziomie: $d \\approx 2{,}13\\text{ m}$. Jeśli od miejsca uderzenia (w przestrzeni 3D): $D = \\sqrt{h^2 + x^2} = \\sqrt{2^2 + 2{,}13^2} \\approx 2{,}92\\text{ m}$. W oficjalnym kluczu CKE uznawano obie odpowiedzi.' }
      ],
      numerical: '$x \\approx 2{,}13\\text{ m}$ (lub w przestrzeni $D \\approx 2{,}92\\text{ m}$)',
      answer: 'Lotka upadła w odległości poziomej ok. $2{,}13\\text{ m}$ (lub w linii prostej ok. $2{,}92\\text{ m}$).',
      trap: 'Zwróć uwagę na sformułowanie "o jedną trzecią mniejsza", co oznacza pomnożenie przez 2/3.'
    }
  },

  // 15. Informator 2023 Zadanie 2
  {
    id: 'matura-cke-informator-2023-zad-2',
    number: 202302,
    title: 'Zadanie maturalne CKE (Informator 2023)',
    year: 'Informator 2023',
    difficulty: 2,
    source: 'Oficjalny Informator CKE (Formuła 2023)',
    link: 'https://arkusze.pl/informatory/informator-maturalny-fizyka-2023.pdf',
    tags: ['Matura CKE', 'Rzut pionowy', 'Spadek swobodny', 'Kinematyka'],
    image: 'img/cke_informator_2023_zad2.png',
    problem: `<div class="task-matura">
<h4>Zadanie 2. Spadająca kulka</h4>
<p>Pionowo w dół rzucono metalową kulkę o masie $m = 0{,}250\\text{ kg}$. Na wysokości $h = 1{,}80\\text{ m}$ ponad podłożem, w chwili $t_0 = 0$, kulka osiągnęła prędkość o wartości $v_0 = 3{,}20\\text{ m/s}$. Licząc od wysokości $h$, aż do podłoża, kulka spadała swobodnie i się nie obracała. Po upadku na twarde podłoże kulka odbiła się od niego.</p>
<p>Do analizy zjawiska przyjmij model, w którym pomijamy opory ruchu, a pole grawitacyjne Ziemi jest jednorodne i przyśpieszenie ziemskie ma wartość $g = 9{,}81\\text{ m/s}^2$.</p>

<h4>Zadanie 2.1. (0–2)</h4>
<p><strong>Oblicz czas spadania kulki od wysokości $h$ do momentu uderzenia o podłoże. Zapisz obliczenia.</strong></p>

<h4>Zadanie 2.2. (0–2)</h4>
<p><strong>Oblicz wartość prędkości kulki tuż przed uderzeniem o podłoże. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Ruch jednostajnie przyspieszony z prędkością początkową skierowaną pionowo w dół. Czas wyznaczamy z równania kwadratowego drogi lub z prędkości końcowej.',
      givens: '$h = 1{,}80\\text{ m}$, $v_0 = 3{,}20\\text{ m/s}$, $g = 9{,}81\\text{ m/s}^2$',
      steps: [
        { title: 'Zadanie 2.1', content: 'Równanie drogi: $h = v_0 t + \\frac{gt^2}{2} \\implies 4{,}905 t^2 + 3{,}20 t - 1{,}80 = 0$. $\\Delta = 3{,}20^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$. $\\sqrt{\\Delta} \\approx 6{,}7495$. Dodatni pierwiastek: $t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$.' },
        { title: 'Zadanie 2.2', content: 'Wartość prędkości końcowej: $v_k = v_0 + gt = 3{,}20 + 9{,}81 \\cdot 0{,}3618 \\approx 6{,}75\\text{ m/s}$ (lub z zasady zachowania energii: $v_k = \\sqrt{v_0^2 + 2gh} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}75\\text{ m/s}$).' }
      ],
      numerical: '2.1: $t \\approx 0{,}36\\text{ s}$; 2.2: $v_k \\approx 6{,}75\\text{ m/s}$',
      answer: '2.1: $t \\approx 0{,}36\\text{ s}$; 2.2: $v_k \\approx 6{,}75\\text{ m/s}$.',
      trap: 'Zwróć uwagę, że kulka miała prędkość początkową skierowaną w dół ($v_0 > 0$), więc nie jest to upuszczenie ze spoczynku.'
    }
  }
];

// Combine existing tasks with new official CKE tasks
const allTasks = [...existingTasks, ...newCkeTasks];

// Update data-courses
let foundSub = false;
data['matura-fizyka'].sections.forEach(sec => {
  if (sec.subchapters) {
    sec.subchapters.forEach(sub => {
      if (sub.id === 'sub-matura-cke') {
        sub.tasks = allTasks;
        foundSub = true;
      }
    });
  }
});

const newJsonText = JSON.stringify(data, null, 2);
const finalContent = headerText + newJsonText + ';\n';
fs.writeFileSync('js/data-courses.js', finalContent, 'utf8');

console.log(`Successfully updated js/data-courses.js! Total tasks in sub-matura-cke: ${allTasks.length}`);
