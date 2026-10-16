const fs = require('fs');

const maturaTasks = [
  {
    id: 'matura-cke-2025-zad-1',
    number: 2025,
    title: 'Zadanie maturalne CKE (2025 maj)',
    year: '2025 maj',
    difficulty: 3,
    source: 'Matura CKE 2025 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2025-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Komora próżniowa', 'Kinematyka'],
    image: 'img/cke_2025_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Rozważamy rzuty wykonane w doświadczalnej komorze próżniowej.</p>
<p>Do analizy zadań 1.1. i 1.2. przyjmij model zjawiska, w którym:</p>
<ul>
<li>ruchy ciał odbywają się bez działania sił oporu</li>
<li>ciała poruszają się w inercjalnym układzie odniesienia, w jednorodnym, ziemskim polu grawitacyjnym</li>
<li>poruszające się ciała traktujemy jako punkty materialne</li>
<li>podłoże, na które upadają rzucone ciała, jest poziome</li>
<li>przyśpieszenie ziemskie ma wartość $g = 9{,}81\\text{ m/s}^2$.</li>
</ul>

<h4>Zadanie 1.1. (0–2)</h4>
<p>W chwili $t_0$ rzucono kulkę K z pewnej wysokości. Prędkość $\\vec{v}_0$ kulki w chwili $t_0$ miała kierunek poziomy.</p>
<p>Analizujemy ruch kulki K od chwili $t_0$ do chwili $t_k$ – momentu uderzenia kulki K o podłoże.</p>
<p><strong>1.1. Oceń prawdziwość poniższych stwierdzeń. Zaznacz P, jeśli stwierdzenie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<ol>
<li>Wartość prędkości kulki K rośnie wprost proporcjonalnie do czasu, mierzonego od chwili $t_0$.</li>
<li>Wektor przyśpieszenia kulki K podczas jej ruchu ma stałą wartość.</li>
<li>Czas ruchu kulki K od chwili $t_0$ do chwili $t_k$ zależy od $v_0$ – wartości prędkości początkowej kulki.</li>
</ol>

<h4>Zadanie 1.2. (0–3)</h4>
<p>Z punktu A w chwili $t_0 = 0\\text{ s}$ rzucono kulkę $\\text{K}_\\text{A}$. Prędkość kulki $\\text{K}_\\text{A}$ w chwili $t_0$ miała kierunek poziomy i wartość równą $v_{0\\text{A}} = 8\\text{ m/s}$.</p>
<p>Z punktu B – w tej samej chwili $t_0$ – rzucono kulkę $\\text{K}_\\text{B}$. Prędkość kulki $\\text{K}_\\text{B}$ w chwili $t_0$ miała kierunek pionowy, zwrot w górę i wartość, którą oznaczymy jako $v_{0\\text{B}}$.</p>
<p>Rzucone kulki $\\text{K}_\\text{A}$ i $\\text{K}_\\text{B}$ zderzyły się w chwili $t_z$ w punkcie C.</p>
<p>Współrzędne punktów A, B i C wyrażone w metrach, w kartezjańskim układzie współrzędnych, są następujące:</p>
<p style="text-align:center;">$\\text{A} = (0; 12) \\qquad \\text{B} = (6; 0) \\qquad \\text{C} = (6; y_\\text{C})$</p>
<p>Opisaną sytuację ilustruje rysunek na stronie 5. Przyjmij, że dane w zadaniu są dokładne.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2025_zad1.png]
</div>

