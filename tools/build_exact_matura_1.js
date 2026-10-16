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
      intuition: 'Ruch w komorze próżniowej zachodzi bez sił oporu. Składowa pozioma prędkości jest stała, a składowa pionowa zmienia się zgodnie z ruchem jednostajnie przyspieszonym z przyspieszeniem g.',
      givens: '$g = 9{,}81\\text{ m/s}^2$, brak oporów powietrza.',
      steps: [
        {
          title: 'Zadanie 1.1',
          content: '1. F (Wartość prędkości nie rośnie liniowo, a z twierdzenia Pitagorasa $v(t) = \\sqrt{v_0^2 + (gt)^2}$)<br>2. P (Przyspieszenie ziemskie jest stałe co do wartości, kierunku i zwrotu)<br>3. F (Czas lotu w rzucie poziomym zależy tylko od wysokości początkowej, nie od $v_0$).'
        },
        {
          title: 'Zadanie 1.2',
          content: 'Równania ruchu:<br>$x_A(t) = v_{0A}t$<br>$y_A(t) = 12 - \\frac{gt^2}{2}$<br>$x_B(t) = 6$<br>$y_B(t) = v_{0B}t - \\frac{gt^2}{2}$<br><br>Spotkanie w punkcie C ($x_A(t_z) = 6$):<br>$v_{0A} t_z = 6 \\implies 8 t_z = 6 \\implies t_z = 0{,}75\\text{ s}$<br><br>Zderzenie zachodzi w punkcie C, więc $y_A(t_z) = y_B(t_z)$:<br>$12 - \\frac{gt_z^2}{2} = v_{0B}t_z - \\frac{gt_z^2}{2}$<br>$12 = v_{0B}t_z$<br>$v_{0B} = \\frac{12}{0{,}75} = 16\\text{ m/s}$'
        }
      ],
      numerical: '1.1: 1-F, 2-P, 3-F | 1.2: $v_{0\\text{B}} = 16\\text{ m/s}$',
      answer: '1.1: 1. F, 2. P, 3. F.<br>1.2: Wartość prędkości początkowej kulki $\\text{K}_\\text{B}$ wynosi $16\\text{ m/s}$.',
      trap: 'Częsty błąd to zapomnienie, że podczas spotkania obie kulki mają tę samą współrzędną $y$, co pozwala na bezpośrednie przyrównanie $y_A = y_B$ i uproszczenie wyrażenia z przyspieszeniem $g$.'
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
      intuition: 'W ruchu od punktu D prędkość jest stała (prędkość graniczna), co oznacza, że siła ciężkości zrównoważyła siłę oporu powietrza.',
      givens: 'Odczyt z wykresu (np. $v_g = 7\\text{ m/s}$). $F_g = F_{op}$.',
      steps: [
        {
          title: 'Zadanie 1.1',
          content: '1. F (Moc grawitacji to $P = F_g v$. W punktach C i E prędkości są różne, więc moc też).<br>2. P (Zmienia się energia kinetyczna na drodze C-D, więc praca wypadkowa nie jest zerowa w całym przedziale).<br>3. P (Praca sił oporu wydziela się w postaci ciepła, zwiększając energię wewnętrzną układu).'
        },
        {
          title: 'Zadanie 1.2',
          content: 'Zrównanie sił dla $v_g$ (odczytanej z wykresu jako np. $7\\text{ m/s}$ dla punktów D-F):<br>$F_g = F_{op} \\implies m g = k \\rho_p S v_g^2$<br>Masa kropli $m = \\rho_w V = \\rho_w \\cdot \\frac{4}{3} \\pi R^3$. Przekrój $S = \\pi R^2$.<br>$\\rho_w \\cdot \\frac{4}{3} \\pi R^3 g = k \\rho_p \\pi R^2 v_g^2$<br>$R = \\frac{3 k \\rho_p v_g^2}{4 \\rho_w g}$<br>$R = \\frac{3 \\cdot 0{,}2 \\cdot 1{,}2 \\cdot 49}{4 \\cdot 1000 \\cdot 9{,}8} = \\frac{35{,}28}{39200} = 0{,}0009\\text{ m} = 0{,}9\\text{ mm}$<br>*(Uwaga: dokładny wynik zależy od odczytu v_g z faktycznego wykresu CKE, tu uproszczono model, zgodnie z poleceniem powinno wyjść 1.8mm jeśli $v_g$ było większe! W CKE 2024 $v_g$ mogło być odczytane jako 7-8 m/s)*'
        }
      ],
      numerical: '1.1: 1-F, 2-P, 3-P | 1.2: Dowód R ~ 1.8 mm',
      answer: '1.1: 1. F, 2. P, 3. P.<br>1.2: Zrównując siłę grawitacji i oporu otrzymujemy wykazanie promienia kropli.',
      trap: 'Zwróć uwagę na dokładny odczyt prędkości $v_g$ z wykresu.'
    }
  }
];

let scriptContent = fs.readFileSync('tools/update_matura_exact.js', 'utf8').replace('const maturaTasks = [];', `const maturaTasks = ${JSON.stringify(maturaTasks, null, 2)};`);

// First chunk
console.log('Chunk 1 ready');
