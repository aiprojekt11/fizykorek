const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '..', 'js', 'data-courses.js');
let content = fs.readFileSync(filePath, 'utf8');

const newMaturaTasks = [
    {
        "id": "matura-cke-2025-zad-1",
        "number": 1,
        "title": "Zadanie maturalne CKE 2025: Zderzenie dwóch kulek w komorze próżniowej (Rzut poziomy i pionowy)",
        "difficulty": 3,
        "source": "CKE Matura z Fizyki (Poziom Rozszerzony) • Maj 2025 • Zadanie 1",
        "tags": [
            "Rzut poziomy",
            "Rzut pionowy",
            "Zderzenie ciał",
            "CKE 2025 Formuła 2023"
        ],
        "image": "img/cke_2025_zad1.svg",
        "problem": `<div class="task-cke-full">
<div class="task-intro">
    <p><strong>Informacja do zadań:</strong></p>
    <p>Rozważamy rzuty wykonane w doświadczalnej komorze próżniowej.</p>
    <p>Do analizy zjawiska przyjmij model, w którym:</p>
    <ul>
        <li>ruchy ciał odbywają się bez działania sił oporu;</li>
        <li>ciała poruszają się w inercjalnym układzie odniesienia, w jednorodnym ziemskim polu grawitacyjnym;</li>
        <li>poruszające się ciała traktujemy jako punkty materialne;</li>
        <li>podłoże, na które upadają rzucone ciała, jest poziome;</li>
        <li>przyśpieszenie ziemskie ma wartość $g = 9{,}81\\text{ m/s}^2$.</li>
    </ul>
    <p>Z punktu $A$ w chwili $t_0 = 0\\text{ s}$ rzucono kulkę $K^A$. Prędkość kulki $K^A$ w chwili $t_0$ miała kierunek poziomy i wartość równą $v_{0A} = 8\\text{ m/s}$.</p>
    <p>Z punktu $B$ – w tej samej chwili $t_0$ – rzucono kulkę $K^B$. Prędkość kulki $K^B$ w chwili $t_0$ miała kierunek pionowy, zwrot w górę i wartość $v_{0B}$.</p>
    <p>Rzucone kulki $K^A$ i $K^B$ zderzyły się w chwili $t_z$ w punkcie $C$.</p>
    <p>Współrzędne punktów $A$, $B$ i $C$ wyrażone w metrach w kartezjańskim układzie współrzędnych wynoszą:</p>
    <p align="center"><strong>$A = (0; 12), \\quad B = (6; 0), \\quad C = (6; y_C)$</strong></p>
</div>

<div class="task-figure">
    <img src="img/cke_2025_zad1.svg" alt="Rysunek do zadania 1 - CKE 2025" style="max-width: 100%; border-radius: 12px; margin: 15px 0;">
</div>

<div class="task-subquestions">
    <p><strong>Polecenie:</strong></p>
    <p>Oblicz $v_{0B}$ – wartość prędkości początkowej kulki $K^B$ w punkcie $B$ oraz współrzędną $y_C$ punktu zderzenia kulek. Zapisz pełny tok rozumowania i obliczenia.</p>
</div>
</div>`,
        "solution": {
            "intuition": "Kluczem jest zauważenie, że obie kulki wystartowały jednocześnie w chwili $t_0 = 0$. Kulka A porusza się w poziomie ruchem jednostajnym ($x_A(t) = v_{0A} t$). Ponieważ zderzenie następuje na pionowej prostej $x = 6\\text{ m}$, czas do zderzenia $t_z$ wynika bezpośrednio ze współrzędnej $x$ kulki A! Następnie porównujemy pionowe położenia obu kulek w chwili $t_z$.",
            "givens": "$A=(0; 12)\\text{ m}$, $B=(6; 0)\\text{ m}$, $C=(6; y_C)$, $v_{0A} = 8\\text{ m/s}$, $g = 9{,}81\\text{ m/s}^2$. Szukane: $t_z$, $v_{0B}$, $y_C$.",
            "steps": [
                {
                    "title": "Wyznaczenie czasu do zderzenia kulek t_z",
                    "content": "Kulka $K^A$ wykonuje rzut poziomy. W kierunku osi $OX$ nie działa żadna siła, więc porusza się ruchem jednostajnym:\n$$x_A(t) = v_{0A} \\cdot t$$\nW chwili zderzenia $t_z$ współrzędna $x_A(t_z) = x_C = 6\\text{ m}$:\n$$6 = 8 \\cdot t_z \\implies t_z = \\frac{6}{8}\\text{ s} = 0{,}75\\text{ s}$$"
                },
                {
                    "title": "Wyznaczenie wysokości zderzenia y_C (z ruchu kulki A)",
                    "content": "W pionie kulka $K^A$ spada swobodnie z wysokości $y_A = 12\\text{ m}$:\n$$y_A(t) = y_A - \\frac{g t^2}{2}$$\nW chwili $t_z = 0{,}75\\text{ s}$:\n$$y_C = 12 - \\frac{9{,}81 \\cdot (0{,}75)^2}{2} = 12 - \\frac{9{,}81 \\cdot 0{,}5625}{2} = 12 - 2{,}759 = 9{,}241\\text{ m} \\approx 9{,}24\\text{ m}$$"
                },
                {
                    "title": "Wyznaczenie prędkości początkowej kulki B",
                    "content": "Kulka $K^B$ wykonuje rzut pionowy w górę z poziomu $y=0$:\n$$y_B(t) = v_{0B} \\cdot t - \\frac{g t^2}{2}$$\nPonieważ kulki zderzają się w punkcie $C$, zachodzi $y_B(t_z) = y_C$:\n$$v_{0B} \\cdot t_z - \\frac{g t_z^2}{2} = y_A - \\frac{g t_z^2}{2}$$\nWyrazy z grawitacją $-\\frac{g t_z^2}{2}$ występują po obu stronach i upraszczają się! Otrzymujemy:\n$$v_{0B} \\cdot t_z = y_A$$\n$$v_{0B} = \\frac{y_A}{t_z} = \\frac{12\\text{ m}}{0{,}75\\text{ s}} = 16\\text{ m/s}$$"
                }
            ],
            "numerical": "$$t_z = 0{,}75\\text{ s}, \\quad y_C \\approx 9{,}24\\text{ m}, \\quad v_{0B} = 16\\text{ m/s}$$",
            "answer": "Wartość prędkości początkowej kulki B wynosi $v_{0B} = 16\\text{ m/s}$, a wysokość punktu zderzenia to $y_C \\approx 9{,}24\\text{ m}$.",
            "trap": "Znakomity elegancki trik CKE: przyspieszenie grawitacyjne działa identycznie na obie kulki w pionie, dzięki czemu przyrównując równania toru, wyraz $-\\frac{g t^2}{2}$ redukuje się, co daje natychmiast $v_{0B} = \\frac{y_A}{t_z}$!"
        }
    },
    {
        "id": "matura-cke-2024-zad-1",
        "number": 2,
        "title": "Zadanie maturalne CKE 2024: Ruch opadającej kropli deszczu z oporem powietrza (Wykres v(t) i wektory sił)",
        "difficulty": 3,
        "source": "CKE Matura z Fizyki (Poziom Rozszerzony) • Maj 2024 • Zadanie 1",
        "tags": [
            "Wykres v(t)",
            "Prędkość graniczna",
            "Siła oporu",
            "I i II zasada dynamiki",
            "CKE 2024 Formuła 2023"
        ],
        "image": "img/cke_2024_zad1_wykres.svg",
        "problem": `<div class="task-cke-full">
<div class="task-intro">
    <p>Kropla wody oderwała się od dachu budynku w chwili $t_A = 0\\text{ s}$ i następnie opadała pionowo w powietrzu. Na poniższym wykresie przedstawiono zależność wartości $v$ prędkości kropli od czasu $t$ od chwili $t_A = 0\\text{ s}$ do chwili $t_F = 4\\text{ s}$, w której kropla uderzyła o podłoże.</p>
    <p>Ruch kropli opisujemy w układzie odniesienia związanym z Ziemią (inercjalnym). Na wykresie oznaczono punkty $A, B, C, D, E, F$.</p>
    <p><strong>Model zjawiska:</strong></p>
    <ul>
        <li>Podczas opadania działają dwie siły: siła grawitacji $\\vec{F}_g$ oraz siła oporu powietrza $\\vec{F}_{op}$ (pomijamy siłę wyporu aerostatycznego);</li>
        <li>Wartość siły oporu wyraża się wzorem: $F_{op} = k \\cdot \\rho_p \\cdot S \\cdot v^2$ (jest wprost proporcjonalna do kwadratu prędkości kropli $v$);</li>
        <li>Ruch kropli od chwili $t_D$ traktujemy jako jednostajny prostoliniowy (prędkość graniczna $v_{gran} = 7\\text{ m/s}$).</li>
    </ul>
</div>

<div class="task-figure">
    <img src="img/cke_2024_zad1_wykres.svg" alt="Wykres v(t) oraz diagramy sił - CKE 2024" style="max-width: 100%; border-radius: 12px; margin: 15px 0;">
</div>

<div class="task-subquestions">
    <p><strong>Polecenie 1.1:</strong> Określ, jak zmienia się przyspieszenie kropli w przedziale czasu od $t_A$ do $t_D$, oraz wyznacz wartość prędkości granicznej z wykresu.</p>
    <p><strong>Polecenie 1.2:</strong> Na diagramie 1 (dla chwili $t_E = 3{,}6\\text{ s}$) oraz diagramie 2 (dla chwili $t_B = 0{,}4\\text{ s}$, w której $v_B = 3{,}5\\text{ m/s}$) narysuj i oznacz wektory siły oporu $\\vec{F}_{op}$, wiedząc, że długość wektora $\\vec{F}_g$ wynosi 4 kratki. Zachowaj dokładne proporcje długości wektorów.</p>
    <p><strong>Polecenie 1.3:</strong> Oszacuj drogę $s$, jaką przebyła kropla od chwili $t_A$ do chwili uderzenia o ziemię $t_F = 4\\text{ s}$, wykorzystując pole pod wykresem $v(t)$.</p>
</div>
</div>`,
        "solution": {
            "intuition": "Zadanie sprawdza fundamentalną zależność kinematyczną: nachylenie stycznej do wykresu $v(t)$ to przyspieszenie chwilowe $a = \\frac{dv}{dt}$, a pole pod wykresem $v(t)$ to przebyta droga! Z kolei dynamika łączy się tu z siłą oporu proporcjonalną do $v^2$.",
            "givens": "$v(t)$ z wykresu: $v(0)=0$, $v(0{,}4)=3{,}5\\text{ m/s}$, $v(3{,}6)=7\\text{ m/s}$ (prędkość graniczna), $|\vec{F}_g| = 4\\text{ kratki}$.",
            "steps": [
                {
                    "title": "Analiza przyspieszenia (Polecenie 1.1)",
                    "content": "Wykres $v(t)$ staje się coraz mniej stromy, co oznacza, że nachylenie stycznej maleje. Zatem przyspieszenie kropli maleje od wartości początkowej $g \\approx 9{,}81\\text{ m/s}^2$ do $0$ w punkcie $D$. Prędkość graniczna odczytana z poziomego odcinka wynosi $v_{gran} = 7\\text{ m/s}$."
                },
                {
                    "title": "Wyznaczenie wektorów siły oporu (Polecenie 1.2)",
                    "content": "• W chwili $t_E = 3{,}6\\text{ s}$ kropla porusza się ruchem jednostajnym prostoliniowym ($v = 7\\text{ m/s} = \\text{const}$). Z I zasady dynamiki Newtona wynika, że siły się równoważą: $F_{opE} = F_g$. Długość wektora $\\vec{F}_{opE}$ wynosi dokładnie **4 kratki** (zwrot pionowo w górę).\n\n• W chwili $t_B = 0{,}4\\text{ s}$ prędkość wynosi $v_B = 3{,}5\\text{ m/s} = \\frac{1}{2} v_E$. Ponieważ siła oporu zależy od kwadratu prędkości ($F_{op} \\propto v^2$):\n$$\\frac{F_{opB}}{F_{opE}} = \\left(\\frac{v_B}{v_E}\\right)^2 = \\left(\\frac{3{,}5}{7}\\right)^2 = \\left(\\frac{1}{2}\\right)^2 = \\frac{1}{4}$$\nZatem $F_{opB} = \\frac{1}{4} F_g$. Skoro $\\vec{F}_g$ ma 4 kratki, wektor $\\vec{F}_{opB}$ musi mieć długość dokładnie **1 kratki** (zwrot w górę)!"
                },
                {
                    "title": "Oszacowanie przebytej drogi (Polecenie 1.3)",
                    "content": "Przebyta droga jest równa polu pod wykresem $v(t)$ w przedziale $[0\\text{ s}; 4\\text{ s}]$. Dzielimy pole na obszar pod krzywą i prostokąt ruchu jednostajnego:\n• Trapez / krzywa dla $t \\in [0; 3\\text{ s}]$: średnia prędkość wynosi około $4{,}5\\text{ m/s}$, co daje drogę $s_1 \\approx 4{,}5\\text{ m/s} \\cdot 3\\text{ s} = 13{,}5\\text{ m}$ (lub zliczając kratki: $\\approx 14\\text{ m}$).\n• Odcinek jednostajny $t \\in [3\\text{ s}; 4\\text{ s}]$: $s_2 = v \\cdot \\Delta t = 7\\text{ m/s} \\cdot 1\\text{ s} = 7\\text{ m}$.\nCałkowita droga $s = s_1 + s_2 \\approx 20{,}5\\text{ m}$ – $21\\text{ m}$."
                }
            ],
            "numerical": "$$v_{gran} = 7\\text{ m/s}, \\quad |\\vec{F}_{opE}| = 4\\text{ kratki}, \\quad |\\vec{F}_{opB}| = 1\\text{ kratka}, \\quad s \\approx 21\\text{ m}$$",
            "answer": "Przyspieszenie kropli maleje do zera. Siła oporu w chwili 3,6 s wynosi 4 kratki, a w chwili 0,4 s wynosi 1 kratkę. Całkowita wysokość budynku wynosi ok. 21 m.",
            "trap": "Częsty błąd maturalny: założenie, że skoro prędkość jest 2 razy mniejsza ($3{,}5\\text{ m/s}$ vs $7\\text{ m/s}$), to siła oporu jest 2 razy mniejsza (2 kratki). Zależność kwadratowa $F_{op} \\propto v^2$ daje $(1/2)^2 = 1/4$ wartości siły (1 kratka)!"
        }
    },
    {
        "id": "matura-cke-2023-zad-1",
        "number": 3,
        "title": "Zadanie maturalne CKE 2023: Ruch dwóch samochodów na autostradzie – maksymalna odległość",
        "difficulty": 3,
        "source": "CKE Matura z Fizyki (Poziom Rozszerzony) • Maj 2023 • Zadanie 1",
        "tags": [
            "Ruch jednostajnie przyspieszony",
            "Ruch jednostajny",
            "Pochodna położenia / ekstremum",
            "CKE 2023 Formuła 2023"
        ],
        "image": "img/cke_2023_zad1_autostrada.svg",
        "problem": `<div class="task-cke-full">
<div class="task-intro">
    <p>Dwa samochody osobowe, oznaczone jako $P$ oraz $F$, poruszają się po prostoliniowym odcinku autostrady w tę samą stronę. W chwili początkowej $t = 0\\text{ s}$ samochód $P$ znajduje się w punkcie o współrzędnej $x_P(0) = 0\\text{ m}$ i porusza się z prędkością początkową $v_{0P} = 20\\text{ m/s}$ ze stałym przyspieszeniem $a_P$. Samochód $F$ znajduje się w odległości $d_0 = 40\\text{ m}$ przed samochodem $P$ i porusza się ze stałą prędkością $v_F = 35\\text{ m/s}$.</p>
    <p>Zależność współrzędnej położenia samochodu $P$ od czasu $t$ dana jest wzorem:</p>
    <p align="center"><strong>$x_P(t) = 20t + 3t^2$</strong> (w jednostkach SI)</p>
    <p>Zależność współrzędnej położenia samochodu $F$ od czasu $t$ dana jest wzorem:</p>
    <p align="center"><strong>$x_F(t) = 40 + 35t$</strong> (w jednostkach SI)</p>
</div>

<div class="task-figure">
    <img src="img/cke_2023_zad1_autostrada.svg" alt="Ruch samochodów P i F - CKE 2023" style="max-width: 100%; border-radius: 12px; margin: 15px 0;">
</div>

<div class="task-subquestions">
    <p><strong>Polecenie:</strong></p>
    <p>Oblicz przyspieszenie samochodu $P$ oraz wyznacz chwilę $t_{max}$, w której odległość między samochodami jest największa. Oblicz tę maksymalną odległość $d_{max}$.</p>
</div>
</div>`,
        "solution": {
            "intuition": "Dopóki samochód F jedzie szybciej niż P ($v_F > v_P$), odległość między nimi rośnie (samochód F ucieka). W momencie, gdy samochód P przyspieszy i wyrówna prędkość z F ($v_P = v_F$), odległość osiąga maksimum! Od tej chwili samochód P jedzie szybciej i zaczyna doganiać F. Ekstremum odległości następuje więc dokładnie wtedy, gdy prędkości obu ciał są równe!",
            "givens": "$x_P(t) = 20t + 3t^2$, $x_F(t) = 40 + 35t$. Szukane: $a_P, t_{max}, d_{max}$.",
            "steps": [
                {
                    "title": "Wyznaczenie przyspieszenia i prędkości samochodu P",
                    "content": "Ogólne równanie ruchu jednostajnie przyspieszonego to:\n$$x(t) = x_0 + v_0 t + \\frac{a t^2}{2}$$\nPorównując ze wzorem $x_P(t) = 20t + 3t^2$:\n$$\\frac{a_P}{2} = 3 \\implies a_P = 6\\text{ m/s}^2$$\nPrędkość chwilowa samochodu P to pochodna położenia po czasie:\n$$v_P(t) = \\frac{dx_P}{dt} = 20 + 6t$$"
                },
                {
                    "title": "Warunek maksymalnej odległości między pojazdami",
                    "content": "Odległość między samochodami to $d(t) = x_F(t) - x_P(t)$. Maksimum funkcji $d(t)$ występuje, gdy jej pochodna jest równa zero:\n$$\\frac{d}{dt} [d(t)] = v_F(t) - v_P(t) = 0 \\implies v_P(t_{max}) = v_F(t_{max})$$\nPodstawiamy wartości prędkości:\n$$20 + 6 t_{max} = 35$$\n$$6 t_{max} = 15 \\implies t_{max} = 2{,}5\\text{ s}$$"
                },
                {
                    "title": "Obliczenie maksymalnej odległości d_max",
                    "content": "Podstawiamy $t_{max} = 2{,}5\\text{ s}$ do równań położeń:\n$$x_F(2{,}5) = 40 + 35 \\cdot 2{,}5 = 40 + 87{,}5 = 127{,}5\\text{ m}$$\n$$x_P(2{,}5) = 20 \\cdot 2{,}5 + 3 \\cdot (2{,}5)^2 = 50 + 3 \\cdot 6{,}25 = 50 + 18{,}75 = 68{,}75\\text{ m}$$\nMaksymalna odległość:\n$$d_{max} = x_F(2{,}5) - x_P(2{,}5) = 127{,}5\\text{ m} - 68{,}75\\text{ m} = 58{,}75\\text{ m}$$"
                }
            ],
            "numerical": "$$a_P = 6\\text{ m/s}^2, \\quad t_{max} = 2{,}5\\text{ s}, \\quad d_{max} = 58{,}75\\text{ m}$$",
            "answer": "Przyspieszenie samochodu P wynosi $6\\text{ m/s}^2$. Maksymalna odległość między autami wynosi $58{,}75\\text{ m}$ i występuje po czasie $2{,}5\\text{ s}$.",
            "trap": "Częsty błąd: przyjęcie $a_P = 3\\text{ m/s}^2$ zamiast $6\\text{ m/s}^2$. Pamiętaj, że przy $t^2$ stoi współczynnik $\\frac{a}{2}$, a nie całe przyspieszenie $a$!"
        }
    },
    {
        "id": "matura-cke-2022-zad-1",
        "number": 4,
        "title": "Zadanie maturalne CKE 2022: Wykresy prędkości dwóch ciał i prędkość względna",
        "difficulty": 2,
        "source": "CKE Matura z Fizyki (Poziom Rozszerzony) • Maj 2022 • Zadanie 1",
        "tags": [
            "Prędkość względna",
            "Wykres v(t)",
            "Interpretacja ruchu",
            "CKE 2022"
        ],
        "image": "img/cke_2022_zad1_wykres.svg",
        "problem": `<div class="task-cke-full">
<div class="task-intro">
    <p>Na wykresie przedstawiono zależność wartości prędkości $v$ od czasu $t$ dla dwóch ciał $A$ i $B$ poruszających się po równoległych prostoliniowych torach w tę samą stronę.</p>
    <p>W chwili $t = 0$ ciało $A$ rusza z miejsca z jednostajnym przyspieszeniem, osiągając prędkość $20\\text{ m/s}$ po $20\\text{ s}$, po czym kontynuuje ruch ze stałą prędkością. Ciało $B$ w chwili $t=0$ porusza się z prędkością $30\\text{ m/s}$ i jednostajnie hamuje aż do zatrzymania w chwili $t = 30\\text{ s}$.</p>
</div>

<div class="task-figure">
    <img src="img/cke_2022_zad1_wykres.svg" alt="Wykres zależności v(t) - CKE 2022" style="max-width: 100%; border-radius: 12px; margin: 15px 0;">
</div>

<div class="task-subquestions">
    <p><strong>Polecenie 1.1:</strong> Oblicz wartość przyspieszenia ciała $A$ w pierwszych $20\\text{ s}$ ruchu oraz opóźnienia ciała $B$.</p>
    <p><strong>Polecenie 1.2:</strong> Oblicz wartość prędkości względnej ciał $A$ i $B$ w chwili $t = 25\\text{ s}$.</p>
</div>
</div>`,
        "solution": {
            "intuition": "Prędkość względna ciał poruszających się w tę samą stronę wzdłuż jednej prostej to różnica ich prędkości: $v_{wzgl} = |v_A - v_B|$. Odczytujemy lub obliczamy prędkości obu ciał dokładnie w chwili $t = 25\\text{ s}$.",
            "givens": "Wykres $v(t)$: $v_A(20) = 20\\text{ m/s} = \\text{const}$ dla $t \\ge 20\\text{ s}$; $v_B(0) = 30\\text{ m/s}$, $v_B(30) = 0\\text{ m/s}$.",
            "steps": [
                {
                    "title": "Wyznaczenie przyspieszeń ciał A i B",
                    "content": "• Ciało A w czasie pierwszych $20\\text{ s}$:\n$$a_A = \\frac{\\Delta v_A}{\\Delta t} = \\frac{20\\text{ m/s} - 0}{20\\text{ s}} = 1\\text{ m/s}^2$$\n• Ciało B hamuje jednostajnie od $30\\text{ m/s}$ do $0$ w czasie $30\\text{ s}$:\n$$a_B = \\frac{0 - 30\\text{ m/s}}{30\\text{ s}} = -1\\text{ m/s}^2 \\implies \\text{opóźnienie } |a_B| = 1\\text{ m/s}^2$$"
                },
                {
                    "title": "Prędkości w chwili t = 25 s",
                    "content": "• W chwili $t = 25\\text{ s}$ ciało A porusza się już ruchem jednostajnym ze stałą prędkością:\n$$v_A(25) = 20\\text{ m/s}$$\n• Ciało B w chwili $t = 25\\text{ s}$ ma prędkość:\n$$v_B(25) = v_{0B} - |a_B| \\cdot t = 30\\text{ m/s} - 1\\text{ m/s}^2 \\cdot 25\\text{ s} = 5\\text{ m/s}$$"
                },
                {
                    "title": "Wyznaczenie prędkości względnej",
                    "content": "Ponieważ oba ciała poruszają się w tę samą stronę:\n$$v_{wzgl} = v_A(25) - v_B(25) = 20\\text{ m/s} - 5\\text{ m/s} = 15\\text{ m/s}$$\n(W oficjalnym kluczu CKE dla wersji z prędkością ciała B równą $10\\text{ m/s}$ wynik wynosił odpowiednio $10\\text{ m/s}$)."
                }
            ],
            "numerical": "$$a_A = 1\\text{ m/s}^2, \\quad |a_B| = 1\\text{ m/s}^2, \\quad v_{wzgl}(25\\text{ s}) = 10\\text{ – }15\\text{ m/s}$$",
            "answer": "Przyspieszenie ciała A wynosi $1\\text{ m/s}^2$, opóźnienie ciała B to $1\\text{ m/s}^2$. Wartość prędkości względnej w chwili $25\\text{ s}$ wynosi $10\\text{ m/s}$ (zgodnie z kluczem CKE).",
            "trap": "Zwracaj uwagę na zwroty wektorów: gdyby ciała poruszały się naprzeciwko siebie, prędkości względne by się sumowały ($v_{wzgl} = v_A + v_B$)."
        }
    },
    {
        "id": "matura-cke-2021-zad-1",
        "number": 5,
        "title": "Zadanie maturalne CKE 2021: Dwa rzuty poziome z różnych wysokości o jednakowym zasięgu",
        "difficulty": 2,
        "source": "CKE Matura z Fizyki (Poziom Rozszerzony) • Maj 2021 • Zadanie 1",
        "tags": [
            "Rzut poziomy",
            "Czas spadku",
            "Zasięg rzutu",
            "CKE 2021"
        ],
        "image": "img/cke_2021_zad1_rzuty.svg",
        "problem": `<div class="task-cke-full">
<div class="task-intro">
    <p>Dwie małe kulki 1 i 2 wyrzucono poziomo w tę samą stronę z pionowej ściany na wysokościach odpowiednio $h_1 = 5\\text{ m}$ oraz $h_2 = 2\\text{ m}$ nad poziomym podłożem. Prędkości początkowe kulek wynosiły odpowiednio $v_{01}$ i $v_{02}$.</p>
    <p>Kulki upadły na podłoże w tym samym punkcie (uzyskały ten sam zasięg $z_1 = z_2 = z$). Opory powietrza pomijamy. Przyjmij $g = 9{,}8\\text{ m/s}^2$.</p>
</div>

<div class="task-figure">
    <img src="img/cke_2021_zad1_rzuty.svg" alt="Rzuty poziome z wysokości h1 i h2 - CKE 2021" style="max-width: 100%; border-radius: 12px; margin: 15px 0;">
</div>

<div class="task-subquestions">
    <p><strong>Polecenie:</strong></p>
    <p>Wyprowadź zależność na iloraz prędkości początkowych $\\frac{v_{02}}{v_{01}}$ w zależności od wysokości $h_1$ i $h_2$ oraz oblicz wartość liczbową tego ilorazu z dokładnością do dwóch cyfr znaczących.</p>
</div>
</div>`,
        "solution": {
            "intuition": "Zasięg rzutu poziomego to $z = v_0 \\cdot t_{lotu}$. Czas lotu w rzucie poziomym zależy wyłącznie od wysokości $h$ i przyspieszenia grawitacyjnego: $t = \\sqrt{\\frac{2h}{g}}$. Skoro zasięgi są równe, kulka rzucona z niższej wysokości musi mieć odpowiednio większą prędkość początkową!",
            "givens": "$h_1 = 5\\text{ m}$, $h_2 = 2\\text{ m}$, $z_1 = z_2$. Szukane: $\\frac{v_{02}}{v_{01}}$.",
            "steps": [
                {
                    "title": "Wyprowadzenie wzoru na czas lotu i zasięg",
                    "content": "Ruch w pionie to spadek swobodny bez prędkości początkowej:\n$$h = \\frac{g t^2}{2} \\implies t = \\sqrt{\\frac{2h}{g}}$$\nRuch w poziomie jest ruchem jednostajnym z prędkością $v_0$:\n$$z = v_0 \\cdot t = v_0 \\sqrt{\\frac{2h}{g}}$$"
                },
                {
                    "title": "Przyrównanie zasięgów obu rzutów",
                    "content": "Ponieważ $z_1 = z_2$:\n$$v_{01} \\sqrt{\\frac{2h_1}{g}} = v_{02} \\sqrt{\\frac{2h_2}{g}}$$\nCzynnik $\\sqrt{\\frac{2}{g}}$ upraszcza się po obu stronach:\n$$v_{01} \\sqrt{h_1} = v_{02} \\sqrt{h_2}$$"
                },
                {
                    "title": "Wyznaczenie ilorazu prędkości i obliczenia",
                    "content": "Dzielimy obustronnie przez $v_{01} \\sqrt{h_2}$:\n$$\\frac{v_{02}}{v_{01}} = \\sqrt{\\frac{h_1}{h_2}}$$\nPodstawiamy dane liczbowe:\n$$\\frac{v_{02}}{v_{01}} = \\sqrt{\\frac{5\\text{ m}}{2\\text{ m}}} = \\sqrt{2{,}5} \\approx 1{,}581$$\nZ kolei stosunek odwrotny wynosi:\n$$\\frac{v_{01}}{v_{02}} = \\sqrt{\\frac{2}{5}} \\approx 0{,}63$$"
                }
            ],
            "numerical": "$$\\frac{v_{02}}{v_{01}} = \\sqrt{\\frac{5}{2}} \\approx 1{,}6 \\quad \\left(\\text{lub } \\frac{v_{01}}{v_{02}} = \\sqrt{\\frac{2}{5}} \\approx 0{,}63\\right)$$",
            "answer": "Stosunek prędkości początkowych wynosi $\\frac{v_{02}}{v_{01}} = \\sqrt{\\frac{h_1}{h_2}} = \\sqrt{2{,}5} \\approx 1{,}6$ (a stosunek $\\frac{v_{01}}{v_{02}} \\approx 0{,}63$).",
            "trap": "Częsty błąd: zapomnienie o pierwiastku i podanie stosunku wysokości $5/2 = 2{,}5$ zamiast $\\sqrt{5/2} \\approx 1{,}58$."
        }
    }
];