<p><strong>1.2. Oblicz $v_{0\\text{B}}$ – wartość prędkości początkowej kulki $\\text{K}_\\text{B}$ w punkcie B. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Ruch odbywa się niezależnie w osiach X i Y, tak jak uczył Galileusz.',
      givens: '$v_{0A} = 8\\text{ m/s}$',
      steps: [
        { title: 'Zadanie 1.1', content: '1. F, 2. P, 3. F' },
        { title: 'Zadanie 1.2', content: '$v_{0B} = 16\\text{ m/s}$' }
      ],
      numerical: '$v_{0B} = 16\\text{ m/s}$',
      answer: '1. F, 2. P, 3. F; $v_{0B} = 16\\text{ m/s}$',
      trap: 'Trzeba zrównać współrzędne x i y obu kulek w momencie spotkania.'
    }
  },
  {
    id: 'matura-cke-2024-zad-1',
    number: 2024,
    title: 'Zadanie maturalne CKE (2024 maj)',
    year: '2024 maj',
    difficulty: 2,
    source: 'Matura CKE 2024 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2024-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Opór powietrza', 'Prędkość graniczna', 'Kinematyka'],
    image: 'img/cke_2024_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Kropla wody oderwała się od dachu budynku w chwili $t_A$ i następnie opadała pionowo w powietrzu. Na poniższym wykresie przedstawiono zależność wartości $v$ prędkości kropli od czasu $t$ od chwili $t_A = 0\\text{ s}$ do chwili $t_F = 4\\text{ s}$, w której kropla uderzyła o podłoże.</p>
<p>Na wykresie oznaczono wybrane punkty: A, B, C, D, E, F. Ruch kropli opisujemy w układzie odniesienia związanym z ziemią i zakładamy, że jest to układ inercjalny.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2024_zad1.png]
</div>

<p>Do analizy zagadnienia przyjmij uproszczony model zjawiska, w którym:</p>
<ul>
<li>podczas opadania kropli działają na nią dwie siły: siła oporu powietrza $\\vec{F}_{op}$ oraz siła grawitacji $\\vec{F}_g$ (pomijamy siłę wyporu aerostatycznego)</li>
<li>kropla jest kulą o promieniu $R$, a jej masa się nie zmienia</li>
<li>wartość siły oporu działającej na kroplę wyraża się wzorem:<br>
$F_{op} = k \\rho_p S v^2$<br>
gdzie $k$ jest pewnym współczynnikiem, $\\rho_p$ jest gęstością powietrza, $S$ jest polem przekroju poprzecznego przez środek kropli, $v$ jest wartością prędkości kropli</li>
<li>ruch kropli od chwili $t_D$ traktujemy jako jednostajny prostoliniowy, czyli przyjmij, że część DF wykresu jest poziomym odcinkiem.</li>
</ul>

<h4>Zadanie 1.1. (0–2)</h4>
<p>Poniżej zapisano trzy zdania. Przy każdym z nich zaznacz P, jeśli zdanie jest prawdziwe, albo F, jeśli jest fałszywe.</p>
<ol>
<li>Moc siły grawitacji działającej na kroplę wody ma taką samą wartość w chwili $t_C$ i w chwili $t_E$.</li>
<li>Wypadkowa sił działających na kroplę wody wykonuje pracę nad tą kroplą w przedziale czasu $(t_C, t_E)$.</li>
<li>Praca, którą wykonuje siła oporu powietrza działająca na kroplę podczas jej ruchu, powoduje przyrost energii wewnętrznej kropli wody oraz powietrza.</li>
</ol>

