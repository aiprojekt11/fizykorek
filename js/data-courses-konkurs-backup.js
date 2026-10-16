/**
 * KOPIA ZAPASOWA: 8 KLASA / KONKURS KURATORYJNY Z FIZYKI (SP)
 * Plik utworzony automatycznie.
 */

window.FIZYKOREK_KONKURS_BACKUP = {
"konkurs-fizyka": {
        "id": "konkurs-fizyka",
        "title": "Konkurs Kuratoryjny z Fizyki (SP)",
        "subtitle": "Zbiór Zadań z Fizyki z Podziałem na Działy (Etap Szkolny)",
        "badge": "Szkoła Podstawowa • Konkurs Kuratoryjny",
        "icon": "🏆",
        "accentColor": "#38bdf8",
        "sections": [
            {
                "id": "k-dzial-1",
                "number": 1,
                "title": "Dział 1: Pomiary, Jednostki i Właściwości Materii",
                "icon": "📏",
                "badge": "3 Tematy • 16 Zadań",
                "desc": "Układ SI, analiza wymiarowa, niepewności pomiarowe, cyfry znaczące oraz siły spójności i przylegania.",
                "subchapters": [
                    {
                        "id": "k-sub-1-1",
                        "number": "1.1",
                        "title": "Temat 1.1: Układ SI i analiza jednostek",
                        "shortTitle": "1.1 Układ SI i jednostki",
                        "icon": "📐",
                        "desc": "Jednostki podstawowe i pochodne, wyprowadzanie jednostek wielkości fizycznych.",
                        "formulaCheat": "1\\text{ J} = 1\\text{ N}\\cdot\\text{m} = 1\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^2}, \\quad 1\\text{ W} = 1\\frac{\\text{J}}{\\text{s}} = 1\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^3}, \\quad 1\\text{ Pa} = 1\\frac{\\text{N}}{\\text{m}^2} = 1\\frac{\\text{kg}}{\\text{m}\\cdot\\text{s}^2}",
                        "theory": `
<div class="theory-section">
    <h4>1. Układ SI</h4>
    <p>Dawniej w różnych krajach używano odmiennych miar, takich jak stopy, łokcie czy funty. Aby ułatwić komunikację i badania naukowe na całym świecie, wprowadzono jednolity <strong>Międzynarodowy Układ Jednostek Miar (SI)</strong>.</p>
    <div class="theory-image-wrapper">
        <img src="img/si_units.png" alt="Układ SI - 7 jednostek" class="theory-img">
    </div>
    <h4>2. Jednostki podstawowe i pochodne</h4>
    <p>W układzie SI wyróżniamy <strong>7 jednostek podstawowych</strong>:</p>
    <ul>
        <li><strong>Czas:</strong> sekunda (s)</li>
        <li><strong>Długość:</strong> metr (m)</li>
        <li><strong>Masa:</strong> kilogram (kg)</li>
        <li><strong>Prąd elektryczny:</strong> amper (A)</li>
        <li><strong>Temperatura:</strong> kelwin (K)</li>
        <li><strong>Liczność materii:</strong> mol (mol)</li>
        <li><strong>Światłość:</strong> kandela (cd)</li>
    </ul>
    <p>Wszystkie pozostałe jednostki w fizyce to <strong>jednostki pochodne</strong> – powstają z połączenia jednostek podstawowych za pomocą wzorów fizycznych.</p>

    <h4>3. Wyprowadzanie jednostki pochodnej krok po kroku (jednostka pracy)</h4>
    <p>Jednostki wielkości fizycznych możemy łatwo wyznaczyć na podstawie definicji i wzorów. Zobaczmy to na przykładzie jednostki pracy – <strong>dżula [J]</strong>:</p>

    <div class="step-breakdown" style="background: rgba(255,255,255,0.03); border-left: 3px solid #38bdf8; padding: 12px 16px; margin: 12px 0; border-radius: 6px;">
        <p>1. Pracę wyraża wzór $W = F \\cdot s$ (siła $\\cdot$ przesunięcie), zatem jej jednostką jest niutonometr:</p>
        <p>$$1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m}$$</p>
        <p>2. Z II zasady dynamiki wiemy, że $F = m \\cdot a$ (masa $\\cdot$ przyspieszenie). Rozpisujemy więc niuton na jednostki podstawowe:</p>
        <p>$$1\\text{ N} = 1\\text{ kg} \\cdot 1\\frac{\\text{m}}{\\text{s}^2} = 1\\frac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}$$</p>
        <p>3. Wstawiamy rozpisany niuton do wzoru na dżul:</p>
        <p>$$1\\text{ J} = 1\\text{ N} \\cdot 1\\text{ m} = \\left(1\\frac{\\text{kg}\\cdot\\text{m}}{\\text{s}^2}\\right) \\cdot 1\\text{ m} = 1\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^2}$$</p>
    </div>
</div>`,
                        "tasks": [
                            {
                                "id": "kk-zad-1",
                                "number": 1,
                                "points": 1,
                                "title": "Zadanie 1. (1 pkt) Jednostka podstawowa układu SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Układ SI",
                                    "Jednostki podstawowe"
                                ],
                                "problem": "Z wymienionych jednostek, jednostką podstawową układu SI nie jest:\n\nA. sekunda (s).\nB. kilogram (kg).\nC. wat (W).\nD. metr (m).",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-2",
                                "number": 2,
                                "points": 1,
                                "title": "Zadanie 2. (1 pkt) Jednostka niebędąca podstawową",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Układ SI",
                                    "Jednostki podstawowe"
                                ],
                                "problem": "Która z wymienionych jednostek nie jest jednostką podstawową w układzie SI?\n\nA. kandela.\nB. amper.\nC. gram.\nD. kelwin.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-3",
                                "number": 3,
                                "points": 1,
                                "title": "Zadanie 3. (1 pkt) Jednostka prędkości w układzie SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Układ SI",
                                    "Prędkość"
                                ],
                                "problem": "Spośród, niżej wymienionych, używanych obecnie jednostek prędkości jednostką układu SI jest:\n\nA. węzeł.\nB. mach.\nC. km/h.\nD. m/s.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-4",
                                "number": 4,
                                "points": 1,
                                "title": "Zadanie 4. (1 pkt) Jednostka mocy w układzie SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Analiza wymiarowa",
                                    "Moc",
                                    "Układ SI"
                                ],
                                "problem": "Jednostka mocy w układzie SI wyraża się przez podstawowe jednostki tego układu następująco:\n\nA. $\\text{kg}\\cdot\\text{m}$\nB. $\\text{kg}\\cdot\\text{m}/\\text{s}$\nC. $\\text{kg}\\cdot\\text{m}^2/\\text{s}$\nD. $\\text{kg}\\cdot\\text{m}^2/\\text{s}^3$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-5",
                                "number": 5,
                                "points": 1,
                                "title": "Zadanie 5. (1 pkt) Jednostka ciśnienia w układzie SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Analiza wymiarowa",
                                    "Ciśnienie",
                                    "Układ SI"
                                ],
                                "problem": "Jednostka ciśnienia w układzie SI wyraża się przez podstawowe jednostki tego układu następująco:\n\nA. $\\frac{\\text{kg}}{\\text{s}^2}$\nB. $\\frac{\\text{kg}}{\\text{s}\\cdot\\text{m}^2}$\nC. $\\text{kg}\\cdot\\text{m}\\cdot\\text{s}^2$\nD. $\\frac{\\text{kg}}{\\text{m}\\cdot\\text{s}^2}$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-6",
                                "number": 6,
                                "points": 1,
                                "title": "Zadanie 6. (1 pkt) Identyfikacja wielkości fizycznej",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Analiza wymiarowa",
                                    "Układ SI"
                                ],
                                "problem": "Jednostka jakiej wielkości fizycznej może być wyrażona za pomocą jednostek podstawowych układu SI w następujący sposób: $\\frac{\\text{kg}\\cdot\\text{m}^2}{\\text{s}^3}$ ?\n\nA. siły.\nB. pracy.\nC. mocy.\nD. pędu.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-1-2",
                        "number": "1.2",
                        "title": "Temat 1.2: Pomiary i niepewność pomiarowa",
                        "shortTitle": "1.2 Pomiary i niepewności",
                        "icon": "🔬",
                        "desc": "Niepewność pomiarowa, cyfry znaczące, pomiary pośrednie (metoda zwielokrotnienia).",
                        "formulaCheat": "v = \\frac{s}{t}, \\quad \\Delta x = \\frac{\\Delta d}{n}, \\quad x = (x_0 \\pm \\Delta x)",
                        "theory": `
<div class="theory-section">
    <h4>1. Niepewność pomiaru</h4>
    <p>Każdy pomiar w fizyce obarczony jest pewną niedokładnością wynikającą z ograniczeń przyrządu lub zmysłów obserwatora. Zazwyczaj jako <strong>niepewność pomiarową przyrządu $\\Delta x$</strong> przyjmuje się wartość najmniejszej działki na jego skali.</p>
    <p>Wynik pomiaru zapisujemy w postaci:</p>
    <p>$$x = (x_0 \\pm \\Delta x)$$</p>
    <p>Oznacza to, że rzeczywista wartość mierzonej wielkości mieści się w przedziale od $x_0 - \\Delta x$ do $x_0 + \\Delta x$.</p>

    <div style="background: rgba(56, 189, 248, 0.08); border: 1px solid rgba(56, 189, 248, 0.2); padding: 12px; border-radius: 8px; margin: 10px 0;">
        <p><strong>Przykład na liczbach:</strong></p>
        <p>Mierzymy długość zeszytu linijką z podziałką milimetrową (najmniejsza działka to $1\\text{ mm}$).</p>
        <p>Odczytujemy wynik: $210\\text{ mm}$. Zapisujemy go jako:</p>
        <p>$$L = (210 \\pm 1)\\text{ mm}$$</p>
        <p>Rzeczywista długość zeszytu znajduje się więc w przedziale od $209\\text{ mm}$ do $211\\text{ mm}$.</p>
    </div>

    <h4>2. Pomiar małych wielkości (Metoda zwielokrotnienia)</h4>
    <p>Gdy chcemy zmierzyć bardzo małą grubość (np. pojedynczego drutu lub kartki papieru), która jest mniejsza niż najmniejsza działka linijki, stosujemy metodę zwielokrotnienia.</p>
    <p>Mierzymy łączną szerokość $D$ grupy $n$ jednakowych elementów (np. $n$ ściśle nawiniętych zwojów drutu), a następnie dzielimy otrzymany wynik przez ich liczbę:</p>
    <p>$$d = \\frac{D}{n}$$</p>
    <p>Co ważne, niepewność takiego pomiaru również ulega $n$-krotnemu zmniejszeniu:</p>
    <p>$$\\Delta d = \\frac{\\Delta D}{n}$$</p>

    <div style="background: rgba(16, 185, 129, 0.08); border: 1px solid rgba(16, 185, 129, 0.2); padding: 12px; border-radius: 8px; margin: 10px 0;">
        <p><strong>Przykład na liczbach:</strong></p>
        <p>Nawinięto ciasno $n = 40$ zwojów cienkiego drutu. Zmierzona linijką o podziałce milimetrowej ($\\Delta D = 1\\text{ mm}$) szerokość wszystkich zwojów wyniosła $D = 14\\text{ mm}$.</p>
        <p>• Średnica jednego drutu: $d = \\frac{14\\text{ mm}}{40} = 0{,}35\\text{ mm}$</p>
        <p>• Niepewność pomiaru: $\\Delta d = \\frac{1\\text{ mm}}{40} = 0{,}025\\text{ mm} \\approx 0{,}03\\text{ mm}$</p>
        <p>Zwykłą linijką udało się wyznaczyć średnicę z dokładnością rzędu setnych części milimetra.</p>
    </div>
</div>`,
                        "tasks": [
                            {
                                "id": "zb-zad-4-1",
                                "number": 1,
                                "title": "Zadanie 1. Przedrostki jednostek wielkości fizycznych (4.1)",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Przedrostki SI",
                                    "Mnożniki jednostek"
                                ],
                                "problem": "Co oznaczają przy jednostkach wielkości fizycznych (np. długości) przedrostki: kilo-, deka-, decy-, mikro-, nano-? Sprawdź to w tabeli przedrostków. Podaj jeszcze kilka rzadziej używanych przedrostków (z początku i końca skali), a także ich oznaczenia skrótowe.",
                                "solution": {
                                    "intuition": "Przedrostki w układzie SI to wygodny sposób na zapisywanie bardzo dużych lub bardzo małych liczb za pomocą potęg dziesiątki, bez konieczności pisania wielu zer.",
                                    "givens": "Wymienione przedrostki: kilo-, deka-, decy-, mikro-, nano-.",
                                    "steps": [
                                        {
                                            "title": "Przedrostki z polecenia",
                                            "content": "• **kilo-** (symbol: **k**) oznacza mnożnik $10^3 = 1000$ (tysiąc razy więcej, np. $1\\text{ km} = 1000\\text{ m}$)\n• **deka-** (symbol: **da**) oznacza mnożnik $10^1 = 10$ (dziesięć razy więcej, np. $1\\text{ dag} = 10\\text{ g}$)\n• **decy-** (symbol: **d**) oznacza mnożnik $10^{-1} = 0{,}1$ (jedna dziesiąta, np. $1\\text{ dm} = 0{,}1\\text{ m}$)\n• **mikro-** (symbol: **$\\mu$**) oznacza mnożnik $10^{-6} = 0{,}000001$ (jedna milionowa)\n• **nano-** (symbol: **n**) oznacza mnożnik $10^{-9} = 0{,}000000001$ (jedna miliardowa)"
                                        },
                                        {
                                            "title": "Dodatkowe rzadziej używane przedrostki",
                                            "content": "Z początku skali (bardzo duże wielkości):\n• **mega-** (symbol: **M**) = $10^6$ (milion)\n• **giga-** (symbol: **G**) = $10^9$ (miliard)\n• **tera-** (symbol: **T**) = $10^{12}$ (bilion)\n\nZ końca skali (bardzo małe wielkości):\n• **piko-** (symbol: **p**) = $10^{-12}$ (jedna bilionowa)\n• **femto-** (symbol: **f**) = $10^{-15}$ (jedna biliardowa)"
                                        }
                                    ],
                                    "numerical": "$$\\text{kilo } (10^3), \\quad \\text{deka } (10^1), \\quad \\text{decy } (10^{-1}), \\quad \\mu (10^{-6}), \\quad \\text{n } (10^{-9})$$",
                                    "answer": "kilo ($k, 10^3$), deka ($da, 10^1$), decy ($d, 10^{-1}$), mikro ($\\mu, 10^{-6}$), nano ($n, 10^{-9}$). Przykłady skrajne: giga ($G, 10^9$), tera ($T, 10^{12}$) oraz piko ($p, 10^{-12}$), femto ($f, 10^{-15}$).",
                                    "trap": "Pamiętaj o rozróżnieniu wielkich i małych liter! 'm' to mili- ($10^{-3}$), a 'M' to mega- ($10^6$)."
                                }
                            },
                            {
                                "id": "zb-zad-4-3",
                                "number": 2,
                                "title": "Zadanie 2. Niepewność pomiaru deski przymiarem centymetrowym (4.3)",
                                "difficulty": 1,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Przyrządy pomiarowe"
                                ],
                                "problem": "Deskę o długości $0{,}5\\text{ m}$ zmierzono przymiarem centymetrowym (linijka z podziałką centymetrową) o długości $1\\text{ m}$. Jaka jest niepewność tego pomiaru?",
                                "solution": {
                                    "intuition": "Zgodnie z podstawową zasadą niepewność pojedynczego pomiaru przyrządu ze skalą kreskową przyjmuje się jako wartość najmniejszej działki na skali tego przyrządu.",
                                    "givens": "Długość deski $L = 0{,}5\\text{ m} = 50\\text{ cm}$. Przymiar o podziałce centymetrowej (najmniejsza działka: $1\\text{ cm}$).",
                                    "steps": [
                                        {
                                            "title": "Określenie najmniejszej działki przyrządu",
                                            "content": "Przymiar ma podziałkę centymetrową, co oznacza, że kreski na skali znajdują się co $1\\text{ cm}$. Najmniejsza działka wynosi zatem:\n$$\\Delta x = 1\\text{ cm} = 0{,}01\\text{ m}$$"
                                        },
                                        {
                                            "title": "Zapis wyniku pomiaru z niepewnością",
                                            "content": "Niepewność pomiaru wynosi $\\pm 1\\text{ cm}$ (lub $\\pm 0{,}01\\text{ m}$).\nWynik pomiaru deski zapisujemy jako:\n$$L = (50 \\pm 1)\\text{ cm} \\quad \\text{lub} \\quad L = (0{,}50 \\pm 0{,}01)\\text{ m}$$"
                                        }
                                    ],
                                    "numerical": "$$\\Delta x = 1\\text{ cm} = 0{,}01\\text{ m}$$",
                                    "answer": "Niepewność tego pomiaru wynosi $1\\text{ cm}$ (czyli $0{,}01\\text{ m}$).",
                                    "trap": "Całkowita długość przymiaru ($1\\text{ m}$) ani długość deski ($0{,}5\\text{ m}$) nie mają wpływu na niepewność przyrządu – decyduje wyłącznie najmniejsza działka podziałki!"
                                }
                            },
                            {
                                "id": "kk-zad-7",
                                "number": 3,
                                "points": 1,
                                "title": "Zadanie 3. (1 pkt) Dwa pomiary prędkości samochodu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Przedziały ufności"
                                ],
                                "problem": "Dwoma różnymi sposobami zmierzono prawie jednocześnie prędkość samochodu. Otrzymane wyniki obarczone były oczywiście niepewnościami pomiarowymi. Otrzymano następujące wartości: $v = (82{,}0 \\pm 3{,}0)\\text{ km/h}$ oraz $v = (78{,}0 \\pm 4{,}0)\\text{ km/h}$. Przyjmij, że oba pomiary wykonano poprawnie.\n\nWyniki te oznaczają, że rzeczywista prędkość samochodu zawarta jest pomiędzy:\n\nA. $(74{,}0;\\ 85{,}0)\\text{ km/h}$\nB. $(79{,}0;\\ 82{,}0)\\text{ km/h}$\nC. $(76{,}0;\\ 84{,}0)\\text{ km/h}$\nD. $(78{,}0;\\ 82{,}0)\\text{ km/h}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-8",
                                "number": 4,
                                "points": 1,
                                "title": "Zadanie 4. (1 pkt) Odcinkowy pomiar prędkości i cyfry znaczące",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Cyfry znaczące",
                                    "Prędkość średnia"
                                ],
                                "problem": "Czas ruchu samochodu na pewnym odcinku drogi, zmierzony podczas odcinkowego pomiaru prędkości, wyniósł $30{,}51\\text{ s}$. Pomiar długości tego odcinka drogi dał wynik $721\\text{ m}$.\n\nZatem otrzymana wartość prędkości średniej samochodu na tym odcinku drogi, z zachowaniem liczby cyfr znaczących, wyniosła:\n\nA. $23{,}632\\text{ m/s}$\nB. $23{,}63\\text{ m/s}$\nC. $23{,}6\\text{ m/s}$\nD. $23\\text{ m/s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-9",
                                "number": 5,
                                "points": 1,
                                "title": "Zadanie 5. (1 pkt) Pomiar grubości drucika (10 pętli)",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Pomiary wielokrotne"
                                ],
                                "problem": "Chcąc zmierzyć grubość metalowego drucika, uczeń nawinął go na okrągły pręt, wykonując 10 stykających się ze sobą pętli, i zmierzył linijką z podziałką milimetrową szerokość tych 10 pętli.\n\nNiepewność tak wykonanego pomiaru grubości drucika wynosi:\n\nA. $0{,}1\\text{ mm}$.\nB. $0{,}5\\text{ mm}$.\nC. $\\pm 1\\text{ mm}$.\nD. $\\pm 10\\text{ mm}$.",
                                "solution": null
                            },
                            {
                                "id": "zb-zad-4-5",
                                "number": 6,
                                "title": "Zadanie 6. Średnica drucika z niepewnością pomiarową – 20 zwojów (4.5)",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Metoda zwielokrotnienia"
                                ],
                                "problem": "Aby zmierzyć średnicę drucika, nawinięto 20 zwojów ciasno na ołówku i zmierzono długość tej spirali linijką z podziałką milimetrową. Długość tej spirali wynosiła $32\\text{ mm}$.\n\nŚrednica tego drucika wraz z niepewnością pomiarową była równa:\n\nA) $(1{,}6 \\pm 1)\\text{ mm}$\nB) $(1{,}6 \\pm 0{,}05)\\text{ mm}$\nC) $(0{,}625 \\pm 1)\\text{ mm}$\nD) $(0{,}625 \\pm 0{,}05)\\text{ mm}$",
                                "solution": {
                                    "intuition": "Średnica jednego zwoju to całkowita długość podzielona przez liczbę zwojów ($d = D / n$). Niepewność pomiaru linijki ($\\Delta D = 1\\text{ mm}$) również dzieli się przez liczbę zwojów: $\\Delta d = \\Delta D / n$!",
                                    "givens": "Liczba zwojów $n = 20$. Długość spirali $D = 32\\text{ mm}$. Dokładność linijki $\\Delta D = 1\\text{ mm}$.",
                                    "steps": [
                                        {
                                            "title": "Obliczenie średnicy pojedynczego drutu",
                                            "content": "$$d = \\frac{D}{n} = \\frac{32\\text{ mm}}{20} = 1{,}6\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Obliczenie niepewności pomiaru średnicy",
                                            "content": "Podziałka milimetrowa ma najmniejszą działkę $1\\text{ mm}$, więc niepewność zmierzenia całej spirali to $\\Delta D = 1\\text{ mm}$.\nNiepewność wyznaczenia średnicy jednego drutu wynosi:\n$$\\Delta d = \\frac{\\Delta D}{n} = \\frac{1\\text{ mm}}{20} = 0{,}05\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Zapis wyniku końcowego",
                                            "content": "$$d = (1{,}6 \\pm 0{,}05)\\text{ mm}$$"
                                        }
                                    ],
                                    "numerical": "$$d = (1{,}6 \\pm 0{,}05)\\text{ mm}$$",
                                    "answer": "Poprawna jest odpowiedź B: $(1{,}6 \\pm 0{,}05)\\text{ mm}$.",
                                    "trap": "Częsty błąd to pozostawienie niepewności linijki równej $\\pm 1\\text{ mm}$ (odpowiedź A). Dzieląc długość przez 20, niepewność również dzielimy przez 20!"
                                }
                            },
                            {
                                "id": "kk-zad-10",
                                "number": 7,
                                "points": 1,
                                "title": "Zadanie 7. (1 pkt) Średnica giętkiego drutu (40 zwojów)",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Pomiary wielokrotne"
                                ],
                                "problem": "Dysponując linijką ze skalą o najmniejszej działce $1\\text{ mm}$, chcemy zmierzyć średnicę dość cienkiego, giętkiego drutu. W tym celu bardzo ciasno nawijamy na ołówek 40 zwojów tego drutu. Odcinek ołówka zajęty przez nawinięte zwoje ma długość $14\\text{ mm}$. Wyznaczona na tej podstawie średnica drutu wynosi $0{,}35\\text{ mm}$.\n\nNiepewność otrzymanego wyniku wynosi:\n\nA. $1{,}00\\text{ mm}$,\nB. $0{,}10\\text{ mm}$,\nC. $0{,}03\\text{ mm}$,\nD. $0{,}35\\text{ mm}$.",
                                "solution": null
                            },
                            {
                                "id": "zb-zad-4-6",
                                "number": 8,
                                "title": "Zadanie 8. Średnica i dokładność wyznaczenia drutu – 45 zwojów (4.6)",
                                "difficulty": 2,
                                "source": "Zbiór zadań • Pomiary i niepewności",
                                "tags": [
                                    "Niepewność pomiarowa",
                                    "Metoda zwielokrotnienia"
                                ],
                                "problem": "Aby wyznaczyć średnicę drutu, uczeń nawinął ciasno na ołówek 45 zwojów, które zajęły część ołówka o długości $3\\text{ cm}$ i $2\\text{ mm}$.\n\nIle wynosi średnica tego drutu i z jaką dokładnością wyznaczono tę średnicę? Długość spirali na ołówku uczeń mierzył linijką ze skalą milimetrową.",
                                "solution": {
                                    "intuition": "Najpierw ujednolicamy jednostki do milimetrów ($3\\text{ cm } 2\\text{ mm} = 32\\text{ mm}$), a potem dzielimy zarówno długość, jak i najmniejszą działkę linijki przez liczbę zwojów ($45$).",
                                    "givens": "Liczba zwojów $n = 45$. Łączna długość $D = 3\\text{ cm } 2\\text{ mm} = 32\\text{ mm}$. Niepewność linijki milimetrowej $\\Delta D = 1\\text{ mm}$.",
                                    "steps": [
                                        {
                                            "title": "Wyznaczenie średnicy drutu",
                                            "content": "$$d = \\frac{D}{n} = \\frac{32\\text{ mm}}{45} \\approx 0{,}711\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Wyznaczenie dokładności (niepewności) pomiaru",
                                            "content": "Linijka ze skalą milimetrową ma najmniejszą działkę $1\\text{ mm}$, więc dokładność wyznaczenia średnicy pojedynczego drutu wynosi:\n$$\\Delta d = \\frac{\\Delta D}{n} = \\frac{1\\text{ mm}}{45} \\approx 0{,}022\\text{ mm}$$"
                                        },
                                        {
                                            "title": "Podsumowanie z zapisem niepewności",
                                            "content": "Średnica drutu wynosi ok. $0{,}71\\text{ mm}$, a dokładność pomiaru to $\\pm 0{,}02\\text{ mm}$:\n$$d = (0{,}71 \\pm 0{,}02)\\text{ mm}$$"
                                        }
                                    ],
                                    "numerical": "$$d \\approx 0{,}71\\text{ mm}, \\quad \\Delta d = \\frac{1}{45}\\text{ mm} \\approx 0{,}02\\text{ mm}$$",
                                    "answer": "Średnica drutu wynosi około $0{,}71\\text{ mm}$ (dokładnie $\\frac{32}{45}\\text{ mm}$), a wyznaczono ją z dokładnością do około $0{,}02\\text{ mm}$ (dokładnie $\\frac{1}{45}\\text{ mm}$).",
                                    "trap": "Pamiętaj o przeliczeniu $3\\text{ cm}$ na $30\\text{ mm}$ przed dodaniem $2\\text{ mm}$!"
                                }
                            }
                        ]
                    },
                    {
                        "id": "k-sub-1-3",
                        "number": "1.3",
                        "title": "Temat 1.3: Zjawiska powierzchniowe",
                        "shortTitle": "1.3 Zjawiska powierzchniowe",
                        "icon": "💧",
                        "desc": "Siły spójności (kohezji), siły przylegania (adhezji), menisk wklęsły i wypukły, zwilżanie.",
                        "formulaCheat": "F_{\\text{spójności}} > F_{\\text{przylegania}} \\implies \\text{menisk wypukły}, \\quad F_{\\text{spójności}} < F_{\\text{przylegania}} \\implies \\text{menisk wklęsły}",
                        "theory": `
<div class="theory-section">
    <h4>1. Siły spójności (kohezji) i przylegania (adhezji)</h4>
    <p>W cieczach cząsteczki oddziałują ze sobą oraz z otoczeniem:</p>
    <ul>
        <li><strong>Siły spójności (kohezja):</strong> działają między cząsteczkami <em>tej samej substancji</em> (np. cząsteczki wody przyciągają się wzajemnie). Powodują one powstawanie napięcia powierzchniowego i sprawiają, że krople dążą do kulistego kształtu.</li>
        <li><strong>Siły przylegania (adhezja):</strong> działają między cząsteczkami <em>różnych substancji</em> (np. cząsteczki wody przyciągane przez cząsteczki szkła naczynia).</li>
    </ul>

    <div class="theory-image-wrapper">
        <img src="img/menisk_comparison.jpg" alt="Porównanie menisków: wklęsły i wypukły" class="theory-img">
    </div>

    <h4>2. Kształt menisku i zjawisko zwilżania</h4>
    <p>Kształt powierzchni cieczy przy ściance naczynia zależy od wzajemnej relacji sił przylegania i spójności:</p>

    <div class="step-breakdown" style="background: rgba(56, 189, 248, 0.05); border-left: 3px solid #38bdf8; padding: 10px 14px; margin: 10px 0; border-radius: 4px;">
        <p><strong>A. Menisk wklęsły (ciecz zwilża ścianki naczynia):</strong></p>
        <p>$$F_{\\text{przylegania}} > F_{\\text{spójności}}$$</p>
        <p>Cząsteczki cieczy silniej przyciągają się ze ścianką naczynia niż między sobą. Ciecz unosi się przy ściankach ku górze. Przykład: <strong>woda w szklanym naczyniu</strong>.</p>
    </div>

    <div class="step-breakdown" style="background: rgba(244, 63, 94, 0.05); border-left: 3px solid #f43f5e; padding: 10px 14px; margin: 10px 0; border-radius: 4px;">
        <p><strong>B. Menisk wypukły (ciecz nie zwilża ścianek naczynia):</strong></p>
        <p>$$F_{\\text{spójności}} > F_{\\text{przylegania}}$$</p>
        <p>Cząsteczki cieczy przyciągają się silniej między sobą niż ze ściankami naczynia. Powierzchnia cieczy przy ściankach zakrzywia się w dół. Przykład: <strong>rtęć w szklanym naczyniu</strong> lub kropla wody na natłuszczonym szkle.</p>
    </div>

    <h4>3. Przykład doświadczalny</h4>
    <div style="background: rgba(168, 85, 247, 0.08); border: 1px solid rgba(168, 85, 247, 0.2); padding: 12px; border-radius: 8px; margin-top: 10px;">
        <p><strong>Doświadczenie: Pływająca igła</strong></p>
        <p>Stalowa igła ma gęstość ok. $7800\\frac{\\text{kg}}{\\text{m}^3}$, znacznie większą od gęstości wody ($1000\\frac{\\text{kg}}{\\text{m}^3}$). Mimo to położona ostrożnie i płasko na powierzchni wody nie tonie.</p>
        <p>Utrzymuje ją napięcie powierzchniowe, które działa jak sprężysta błona. Gdy dodamy choćby <strong>jedną kroplę detergentu</strong> (np. płynu do naczyń), zmniejsza on siły spójności między cząsteczkami wody i igła natychmiast opada na dno.</p>
    </div>
</div>`,
                        "tasks": [
                            {
                                "id": "kk-zad-11",
                                "number": 11,
                                "points": 1,
                                "title": "Zadanie 11. (1 pkt) Zwilżanie powierzchni cieczą",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Zjawiska powierzchniowe",
                                    "Spójność i przyleganie"
                                ],
                                "problem": "Kiedy ciecz styka się z ciałem stałym możliwe są dwie sytuacje - ciecz zwilża lub nie zwilża powierzchni ciała stałego. O tym, z którą z wyżej wymienionych sytuacji mamy do czynienia decydują siły:\n\nA. ciężkości cząsteczek.\nB. tylko przylegania.\nC. tylko spójności.\nD. spójności i przylegania.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-12",
                                "number": 12,
                                "points": 1,
                                "title": "Zadanie 12. (1 pkt) Kształt menisku wody w szklance",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 1",
                                "tags": [
                                    "Menisk",
                                    "Siły spójności i przylegania"
                                ],
                                "problem": "Woda wlana do szklanki i wypełniająca ją częściowo tworzy:\n\nA. menisk wypukły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nB. menisk wypukły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.\nC. menisk wklęsły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nD. menisk wklęsły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-2",
                "number": 2,
                "title": "Dział 2: Kinematyka",
                "icon": "🚀",
                "badge": "3 Tematy • 28 Zadań",
                "desc": "Prędkość średnia, droga i czas, względność ruchu na rzece i torach, ruch jednostajnie zmienny i wykresy.",
                "subchapters": [
                    {
                        "id": "k-sub-2-1",
                        "number": "2.1",
                        "title": "Temat 2.1: Prędkość średnia, droga i czas",
                        "shortTitle": "2.1 Prędkość średnia",
                        "icon": "⏱️",
                        "desc": "Przeliczanie jednostek prędkości, etapy drogi i czasu, pociągi w tunelach, wskazówki zegara.",
                        "formulaCheat": "v_{sr} = \\frac{s_{calk}}{t_{calk}}, \\quad v_{sr} = \\frac{2 v_1 v_2}{v_1 + v_2} \\text{ (dla równych dróg)}",
                        "tasks": [
                            {
                                "id": "kk-zad-13",
                                "number": 13,
                                "points": 1,
                                "title": "Zadanie 13. (1 pkt) Porównanie trzech prędkości",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przeliczanie jednostek",
                                    "Prędkość"
                                ],
                                "problem": "Podane są trzy prędkości: $v_1 = 270\\text{ m/min}$, $v_2 = 15\\text{ km/h}$ i $v_3 = 480\\text{ cm/s}$.\n\nPrędkości te spełniają nierówności:\n\nA. $v_1 > v_2 > v_3$\nB. $v_1 < v_2 < v_3$\nC. $v_2 > v_1 > v_3$\nD. $v_2 < v_1 < v_3$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-14",
                                "number": 14,
                                "points": 1,
                                "title": "Zadanie 14. (1 pkt) Trzech turystów na pustyni",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przeliczanie jednostek",
                                    "Prędkość"
                                ],
                                "problem": "Trzech turystów wędruje po pustyni. Pierwszy z prędkością $v_1 = 90\\text{ m/min}$, drugi z $v_2 = 5\\text{ km/h}$, trzeci z $v_3 = 160\\text{ cm/s}$.\n\nPrędkości te spełniają zależność:\n\nA. $v_1 < v_2 < v_3$\nB. $v_1 > v_2 > v_3$\nC. $v_2 < v_1 < v_3$\nD. $v_2 > v_1 > v_3$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-15",
                                "number": 15,
                                "points": 1,
                                "title": "Zadanie 15. (1 pkt) Piesza wycieczka Janka",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przeliczanie jednostek",
                                    "Prędkość"
                                ],
                                "problem": "Na pieszej wycieczce Janek podzielił trasę na trzy części. Pierwszy odcinek trasy przebył z prędkością o wartości $v_1 = 80\\text{ m/min}$, drugi z $v_2 = 6\\text{ km/h}$, trzeci z $v_3 = 150\\text{ cm/s}$.\n\nPrędkości te spełniają nierówność:\n\nA. $v_1 < v_2 < v_3$\nB. $v_1 > v_2 > v_3$\nC. $v_2 < v_1 < v_3$\nD. $v_2 > v_3 > v_1$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-16",
                                "number": 16,
                                "points": 1,
                                "title": "Zadanie 16. (1 pkt) Wnioskowanie o charakterze ruchu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch jednostajny",
                                    "Logika fizyczna"
                                ],
                                "problem": "Samochód w ciągu każdej z kolejnych 5 godzin ruchu prostoliniowego przebywał po 70 km. Na podstawie tej informacji możemy twierdzić, że samochód:\n\nA. poruszał się ruchem jednostajnym prostoliniowym\nB. poruszał się ruchem niejednostajnym prostoliniowym\nC. mógł poruszać się ruchem jednostajnym prostoliniowym\nD. nie poruszał się z przyspieszeniem w żadnym momencie.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-17",
                                "number": 17,
                                "points": 1,
                                "title": "Zadanie 17. (1 pkt) Doświadczenie z zależnością s(t)",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch jednostajny",
                                    "Doświadczenie"
                                ],
                                "problem": "Podczas wykonywania doświadczenia, w którym badano zależność przebytej drogi od czasu trwania ruchu stwierdzono, że w takich samych odstępach czasu ciało przebywało takie same drogi. Na tej podstawie wyciągnięto wniosek, że ciało poruszało się ruchem:\n\nA. jednostajnym, ponieważ 1. droga przebyta przez ciało nie zależała od czasu trwania ruchu.\nB. jednostajnie przyspieszonym, ponieważ 2. droga przebyta przez ciało była wprost proporcjonalna do czasu trwania ruchu.\nC. jednostajnie opóźnionym, ponieważ 3. wartość prędkości ciała była wprost proporcjonalna do czasu trwania ruchu.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-18",
                                "number": 18,
                                "points": 1,
                                "title": "Zadanie 18. (1 pkt) Droga samochodu w 10 minut",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Droga",
                                    "Prędkość",
                                    "Czas"
                                ],
                                "problem": "Samochód jedzie z prędkością $120\\text{ km/h}$. W ciągu 10 minut przebywa drogę:\n\nA. $20\\,000\\text{ m}$.\nB. $12\\,000\\text{ m}$.\nC. $5\\,000\\text{ m}$.\nD. $1\\,200\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-19",
                                "number": 19,
                                "points": 1,
                                "title": "Zadanie 19. (1 pkt) Wyjazd pociągu z tunelu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Długość pociągu",
                                    "Tunel",
                                    "Czas mijania"
                                ],
                                "problem": "Pociąg (jego przedni zderzak) o długości $200\\text{ m}$ wjeżdża do tunelu o długości $300\\text{ m}$, jadąc ze stałą prędkością o wartości $10\\text{ m/s}$.\n\nOznacza to, że pociąg całkowicie wyjedzie z tunelu po czasie:\n\nA. $20\\text{ s}$.\nB. $30\\text{ s}$.\nC. $50\\text{ s}$.\nD. $70\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-20",
                                "number": 20,
                                "points": 1,
                                "title": "Zadanie 20. (1 pkt) Prędkość końca wskazówki minutowej",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch po okręgu",
                                    "Zegar wieżowy"
                                ],
                                "problem": "Wskazówka minutowa dużego zegara wieżowego ma długość $4{,}2\\text{ m}$.\n\nWartość prędkości jej końca wynosi:\n\nA. $1{,}1\\text{ m/s}$,\nB. $0{,}55\\text{ m/s}$,\nC. $0{,}44\\text{ m/s}$,\nD. $0{,}0073\\text{ m/s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-21",
                                "number": 21,
                                "points": 3,
                                "title": "Zadanie 21. (3 pkt) Podróż na biwak leśną drogą",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Prędkość średnia",
                                    "Zadanie otwarte",
                                    "Równania czasu"
                                ],
                                "problem": "Samochód jechał po szosie z pewną prędkością $v$. Gdy dojechał do skrzyżowania z leśną drogą (punkt $S$), zegar pokazywał godzinę 9:58 (czas $t_1$). Na leśnej drodze samochód musiał zwolnić i do punktu $T$ (oznaczmy odległość $ST$ przez $l$) jechał o 20% wolniej niż po szosie, a następnie, do biwaku (punkt $B$), oddalonego od punktu $T$ również o $l$, aż o 50% wolniej niż po szosie. W chwili dojazdu do biwaku zegar pokazywał godzinę 11:11 (czas $t_2$).\n\nJaką godzinę (czas $t_x$) pokazywał ten zegar w chwili mijania punktu $T$?",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-22",
                                "number": 22,
                                "points": 3,
                                "title": "Zadanie 22. (3 pkt) Dwie grupy turystów na tej samej trasie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Prędkość średnia",
                                    "Połowa drogi vs połowa czasu"
                                ],
                                "problem": "Dwie grupy turystów wyruszyły na tę samą trasę. Pierwsza grupa przebyła pierwszą połowę drogi z prędkością o wartości $v_1$, a drugą - z prędkością o wartości $v_2$. Druga grupa pierwszą połowę czasu swojego ruchu wędrowała z prędkością o wartości $v_1$, a drugą połowę czasu swojego ruchu z prędkością o wartości $v_2$.\n\nKtóra grupa przeszła całą trasę szybciej (w krótszym czasie)? Odpowiedź uzasadnij.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-2-2",
                        "number": "2.2",
                        "title": "Temat 2.2: Względność ruchu",
                        "shortTitle": "2.2 Względność ruchu",
                        "icon": "🚆",
                        "desc": "Składanie prędkości, ruch z prądem i pod prąd, mijanie pociągów, schody ruchome.",
                        "formulaCheat": "\\vec{v}_{wzgl} = \\vec{v}_1 - \\vec{v}_2, \\quad v_{\\text{z prądem}} = v_w + v_r, \\quad v_{\\text{pod prąd}} = v_w - v_r",
                        "tasks": [
                            {
                                "id": "kk-zad-23",
                                "number": 23,
                                "points": 1,
                                "title": "Zadanie 23. (1 pkt) Mijanie się dwóch pociągów",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Prędkość względna"
                                ],
                                "problem": "Pociąg pośpieszny jadący z Łodzi do Warszawy poruszający się na pewnym odcinku trasy z szybkością $160\\text{ km/h}$ mija się z pociągiem osobowym, jadącym z Warszawy do Łodzi z szybkością $80\\text{ km/h}$.\n\nW chwili mijania się pociągów szybkość pociągu pośpiesznego względem osobowego, w porównaniu z szybkością pociągu osobowego względem pospiesznego, jest:\n\nA. taka sama.\nB. dwa razy mniejsza.\nC. dwa razy większa.\nD. trzy razy większa.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-24",
                                "number": 24,
                                "points": 1,
                                "title": "Zadanie 24. (1 pkt) Spacer Zosi po pokładzie statku",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Dodawanie wektorowe"
                                ],
                                "problem": "Zosia płynie statkiem poruszającym się z prędkością $10\\text{ km/h}$ względem brzegu. W pewnym momencie rozpoczęła spacer po pokładzie z prędkością $5\\text{ km/h}$ względem niego.\n\nWynika stąd, że wartość prędkości Zosi względem brzegu ($v$) spełniała na pewno warunek:\n\nA. $v = 15\\text{ km/h}$\nB. $v = 5\\text{ km/h}$.\nC. $5\\text{ km/h} < v < 15\\text{ km/h}$\nD. $5\\text{ km/h} \\le v \\le 15\\text{ km/h}$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-25",
                                "number": 25,
                                "points": 1,
                                "title": "Zadanie 25. (1 pkt) Pływak płynący pod prąd rzeki",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch na rzece",
                                    "Względność ruchu"
                                ],
                                "problem": "Pływak płynie pod prąd rzeki. Wartość prędkości pływaka względem wody wynosi $1{,}5\\text{ m/s}$, a wartość prędkości wody w nurcie rzeki względem brzegu wynosi $0{,}5\\text{ m/s}$.\n\nWartość prędkości pływaka względem brzegu wynosi:\n\nA. $0{,}5\\text{ m/s}$.\nB. $1{,}0\\text{ m/s}$.\nC. $1{,}5\\text{ m/s}$.\nD. $2{,}0\\text{ m/s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-26",
                                "number": 26,
                                "points": 1,
                                "title": "Zadanie 26. (1 pkt) Dym z komina parowozu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Kierunek wiatru"
                                ],
                                "problem": "Parowóz porusza się na wschód z prędkością o wartości $18\\text{ km/h}$. Dym z jego komina unosi się pionowo w górę.\n\nOznacza to, że wartość prędkości wiatru i jej kierunek są odpowiednio:\n\nA. $18\\text{ km/h}$ na zachód.\nB. $36\\text{ km/h}$ na wschód.\nC. $18\\text{ km/h}$ na wschód.\nD. $36\\text{ km/h}$ na zachód.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-27",
                                "number": 27,
                                "points": 1,
                                "title": "Zadanie 27. (1 pkt) Schody ruchome w metrze",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Względność ruchu",
                                    "Schody ruchome"
                                ],
                                "problem": "Najdłuższe schody ruchome w Polsce mają długość $36\\text{ m}$, a stojący na nich człowiek pokonuje tę odległość w czasie $72\\text{ s}$.\n\nZ jaką prędkością względem jadących w górę schodów musi poruszać się człowiek, żeby z dołu do góry dostać się w ciągu $36\\text{ s}$?:\n\nA. $0{,}5\\text{ m/s}$\nB. $1\\text{ m/s}$\nC. $1{,}5\\text{ m/s}$\nD. $2\\text{ m/s}$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-28",
                                "number": 28,
                                "points": 1,
                                "title": "Zadanie 28. (1 pkt) Dwie motorówki płynące naprzeciwko siebie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Ruch na rzece",
                                    "Prędkość względna"
                                ],
                                "problem": "Dwie motorówki płyną naprzeciwko siebie, wzdłuż rzeki, płynącej z prędkością $2\\text{ m/s}$. Prędkości motorówek względem wody wynoszą odpowiednio $3\\text{ m/s}$ i $4\\text{ m/s}$.\n\nOd spotkania motorówek do momentu, w którym ich odległość wyniesie $84\\text{ m}$, upłynie:\n\nA. $12\\text{ s}$.\nB. $21\\text{ s}$,\nC. $28\\text{ s}$,\nD. $42\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-29",
                                "number": 29,
                                "points": 1,
                                "title": "Zadanie 29. (1 pkt) Wyścig dwóch motorówek z prądem rzeki",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Wyprzedzanie",
                                    "Ruch na rzece"
                                ],
                                "problem": "Dwie motorówki ścigają się płynąc z prądem rzeki, płynącej z prędkością $2\\text{ m/s}$ względem brzegu. Prędkości motorówek względem wody wynoszą odpowiednio $3\\text{ m/s}$ i $4\\text{ m/s}$, przy czym początkowo, ze względu na wcześniejszy start, prowadziła wolniejsza z nich. W pewnej chwili motorówki zrównały się i szybsza wyprzedziła wolniejszą.\n\nCzas, który upłynie od spotkania motorówek, do momentu, w którym ich odległość wyniesie $84\\text{ m}$ to:\n\nA. $12\\text{ s}$.\nB. $21\\text{ s}$,\nC. $42\\text{ s}$,\nD. $84\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-30",
                                "number": 30,
                                "points": 1,
                                "title": "Zadanie 30. (1 pkt) Pendolino wyprzedza pociąg osobowy",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Wyprzedzanie",
                                    "Długość ciał",
                                    "Prędkość względna"
                                ],
                                "problem": "Pociąg pendolino, jadący z prędkością o wartości $160\\text{ km/h}$, zaczął wyprzedzać poruszający się po sąsiednim torze w tę samą stronę, z prędkością $105\\text{ km/h}$, pociąg osobowy. Długość pociągu pendolino wynosi $400\\text{ m}$, a długość pociągu osobowego $150\\text{ m}$.\n\nCzas trwania całkowitego wyprzedzania (od chwili, gdy przód pociągu pendolino znalazł się na wysokości końca pociągu osobowego do chwili, gdy koniec pociągu pendolino minął przód pociągu osobowego) wyniósł około:\n\nA. $3\\text{ s}$.\nB. $7{,}5\\text{ s}$.\nC. $14\\text{ s}$.\nD. $36\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-31",
                                "number": 31,
                                "points": 5,
                                "title": "Zadanie 31. (5 pkt) Prędkość średnia statku na całej trasie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Prędkość średnia",
                                    "Rzeka"
                                ],
                                "problem": "Statek spacerowy, kursujący na stałej trasie, płynął w górę rzeki z prędkością średnią $v_1$, a wracał z prędkością średnią $v_2$. Prędkości te liczone były względem brzegu.\n\nWyznacz prędkość średnią statku względem brzegu na całej trasie.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-2-3",
                        "number": "2.3",
                        "title": "Temat 2.3: Ruch zmienny i przyspieszenie",
                        "shortTitle": "2.3 Ruch zmienny",
                        "icon": "🏎️",
                        "desc": "Przyspieszenie, droga w kolejnych sekundach, hamowanie, analiza wykresów v(t).",
                        "formulaCheat": "a = \\frac{\\Delta v}{\\Delta t}, \\quad s = v_0 t \\pm \\frac{a t^2}{2}, \\quad s_n = \\frac{a}{2}(2n - 1), \\quad v^2 - v_0^2 = 2as",
                        "tasks": [
                            {
                                "id": "kk-zad-32",
                                "number": 32,
                                "points": 1,
                                "title": "Zadanie 32. (1 pkt) Przyspieszenie bolidu Formuły 1",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Przyspieszenie",
                                    "Ruch jednostajnie przyspieszony"
                                ],
                                "problem": "Podczas startu w wyścigu Formuły 1 samochód rozpędził się do szybkości $100\\text{ km/h}$ w czasie $1{,}7$ sekundy.\n\nŚrednie przyspieszenie, z jakim w tym czasie poruszał się ten samochód, miało wartość w przybliżeniu:\n\nA. $59\\text{ m/s}^2$\nB. $16\\text{ m/s}^2$\nC. $5{,}9\\text{ m/s}^2$\nD. $1{,}6\\text{ m/s}^2$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-33",
                                "number": 33,
                                "points": 1,
                                "title": "Zadanie 33. (1 pkt) Droga w trzeciej sekundzie i po 3 sekundach",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Droga w n-tej sekundzie",
                                    "Ruch jednostajnie przyspieszony"
                                ],
                                "problem": "Spoczywające początkowo ciało, zaczyna poruszać się ze stałym przyspieszeniem. W ciągu trzeciej sekundy od chwili rozpoczęcia ruchu, przebyło ono drogę $5\\text{ m}$.\n\nPo upływie $3\\text{ s}$ od chwili rozpoczęcia ruchu, ciało to przebyło drogę:\n\nA. $5\\text{ m}$,\nB. $7\\text{ m}$,\nC. $9\\text{ m}$,\nD. $11\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-34",
                                "number": 34,
                                "points": 1,
                                "title": "Zadanie 34. (1 pkt) Droga w 3 pierwszych sekundach a w trzeciej",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Droga w n-tej sekundzie",
                                    "Ruch jednostajnie przyspieszony"
                                ],
                                "problem": "Ciało, spoczywające początkowo, zaczyna poruszać się ze stałym przyspieszeniem. W ciągu pierwszych trzech sekund od chwili rozpoczęcia ruchu przebyło ono drogę $9\\text{ m}$.\n\nW trzeciej sekundzie od chwili rozpoczęcia ruchu, ciało to przebyło drogę:\n\nA. $4{,}5\\text{ m}$,\nB. $7\\text{ m}$,\nC. $9\\text{ m}$,\nD. $5\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-35",
                                "number": 35,
                                "points": 1,
                                "title": "Zadanie 35. (1 pkt) Droga hamowania klocka z tarciem",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Hamowanie",
                                    "Ruch opóźniony",
                                    "Czas zatrzymania"
                                ],
                                "problem": "Klockowi znajdującemu się na poziomej powierzchni nadano prędkość o wartości $4{,}0\\text{ m/s}$. W wyniku działania sił tarcia klocek zaczął poruszać się (hamował) z przyspieszeniem o wartości $1{,}0\\text{ m/s}^2$.\n\nW ciągu $5{,}0\\text{ s}$ od chwili nadania mu prędkości klocek przebędzie drogę:\n\nA. $7{,}5\\text{ m}$.\nB. $8{,}0\\text{ m}$.\nC. $20{,}0\\text{ m}$.\nD. $32{,}5\\text{ m}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-36",
                                "number": 36,
                                "points": 1,
                                "title": "Zadanie 36. (1 pkt) Wykres prędkości narciarza na stoku",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Wykres v(t)",
                                    "Przyspieszenie",
                                    "Interpretacja graficzna"
                                ],
                                "chartSvg": "<svg viewBox=\"0 0 500 270\" class=\"physics-chart\" style=\"max-width:480px; width:100%; height:auto; display:block; margin:20px auto; background:rgba(15,23,42,0.65); border-radius:12px; border:1px solid rgba(255,255,255,0.12); padding:16px;\">\n  <defs>\n    <marker id=\"axis-arrow\" viewBox=\"0 0 10 10\" refX=\"6\" refY=\"5\" markerWidth=\"6\" markerHeight=\"6\" orient=\"auto-start-reverse\">\n      <path d=\"M 0 1.5 L 8 5 L 0 8.5 z\" fill=\"#cbd5e1\" />\n    </marker>\n  </defs>\n  <line x1=\"70\" y1=\"70\" x2=\"230\" y2=\"70\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.3\" />\n  <line x1=\"230\" y1=\"70\" x2=\"230\" y2=\"210\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.3\" />\n  <line x1=\"310\" y1=\"70\" x2=\"310\" y2=\"210\" stroke=\"#94a3b8\" stroke-dasharray=\"4,4\" stroke-width=\"1.3\" />\n  <line x1=\"70\" y1=\"210\" x2=\"435\" y2=\"210\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" marker-end=\"url(#axis-arrow)\" />\n  <line x1=\"70\" y1=\"210\" x2=\"70\" y2=\"35\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" marker-end=\"url(#axis-arrow)\" />\n  <text x=\"70\" y=\"24\" fill=\"#f8fafc\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"14\" font-weight=\"700\" text-anchor=\"middle\">v[m/s]</text>\n  <text x=\"445\" y=\"214\" fill=\"#f8fafc\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"14\" font-weight=\"700\">t[s]</text>\n  <line x1=\"65\" y1=\"140\" x2=\"70\" y2=\"140\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"65\" y1=\"70\" x2=\"70\" y2=\"70\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <text x=\"58\" y=\"145\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"end\">10</text>\n  <text x=\"58\" y=\"75\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"end\">20</text>\n  <line x1=\"150\" y1=\"210\" x2=\"150\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"230\" y1=\"210\" x2=\"230\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"310\" y1=\"210\" x2=\"310\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <line x1=\"390\" y1=\"210\" x2=\"390\" y2=\"215\" stroke=\"#cbd5e1\" stroke-width=\"1.8\" />\n  <text x=\"150\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">10</text>\n  <text x=\"230\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">20</text>\n  <text x=\"310\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">30</text>\n  <text x=\"390\" y=\"234\" fill=\"#cbd5e1\" font-family=\"'Plus Jakarta Sans', Inter, sans-serif\" font-size=\"13\" font-weight=\"600\" text-anchor=\"middle\">40</text>\n  <polyline points=\"70,210 230,70 310,70 390,210\" fill=\"none\" stroke=\"#38bdf8\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" />\n</svg>",
                                "problem": "Na wykresie poniżej przedstawiono zależność prędkości narciarza podczas zjeżdżania ze stoku góry w funkcji czasu.\n\nWartość bezwzględna przyspieszenia podczas hamowania była w porównaniu z przyspieszeniem podczas przyspieszania:\n\nA. równa temu przyspieszeniu.\nB. dwa razy większa.\nC. dwa razy mniejsza.\nD. cztery razy mniejsza.\n\n(Dodatkowe pytania do wykresu: Droga całkowita wynosi: C. 600m; Wartość wypadkowej sił: D. dwa razy mniejsza niż podczas hamowania).",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-37",
                                "number": 37,
                                "points": 3,
                                "title": "Zadanie 37. (3 pkt) Zagrożenie zderzeniem dwóch pociągów",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Hamowanie",
                                    "Ruch względny",
                                    "Zderzenie"
                                ],
                                "problem": "Maszynista pociągu pospiesznego jadącego z prędkością $v_1 = 30{,}0\\text{ m/s}$ z przerażeniem zauważył, że przed nim, w odległości $d = 180\\text{ m}$, jedzie w tę samą stronę i po tym samym torze pociąg towarowy. Prędkość pociągu towarowego była stała i wynosiła $v_2 = 9{,}0\\text{ m/s}$. Maszynista włączył natychmiast układ hamulcowy, co spowodowało, że jego pociąg poruszał się (hamował) z przyspieszeniem o wartości $a = 1{,}2\\text{ m/s}^2$.\n\nNa podstawie odpowiednich rozumowań i obliczeń ustal, czy dojdzie do zderzenia tych pociągów.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-38",
                                "number": 38,
                                "points": 5,
                                "title": "Zadanie 38. (5 pkt) Samochód elektryczny przed znakiem",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Ruch opóźniony",
                                    "Zatrzymanie"
                                ],
                                "problem": "W chwili, gdy wyczerpał się akumulator, samochód elektryczny poruszał się z prędkością $v = 16\\text{ m/s}$. Wskutek działania oporów ruchu zaczął się on poruszać ruchem jednostajnie opóźnionym z przyspieszeniem (zwanym w tym przypadku opóźnieniem) o wartości $a = 2\\text{ m/s}^2$. W chwili rozpoczęcia hamowania samochód znajdował się w odległości $L = 80\\text{ m}$ od znaku drogowego.\n\nOblicz odległość $S$ samochodu od tego znaku drogowego po czasie $t_1 = 10\\text{ s}$ od chwili rozpoczęcia hamowania.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-39",
                                "number": 39,
                                "points": 5,
                                "title": "Zadanie 39. (5 pkt) Trzy etapy ruchu ciała",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Trzy etapy ruchu",
                                    "Ruch zmienny"
                                ],
                                "problem": "Ciało, pozostające początkowo w spoczynku, rusza z miejsca i przebywa odległość $12{,}5\\text{ m}$ z przyspieszeniem $1\\text{ m/s}^2$. Następnie porusza się ruchem jednostajnym prostoliniowym przez $15\\text{ s}$ i wreszcie, poruszając się ruchem jednostajnie opóźnionym, przebywa $20\\text{ m}$, do całkowitego zatrzymania się.\n\nOblicz prędkość ciała podczas ruchu jednostajnego prostoliniowego oraz całkowity czas ruchu ciała.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-40",
                                "number": 40,
                                "points": 5,
                                "title": "Zadanie 40. (5 pkt) Rozpędzanie od 40 km/h do 90 km/h",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 2",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Przyspieszenie",
                                    "Równanie bezczasowe"
                                ],
                                "problem": "Kierowca samochodu jadącego z szybkością $40\\text{ km/h}$ zaczął przyspieszać i po przejechaniu $100\\text{ m}$ szybkość samochodu wzrosła do $90\\text{ km/h}$.\n\nOblicz przyspieszenie samochodu przyjmując, że samochód podczas zwiększania szybkości poruszał się ruchem jednostajnie przyspieszonym.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-3",
                "number": 3,
                "title": "Dział 3: Dynamika",
                "icon": "⚖️",
                "badge": "4 Tematy • 12 Zadań",
                "desc": "Zasady dynamiki Newtona, siła wypadkowa, siły bezwładności w windzie, III zasada dynamiki i naprężenia nici, tarcie.",
                "subchapters": [
                    {
                        "id": "k-sub-3-1",
                        "number": "3.1",
                        "title": "Temat 3.1: Zasady dynamiki Newtona i siła wypadkowa",
                        "shortTitle": "3.1 Zasady dynamiki",
                        "icon": "🍎",
                        "desc": "II zasada dynamiki, siła wypadkowa i opory ruchu pociągu, pomiary siłomierzem.",
                        "formulaCheat": "F_w = m \\cdot a, \\quad F_{\\text{ciągu}} - F_{\\text{oporu}} = m \\cdot a, \\quad F_g = m \\cdot g",
                        "tasks": [
                            {
                                "id": "kk-zad-41",
                                "number": 41,
                                "points": 1,
                                "title": "Zadanie 41. (1 pkt) Siła 5 hN i masa 20 mg",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Przedrostki SI",
                                    "II zasada dynamiki"
                                ],
                                "problem": "Na ciało działa siła wypadkowa o wartości $5\\text{ hN}$. Masa tego ciała ma wartość $20\\text{ mg}$.\n\nPrzyspieszenie tego ciała ma wartość:\n\nA. $25\\text{ Mm/s}^2$\nB. $25\\text{ m/s}^2$\nC. $0{,}4\\text{ km/s}^2$\nD. $2{,}5\\text{ Mm/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-42",
                                "number": 42,
                                "points": 1,
                                "title": "Zadanie 42. (1 pkt) Niezrównoważona siła i cyfry znaczące",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "II zasada dynamiki",
                                    "Cyfry znaczące"
                                ],
                                "problem": "Zmierzono przyspieszenie ciała i wyniosło ono $3{,}2\\text{ m/s}^2$. Następnie ciało zważono - okazało się, że jego masa wynosi $21{,}6\\text{ kg}$.\n\nWynika stąd, że na ciało w czasie przyspieszania działała niezrównoważona siła o wartości:\n\nA. $70\\text{ N}$.\nB. $69{,}12\\text{ N}$.\nC. $69{,}1\\text{ N}$.\nD. $69\\text{ N}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-43",
                                "number": 43,
                                "points": 1,
                                "title": "Zadanie 43. (1 pkt) Siła ciągu elektrowozu ze składem 500 t",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Opory ruchu",
                                    "Siła ciągu",
                                    "II zasada dynamiki"
                                ],
                                "problem": "Na poziomym, prostoliniowym torze na skład wagonów o masie $500\\text{ t}$ działa stała siła oporów ruchu. Aby ten skład poruszał się ze stałą prędkością, elektrowóz musi ciągnąć go siłą o wartości $50\\text{ kN}$.\n\nAby ten skład poruszał się z przyspieszeniem $0{,}5\\text{ m/s}^2$, elektrowóz musi ciągnąć go siłą o wartości:\n\nA. $200\\text{ kN}$.\nB. $250\\text{ kN}$.\nC. $300\\text{ kN}$.\nD. $500\\text{ kN}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-44",
                                "number": 44,
                                "points": 3,
                                "title": "Zadanie 44. (3 pkt) Stosunek mas na siłomierzu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Siłomierz",
                                    "Ciężar"
                                ],
                                "problem": "Po zawieszeniu pewnego ciężarka na siłomierzu na jego skali odczytano wartość $1{,}5\\text{ N}$. Po zawieszeniu innego ciężarka odczytano na skali siłomierza wartość $9\\text{ N}$.\n\nWykaż, wykonując odpowiednie obliczenia, że masa drugiego ciężarka była 6 razy większa od masy ciężarka zawieszonego na siłomierzu w sytuacji pierwszej.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-3-2",
                        "number": "3.2",
                        "title": "Temat 3.2: Siły bezwładności i waga",
                        "shortTitle": "3.2 Siły bezwładności",
                        "icon": "🛗",
                        "desc": "Waga w ruszającej i hamującej windzie, przeciążenie i niedociążenie, układ nieinercjalny.",
                        "formulaCheat": "N = m(g + a) \\text{ (w górę z przysp.)}, \\quad N = m(g - a) \\text{ (w dół z przysp.)}, \\quad N = mg \\text{ (ruch jednostajny)}",
                        "tasks": [
                            {
                                "id": "kk-zad-45",
                                "number": 45,
                                "points": 1,
                                "title": "Zadanie 45. (1 pkt) Wskazanie wagi łazienkowej w windzie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Siła bezwładności",
                                    "Winda",
                                    "Przeciążenie"
                                ],
                                "problem": "Winda w budynku porusza się ze stałą prędkością (jednakową w górę i w dół) poza krótkimi okresami czasu tuż po ruszeniu oraz tuż przed zatrzymaniem się. Na ustawionej w windzie wadze łazienkowej stoi dziecko. W nieruchomej windzie waga wskazuje $20\\text{ kg}$. W pewnej chwili winda ruszyła w górę.\n\nWskaż poprawne zachowanie wagi podczas ruchu windy.\n\nA. Początkowo wskazanie wagi zmalało, a następnie wróciło do wartości $20\\text{ kg}$.\nB. Początkowo wskazanie wagi wzrosło, a następnie wróciło do wartości $20\\text{ kg}$.\nC. Przez cały czas trwania ruchu windy wskazanie wagi było większe niż $20\\text{ kg}$.\nD. Przez cały czas trwania ruchu windy wskazanie wagi było mniejsze niż $20\\text{ kg}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-46",
                                "number": 46,
                                "points": 1,
                                "title": "Zadanie 46. (1 pkt) Waga Dominiki przy jeździe windą w dół",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Niedociążenie",
                                    "Winda",
                                    "Siła nacisku"
                                ],
                                "problem": "Dominika o masie ciała $50\\text{ kg}$, jadąc windą miała okazję zważyć się na wadze sprężynowej (wyskalowanej w N). Zaczęła obserwować wskazania wagi w zależności od przyspieszenia windy. Przyjmij, że $g = 10\\text{ m/s}^2$.\n\nWskazanie wagi w windzie poruszającej się z przyspieszeniem $1{,}0\\text{ m/s}^2$ skierowanym w dół wyniosło:\n\nA. $50\\text{ N}$.\nB. $450\\text{ N}$.\nC. $500\\text{ N}$.\nD. $550\\text{ N}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-3-3",
                        "number": "3.3",
                        "title": "Temat 3.3: Trzecia zasada dynamiki (naprężenia nici)",
                        "shortTitle": "3.3 III zasada dynamiki",
                        "icon": "🪢",
                        "desc": "Siła naprężenia nici/linki, akcja i reakcja, hak w ścianie vs przeciąganie liny.",
                        "formulaCheat": "\\vec{F}_{AB} = -\\vec{F}_{BA}, \\quad N_{\\text{linki}} = F_1 = F_2 \\text{ (lina w spoczynku)}",
                        "tasks": [
                            {
                                "id": "kk-zad-47",
                                "number": 47,
                                "points": 1,
                                "title": "Zadanie 47. (1 pkt) Janek i Staszek ciągnący linkę",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "III zasada dynamiki",
                                    "Naprężenie liny"
                                ],
                                "problem": "Janek i Staszek ciągną za dwa końce jednorodnej linki, która pozostaje nieruchoma. Gdy każdy z nich ciągnie za jeden koniec linki siłą o wartości $1\\text{ kN}$, ulega ona zerwaniu. Następnie linka (to co z niej pozostało) została przymocowana do haka w ścianie i Janek zaczyna ją ciągnąć sam, za drugi koniec.\n\nAby zerwać linkę Janek musi ją teraz ciągnąć siłą o wartości:\n\nA. $2\\text{ kN}$,\nB. $1\\text{ kN}$,\nC. $0{,}5\\text{ kN}$,\nD. której nie da się określić.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-48",
                                "number": 48,
                                "points": 1,
                                "title": "Zadanie 48. (1 pkt) Trener i Zosia ciągnący linkę z siłomierzem",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "III zasada dynamiki",
                                    "Siłomierz",
                                    "Naprężenie"
                                ],
                                "problem": "Zosia, która trenuje zapasy, przywiązała do haka w ścianie linkę i ciągnęła za jej drugi koniec za pomocą przywiązanego do niego siłomierza. Linka zerwała się, gdy siłomierz wskazywał siłę o wartości $1{,}0\\text{ kN}$. Następnie, za zerwany koniec linki złapał trener Zosi. Zosia i trener zaczęli ciągnąć linkę w przeciwne strony, ale ona pozostawała w spoczynku.\n\nZerwała się, gdy siłomierz na końcu ciągniętym przez Zosię wskazywał:\n\nA. $2{,}0\\text{ kN}$,\nB. $0{,}5\\text{ kN}$,\nC. $1{,}0\\text{ kN}$,\nD. siłę, której nie da się określić.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-49",
                                "number": 49,
                                "points": 1,
                                "title": "Zadanie 49. (1 pkt) Lina holownicza szybowca i dwa auta",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Naprężenie liny",
                                    "II i III zasada dynamiki"
                                ],
                                "problem": "Lekka lina holownicza ulega zerwaniu, gdy nadaje szybowcowi o masie $500\\text{ kg}$ przyspieszenie $10\\text{ m/s}^2$. Pomijamy siłę oporu powietrza przy przyspieszaniu szybowca. Janek i Józek połączyli tą liną swoje identyczne samochody i próbują ją rozerwać, jadąc w przeciwne strony, gdy linka jest już naprężona.\n\nSamochód każdego z nich musi ciągnąć linę siłą o wartości co najmniej:\n\nA. $5\\text{ kN}$.\nB. $2{,}5\\text{ kN}$.\nC. $2{,}0\\text{ kN}$.\nD. $1{,}0\\text{ kN}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-3-4",
                        "number": "3.4",
                        "title": "Temat 3.4: Siły tarcia, oporu i siły grawitacyjne/magnetyczne",
                        "shortTitle": "3.4 Tarcie i opory",
                        "icon": "🧲",
                        "desc": "Tarcie statyczne i kinetyczne, magnes na lodówce i sejfie, opory ruchu klocka.",
                        "formulaCheat": "T \\le f \\cdot N, \\quad T = Q \\text{ (magnes na pionowej ścianie w spoczynku)}, \\quad F_w = 0 \\implies F = T",
                        "tasks": [
                            {
                                "id": "kk-zad-50",
                                "number": 50,
                                "points": 1,
                                "title": "Zadanie 50. (1 pkt) Magnes na pionowej ściance lodówki",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Tarcie statyczne",
                                    "Siła nacisku",
                                    "Magnes"
                                ],
                                "problem": "Magnes o ciężarze $Q = 0{,}1\\text{ N}$ przywarł do płaskiej, pionowej, stalowej ścianki lodówki i jest w spoczynku. Ścianka przyciąga magnes z siłą $F = 5\\text{ N}$. Przyjmując, że wartość przyspieszenia grawitacyjnego $g = 10\\text{ m/s}^2$.\n\nWartość siły tarcia między ścianką a magnesem wynosi:\n\nA. $0{,}01\\text{ N}$\nB. $0{,}1\\text{ N}$\nC. $1\\text{ N}$\nD. $5\\text{ N}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-51",
                                "number": 51,
                                "points": 1,
                                "title": "Zadanie 51. (1 pkt) Klocek drewniany ciągnięty dynamometrem",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "I zasada dynamiki",
                                    "Opory ruchu",
                                    "Dynamometr"
                                ],
                                "problem": "Drewniany klocek o masie $0{,}2\\text{ kg}$ jest ciągnięty poziomo, ruchem jednostajnym prostoliniowym, po poziomej powierzchni za pomocą dynamometru. Dynamometr wskazuje $0{,}5\\text{ N}$.\n\nJeśli przyjąć wartość przyspieszenia ziemskiego $g = 10\\text{ m/s}^2$ to siła oporów ruchu działająca na klocek jest równa:\n\nA. $1{,}5\\text{ N}$,\nB. $2{,}0\\text{ N}$,\nC. $0{,}5\\text{ N}$,\nD. $2{,}5\\text{ N}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-52",
                                "number": 52,
                                "points": 1,
                                "title": "Zadanie 52. (1 pkt) Magnes przy górnej ściance sejfu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 3",
                                "tags": [
                                    "Siła magnetyczna",
                                    "Ciężar",
                                    "Nacisk"
                                ],
                                "problem": "Do górnej, poziomej ścianki wnętrza stalowego sejfu przywarł magnes o masie $m = 20\\text{ g}$. Magnes naciska na powierzchnię tej ścianki siłą o wartości $F = 2{,}0\\text{ N}$. Znajdź wartość siły $F_m$, związanej z magnetycznym oddziaływaniem magnesu i ścianki, jaką magnes przyciąga ściankę. Przyjmij wartość przyspieszenia ziemskiego $g = 10\\text{ m/s}^2$.\n\nA. $2{,}2\\text{ N}$\nB. $1{,}8\\text{ N}\nC. $2{,}0\\text{ N}\nD. $0{,}2\\text{ N}",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-4",
                "number": 4,
                "title": "Dział 4: Hydrostatyka i Aerostatyka",
                "icon": "💧",
                "badge": "3 Tematy • 13 Zadań",
                "desc": "Ciśnienie ciał stałych i hydrostatyczne, prawo Archimedesa i pływanie ciał, topnienie lodu w wodzie słonej i słodkiej.",
                "subchapters": [
                    {
                        "id": "k-sub-4-1",
                        "number": "4.1",
                        "title": "Temat 4.1: Ciśnienie ciał stałych i ciśnienie hydrostatyczne",
                        "shortTitle": "4.1 Ciśnienie ciał stałych i cieczy",
                        "icon": "🧮",
                        "desc": "Definicja ciśnienia $p=F/S$, ciśnienie łyżew na lód, ostrze gwoździa, słup rtęci.",
                        "formulaCheat": "p = \\frac{F}{S}, \\quad p_h = \\rho \\cdot g \\cdot h, \\quad 1\\text{ Pa} = 1\\frac{\\text{N}}{\\text{m}^2}",
                        "tasks": [
                            {
                                "id": "kk-zad-53",
                                "number": 53,
                                "points": 1,
                                "title": "Zadanie 53. (1 pkt) Ciśnienie łyżew Antka na lód",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Ciśnienie",
                                    "Pole powierzchni",
                                    "Dwa buty"
                                ],
                                "problem": "Antek ma przyczepiony do każdego buta pasek metalu o długości $30\\text{ cm}$ i szerokości $1{,}0\\text{ mm}$ (pierwowzór łyżew). Masa Antka z „łyżwami” wynosi $60\\text{ kg}$. Przyjmij, że $g = 10\\text{ m/s}^2$. Buty Antka stykają się z lodem wyłącznie za pośrednictwem tych pasków metalu.\n\nOznacza to, że ciśnienie wywierane przez Antka na powierzchnię lodu wynosi:\n\nA. $2{,}0\\text{ GPa}$.\nB. $1{,}0\\text{ GPa}$.\nC. $2{,}0\\text{ MPa}$.\nD. $1{,}0\\text{ MPa}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-54",
                                "number": 54,
                                "points": 1,
                                "title": "Zadanie 54. (1 pkt) Ciśnienie ostrza gwoździa pod deską",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Ciśnienie",
                                    "Koło",
                                    "Przeliczanie jednostek"
                                ],
                                "problem": "Ostry koniec gwoździa ma w przybliżeniu kształt koła o średnicy $0{,}5\\text{ mm}$. Uderzając w łepek gwoździa siłą o wartości $50\\text{ N}$, wytwarzamy w miejscu zetknięcia ostrego końca gwoździa z deską ciśnienie o wartości około:\n\nA. $250\\text{ MPa}$.\nB. $60\\text{ MPa}$.\nC. $250\\text{ Pa}$.\nD. $60\\text{ Pa}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-55",
                                "number": 55,
                                "points": 1,
                                "title": "Zadanie 55. (1 pkt) Ciśnienie hydrostatyczne słupa rtęci",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Ciśnienie hydrostatyczne",
                                    "Cyfry znaczące"
                                ],
                                "problem": "Gęstość rtęci wynosi $13{,}55 \\times 10^3\\text{ kg/m}^3$, a przyspieszenie ziemskie $9{,}81\\text{ m/s}^2$. Na dnie naczynia wypełnionego rtęcią do wysokości $0{,}12\\text{ m}$, rtęć wytwarza ciśnienie hydrostatyczne:\n\nA. $15{,}95106\\text{ kPa}$.\nB. $16\\text{ kPa}$.\nC. $15{,}95\\text{ kPa}$.\nD. $16{,}0\\text{ kPa}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-4-2",
                        "number": "4.2",
                        "title": "Temat 4.2: Prawo Archimedesa i warunki pływania ciał",
                        "shortTitle": "4.2 Prawo Archimedesa i pływanie ciał",
                        "icon": "🪵",
                        "desc": "Siła wyporu, warunki pływania ciał, zanurzenie częściowe, topnienie lodu w wodzie słonej.",
                        "formulaCheat": "F_w = \\rho_c \\cdot g \\cdot V_z, \\quad \\frac{V_z}{V} = \\frac{\\rho_{\\text{ciała}}}{\\rho_c} \\implies \\rho_{\\text{ciała}} = \\frac{V_z}{V} \\rho_c",
                        "tasks": [
                            {
                                "id": "kk-zad-56",
                                "number": 56,
                                "points": 1,
                                "title": "Zadanie 56. (1 pkt) Pień drzewa unoszący się na jeziorze",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Prawo Archimedesa",
                                    "Warunki pływania"
                                ],
                                "problem": "Na powierzchni jeziora nieruchomo unosi się częściowo zanurzony pień drzewa. Oznacza to, że:\n\nA. na pień nie działa żadna siła,\nB. siła wyporu działająca na pień jest większa od jego ciężaru,\nC. gęstość drewna jest większa niż gęstość wody,\nD. gęstość drewna jest mniejsza niż gęstość wody.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-57",
                                "number": 57,
                                "points": 1,
                                "title": "Zadanie 57. (1 pkt) Namoknięty pień na dnie jeziora",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Warunki tonięcia",
                                    "Gęstość"
                                ],
                                "problem": "Na dnie jeziora spoczywa nieruchomo, zanurzony całkowicie, namoknięty pień drzewa. Jego uniesienie z zajmowanego położenia wymaga przyłożenia sporej siły skierowanej do góry. Oznacza to, że:\n\nA. na pień nie działa żadna siła,\nB. siła wyporu działająca na pień jest równa jego ciężarowi,\nC. gęstość pnia jest większa niż gęstość wody,\nD. gęstość pnia jest mniejsza niż gęstość wody.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-58",
                                "number": 58,
                                "points": 1,
                                "title": "Zadanie 58. (1 pkt) Ciało unosi się wewnątrz cieczy bez ruchu",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Pływanie wewnątrz cieczy",
                                    "Gęstość"
                                ],
                                "problem": "W jednorodnej cieczy, w dużym naczyniu, unosi się bez ruchu całkowicie zanurzone ciało. Oznacza to, że:\n\nA. średnia gęstość ciała jest mniejsza od gęstości cieczy.\nB. średnia gęstość ciała jest równa gęstości cieczy.\nC. średnia gęstość ciała jest większa od gęstości cieczy.\nD. na to ciało nie działa żadna siła.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-59",
                                "number": 59,
                                "points": 1,
                                "title": "Zadanie 59. (1 pkt) Kulka i walec w cieczy o gęstości 1,5 g/cm³",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Gęstość brył",
                                    "Warunki pływania"
                                ],
                                "problem": "Do cieczy o gęstości $1{,}5\\text{ g/cm}^3$ wrzucono kulkę o średnicy $1\\text{ cm}$ i masie $1\\text{ g}$ oraz walec o średnicy $1\\text{ cm}$, wysokości $1\\text{ cm}$ i masie $1\\text{ g}$.\n\nWskaż zdanie poprawne.\n\nA. I kulka, i walec zatoną.\nB. I kulka, i walec wypłyną na powierzchnię.\nC. kulka zatonie, a walec wypłynie na powierzchnię.\nD. kulka wypłynie na powierzchnię, a walec zatonie.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-60",
                                "number": 60,
                                "points": 1,
                                "title": "Zadanie 60. (1 pkt) Ciało zanurzone w 60% objętości",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Prawo Archimedesa",
                                    "Obliczanie gęstości"
                                ],
                                "problem": "Poniżej poziomu powierzchni cieczy o gęstości $800\\text{ kg/m}^3$ znajduje się 60% objętości pływającego w niej jednorodnego ciała.\n\nGęstość pływającego ciała jest równa:\n\nA. $800\\text{ kg/m}^3$\nB. $600\\text{ kg/m}^3$\nC. $480\\text{ kg/m}^3$\nD. $320\\text{ kg/m}^3$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-61",
                                "number": 61,
                                "points": 1,
                                "title": "Zadanie 61. (1 pkt) Topnienie kostki lodu w słonej wodzie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Topnienie lodu",
                                    "Woda słona",
                                    "Poziom cieczy"
                                ],
                                "problem": "W naczyniu ze słoną wodą pływa kostka lodu z wody z kranu w Twojej szkole. Po całkowitym stopieniu kostki poziom wody w naczyniu:\n\nA. pozostał bez zmian\nB. wzrósł\nC. obniżył się\nD. zmienił się w sposób niemożliwy do ustalenia.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-4-3",
                        "number": "4.3",
                        "title": "Temat 4.3: Hydrostatyka – Zadania otwarte",
                        "shortTitle": "4.3 Hydrostatyka otwarte",
                        "icon": "🌊",
                        "desc": "Przyssany krążek do dna naczynia, zmiana ciśnienia po wrzuceniu pływaka, tonięcie z przyspieszeniem, obniżenie poziomu cieczy.",
                        "formulaCheat": "F_{\\text{nacisku}} = Q + \\rho g h S, \\quad a = g\\left(1 - \\frac{\\rho_2}{\\rho_1}\\right), \\quad \\Delta V = \\frac{m}{\\rho_0} - \\frac{m}{\\rho_c} = S \\cdot \\Delta h",
                        "tasks": [
                            {
                                "id": "kk-zad-62",
                                "number": 62,
                                "points": 5,
                                "title": "Zadanie 62. (5 pkt) Metalowy krążek przylegający do dna naczynia",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Brak siły wyporu",
                                    "Siła nacisku na dno"
                                ],
                                "problem": "Gładki metalowy krążek o polu powierzchni podstawy $S = 20\\text{ cm}^2$ i wysokości $H = 1{,}0\\text{ cm}$, mający ciężar $Q = 3\\text{ N}$ przylega ściśle podstawą do gładkiego poziomego dna naczynia z wodą tak, że woda nie dostała się pomiędzy dno a krążek. Wysokość słupa wody nad górną powierzchnią krążka wynosi $h = 0{,}5\\text{ m}$.\n\nOblicz siłę nacisku krążka na dno naczynia. Zaniedbaj wpływ ciśnienia atmosferycznego oraz przyjmij, że gęstość wody $d = 10^3\\text{ kg/m}^3$, a przyspieszenie grawitacyjne $g = 10\\text{ m/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-63",
                                "number": 63,
                                "points": 3,
                                "title": "Zadanie 63. (3 pkt) Wzrost ciśnienia na dno po wrzuceniu pływającej kulki",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Ciśnienie hydrostatyczne",
                                    "Wyporność"
                                ],
                                "problem": "Do naczynia o wysokich, pionowych ścianach bocznych nalano wody tak, że wysokość jej słupa wynosi $h = 50\\text{ cm}$.\n\nO ile procent zmieni się ciśnienie hydrostatyczne na poziome dno naczynia o polu powierzchni $S = 100\\text{ cm}^2$, jeżeli na powierzchni wody umieścimy kulkę o masie $m = 100\\text{ g}$, która będzie pływać częściowo zanurzona? Przyjmij gęstość wody $d = 1{,}0\\text{ g/cm}^3$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-64",
                                "number": 64,
                                "points": 3,
                                "title": "Zadanie 64. (3 pkt) Przyspieszenie tonącej kulki w cieczy",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Ruch tonącego ciała",
                                    "II zasada dynamiki"
                                ],
                                "problem": "Kulkę o promieniu $r = 5\\text{ cm}$ wykonaną z materiału o gęstości $d_1 = 1200\\text{ kg/m}^3$ zanurzono całkowicie w cieczy o gęstości $d_2 = 900\\text{ kg/m}^3$.\n\nOblicz wartość przyspieszenia, z jakim kulka będzie tonąć od chwili, gdy całkowicie znajdzie się pod powierzchnią cieczy. Przyjmij wartość przyspieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$. Opory ruchu zaniedbaj.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-65",
                                "number": 65,
                                "points": 3,
                                "title": "Zadanie 65. (3 pkt) Wyznaczanie gęstości cieczy z topnienia lodu",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 4",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Topnienie lodu",
                                    "Gęstość cieczy"
                                ],
                                "problem": "Kawałek lodu o masie $m = 3{,}8\\text{ kg}$ pływa na powierzchni cieczy znajdującej się w cylindrycznym naczyniu o polu powierzchni dna $S = 100\\text{ cm}^2$.\n\nZnajdź gęstość tej cieczy, jeśli po pełnym roztopieniu się lodu jej poziom w naczyniu obniżył się o $\\Delta h = 20\\text{ mm}$. Gęstość wody wynosi $d_0 = 1{,}0\\text{ g/cm}^3$.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-5",
                "number": 5,
                "title": "Dział 5: Praca, Moc, Energia Mechaniczna",
                "icon": "⚡",
                "badge": "3 Tematy • 15 Zadań",
                "desc": "Praca mechaniczna, moc urządzeń, energia kinetyczna i potencjalna, maszyny proste (kołowrót) i sprawność.",
                "subchapters": [
                    {
                        "id": "k-sub-5-1",
                        "number": "5.1",
                        "title": "Temat 5.1: Definicje, jednostki, bilans pracy",
                        "shortTitle": "5.1 Praca i moc",
                        "icon": "💡",
                        "desc": "Wzory na pracę i moc, przeliczanie jednostek (W, kW, J, kJ, MJ), dźwigi i żarówki.",
                        "formulaCheat": "W = F \\cdot s, \\quad P = \\frac{W}{t}, \\quad 1\\text{ J} = 1\\text{ N}\\cdot\\text{m} = 1\\text{ W}\\cdot\\text{s}",
                        "tasks": [
                            {
                                "id": "kk-zad-66",
                                "number": 66,
                                "points": 1,
                                "title": "Zadanie 66. (1 pkt) Jednostka mocy przez jednostki podstawowe SI",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Moc",
                                    "Układ SI",
                                    "Analiza jednostek"
                                ],
                                "problem": "Jednostka mocy w układzie SI wyraża się przez podstawowe jednostki tego układu następująco:\n\nA. $\\text{kg}\\cdot\\text{m}$\nB. $\\text{kg}\\cdot\\text{m}/\\text{s}$\nC. $\\text{kg}\\cdot\\text{m}^2/\\text{s}$\nD. $\\text{kg}\\cdot\\text{m}^2/\\text{s}^3$",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-67",
                                "number": 67,
                                "points": 1,
                                "title": "Zadanie 67. (1 pkt) Czas świecenia żarówki 60 W",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Moc",
                                    "Energia elektryczna",
                                    "Czas"
                                ],
                                "problem": "60-watowa żarówka zużyła $7{,}2\\text{ kJ}$ energii elektrycznej. Czas jej świecenia wynosił więc:\n\nA. $2{,}0\\text{ min}$.\nB. $1/5\\text{ min}$.\nC. $43{,}2\\text{ s}$.\nD. $8{,}3\\text{ s}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-68",
                                "number": 68,
                                "points": 1,
                                "title": "Zadanie 68. (1 pkt) Podnoszenie ciała pionową siłą 30 N",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Praca",
                                    "Siła",
                                    "Droga"
                                ],
                                "problem": "Ciało o masie $2{,}0\\text{ kg}$ zostało podniesione pionową siłą $30\\text{ N}$ na wysokość $5{,}0\\text{ m}$. Przyjmij, że $g = 10\\text{ m/s}^2$.\n\nSiła ta wykonała pracę:\n\nA. $150\\text{ J}$.\nB. $50\\text{ J}$.\nC. $300\\text{ J}$.\nD. $100\\text{ J}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-69",
                                "number": 69,
                                "points": 1,
                                "title": "Zadanie 69. (1 pkt) Droga przy wykonaniu pracy 2,5 MJ",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Praca",
                                    "Droga",
                                    "Przedrostki jednostek"
                                ],
                                "problem": "Ciało porusza się w kierunku wypadkowej siły o wartości $5{,}0\\text{ kN}$. Siła ta wykonała nad tym ciałem pracę $2{,}5\\text{ MJ}$.\n\nDziałała ona na ciało na drodze o długości:\n\nA. $2\\text{ mm}$,\nB. $0{,}5\\text{ km}$,\nC. $250\\text{ cm}$,\nD. $12{,}5\\text{ Gm}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-70",
                                "number": 70,
                                "points": 1,
                                "title": "Zadanie 70. (1 pkt) Moc użyteczna dźwigu",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Moc użyteczna",
                                    "Dźwig",
                                    "Ciężar"
                                ],
                                "problem": "Dźwig podnosi ruchem jednostajnym ładunek o masie $5000\\text{ kg}$, na wysokość $10\\text{ m}$, w ciągu $25\\text{ s}$. Przyjmując, że przyspieszenie ziemskie wynosi $10\\text{ m/s}^2$.\n\nMoc użyteczna dźwigu wynosi:\n\nA. $0{,}2\\text{ kW}$,\nB. $2\\text{ kW}$,\nC. $20\\text{ kW}$,\nD. $200\\text{ kW}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-71",
                                "number": 71,
                                "points": 1,
                                "title": "Zadanie 71. (1 pkt) Wysokość podniesienia ładunku przez dźwig",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Praca",
                                    "Moc",
                                    "Wysokość"
                                ],
                                "problem": "Ładunek o masie $5000\\text{ kg}$, został podniesiony przez dźwig, w ciągu $25\\text{ s}$. Moc użyteczna dźwigu wynosi $20\\text{ kW}$. Przyjmijmy, że przyspieszenie ziemskie wynosi $10\\text{ m/s}^2$.\n\nDźwig podniósł ten ładunek na wysokość:\n\nA. $10{,}0\\text{ m}$.\nB. $5{,}0\\text{ m}$,\nC. $1{,}0\\text{ m}$,\nD. $12{,}5\\text{ m}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-5-2",
                        "number": "5.2",
                        "title": "Temat 5.2: Energia mechaniczna, układy odniesienia i straty",
                        "shortTitle": "5.2 Energia i praca",
                        "icon": "🔋",
                        "desc": "Energia kinetyczna w różnych układach odniesienia, energia potencjalna, praca sił oporu.",
                        "formulaCheat": "E_p = mgh, \\quad E_k = \\frac{m v^2}{2}, \\quad E_{k,\\text{wzgl}} = \\frac{m (v_2 - v_1)^2}{2}, \\quad W_{\\text{silnika}} = \\Delta E_k + W_{\\text{oporów}}",
                        "tasks": [
                            {
                                "id": "kk-zad-72",
                                "number": 72,
                                "points": 1,
                                "title": "Zadanie 72. (1 pkt) Energia potencjalna na innej planecie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia potencjalna",
                                    "Cyfry znaczące"
                                ],
                                "problem": "Ciało o masie $12{,}3\\text{ g}$ zawieszono na wysokości $5{,}3\\text{ m}$ nad powierzchnią planety, na której przyspieszenie grawitacyjne jest równe $11{,}42\\text{ m/s}^2$.\n\nEnergia potencjalna grawitacji ciała względem powierzchni tej planety wynosi:\n\nA. $0{,}7444698\\text{ J}$\nB. $0{,}7\\text{ J}$\nC. $0{,}74\\text{ J}$\nD. $0{,}744\\text{ J}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-73",
                                "number": 73,
                                "points": 1,
                                "title": "Zadanie 73. (1 pkt) Zjazd samochodu z górki ze stałą prędkością",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia potencjalna",
                                    "Energia kinetyczna",
                                    "Przemiany energii"
                                ],
                                "problem": "Samochód zjeżdżając z górki hamuje w taki sposób, że jego prędkość jest stała. Oznacza to, że:\n\nA. zarówno jego energia kinetyczna, jak i potencjalna są stałe.\nB. jego energia potencjalna maleje, a kinetyczna jest stała.\nC. jego energia potencjalna jest stała, a kinetyczna maleje.\nD. jego energia potencjalna maleje, a kinetyczna rośnie.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-74",
                                "number": 74,
                                "points": 1,
                                "title": "Zadanie 74. (1 pkt) Energia kinetyczna w układzie drugiego auta",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia kinetyczna",
                                    "Względność ruchu"
                                ],
                                "problem": "Dwa samochody o jednakowych masach $m$ poruszają się z prędkościami o wartościach $v$ i $3v$ względem ziemi, w tę samą stronę.\n\nEnergia kinetyczna drugiego samochodu, w układzie odniesienia związanym z pierwszym, wynosi:\n\nA. $1\\,mv^2$\nB. $2\\,mv^2$\nC. $3\\,mv^2$\nD. $4\\,mv^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-75",
                                "number": 75,
                                "points": 1,
                                "title": "Zadanie 75. (1 pkt) Prędkość szybszego auta względem ziemi",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Energia kinetyczna",
                                    "Prędkość względna"
                                ],
                                "problem": "Dwa samochody o jednakowych masach $m$ poruszają się w tę samą stronę, z prędkościami o różnych wartościach. Wartość prędkości wolniejszego z nich względem ziemi wynosi $v$. Energia kinetyczna szybszego samochodu, w układzie odniesienia związanym z wolniejszym, jest równa $8mv^2$.\n\nPrędkość szybszego samochodu względem ziemi wynosi:\n\nA. $2v$\nB. $3v$\nC. $4v$\nD. $5v$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-76",
                                "number": 76,
                                "points": 1,
                                "title": "Zadanie 76. (1 pkt) Energia stracona na opory przy popychaniu wagonu",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Bilans energii",
                                    "Praca sił oporu"
                                ],
                                "problem": "Lokomotywa o masie 20 ton nadała szybkość $0{,}5\\text{ m/s}$ stojącemu początkowo wagonowi o masie 22 ton. Jeżeli silnik lokomotywy wykonał w tym czasie pracę $12\\text{ kJ}$ to energia stracona na pokonanie sił oporu była równa:\n\nA. $1{,}5\\text{ kJ}$.\nB. $6{,}5\\text{ kJ}$.\nC. $6{,}75\\text{ kJ}$.\nD. $9{,}25\\text{ kJ}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-5-3",
                        "number": "5.3",
                        "title": "Temat 5.3: Maszyny proste i zasada zachowania energii (otwarte)",
                        "shortTitle": "5.3 Maszyny proste i ZZE otwarte",
                        "icon": "⚙️",
                        "desc": "Wjazd na wzgórze ze stratami, zsuwanie się po pochylni, dowód dla kołowrotu (równowaga momentów sił).",
                        "formulaCheat": "W_{\\text{użyteczna}} = \\eta \\cdot W_{\\text{całkowita}}, \\quad mgh = \\frac{mv^2}{2} + F_{\\text{op}} \\cdot l, \\quad F_1 \\cdot R = F_2 \\cdot r",
                        "tasks": [
                            {
                                "id": "kk-zad-77",
                                "number": 77,
                                "points": 5,
                                "title": "Zadanie 77. (5 pkt) Kolarz wjeżdżający na wzgórze",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Zasada zachowania energii",
                                    "Sprawność"
                                ],
                                "problem": "Kolarz rozpoczynający wjazd na wzgórze ($v_0 = 0$) razem z rowerem ma masę równą $90\\text{ kg}$. Podczas wjeżdżania na szczyt wzgórza mięśnie kolarza wykonały pracę równą $50\\text{ kJ}$. Na szczycie wzgórza kolarz osiągnął szybkość $18\\text{ km/h}$.\n\nOblicz wysokość wzgórza przyjmując, że 20% wykonanej przez mięśnie kolarza pracy zostało stracone na pokonanie oporów ruchu.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-78",
                                "number": 78,
                                "points": 3,
                                "title": "Zadanie 78. (3 pkt) Rozpędzanie samochodzika ze stratami na tarcie",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Praca i energia kinetyczna"
                                ],
                                "problem": "Pod wpływem stałej poziomej siły $F = 1{,}0\\text{ N}$ samochodzik o masie $m = 1000\\text{ g}$, będący początkowo w spoczynku, rozpędza się na poziomej podłodze na odcinku o długości $d = 600\\text{ cm}$. Opory ruchu pochłonęły 25% wykonanej przez siłę $F$ pracy.\n\nOblicz wartość prędkości końcowej samochodziku.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-79",
                                "number": 79,
                                "points": 3,
                                "title": "Zadanie 79. (3 pkt) Skrzynia na oblodzonej platformie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Równia pochyła",
                                    "Siła oporów"
                                ],
                                "problem": "Skrzynia o masie $m = 20\\text{ kg}$ zsunęła się z wysokości $h = 6\\text{ m}$ po oblodzonej platformie o długości $l = 10\\text{ m}$ uzyskując na jej końcu prędkość o wartości $v = 9{,}8\\text{ m/s}$.\n\nOblicz średnią wartość siły oporów ruchu działających na skrzynię podczas zsuwania się. Przyjmij wartość przyspieszenia ziemskiego $g = 9{,}81\\text{ m/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-80",
                                "number": 80,
                                "points": 5,
                                "title": "Zadanie 80. (5 pkt) Kołowrót na budowie i złota reguła mechaniki",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 5",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Maszyny proste",
                                    "Kołowrót",
                                    "Moment siły"
                                ],
                                "problem": "Podczas budowy domu pracownicy mieli dostarczyć na drugie piętro materiały budowlane. Jeden z pracowników wnosił elementy po schodach a drugi skorzystał z kołowrotu umieszczonego na drugim piętrze.\n\nWykaż, pomijając wszelkie straty energii oraz analizując siły działające na ramiona kołowrotu, promienie kołowrotu i jego liczbę obrotów, że pracownik korzystający z maszyny prostej, jaką jest kołowrót, wykonał taką samą pracę przy użyciu mniejszej siły w porównaniu z pracą pracownika używającego schodów.",
                                "solution": null
                            }
                        ]
                    }
                ]
            },
            {
                "id": "k-dzial-6",
                "number": 6,
                "title": "Dział 6: Zjawiska Cieplne (Termodynamika)",
                "icon": "🔥",
                "badge": "3 Tematy • 13 Zadań",
                "desc": "Skale temperatur, przewodnictwo cieplne i konwekcja, przemiany fazowe (topnienie, parowanie, krzepnięcie) oraz bilans cieplny.",
                "subchapters": [
                    {
                        "id": "k-sub-6-1",
                        "number": "6.1",
                        "title": "Temat 6.1: Właściwości materii, przewodnictwo cieplne i skale",
                        "shortTitle": "6.1 Przewodnictwo i skale",
                        "icon": "🌡️",
                        "desc": "Sposoby przekazywania ciepła, szeregowanie materiałów pod kątem przewodnictwa, przeliczanie skali Fahrenheita, Celsjusza i Kelwina.",
                        "formulaCheat": "T_{\\text{Kelwin}} = T_{^\\circ\\text{C}} + 273{,}15, \\quad \\Delta T_{^\\circ\\text{C}} = \\Delta T_{\\text{K}} = \\frac{5}{9} \\Delta T_{^\\circ\\text{F}}",
                        "tasks": [
                            {
                                "id": "kk-zad-81",
                                "number": 81,
                                "points": 1,
                                "title": "Zadanie 81. (1 pkt) Przepływ ciepła przy zetknięciu ciał",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Ciepło",
                                    "Energia wewnętrzna"
                                ],
                                "problem": "Jeśli zetkniemy ciało o niższej temperaturze z ciałem o wyższej temperaturze, to do ciała pierwszego przechodzi z drugiego:\n\nA. energia.\nB. cieplik.\nC. temperatura.\nD. pęd.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-82",
                                "number": 82,
                                "points": 1,
                                "title": "Zadanie 82. (1 pkt) Położenie grzałki w czajniku elektrycznym",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Konwekcja",
                                    "Przekazywanie ciepła"
                                ],
                                "problem": "Czajnik elektryczny ma grzałkę w swojej dolnej części, aby wykorzystać przede wszystkim zjawisko:\n\nA. przewodnictwa cieplnego.\nB. konwekcji.\nC. promieniowania.\nD. przewodnictwa cieplnego i promieniowania.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-83",
                                "number": 83,
                                "points": 1,
                                "title": "Zadanie 83. (1 pkt) Uszeregowanie substancji wg przewodnictwa cieplnego",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Przewodnictwo cieplne",
                                    "Właściwości materii"
                                ],
                                "problem": "Rozważamy następujące substancje: styropian (x), miedź (y), bardzo rozrzedzony gaz (w), cegła (z).\n\nWedług przewodnictwa cieplnego (od największego do najmniejszego) substancje te można uszeregować następująco:\n\nA. xywz,\nB. zwyx,\nC. yzxw,\nD. yzwx.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-84",
                                "number": 84,
                                "points": 1,
                                "title": "Zadanie 84. (1 pkt) Wzrost temperatury o 100°F",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Skala Fahrenheita",
                                    "Skala Celsjusza",
                                    "Kelwiny"
                                ],
                                "problem": "W skali Fahrenheita, w warunkach normalnych, woda zamarza w temperaturze $32^\\circ\\text{F}$, a wrze w temperaturze $212^\\circ\\text{F}$. Temperatura ciała wzrosła o $100^\\circ\\text{F}$.\n\nOznacza to wzrost temperatury w skali Celsjusza i Kelwina odpowiednio o około:\n\nA. $56^\\circ\\text{C}$ i $56\\text{ K}$\nB. $38^\\circ\\text{C}$ i $38\\text{ K}$\nC. $38^\\circ\\text{C}$ i $311\\text{ K}$\nD. $56^\\circ\\text{C}$ i $329\\text{ K}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-85",
                                "number": 85,
                                "points": 1,
                                "title": "Zadanie 85. (1 pkt) Menisk wody w szklance",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Menisk wklęsły",
                                    "Siły spójności"
                                ],
                                "problem": "Woda wlana do szklanki i wypełniająca ją częściowo tworzy:\n\nA. menisk wypukły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nB. menisk wypukły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.\nC. menisk wklęsły, ponieważ siły spójności w wodzie są większe niż siły przylegania między wodą i szkłem.\nD. menisk wklęsły, ponieważ siły spójności w wodzie są mniejsze niż siły przylegania między wodą i szkłem.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-86",
                                "number": 86,
                                "points": 1,
                                "title": "Zadanie 86. (1 pkt) Zwilżanie powierzchni ciała stałego cieczą",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zjawiska powierzchniowe",
                                    "Spójność"
                                ],
                                "problem": "Kiedy ciecz styka się z ciałem stałym możliwe są dwie sytuacje - ciecz zwilża lub nie zwilża powierzchni ciała stałego. O tym, z którą z wyżej wymienionych sytuacji mamy do czynienia decydują siły:\n\nA. ciężkości cząsteczek.\nB. tylko przylegania.\nC. tylko spójności.\nD. spójności i przylegania.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-6-2",
                        "number": "6.2",
                        "title": "Temat 6.2: Przemiany fazowe i bilans cieplny",
                        "shortTitle": "6.2 Przemiany fazowe",
                        "icon": "❄️",
                        "desc": "Temperatura topnienia i krzepnięcia, zmiana energii wewnętrznej podczas krzepnięcia, wrzucenie zimnego lodu do wody z lodem.",
                        "formulaCheat": "Q = m \\cdot c_w \\cdot \\Delta T, \\quad Q = m \\cdot L, \\quad T_{\\text{topnienia}} = T_{\\text{krzepnięcia}} = 0^\\circ\\text{C}",
                        "tasks": [
                            {
                                "id": "kk-zad-87",
                                "number": 87,
                                "points": 1,
                                "title": "Zadanie 87. (1 pkt) Temperatura topnienia lodu i krzepnięcia wody",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Przemiany fazowe",
                                    "Temperatura topnienia"
                                ],
                                "problem": "Wskaż zdanie prawdziwe (w każdym z przypadków panują warunki normalne).\n\nA. lód topnieje w temperaturze minimalnie wyższej niż $0^\\circ\\text{C}$, a woda krzepnie w temperaturze minimalnie niższej niż $0^\\circ\\text{C}$.\nB. lód topnieje w temperaturze równej $0^\\circ\\text{C}$, a woda krzepnie w temperaturze minimalnie niższej niż $0^\\circ\\text{C}$.\nC. lód topnieje w temperaturze minimalnie wyższej niż $0^\\circ\\text{C}$, a woda krzepnie w temperaturze równej $0^\\circ\\text{C}$.\nD. lód topnieje w temperaturze równej $0^\\circ\\text{C}$, a woda krzepnie również w tej samej temperaturze równej $0^\\circ\\text{C}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-88",
                                "number": 88,
                                "points": 1,
                                "title": "Zadanie 88. (1 pkt) Zmiana energii wewnętrznej podczas krzepnięcia",
                                "difficulty": 1,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Krzepnięcie",
                                    "Energia wewnętrzna"
                                ],
                                "problem": "Podczas procesu krzepnięcia wody jej energia wewnętrzna:\n\nA. nie zmienia się, ponieważ proces ten jest związany z dostarczaniem energii cieplnej.\nB. wzrasta, ponieważ proces ten jest związany z odbieraniem energii cieplnej.\nC. maleje, ponieważ proces ten przebiega w stałej temperaturze.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-89",
                                "number": 89,
                                "points": 1,
                                "title": "Zadanie 89. (1 pkt) Kostka lodu o temp. -10°C w mieszaninie wody z lodem",
                                "difficulty": 2,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Mieszanina woda-lód",
                                    "Temperatura końcowa"
                                ],
                                "problem": "Do izolowanego cieplnie od otoczenia bardzo dużego naczynia, wypełnionego niemal całkowicie mieszaniną wody z lodem (masy wody i lodu są takie same) o temperaturze $0^\\circ\\text{C}$, wrzucono niewielką kostkę lodu o temperaturze $-10^\\circ\\text{C}$.\n\nPo ustaleniu się jednolitej temperatury układu $t$ wyniosła ona:\n\nA. $-5^\\circ\\text{C}$\nB. $-10^\\circ\\text{C}$\nC. $0^\\circ\\text{C}$\nD. $-1^\\circ\\text{C} > t > 0^\\circ\\text{C}$.",
                                "solution": null
                            }
                        ]
                    },
                    {
                        "id": "k-sub-6-3",
                        "number": "6.3",
                        "title": "Temat 6.3: Bilans cieplny – Zadania otwarte",
                        "shortTitle": "6.3 Bilans cieplny otwarte",
                        "icon": "🧊",
                        "desc": "Rozszerzalność temperaturowa a gęstość, rozmrażanie lodu w zamrażarce, zamiana energii spadku na ciepło, parowanie i zamarzanie pod próżnią.",
                        "formulaCheat": "\\frac{\\Delta \\rho}{\\rho} \\approx 3\\epsilon, \\quad Q_1 = m c_l \\Delta T, \\quad Q_2 = m L_t, \\quad m g(H - h) = m c_g \\Delta T, \\quad m_p L_p = m_l \\lambda",
                        "tasks": [
                            {
                                "id": "kk-zad-90",
                                "number": 90,
                                "points": 3,
                                "title": "Zadanie 90. (3 pkt) Kurczenie się klocka metalowego a wzrost gęstości",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Rozszerzalność objętościowa",
                                    "Gęstość"
                                ],
                                "problem": "Wysokość prostopadłościennego metalowego klocka, chłodzonego ze wszystkich stron równomiernym strumieniem zimnego powietrza, zmniejszyła się o wielkość $\\epsilon = 0{,}1\\%$.\n\nO ile procent wzrosła przy tym gęstość metalu?",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-91",
                                "number": 91,
                                "points": 5,
                                "title": "Zadanie 91. (5 pkt) Czas całkowitego stopienia lodu w zamrażarce",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Bilans cieplny",
                                    "Ciepło właściwe i topnienia"
                                ],
                                "problem": "W zamrażarce nagromadził się lód o ujemnej temperaturze, wynoszącej $-3^\\circ\\text{C}$. Aby go usunąć, zamrażarkę, w upalne letnie popołudnie, wyłączono z sieci elektrycznej i otwarto szeroko jej drzwi. Po 5 minutach lód zaczął topnieć.\n\nOszacuj czas, od początku topnienia, po którym lód stopi się całkowicie. Ciepło właściwe lodu wynosi $2{,}1\\text{ kJ/(kg}\\cdot{^\\circ\\text{C}})$, a ciepło jego topnienia $0{,}33\\text{ MJ/kg}$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-92",
                                "number": 92,
                                "points": 3,
                                "title": "Zadanie 92. (3 pkt) Odbicie gumowej piłeczki i jej ogrzanie",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Energia potencjalna",
                                    "Ciepło właściwe"
                                ],
                                "problem": "Spadająca swobodnie z wysokości $H = 20\\text{ m}$ gumowa piłeczka po odbiciu od podłoża wzniosła się na wysokość $h$. Zakładając, że straty energii wystąpiły wyłącznie podczas odbicia i całkowicie zmieniły się w energię wewnętrzną gumy, oblicz, na jaką wysokość wzniosła się piłeczka po odbiciu, jeśli w wyniku odbicia temperatura piłeczki wzrosła o $\\Delta T = 0{,}5^\\circ\\text{C}$.\n\nCiepło właściwe gumy $c = 110\\text{ J/(kg}\\cdot\\text{K)}$. Przyjmij $g = 9{,}81\\text{ m/s}^2$.",
                                "solution": null
                            },
                            {
                                "id": "kk-zad-93",
                                "number": 93,
                                "points": 3,
                                "title": "Zadanie 93. (3 pkt) Parowanie i zamarzanie wody w próżni",
                                "difficulty": 3,
                                "source": "Konkurs Kuratoryjny • Dział 6",
                                "tags": [
                                    "Zadanie otwarte",
                                    "Parowanie",
                                    "Krzepnięcie",
                                    "Bilans fazowy"
                                ],
                                "problem": "W izolowanym cieplnie, szczelnym naczyniu zawierającym bardzo rozrzedzony gaz rozlano wodę o temperaturze $t_0 = 0^\\circ\\text{C}$. Po upływie pewnego czasu $\\Delta t$ część wody wyparowała, a reszta zamieniła się w lód, przy czym temperatura pary i lodu wynosiła nadal $t_0$.\n\nIle sekund trwał czas $\\Delta t$, jeśli w czasie $t_1 = 1\\text{ s}$ średnio wyparowywała $n = 0{,}01$ część początkowej masy wody?\n\nPrzyjmij wartość ciepła parowania wody $L = 2{,}40\\text{ MJ/kg}$, a ciepła krzepnięcia wody (równego ciepłu topnienia lodu) $\\lambda = 330\\text{ kJ/kg}$.",
                                "solution": null
                            }
                        ]
                    }
                ]
            }
        ]
    }
};