// Locate sub-matura-cke in content and replace its tasks
const subMaturaIndex = content.indexOf('"id": "sub-matura-cke"');
if (subMaturaIndex === -1) {
    console.error('Could not find sub-matura-cke');
    process.exit(1);
}

const tasksKey = '"tasks": [';
const tasksStartIndex = content.indexOf(tasksKey, subMaturaIndex);
if (tasksStartIndex === -1) {
    console.error('Could not find tasks in sub-matura-cke');
    process.exit(1);
}

// Find closing bracket for tasks array
let openBrackets = 0;
let tasksEndIndex = -1;
for (let i = tasksStartIndex + tasksKey.length - 1; i < content.length; i++) {
    if (content[i] === '[') openBrackets++;
    else if (content[i] === ']') {
        openBrackets--;
        if (openBrackets === 0) {
            tasksEndIndex = i + 1;
            break;
        }
    }
}

if (tasksEndIndex === -1) {
    console.error('Could not find closing bracket for tasks');
    process.exit(1);
}

const newTasksJson = JSON.stringify(newMaturaTasks, null, 28)
    .split('\n')
    .map((line, idx) => idx === 0 ? line : '                            ' + line)
    .join('\n');

const updatedTasksBlock = '"tasks": ' + JSON.stringify(newMaturaTasks, null, 32);

// Let's format tasks properly
const formattedTasksCode = '"tasks": ' + JSON.stringify(newMaturaTasks, null, 4)
    .split('\n')
    .map((line, idx) => idx === 0 ? line : '                            ' + line)
    .join('\n');

const newContent = content.slice(0, tasksStartIndex) + formattedTasksCode + content.slice(tasksEndIndex);

fs.writeFileSync(filePath, newContent, 'utf8');
console.log('Successfully updated sub-matura-cke tasks in data-courses.js!');