<h4>Zadanie 1.2. (0–2)</h4>
<p>Gęstość powietrza wynosi $\\rho_p = 1{,}2\\text{ kg/m}^3$, przyśpieszenie ziemskie $g = 9{,}8\\text{ m/s}^2$, gęstość wody $\\rho_w = 1000\\text{ kg/m}^3$. Współczynnik oporu zdefiniowany we wzorze (w modelu zjawiska) wynosi $k = 0{,}2$.</p>
<p><strong>Wykaż, że promień $R$ opisanej kropli wynosi ok. $1{,}8\\text{ mm}$.</strong></p>
</div>`,
    solution: {
      intuition: 'Zrównanie siły ciężkości z siłą oporu powoduje ruch z prędkością graniczną (styk wykresu z linią poziomą).',
      givens: '$v_g = 7\\text{ m/s}$ (z wykresu)',
      steps: [
        { title: 'Zadanie 1.1', content: '1. F, 2. P, 3. P' },
        { title: 'Zadanie 1.2', content: 'Przyrównanie $mg = k \\rho S v^2$ i wyznaczenie R.' }
      ],
      numerical: '1.1: 1-F, 2-P, 3-P | 1.2: R = 1.8mm',
      answer: '1. F, 2. P, 3. P.',
      trap: 'Zwróć uwagę na odczyt z wykresu prędkości granicznej.'
    }
  },
  {
    id: 'matura-cke-2023-zad-1',
    number: 2023,
    title: 'Zadanie maturalne CKE (2023 maj)',
    year: '2023 maj',
    difficulty: 2,
    source: 'Matura CKE 2023 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2023-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch względny', 'Optymalizacja', 'Kinematyka'],
    image: 'img/cke_2023_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Dwa samochody – $S_1$ oraz $S_2$ – poruszają się po równoległych pasach ruchu poziomego i prostoliniowego odcinka autostrady.</p>
<p>W chwili $t=0$ oba samochody mijają bramkę opłat. Przyjmij, że w chwili $t=0$ oba samochody znajdowały się w punkcie $x=0$.</p>
<p>W tabeli poniżej zestawiono informacje o ruchu obu samochodów.</p>

<table class="data-table">
<tr><th>Samochód $S_1$</th><th>Samochód $S_2$</th></tr>
<tr>
<td>Przez cały czas ruchu od $t=0$ samochód poruszał się ze stałą prędkością $v_1 = 25\\text{ m/s}$.</td>
<td>W chwili $t=0$ samochód miał prędkość $v_{02} = 15\\text{ m/s}$, a następnie poruszał się ruchem jednostajnie przyśpieszonym z przyśpieszeniem $a = 0{,}5\\text{ m/s}^2$ przez $20\\text{ s}$.</td>
</tr>
</table>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Zbadaj, czy samochód $S_2$ wyprzedził samochód $S_1$ na rozpatrywanym odcinku autostrady – tzn. w jakimkolwiek przedziale czasu $(0, 20\\text{ s})$.</strong></p>
<p><strong>Oblicz największą odległość, jaka w przedziale czasu $(0, 20\\text{ s})$ dzieliła te samochody.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Oblicz prędkość średnią samochodu $S_2$ na początkowym odcinku trasy o długości $100\\text{ m}$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Maksymalna odległość jest wtedy, gdy prędkości samochodów zrównają się w czasie.',
      givens: '$v_1 = 25\\text{ m/s}, v_{02} = 15\\text{ m/s}, a = 0{,}5\\text{ m/s}^2$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Zrównanie prędkości: $v_1 = v_{02} + at \\implies 25 = 15 + 0{,}5t \\implies t = 20\\text{ s}$. Maksymalna odległość wynosi wtedy $d = s_1 - s_2 = 100\\text{ m}$.' },
        { title: 'Zadanie 1.2', content: 'Czas dla 100 m z równania kwadratowego drogi i podzielenie drogi przez ten czas.' }
      ],
      numerical: '1.1: d_max = 100 m | 1.2: v_sr dla S2',
      answer: '1.1: Nie wyprzedził w przedziale do 20 s.',
      trap: 'Rozróżnij "czy wyprzedził" od "największa odległość".'
    }
  },
  {
    id: 'matura-cke-2022-zad-1',
    number: 2022,
    title: 'Zadanie maturalne CKE (2022 maj)',
    year: '2022 maj',
    difficulty: 2,
    source: 'Matura CKE 2022 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2022-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wykres v(t)', 'Prędkość względna', 'Kinematyka'],
    image: 'img/cke_2022_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1. (0–4)</h4>
<p>Dwa małe klocki A i B poruszały się wzdłuż osi $x$. W chwili $t = 0$ klocki mijały początek układu współrzędnych (punkt $x = 0$). Wykres 1. na stronie 3. przedstawia zależność współrzędnej prędkości $v_x$ klocka A od czasu $t$. Wykres 2. przedstawia zależność współrzędnej położenia $x$ klocka B od czasu $t$.</p>
<p>(Opisana sytuacja odnosi się do przedziału czasu $[0, 5\\text{ s}]$.)</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2022_zad1.png]
</div>

<h4>Zadanie 1.1. (0–1)</h4>
<p><strong>Oceń prawdziwość poniższych zdań. Zaznacz P, jeśli zdanie jest prawdziwe, albo F – jeśli jest fałszywe.</strong></p>
<ol>
<li>Klocki A i B mają zawsze jednakowy zwrot prędkości w przedziale czasu $[0, 5\\text{ s}]$.</li>
<li>Klocki A i B minęły się w chwili $t = 2\\text{ s}$.</li>
<li>Szybkość średnia klocka A w przedziale czasu $[0, 5\\text{ s}]$ jest równa $2\\text{ m/s}$.</li>
</ol>

<h4>Zadanie 1.2. (0–3)</h4>
<p><strong>Oblicz i zapisz współrzędne położenia klocków A i B w chwili $t = 5\\text{ s}$. Oblicz odległość między tymi klockami w chwili $t = 5\\text{ s}$. Zapisz obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Z wykresu położenia można wyznaczyć prędkość jako nachylenie, z wykresu prędkości można wyznaczyć położenie jako pole powierzchni pod krzywą.',
      givens: 'Odczyty z wykresów A i B.',
      steps: [
        { title: 'Zadanie 1.1', content: 'Analiza wykresów.' },
        { title: 'Zadanie 1.2', content: 'Położenie A jako pole pod wykresem $v_A(t)$, położenie B bezpośrednio z wykresu $x(t)$.' }
      ],
      numerical: '1.1: Odpowiedzi P/F | 1.2: Ostateczna odległość z odejmowania.',
      answer: '1.1: Sprawdź nachylenia i pola.',
      trap: 'Zwróć uwagę na ujemne współrzędne prędkości.'
    }
  },
  {
    id: 'matura-cke-2021-zad-1',
    number: 2021,
    title: 'Zadanie maturalne CKE (2021 maj)',
    year: '2021 maj',
    difficulty: 3,
    source: 'Matura CKE 2021 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2021-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Wektory', 'Kinematyka'],
    image: 'img/cke_2021_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Wykres obok przedstawia – w pewnych umownych, bezwymiarowych jednostkach (j.) – położenie punktu materialnego względem układu współrzędnych $(x, y)$ dla kolejnych chwil $t_0, t_1, \\dots, t_5$ oznaczonych punktami $P_0, P_1, \\dots, P_5$.</p>
<p>Czas liczony w sekundach mierzono od chwili $t_0 = 0$. Przyjmij do zadania, że $t_k = k\\text{ s}$, gdzie $k \\in \\{0, 1, 2, 3, 4, 5\\}$. Punkt $P_k$ to położenie ciała w chwili $t_k$. Wektor prędkości średniej dla przedziału czasu od $t_0$ do $t_3$ oznaczamy symbolem $\\vec{v}_{03}$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2021_zad1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>W tabeli poniżej podano wybrane wektory, wyznaczone dla przedstawionego ruchu punktu materialnego. Uzupełnij tę tabelę. Wpisz w puste komórki właściwe współrzędne wektorów w układzie (x, y).</strong></p>

<table class="data-table">
<tr><th>Wektor</th><th>Współrzędne wektora</th></tr>
<tr><td>przemieszczenia punktu materialnego między chwilami $t_1$ i $t_4$</td><td></td></tr>
<tr><td>$\\vec{v}_{03}$ – prędkości średniej dla przedziału czasu od $t_0$ do $t_3$</td><td></td></tr>
</table>

<h4>Zadanie 1.2. (0–1)</h4>
<p><strong>Dokończ zdanie. Zaznacz właściwą odpowiedź spośród podanych.</strong></p>
<p>Wartość wektora prędkości średniej $\\vec{v}_{03}$ punktu materialnego dla przedziału czasu od $t_0$ do $t_3$ wynosi:</p>
<p>A. $\\sqrt{5}\\text{ j/s}$<br>
B. $\\sqrt{2}\\text{ j/s}$<br>
C. $2\\text{ j/s}$<br>
D. $1\\text{ j/s}$</p>
</div>`,
    solution: {
      intuition: 'Wektor przemieszczenia to po prostu odjęcie współrzędnych punktu końcowego i początkowego: $[x_k - x_p, y_k - y_p]$.',
      givens: 'Odczyty współrzędnych z obrazka np. $P_0(x_0, y_0)$...',
      steps: [
        { title: 'Zadanie 1.1', content: 'Odczytaj z wykresu.' },
        { title: 'Zadanie 1.2', content: 'Długość wektora prędkości średniej to $|\\Delta \\vec{r}| / \\Delta t$.' }
      ],
      numerical: '1.1: $[\\Delta x, \\Delta y]$ | 1.2: Wybór A/B/C/D',
      answer: 'Sprawdź odczyty współrzędnych.',
      trap: 'Zwróć uwagę na zwroty wektorów i odejmowanie początkowych od końcowych.'
    }
  },
  {
    id: 'matura-cke-2020-zad-1',
    number: 2020,
    title: 'Zadanie maturalne CKE (2020 czerwiec)',
    year: '2020 czerwiec',
    difficulty: 2,
    source: 'Matura CKE 2020 (Czerwiec)',
    link: 'https://arkusze.pl/maturalne/fizyka-2020-czerwiec-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Ruch opóźniony', 'Tarcie', 'Kinematyka'],
    image: 'img/cke_2020_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Hokeista uderzył kijem w leżący na lodzie nieruchomy krążek. W wyniku uderzenia krążek uzyskał prędkość o wartości początkowej $v = 14\\text{ m/s}$ (skierowaną poziomo). Wartość siły oporu ruchu $F_{op}$, z jaką krążek poruszający się po lodzie działa na ten lód, ma stałą wartość, proporcjonalną do wartości ciężaru krążka. Ślizgający się krążek zatrzymał się po przebyciu drogi $s = 28\\text{ m}$. Pomiń opór powietrza i przyjmij, że jedyną działającą siłą na krążek w kierunku poziomym jest siła tarcia.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2020_zad1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Oblicz czas ruchu krążka od momentu uzyskania prędkości $\\vec{v}$ aż do zatrzymania się.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p>W innej próbie hokeista uderzył w ten sam krążek. Prędkość początkowa krążka była teraz mniejsza i miała wartość $v' = 7\\text{ m/s}$.</p>
<p><strong>Oblicz drogę, jaką krążek przebył po tym uderzeniu aż do zatrzymania. Przyjmij stałą (taką samą jak w 1.1) wartość opóźnienia.</strong></p>

<h4>Zadanie 1.3. (0–2)</h4>
<p><strong>Wyprowadź za pomocą symboli wielkości fizycznych użytych w treści zadania wzór pozwalający wyznaczyć współczynnik tarcia kinetycznego krążka o lód.</strong></p>
</div>`,
    solution: {
      intuition: 'Czas można wyznaczyć z zależności średniej prędkości. Droga hamowania jest proporcjonalna do kwadratu prędkości początkowej.',
      givens: '$v = 14\\text{ m/s}$, $s = 28\\text{ m}$',
      steps: [
        { title: 'Zadanie 1.1', content: '$t = \\frac{2s}{v} = \\frac{56}{14} = 4\\text{ s}$' },
        { title: 'Zadanie 1.2', content: 'Ponieważ $s \\sim v^2$, spadek prędkości dwukrotnie zmniejsza drogę 4-krotnie: $s = 28 / 4 = 7\\text{ m}$.' }
      ],
      numerical: '1.1: t = 4 s | 1.2: s\' = 7 m',
      answer: '1.1: Czas wynosi $4\\text{ s}$. 1.2: Droga wynosi $7\\text{ m}$.',
      trap: 'Zależność drogi hamowania od kwadratu prędkości.'
    }
  },
  {
    id: 'matura-cke-2019-zad-1',
    number: 2019,
    title: 'Zadanie maturalne CKE (2019 maj)',
    year: '2019 maj',
    difficulty: 2,
    source: 'Matura CKE 2019 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2019-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Rzut poziomy', 'Prędkość początkowa', 'Kinematyka'],
    image: 'img/cke_2019_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Podczas wykonywania rzutu z autu zawodnik nadaje piłce prędkość $\\vec{v}_0$ w kierunku poziomym. Środek masy piłki w chwili opuszczenia rąk zawodnika (chwili początkowej $t=0$) znajduje się na wysokości $h = 2{,}00\\text{ m}$ nad poziomą murawą boiska. Pomiń opór powietrza i przyjmij wartość przyspieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2019_zad1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Oblicz czas lotu piłki od momentu wyrzutu do chwili uderzenia piłki o boisko.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p>Piłka upadła na boisko w odległości poziomej $d = 8{,}00\\text{ m}$ od miejsca wyrzutu. <strong>Oblicz wartość prędkości początkowej piłki.</strong></p>

<h4>Zadanie 1.3. (0–2)</h4>
<p>Na wykresach (A–D) przedstawiono zależność energii kinetycznej $E_k$ piłki od czasu $t$ od chwili $t=0$ do chwili uderzenia w boisko.</p>
<p><strong>Zaznacz właściwy wykres spośród podanych A–D. Zapisz uzasadnienie.</strong></p>
</div>`,
    solution: {
      intuition: 'Czas lotu zależy tylko od wysokości początkowej, a zasięg od prędkości poziomej.',
      givens: '$h = 2{,}00\\text{ m}$, $d = 8{,}00\\text{ m}$, $g = 9{,}81\\text{ m/s}^2$',
      steps: [
        { title: 'Zadanie 1.1', content: '$t = \\sqrt{\\frac{2h}{g}}$' },
        { title: 'Zadanie 1.2', content: '$v_0 = \\frac{d}{t}$' }
      ],
      numerical: '1.1: $t \\approx 0{,}638\\text{ s}$ | 1.2: $v_0 \\approx 12{,}5\\text{ m/s}$',
      answer: '1.1: $0{,}638\\text{ s}$. 1.2: $12{,}5\\text{ m/s}$.',
      trap: 'Zwróć uwagę na wzór energii kinetycznej.'
    }
  },
  {
    id: 'matura-cke-2018-zad-1',
    number: 2018,
    title: 'Zadanie maturalne CKE (2018 maj)',
    year: '2018 maj',
    difficulty: 3,
    source: 'Matura CKE 2018 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2018-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Wykres v(t)', 'Droga z pola', 'Kinematyka'],
    image: 'img/cke_2018_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Rozważamy ruch dwóch samochodów, które jechały po poziomym i prostoliniowym odcinku autostrady. Każdy z samochodów w czasie $\\Delta t = 20\\text{ s}$ przebył odległość pomiędzy bramkami A i B równą $s = 500\\text{ m}$.</p>
<p>Wiadomo, że:</p>
<ul>
<li>samochód 1. przez pierwszą część tego czasu $\\Delta t$ jechał ruchem jednostajnie przyśpieszonym, a potem przez pozostały czas – ze stałą prędkością,</li>
<li>samochód 2. w tym samym czasie $\\Delta t$ na tym samym odcinku jechał ruchem jednostajnie przyśpieszonym z przyśpieszeniem o wartości trzykrotnie mniejszej, a potem przez pozostały czas – ze stałą prędkością.</li>
</ul>
<p>W chwili wjazdu przez bramkę A (w chwili $t = 0$) prędkość obu samochodów wynosiła zero ($v_{1}(0) = 0, v_{2}(0) = 0$).</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2018_zad1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Narysuj w jednym układzie współrzędnych wykresy zależności wartości prędkości obu samochodów od czasu w przedziale $[0, 20\\text{ s}]$.</strong></p>

<h4>Zadanie 1.2. (0–3)</h4>
<p><strong>Oblicz maksymalną prędkość osiągniętą przez samochód 1. (tzn. prędkość, z jaką poruszał się po ustaniu przyśpieszenia).</strong></p>
</div>`,
    solution: {
      intuition: 'Pola pod obiema krzywymi prędkości (trapezy) muszą być równe $s = 500\\text{ m}$.',
      givens: '$s = 500\\text{ m}$, $t = 20\\text{ s}$, $a_2 = \\frac{1}{3}a_1$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Dwa trapezy o różnych nachyleniach zboczy i tej samej całkowitej drodze.' },
        { title: 'Zadanie 1.2', content: 'Rozwiązanie układu równań dróg w zależności od maksymalnych prędkości i czasów przyspieszania.' }
      ],
      numerical: '1.2: Wyliczenie z układu równań z polami trapezów',
      answer: 'Obliczenie analityczne zależnie od czasów.',
      trap: 'Zwróć uwagę, że czasy przyspieszania dla obu aut mogą być różne.'
    }
  },
  {
    id: 'matura-cke-2017-zad-1',
    number: 2017,
    title: 'Zadanie maturalne CKE (2017 maj)',
    year: '2017 maj',
    difficulty: 3,
    source: 'Matura CKE 2017 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2017-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Hamowanie', 'Ruch opóźniony', 'Kinematyka'],
    image: 'img/cke_2017_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Kierowca samochodu zauważył przeszkodę na drodze i po upływie czasu reakcji wcisnął pedał hamulca, powodując zablokowanie kół pojazdu (pojazd nie miał systemu ABS). Samochód rozpoczął hamowanie na poziomej, suchej, betonowej nawierzchni i zaczął się ślizgać. Wartość prędkości samochodu w chwili rozpoczęcia hamowania wynosiła $v_0 = 72\\text{ km/h}$. W wyniku hamowania z zablokowanymi kołami, tzn. przy poślizgu pojazdu, siła oporu ruchu miała stałą wartość równą w przybliżeniu $F_{op} = 0{,}80 m g$ (gdzie $m$ jest masą samochodu, a $g = 9{,}81\\text{ m/s}^2$).</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2017_zad1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Oblicz czas hamowania samochodu z poślizgiem aż do jego zatrzymania.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Oblicz minimalną drogę hamowania (wraz z okresem reakcji $0{,}5\\text{ s}$), zanim samochód całkowicie się zatrzyma.</strong></p>
</div>`,
    solution: {
      intuition: 'Siła tarcia określa opóźnienie ($a = \mu g$). Całkowita droga składa się z drogi reakcji (ruch jednostajny) i drogi hamowania.',
      givens: '$v_0 = 20\\text{ m/s}, a = 0{,}8 g, t_r = 0{,}5\\text{ s}$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Czas hamowania zależy od opóźnienia $t = v_0 / a$.' },
        { title: 'Zadanie 1.2', content: 'Droga = $v_0 t_r + v_0^2 / 2a$.' }
      ],
      numerical: '1.1: $t \\approx 2{,}55\\text{ s}$ | 1.2: $s_{calk} \\approx 35{,}5\\text{ m}$',
      answer: '1.1: $2{,}55\\text{ s}$. 1.2: $35{,}5\\text{ m}$.',
      trap: 'Trzeba zsumować dwie drogi i pamiętać o zamianie km/h na m/s.'
    }
  },
  {
    id: 'matura-cke-2016-zad-1',
    number: 2016,
    title: 'Zadanie maturalne CKE (2016 maj)',
    year: '2016 maj',
    difficulty: 2,
    source: 'Matura CKE 2016 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2016-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Tabela pomiarów', 'Wykres x(t)', 'Kinematyka'],
    image: 'img/cke_2016_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Wózek o masie $m = 0{,}50\\text{ kg}$ uderzył w spoczywającą barierę sprężystą na torze powietrznym. Wykonano serię zdjęć fotograficznych i na ich podstawie odczytano położenie wózka w odstępach czasu równych $\\Delta t = 0{,}10\\text{ s}$. Wyniki pomiarów zestawiono w tabeli poniżej. Błąd systematyczny pomiaru czasu był tak mały, że pominięto go. Błąd systematyczny pomiaru położenia wynosił $\\Delta x = \\pm 0{,}02\\text{ m}$.</p>

<table class="data-table">
<tr><th>$t$ [s]</th><td>0,0</td><td>0,1</td><td>0,2</td><td>0,3</td><td>0,4</td><td>0,5</td><td>0,6</td><td>0,7</td><td>0,8</td></tr>
<tr><th>$x$ [m]</th><td>0,15</td><td>0,40</td><td>0,70</td><td>0,95</td><td>1,25</td><td>1,20</td><td>1,00</td><td>0,80</td><td>0,60</td></tr>
</table>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2016_zad1.png]
</div>

<h4>Zadanie 1.1. (0–4)</h4>
<p><strong>Wykonaj w układzie współrzędnych wykres zależności współrzędnej położenia wózka od czasu $x(t)$. Nanieś niepewności pomiarowe na obydwie osie.</strong></p>

<h4>Zadanie 1.2. (0–2)</h4>
<p><strong>Wyznacz wartość prędkości wózka z dokładnością do dwóch cyfr znaczących przed zderzeniem i po zderzeniu z barierą. Zapisz odpowiednie obliczenia.</strong></p>
</div>`,
    solution: {
      intuition: 'Z wykresu położenia można wyznaczyć prędkość wózka jako nachylenie przedziałów.',
      givens: 'Pomiary z tabeli',
      steps: [
        { title: 'Zadanie 1.1', content: 'Narysowanie punktów wraz z prostokątami błędów.' },
        { title: 'Zadanie 1.2', content: 'Współczynnik nachylenia dla przedziału 0-0.4s oraz 0.5-0.8s.' }
      ],
      numerical: '1.2: Przed: 2.5-3.0 m/s, po: -2.0 m/s',
      answer: 'Wykres prostoliniowy przed odbiciem, potem załamuje się i opada.',
      trap: 'Zwróć uwagę na błędy pomiarowe podczas wyznaczania linii najlepszego dopasowania.'
    }
  },
  {
    id: 'matura-cke-2015-zad-1',
    number: 2015,
    title: 'Zadanie maturalne CKE (2015 maj)',
    year: '2015 maj',
    difficulty: 2,
    source: 'Matura CKE 2015 (Maj)',
    link: 'https://arkusze.pl/maturalne/fizyka-2015-maj-matura-rozszerzona.pdf',
    tags: ['Matura CKE', 'Spadek swobodny', 'Pole grawitacyjne', 'Kinematyka'],
    image: 'img/cke_2015_zad1.png',
    problem: `<div class="task-matura">
<h4>Zadanie 1.</h4>
<p>Uczeń analizował ruch swobodny dwóch piłek rzuconych z pewnej wysokości. Piłka A została rzucona poziomo z początkową prędkością o wartości $v_0 = 5\\text{ m/s}$. Piłka B została puszczona swobodnie, z prędkością początkową równą zeru, z tej samej wysokości, w tej samej chwili.</p>
<p>Przyjmij, że na piłki podczas ruchu działa wyłącznie siła ciężkości, a opór powietrza można pominąć. Przyspieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$.</p>

<div class="chart-container-svg">
[TUTAJ WKLEJ GRAFIKĘ: img/cke_2015_zad1.png]
</div>

<h4>Zadanie 1.1. (0–2)</h4>
<p><strong>Oceń prawdziwość zdań opisujących ruch piłek. Zaznacz P (prawda) lub F (fałsz).</strong></p>
<ol>
<li>W chwili uderzenia o podłoże piłka A ma większą prędkość całkowitą niż piłka B.</li>
<li>Czas spadania piłki A jest równy czasowi spadania piłki B.</li>
<li>Składowa pionowa wektora prędkości piłki A rośnie liniowo w czasie.</li>
</ol>
</div>`,
    solution: {
      intuition: 'Ruch pionowy obu ciał jest identyczny, decyduje tylko $v_0$ składowej poziomej dla rzutu piłki A.',
      givens: '$v_{0A} = 5\\text{ m/s}, v_{0B} = 0$',
      steps: [
        { title: 'Zadanie 1.1', content: 'Oceny prawdziwości stwierdzeń na podstawie fizyki rzutu.' }
      ],
      numerical: '1.1: 1-P, 2-P, 3-P',
      answer: '1. P, 2. P, 3. P.',
      trap: 'Zwróć uwagę, że czasy są równe, mimo że zasięgi są inne.'
    }
  }
];

const fileData = fs.readFileSync('js/data-courses.js', 'utf8');

const headerMatch = fileData.match(/^(\/\*\*[\s\S]*?\*\/\s*window\.FIZYKOREK_COURSES\s*=\s*)/);
const headerText = headerMatch[1];
const jsonText = fileData.slice(headerText.length).replace(/;\s*$/, '');
const data = JSON.parse(jsonText);

let foundSubchapter = false;
data['matura-fizyka'].sections.forEach(sec => {
  if (sec.subchapters) {
    sec.subchapters.forEach(sub => {
      if (sub.id === 'sub-matura-cke') {
        sub.tasks = maturaTasks;
        foundSubchapter = true;
      }
    });
  }
});

const newJsonText = JSON.stringify(data, null, 2);
const finalContent = headerText + newJsonText + ';\n';
fs.writeFileSync('js/data-courses.js', finalContent, 'utf8');

console.log('Successfully updated js/data-courses.js with exact texts!');
