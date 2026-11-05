const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;
const course = courses['matura-fizyka'];

const pracaSub = course.sections.find(s => s.id === 'm-praca').subchapters.find(s => s.id === 'sub-praca-matura');
const brylaSub = course.sections.find(s => s.id === 'm-bryla').subchapters.find(s => s.id === 'sub-bryla-matura');

// =============================================================================
// DZIAŁ 3: PRACA, MOC I ENERGIA (9 ZADAŃ MATURALNYCH)
// =============================================================================
const pracaSolutions = {
    "matura-cke-praca-2026-czerwiec-zad-3": {
        "intuition": "Zderzenie klocków ze sprężyną w układzie izolowanym opisują zasada zachowania pędu oraz zasada zachowania energii mechanicznej. W chwili maksymalnego odkształcenia sprężyny klocki poruszają się z tą samą prędkością chwilową.",
        "givens": "$m_A = m_B = m$, prędkość klocka A: $v_1$, klocek B początkowo spoczywa, sprężyna o współczynniku $k$, brak oporów i tarcia.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Ocena prawdziwości zdań",
                "content": "1. Z III zasady dynamiki Newtona siła sprężystości działająca na klocek A ma taką samą wartość jak siła działająca na klocek B: $F_{s\\to A} = F_{s\\to B} = k\\Delta x$. Zdanie 1: Prawda (P).\n\n2. W chwili maksymalnego ściśnięcia sprężyny odkształcenie osiąga wartość skrajną (punkt zwrotny ruchu względnego), zatem klocki mają tę samą prędkość chwilową ($v_A = v_B = v_2$), a ich prędkość względna wynosi $v_{\\text{wzgl}} = v_A - v_B = 0$. Zdanie 2: Prawda (P)."
            },
            {
                "title": "Zadanie 3.2 – Prędkość układu z zasady zachowania pędu",
                "content": "Brak zewnętrznych sił poziomych oznacza zachowanie całkowitego pędu układu:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 = (m + m) v_2 = 2m v_2$$\nStąd prędkość klocków przy maksymalnym ściśnięciu sprężyny wynosi:\n$$v_2 = \\frac{v_1}{2}$$"
            },
            {
                "title": "Zadanie 3.2 – Odkształcenie sprężyny z zasady zachowania energii",
                "content": "Brak oporów ruchu oznacza zachowanie całkowitej energii mechanicznej:\n$$E_{\\text{pocz}} = E_{\\text{końc}}$$\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{2}(2m) v_2^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nPodstawiamy $v_2 = \\frac{v_1}{2}$:\n$$\\frac{1}{2}m v_1^2 = m \\left(\\frac{v_1}{2}\\right)^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{4}m v_1^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\n$$\\frac{1}{4}m v_1^2 = \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nMnożymy przez 2 i dzielimy przez $k$:\n$$(\\Delta x_{\\max})^2 = \\frac{m v_1^2}{2k} \\implies \\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}} = \\sqrt{\\frac{m v_1^2}{2k}}$$"
            }
        ],
        "numerical": "3.1: 1-P, 2-P; 3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$",
        "answer": "3.1: 1 – Prawda (P), 2 – Prawda (P);\n3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$ (lub $\\sqrt{\\frac{m v_1^2}{2k}}$).",
        "trap": "Przy maksymalnym ściśnięciu sprężyny klocki nie zatrzymują się względem podłoża – układ porusza się dalej z prędkością środka masy $v_1/2$."
    },

    "matura-cke-praca-2026-maj-zad-2": {
        "intuition": "Ruch po okręgu w płaszczyźnie pionowej łączy równania siły dośrodkowej z zasadą zachowania energii mechanicznej na różnicy wysokości $2l$.",
        "givens": "Długość nici $l$ (promień okręgu), masa ciała $m$, $v_{\\max}/v_{\\min} = \\sqrt{3}$, brak oporów ruchu.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Konstrukcja środka i promienia okręgu",
                "content": "Wektor prędkości jest styczny do toru, więc proste prostopadłe do wektorów $\\vec{v}_1$ i $\\vec{v}_2$ w punktach ich przyłożenia przecinają się w środku okręgu $S$.\nOdliczając kratki pionowo w dół od punktu zaczepienia $\\vec{v}_1$ do punktu $S$, odczytujemy promień okręgu:\n$$l = 10\\text{ długości kratek}$$\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Wybór schematu sił w najniższym punkcie",
                "content": "W najniższym położeniu siła dośrodkowa jest skierowana w górę (do środka okręgu):\n$$F_{\\text{doś}} = F_n - F_g = \\frac{m v_{\\max}^2}{l} > 0 \\implies F_n > F_g$$\nWektor siły naciągu nici $\\vec{F}_n$ musi być dłuższy od wektora ciężaru $\\vec{F}_g$. Warunek ten spełnia wyłącznie rysunek B."
            },
            {
                "title": "Zadanie 2.3 – Równania dynamiki w punktach skrajnych",
                "content": "Z II zasady dynamiki dla kierunku promieniowego:\n- Na dole: $F_{n,\\max} - mg = \\frac{m v_{\\max}^2}{l} \\implies F_{n,\\max} = mg + \\frac{m v_{\\max}^2}{l}$\n- Na górze: $F_{n,\\min} + mg = \\frac{m v_{\\min}^2}{l} \\implies F_{n,\\min} = \\frac{m v_{\\min}^2}{l} - mg$"
            },
            {
                "title": "Zadanie 2.3 – Bilans energii i obliczenie ilorazu sił",
                "content": "Z zasady zachowania energii na wysokości $h = 2l$:\n$$\\frac{1}{2}m v_{\\max}^2 = \\frac{1}{2}m v_{\\min}^2 + mg(2l) \\implies \\frac{m v_{\\max}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg$$\nPodstawiamy $v_{\\max}^2 = 3v_{\\min}^2$:\n$$3\\,\\frac{m v_{\\min}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg \\implies 2\\,\\frac{m v_{\\min}^2}{l} = 4mg \\implies \\frac{m v_{\\min}^2}{l} = 2mg$$\nStąd dla prędkości maksymalnej:\n$$\\frac{m v_{\\max}^2}{l} = 3 \\cdot (2mg) = 6mg$$\nObliczamy siły naciągu:\n$$F_{n,\\max} = mg + 6mg = 7mg$$\n$$F_{n,\\min} = 2mg - mg = mg$$\nIloraz wynosi:\n$$\\frac{F_{n,\\max}}{F_{n,\\min}} = \\frac{7mg}{mg} = 7$$"
            }
        ],
        "numerical": "2.1: $l = 10$; 2.2: Rysunek B; 2.3: $\\frac{F_{n,\\max}}{F_{n,\\min}} = 7$",
        "answer": "2.1: Konstrukcja prostych prostopadłych, promień $l = 10$ długości kratek;\n2.2: Poprawny rysunek B ($F_n > F_g$);\n2.3: Iloraz wynosi $\\frac{F_{n,\\max}}{F_{n,\\min}} = 7$.",
        "trap": "W najwyższym punkcie toru siła ciężkości działa w dół (w stronę środka okręgu), dlatego $F_{n,\\min} = \\frac{mv_{\\min}^2}{l} - mg$."
    },

    "matura-cke-praca-2026-styczen-zad-2": {
        "intuition": "W sprężystym zderzeniu centralnym zachowane są całkowity pęd oraz całkowita energia kinetyczna. Siły oddziaływania tworzą parę akcja–reakcja z III zasady dynamiki.",
        "givens": "Kula K1 o masie $m_1$, prędkość $v_1$; kula K2 o masie $m_2$ spoczywa. Po zderzeniu sprężystym: $v_1' = -v_2$, $v_2' = +v_2$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Siły wzajemnego oddziaływania kul",
                "content": "Z III zasady dynamiki Newtona siły wzajemnego oddziaływania kul mają ten sam kierunek (wzdłuż prostej łączącej ich środki), przeciwne zwroty i równe wartości ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$):\n- Siła $\\vec{F}_{21}$ na kulę K1 jest skierowana poziomo w lewo.\n- Siła $\\vec{F}_{12}$ na kulę K2 jest skierowana poziomo w prawo.\nOba wektory rysujemy zaczepione w środkach kul o jednakowej długości:\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-sily-rozwiazanie.png\" alt=\"Rysunek wektorów sił według klucza CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Równania zasad zachowania pędu i energii",
                "content": "1. Zasada zachowania pędu (oś $x$ w prawo):\n$$m_1 v_1 = -m_1 v_2 + m_2 v_2 \\implies m_1 (v_1 + v_2) = m_2 v_2 \\implies \\frac{m_2}{m_1} = \\frac{v_1}{v_2} + 1 \\quad \\text{(Równanie 1)}$$\n2. Zasada zachowania energii kinetycznej (zderzenie sprężyste):\n$$\\frac{1}{2}m_1 v_1^2 = \\frac{1}{2}m_1 v_2^2 + \\frac{1}{2}m_2 v_2^2 \\implies m_1 (v_1^2 - v_2^2) = m_2 v_2^2 \\implies \\frac{m_2}{m_1} = \\left(\\frac{v_1}{v_2}\\right)^2 - 1 \\quad \\text{(Równanie 2)}$$"
            },
            {
                "title": "Zadanie 2.2 – Wyznaczenie stosunku mas",
                "content": "Przyrównujemy prawe strony obu równań:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2}\\right)^2 - 1$$\nRozpisujemy różnicę kwadratów: $\\left(\\frac{v_1}{v_2}\\right)^2 - 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$$\nDzielimy obustronnie przez $\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$1 = \\frac{v_1}{v_2} - 1 \\implies \\frac{v_1}{v_2} = 2$$\nPodstawiamy wynik do Równania 1:\n$$\\frac{m_2}{m_1} = \\frac{v_1}{v_2} + 1 = 2 + 1 = 3$$"
            }
        ],
        "numerical": "2.1: Wektory o równej długości i przeciwnych zwrotach; 2.2: $\\frac{m_2}{m_1} = 3$",
        "answer": "2.1: Wektory $\\vec{F}_{21}$ (w lewo) i $\\vec{F}_{12}$ (w prawo) o jednakowych długościach;\n2.2: Iloraz mas wynosi $\\frac{m_2}{m_1} = 3$.",
        "trap": "Zgodnie z III zasadą dynamiki siły akcji i reakcji są równe co do wartości bez względu na stosunek mas zderzających się ciał."
    },

    "matura-cke-praca-2023-czerwiec-zad-2": {
        "intuition": "Dla równych mas w centralnym zderzeniu sprężystym ciała wymieniają się prędkościami. W zderzeniu niesprężystym pęd jest zachowany, a ubytek energii kinetycznej określa różnica bilansu.",
        "givens": "$m_1 = m_2 = m$, prędkości początkowe: $v_1 = 2v_2$ (w prawo), $v_2$ (w lewo).",
        "steps": [
            {
                "title": "Zadanie 2.1 – Centralne zderzenie sprężyste równych mas",
                "content": "Z zasad zachowania pędu i energii dla zderzenia sprężystego ciał o jednakowych masach wynika wymiana wektorów prędkości:\n$$\\vec{u}_1 = \\vec{v}_2 \\quad (\\text{w lewo z szybkością } v_2), \\qquad \\vec{u}_2 = \\vec{v}_1 \\quad (\\text{w prawo z szybkością } 2v_2)$$\nSytuację tę poprawnie przedstawia rysunek B."
            },
            {
                "title": "Zadanie 2.2 – Prędkość po połączeniu z zasady zachowania pędu",
                "content": "Dla zderzenia niesprężystego (oś $x$ w prawo):\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m(2v_2) - m v_2 = (2m) u \\implies m v_2 = 2m u \\implies u = \\frac{v_2}{2} = 0{,}5\\,v_2$$"
            },
            {
                "title": "Zadanie 2.2 – Obliczenie ułamka utraconej energii kinetycznej",
                "content": "Początkowa energia kinetyczna układu:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m(2v_2)^2 + \\frac{1}{2}m v_2^2 = \\frac{4}{2}m v_2^2 + \\frac{1}{2}m v_2^2 = 2{,}5\\,m v_2^2$$\nKońcowa energia kinetyczna połączonych kul:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(2m) u^2 = m \\left(\\frac{v_2}{2}\\right)^2 = 0{,}25\\,m v_2^2$$\nUbytek energii kinetycznej:\n$$\\Delta E_k = 2{,}5\\,m v_2^2 - 0{,}25\\,m v_2^2 = 2{,}25\\,m v_2^2$$\nSzukany iloraz:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{2{,}25\\,m v_2^2}{2{,}5\\,m v_2^2} = \\frac{9}{10} = 0{,}90 \\quad (90\\%)$$ "
            }
        ],
        "numerical": "2.1: Rysunek B; 2.2: $\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = 0{,}90$ ($90\\%$)",
        "answer": "2.1: Rysunek B;\n2.2: Układ utracił $\\frac{9}{10}$ ($0{,}90$ czyli $90\\%$) początkowej energii kinetycznej.",
        "trap": "Pęd jest wielkością wektorową – przy zwrotach przeciwnych pędy początkowe odejmują się: $p_{\\text{pocz}} = m(2v_2) - mv_2 = mv_2$."
    },

    "matura-cke-praca-2023-maj-zad-2": {
        "intuition": "Przy braku tarcia siły zderzenia krążków działają wyłącznie wzdłuż prostej łączącej ich środki (oś x). Składowa prędkości styczna (oś y) nie ulega zmianie.",
        "givens": "$m_1 = m_2 = m$, krążek K2 początkowo spoczywa, brak tarcia, zderzenie sprężyste.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Siły zderzenia krążków",
                "content": "Brak tarcia oznacza, że siły kontaktowe działają ściśle wzdłuż linii łączącej środki obu krążków (oś $x$):\n- Siła $\\vec{F}_{12}$ na krążek K1 działa w lewo.\n- Siła $\\vec{F}_{21}$ na krążek K2 działa w prawo.\nZ III zasady dynamiki wektory te mają równe długości i leżą na osi $x$:\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-sily-rozwiazanie.png\" alt=\"Rysunek wektorów sił według klucza CKE\" class=\"theory-img\" style=\"max-height:340px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Wektory prędkości po zderzeniu",
                "content": "1. Wzdłuż osi $y$ nie działa żadna siła, więc krążek K2 nie uzyskuje składowej pionowej ($u_{2y} = 0$), a składowa krążka K1 pozostaje bez zmian: $\\vec{u}_{1y} = \\vec{v}_y$.\n2. Wzdłuż osi $x$ zachodzi zderzenie sprężyste jednakowych mas – następuje wymiana składowych prędkości: $u_{1x} = 0$, a $u_{2x} = v_x$.\nPo zderzeniu krążek K1 porusza się pionowo w dół, a krążek K2 poziomo w prawo. Odpowiada temu rysunek C."
            }
        ],
        "numerical": "2.1: Siły wzdłuż linii środków o równych wartościach; 2.2: Rysunek C",
        "answer": "2.1: Siły $\\vec{F}_{12}$ (w lewo) i $\\vec{F}_{21}$ (w prawo) wzdłuż linii środków krążków, równe długości wektorów;\n2.2: Rysunek C.",
        "trap": "Przy braku tarcia krążek uderzany ze spoczynku może uzyskać prędkość wyłącznie w kierunku normalnym (wzdłuż linii środków obu krążków)."
    },

    "matura-cke-praca-informator-2025-zad-2": {
        "intuition": "Spadek swobodny opisuje bilans energii mechanicznej. Podczas zderzenia z podłożem siła reakcji wynika ze zmiany pędu oraz równoważenia siły grawitacji.",
        "givens": "$m = 0{,}250\\text{ kg}$, $h = 1{,}80\\text{ m}$, $v_0 = 3{,}20\\text{ m/s}$, czas zderzenia $\\Delta t = 0{,}005\\text{ s}$, strata energii $25\\%$, $g = 9{,}81\\text{ m/s}^2$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Czas spadania kulki",
                "content": "Z równania ruchu jednostajnie przyspieszonego w dół:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies 4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nDla $t > 0$:\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
            },
            {
                "title": "Zadanie 2.2 – Prędkość tuż przed uderzeniem",
                "content": "Z zasady zachowania energii mechanicznej:\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2 \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\n$$v_1 = \\sqrt{(3{,}20)^2 + 2 \\cdot 9{,}81 \\cdot 1{,}80} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}75\\text{ m/s}$$"
            },
            {
                "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża",
                "content": "Kulka zachowuje $75\\%$ energii kinetycznej po odbiciu:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies v_2 = \\sqrt{0{,}75}\\,v_1 \\approx 0{,}866 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\nZ twierdzenia o impulsie i pędzie dla siły wypadkowej $F_{\\text{wyp}} = F_R - mg$:\n$$(F_R - mg)\\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\n$$F_R = 0{,}250 \\cdot 9{,}81 + \\frac{0{,}250(6{,}7495 + 5{,}845)}{0{,}005} = 2{,}45 + 50 \\cdot 12{,}5945 \\approx 632\\text{ N}$$"
            }
        ],
        "numerical": "2.1: $t \\approx 0{,}36\\text{ s}$; 2.2: $v_1 \\approx 6{,}75\\text{ m/s}$; 2.3: $F_R \\approx 632\\text{ N}$",
        "answer": "2.1: $t \\approx 0{,}36\\text{ s}$;\n2.2: $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: $F_R \\approx 632\\text{ N}$.",
        "trap": "Siła reakcji podłoża $F_R$ musi zrównoważyć ciężar ciała oraz zmienić jego pęd: $F_R = mg + \\Delta p / \\Delta t$."
    },

    "matura-cke-praca-informator-2025-zad-3": {
        "intuition": "Dla równych odstępów czasu wektory przesunięć na siatce są proporcjonalne do prędkości. Masę wyznacza zasada zachowania pędu w osi pionowej, a bilans energii kinetycznej weryfikuje sprężystość zderzenia.",
        "givens": "$m_A = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa, odstępy czasu $\\Delta t$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zachowania pędu",
                "content": "Odczyt wektorów przesunięć na siatce w jednostkach kratek na $\\Delta t$:\n- Przed zderzeniem: $\\vec{v}_A = [18{,}5;\\; 0]$, $\\vec{v}_B = [0;\\; 0]$\n- Po zderzeniu: $\\vec{u}_A = [8{,}5;\\; -7{,}5]$, $\\vec{u}_B = [8{,}0;\\; +6{,}0]$\nZ zasady zachowania pędu w osi pionowej $y$ ($p_{y,\\text{pocz}} = 0$):\n$$0 = m_A u_{Ay} + m_B u_{By}$$\n$$0 = 0{,}20 \\cdot (-7{,}5) + m_B \\cdot 6{,}0$$\n$$6{,}0\\,m_B = 1{,}50 \\implies m_B = 0{,}250\\text{ kg} = 250\\text{ g}$$"
            },
            {
                "title": "Zadanie 3.2 – Ocena sprężystości zderzenia",
                "content": "Obliczamy energię kinetyczną przed i po zderzeniu:\n$$u_A^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$u_B^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot (18{,}5)^2 = 34{,}225$$\n$$E_{k,\\text{końc}} = \\frac{1}{2}m_A u_A^2 + \\frac{1}{2}m_B u_B^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0 = 12{,}85 + 12{,}50 = 25{,}35$$\nPonieważ $E_{k,\\text{końc}} < E_{k,\\text{pocz}}$ ($25{,}35 < 34{,}225$), zderzenie było niesprężyste (układ utracił część energii kinetycznej)."
            }
        ],
        "numerical": "3.1: $m_B = 250\\text{ g}$; 3.2: zderzenie niesprężyste ($E_{k2} < E_{k1}$)",
        "answer": "3.1: $m_B = 250\\text{ g}$;\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, $E_{k,\\text{końc}} < E_{k,\\text{pocz}}$).",
        "trap": "Wartość prędkości wypadkowej wymaga zsumowania kwadratów obu współrzędnych: $u^2 = u_x^2 + u_y^2$."
    },

    "matura-cke-praca-informator-2023-zad-2": {
        "intuition": "Spadek swobodny opisuje bilans energii mechanicznej. Podczas zderzenia z podłożem siła reakcji wynika ze zmiany pędu oraz równoważenia siły grawitacji.",
        "givens": "$m = 0{,}250\\text{ kg}$, $h = 1{,}80\\text{ m}$, $v_0 = 3{,}20\\text{ m/s}$, czas zderzenia $\\Delta t = 0{,}005\\text{ s}$, strata energii $25\\%$, $g = 9{,}81\\text{ m/s}^2$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Czas spadania kulki",
                "content": "Z równania drogi w ruchu przyspieszonym w dół:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies 4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik $\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 45{,}556$, $\\sqrt{\\Delta} \\approx 6{,}7495$:\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
            },
            {
                "title": "Zadanie 2.2 – Prędkość tuż przed uderzeniem",
                "content": "Z zasady zachowania energii mechanicznej:\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2 \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\n$$v_1 = \\sqrt{(3{,}20)^2 + 2 \\cdot 9{,}81 \\cdot 1{,}80} = \\sqrt{45{,}556} \\approx 6{,}75\\text{ m/s}$$"
            },
            {
                "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża",
                "content": "Kulka zachowuje $75\\%$ energii po zderzeniu:\n$$v_2 = \\sqrt{0{,}75}\\,v_1 \\approx 5{,}845\\text{ m/s}$$\nZ twierdzenia o impulsie i pędzie:\n$$(F_R - mg)\\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\n$$F_R = 0{,}250 \\cdot 9{,}81 + \\frac{0{,}250(6{,}7495 + 5{,}845)}{0{,}005} \\approx 632\\text{ N}$$"
            }
        ],
        "numerical": "2.1: $t \\approx 0{,}36\\text{ s}$; 2.2: $v_1 \\approx 6{,}75\\text{ m/s}$; 2.3: $F_R \\approx 632\\text{ N}$",
        "answer": "2.1: $t \\approx 0{,}36\\text{ s}$;\n2.2: $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: $F_R \\approx 632\\text{ N}$.",
        "trap": "Siła reakcji podłoża $F_R$ musi zrównoważyć ciężar ciała oraz zmienić jego pęd: $F_R = mg + \\Delta p / \\Delta t$."
    },

    "matura-cke-praca-informator-2023-zad-3": {
        "intuition": "Dla równych odstępów czasu wektory przesunięć na siatce są proporcjonalne do prędkości. Masę wyznacza zasada zachowania pędu w osi pionowej, a bilans energii kinetycznej weryfikuje sprężystość zderzenia.",
        "givens": "$m_A = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa, odstępy czasu $\\Delta t$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zachowania pędu",
                "content": "Odczyt wektorów przesunięć na siatce w jednostkach kratek na $\\Delta t$:\n- Przed zderzeniem: $\\vec{v}_A = [18{,}5;\\; 0]$, $\\vec{v}_B = [0;\\; 0]$\n- Po zderzeniu: $\\vec{u}_A = [8{,}5;\\; -7{,}5]$, $\\vec{u}_B = [8{,}0;\\; +6{,}0]$\nZ zasady zachowania pędu w osi pionowej $y$ ($p_{y,\\text{pocz}} = 0$):\n$$0 = m_A u_{Ay} + m_B u_{By}$$\n$$0 = 0{,}20 \\cdot (-7{,}5) + m_B \\cdot 6{,}0 \\implies m_B = 0{,}250\\text{ kg} = 250\\text{ g}$$"
            },
            {
                "title": "Zadanie 3.2 – Ocena sprężystości zderzenia",
                "content": "Obliczamy energię kinetyczną przed i po zderzeniu:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot (18{,}5)^2 = 34{,}225$$\n$$E_{k,\\text{końc}} = \\frac{1}{2}m_A (8{,}5^2 + (-7{,}5)^2) + \\frac{1}{2}m_B (8{,}0^2 + 6{,}0^2)$$\n$$E_{k,\\text{końc}} = 0{,}10 \\cdot 128{,}5 + 0{,}125 \\cdot 100{,}0 = 12{,}85 + 12{,}50 = 25{,}35$$\nPonieważ $E_{k,\\text{końc}} < E_{k,\\text{pocz}}$ ($25{,}35 < 34{,}225$), zderzenie było niesprężyste."
            }
        ],
        "numerical": "3.1: $m_B = 250\\text{ g}$; 3.2: zderzenie niesprężyste ($E_{k2} < E_{k1}$)",
        "answer": "3.1: $m_B = 250\\text{ g}$;\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona).",
        "trap": "Wartość prędkości wypadkowej wymaga zsumowania kwadratów obu współrzędnych: $u^2 = u_x^2 + u_y^2$."
    }
};

// =============================================================================
// DZIAŁ 4: BRYŁA SZTYWNA I RUCH OBROTOWY (13 ZADAŃ MATURALNYCH)
// =============================================================================
const brylaSolutions = {
    "matura-cke-bryla-2026-czerwiec-zad-4": {
        "intuition": "Toczenie bez poślizgu łączy ruch postępowy środka masy z obrotem: $v = \\omega R$. Na poziomie przy stałej prędkości siła tarcia jest zerowa. Podczas wtaczania na równię siła tarcia statycznego działa w górę równi i hamuje obrót.",
        "givens": "Obręcz o masie $M$ i promieniu $R$. Dwa pręty o masach $M/2$ i długościach $2R$. Całkowita masa bryły $\\mathcal{B}$: $2M$. Prędkość początkowa: $v_{\\mathcal{B}} = 1{,}4\\text{ m/s}$. $g = 9{,}8\\text{ m/s}^2$. Toczenie bez poślizgu.",
        "steps": [
            {
                "title": "Zadanie 4.1 – Siła tarcia na odcinku poziomym",
                "content": "Ruch postępowy odbywa się ze stałą prędkością ($v_{\\mathcal{B}} = \\text{const} \\implies a = 0$). Z warunku toczenia bez poślizgu prędkość kątowa również jest stała ($\\omega = \\text{const} \\implies \\varepsilon = 0$).\nZ I zasady dynamiki Newtona wypadkowa siła pozioma jest zerowa. Przy braku oporów powietrza siła tarcia w punkcie $P_1$ nie działa ($T = 0$). Poprawna odpowiedź: A."
            },
            {
                "title": "Zadanie 4.2 – Zwrot siły tarcia na równi",
                "content": "Podczas wtaczania się pod górę ruch obrotowy jest opóźniony ($\\varepsilon < 0$). Bryła obraca się zgodnie z ruchem wskazówek zegara, więc moment siły tarcia względem środka masy $O$ musi działać przeciwnie do wskazówek zegara.\nWektor siły tarcia $\\vec{T}$ w punkcie styku $P_2$ musi być zatem skierowany w górę równi pochyłej (w prawo). Poprawna odpowiedź: D."
            },
            {
                "title": "Zadanie 4.3 – Ocena prawdziwości zdań",
                "content": "1. Zdanie 1: Fałsz (F). Pionowa linia działania siły ciężkości nie przechodzi przez punkt styku $P_2$, więc jej ramię jest niezerowe ($r = R\\sin\\alpha > 0$). Moment siły ciężkości względem $P_2$ jest różny od zera ($M_{Q,P2} > 0$).\n\n2. Zdanie 2: Fałsz (F). Siła tarcia w punkcie styku wywiera niezerowy moment siły względem środka masy ($M_O = T R > 0$). Z twierdzenia o zmianie momentu pędu $\\frac{dL}{dt} = -M_O < 0$, co oznacza, że moment pędu maleje i nie jest zachowany."
            },
            {
                "title": "Zadanie 4.4 – Wyprowadzenie momentu bezwładności bryły",
                "content": "Bryła $\\mathcal{B}$ składa się z obręczy i dwóch prętów przecinających się w środku masy $O$:\n1. Moment bezwładności obręczy:\n$$I_{\\text{obręcz}} = M R^2$$\n2. Moment bezwładności jednego pręta o masie $M/2$ i długości $2R$ względem osi środkowej:\n$$I_{\\text{pręt}} = \\frac{1}{12} \\left(\\frac{M}{2}\\right) (2R)^2 = \\frac{1}{24} M \\cdot 4R^2 = \\frac{1}{6} M R^2$$\n3. Całkowity moment bezwładności bryły (addytywność momentów):\n$$I_{0\\mathcal{B}} = I_{\\text{obręcz}} + 2 I_{\\text{pręt}} = M R^2 + 2 \\cdot \\frac{1}{6} M R^2 = M R^2 + \\frac{1}{3} M R^2 = \\frac{4}{3} M R^2$$"
            },
            {
                "title": "Zadanie 4.5 – Wyznaczenie maksymalnej wysokości z zasady zachowania energii",
                "content": "Masa całkowita bryły wynosi $m_{\\mathcal{B}} = 2M$. Z zasady zachowania energii mechanicznej:\n$$E_{k,\\text{pocz}} = E_{p,\\max}$$\n$$\\frac{1}{2} (2M) v_{\\mathcal{B}}^2 + \\frac{1}{2} I_{0\\mathcal{B}} \\omega^2 = (2M) g \\Delta h_{\\max}$$\nPodstawiamy $I_{0\\mathcal{B}} = \\frac{4}{3} M R^2$ oraz $\\omega = \\frac{v_{\\mathcal{B}}}{R}$:\n$$M v_{\\mathcal{B}}^2 + \\frac{1}{2} \\left(\\frac{4}{3} M R^2\\right) \\left(\\frac{v_{\\mathcal{B}}}{R}\\right)^2 = 2 M g \\Delta h_{\\max}$$\n$$M v_{\\mathcal{B}}^2 + \\frac{2}{3} M v_{\\mathcal{B}}^2 = 2 M g \\Delta h_{\\max}$$\n$$\\frac{5}{3} M v_{\\mathcal{B}}^2 = 2 M g \\Delta h_{\\max} \\implies \\Delta h_{\\max} = \\frac{5 v_{\\mathcal{B}}^2}{6g}$$\nPodstawiamy wartości liczbowe ($v_{\\mathcal{B}} = 1{,}4\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$):\n$$\\Delta h_{\\max} = \\frac{5 \\cdot (1{,}4)^2}{6 \\cdot 9{,}8} = \\frac{9{,}8}{58{,}8} = \\frac{1}{6}\\text{ m} \\approx 0{,}17\\text{ m}$$"
            }
        ],
        "numerical": "4.1: A; 4.2: D; 4.3: 1-F, 2-F; 4.4: $I_{0\\mathcal{B}} = \\frac{4}{3}MR^2$; 4.5: $\\Delta h_{\\max} \\approx 0{,}17\\text{ m}$",
        "answer": "4.1: Odpowiedź A (siła tarcia nie działa);\n4.2: Odpowiedź D (siła tarcia jest zwrócona w prawo wzdłuż równi pochyłej);\n4.3: 1 – Fałsz (F), 2 – Fałsz (F);\n4.4: $I_{0\\mathcal{B}} = MR^2 + 2 \\cdot \\frac{1}{6}MR^2 = \\frac{4}{3}MR^2$;\n4.5: $\\Delta h_{\\max} = \\frac{5 v_{\\mathcal{B}}^2}{6g} = \\frac{1}{6}\\text{ m} \\approx 0{,}17\\text{ m}$.",
        "trap": "Masa całej bryły to $2M$ ($M$ z obręczy i dwa razy $M/2$ z prętów)."
    },

    "matura-cke-bryla-2026-maj-zad-3": {
        "intuition": "Dla bloczka o niezerowym momencie bezwładności naciągi liny po obu stronach różnią się w czasie przyspieszania. Lina odrywa się stycznie, więc jej ramię wynosi $R$ niezależnie od kąta $\\alpha$.",
        "givens": "Bloczek: masa $m_w$, promień $R$, $I_0 = \\frac{1}{2}m_w R^2$. Ciężarek: masa $m_c$. Przyśpieszenie $a = \\frac{1}{2}g$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Równowaga w spoczynku",
                "content": "Ciężarek spoczywa, więc naciąg liny wynosi $N = m_c g$. Z równowagi momentów względem osi bloczka ramię obu sił wynosi $R$, zatem $F R = N R \\implies F = m_c g$. Odpowiedź: A."
            },
            {
                "title": "Zadanie 3.2 – Równania dynamiki dla ciężarka i bloczka",
                "content": "1. Ruch postępowy opadającego ciężarka:\n$$m_c a = m_c g - N_1 \\implies N_1 = m_c(g - a)$$\n2. Ruch obrotowy bloczka:\n$$I_0 \\varepsilon = N_1 R - F R$$\n3. Związek kinematyczny (brak poślizgu liny): $\\varepsilon = \\frac{a}{R}$. Podstawiamy $I_0 = \\frac{1}{2} m_w R^2$:\n$$\\left(\\frac{1}{2} m_w R^2\\right) \\frac{a}{R} = (N_1 - F) R \\implies \\frac{1}{2} m_w a = N_1 - F \\implies F = N_1 - \\frac{1}{2} m_w a$$"
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie siły F",
                "content": "Podstawiamy wyrażenie na $N_1$:\n$$F = m_c(g - a) - \\frac{1}{2} m_w a = m_c g - \\left(m_c + \\frac{1}{2} m_w\\right) a$$\nWstawiamy $a = \\frac{1}{2}g$:\n$$F = m_c g - \\left(m_c + \\frac{1}{2} m_w\\right) \\frac{1}{2} g = \\frac{1}{2} m_c g - \\frac{1}{4} m_w g = \\frac{1}{2} g \\left(m_c - \\frac{1}{2} m_w\\right)$$"
            }
        ],
        "numerical": "3.1: A; 3.2: $F = \\frac{1}{2}g\\left(m_c - \\frac{1}{2}m_w\\right)$",
        "answer": "3.1: Odpowiedź A ($F = m_c g$);\n3.2: $F = \\frac{1}{2}g\\left(m_c - \\frac{1}{2}m_w\\right)$ (lub $F = \\frac{1}{4}g(2m_c - m_w)$).",
        "trap": "Ramię działania siły liny na bloczek wynosi $R$, bez mnożenia przez $\\sin\\alpha$ ani $\\cos\\alpha$."
    },

    "matura-cke-bryla-2026-styczen-zad-3": {
        "intuition": "Statyka bryły wymaga zerowania siły wypadkowej oraz wypadkowego momentu sił względem dowolnego punktu.",
        "givens": "$|AO_1| = 2\\text{ m}$, $|O_1O_2| = 4\\text{ m}$, $|O_2B| = 3\\text{ m}$. Długość płyty: $9\\text{ m}$. $Q_K = 0{,}4 Q_P$. W sytuacji 2.: $F_1 = F_2$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Równowaga nieobciążonej płyty",
                "content": "1. Z I warunku równowagi w pionie: $F_1 + F_2 = Q_P$ (relacja 1).\n2. Środek masy $S$ leży w środku płyty ($4{,}5\\text{ m}$ od brzegu A): $|SO_1| = 2{,}5\\text{ m}$, a $|SO_2| = 1{,}5\\text{ m}$. Z równowagi momentów względem $S$:\n$$F_1 \\cdot 2{,}5 = F_2 \\cdot 1{,}5 \\implies F_2 = \\frac{5}{3} F_1 > F_1 \\quad (\\text{relacja A})$$\nPoprawne zestawienie: A1."
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie sił reakcji osi",
                "content": "<div class=\"chart-container-svg\"><img src=\"img/rigid/2026-styczen-z3-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>\nZ równowagi sił w pionie ($F_1 = F_2$ oraz $Q_K = 0{,}4 Q_P$):\n$$F_1 + F_2 = Q_P + Q_K \\implies 2F_1 = 1{,}4 Q_P \\implies F_1 = F_2 = 0{,}7 Q_P$$"
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie położenia klocka x",
                "content": "Zapisujemy sumę momentów sił względem środka masy płyty $S$:\n$$F_1 \\cdot |SO_1| = F_2 \\cdot |SO_2| + Q_K \\cdot x$$\nPodstawiamy dane ($|SO_1| = 2{,}5\\text{ m}$, $|SO_2| = 1{,}5\\text{ m}$, $F_1 = F_2 = 0{,}7 Q_P$):\n$$0{,}7 Q_P \\cdot 2{,}5 = 0{,}7 Q_P \\cdot 1{,}5 + 0{,}4 Q_P \\cdot x$$\nDzielimy przez $Q_P$:\n$$1{,}75 = 1{,}05 + 0{,}4 x \\implies 0{,}4 x = 0{,}70 \\implies x = \\frac{0{,}70}{0{,}4} = 1{,}75\\text{ m}$$"
            }
        ],
        "numerical": "3.1: A1; 3.2: $x = 1{,}75\\text{ m}$",
        "answer": "3.1: Zestawienie A1 ($F_2 > F_1$ oraz $F_1 + F_2 = Q_P$);\n3.2: $x = 1{,}75\\text{ m}$.",
        "trap": "Środek masy jednorodnej płyty leży w połowie jej długości całkowitej ($4{,}5\\text{ m}$ od brzegu A), a nie w środku między osiami $O_1$ i $O_2$."
    },

    "matura-cke-bryla-2025-czerwiec-zad-3": {
        "intuition": "Toczenie bez poślizgu wiąże prędkość kątową z ruchem środka walca. Przemieszczenie punktu na brzegu oblicza się z twierdzenia Pitagorasa z przemieszczenia poziomego i pionowego.",
        "givens": "Promień $R$, masa $m$, czas półobrotu $\\Delta t = 0{,}2\\text{ s}$, $I_0 = \\frac{4}{5}mR^2$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Obliczenie prędkości kątowej",
                "content": "Pół obrotu to kąt $\\Delta\\alpha = \\pi\\text{ rad}$.\n$$\\omega = \\frac{\\Delta\\alpha}{\\Delta t} = \\frac{\\pi}{0{,}2\\text{ s}} = 5\\pi\\text{ rad/s}$$\nPoprawna odpowiedź: C."
            },
            {
                "title": "Zadanie 3.2 – Wartość przemieszczenia punktu A",
                "content": "1. Przemieszczenie poziome środka walca przy półobrocie bez poślizgu: $\\Delta x = \\pi R$.\n2. Przemieszczenie pionowe punktu A (przejście ze szczytu walca na podłoże): $\\Delta y = 2R$.\n3. Z twierdzenia Pitagorasa:\n$$|A_0 A_1| = \\sqrt{(\\pi R)^2 + (2R)^2} = R \\sqrt{\\pi^2 + 4} \\implies \\frac{|A_0 A_1|}{R} = \\sqrt{\\pi^2 + 4}$$"
            },
            {
                "title": "Zadanie 3.3 – Współczynnik energii kinetycznej",
                "content": "Całkowita energia kinetyczna walca to suma energii ruchu postępowego i obrotowego:\n$$E_{kin\\ calk} = \\frac{1}{2}m v^2 + \\frac{1}{2}I_0 \\omega^2$$\nPodstawiamy $I_0 = \\frac{4}{5}mR^2$ oraz $\\omega = \\frac{v}{R}$:\n$$E_{kin\\ calk} = \\frac{1}{2}m v^2 + \\frac{1}{2} \\left(\\frac{4}{5}m R^2\\right) \\left(\\frac{v}{R}\\right)^2 = \\frac{1}{2}m v^2 + \\frac{2}{5}m v^2 = \\frac{9}{10}m v^2$$\nPorównując ze wzorem $E_{kin\\ calk} = k m v^2$, otrzymujemy $k = \\frac{9}{10} = 0{,}9$."
            }
        ],
        "numerical": "3.1: C; 3.2: $\\frac{|A_0 A_1|}{R} = \\sqrt{\\pi^2 + 4}$; 3.3: $k = \\frac{9}{10} = 0{,}9$",
        "answer": "3.1: Odpowiedź C ($\\omega = 5\\pi\\text{ rad/s}$);\n3.2: Iloraz wynosi $\\frac{|A_0 A_1|}{R} = \\sqrt{\\pi^2 + 4}$;\n3.3: $k = \\frac{9}{10}$ (lub $0{,}9$).",
        "trap": "Przemieszczenie jest wektorem łączącym początek z końcem, a nie długością toru krzywoliniowego (cykloidy)."
    },

    "matura-cke-bryla-2025-maj-zad-2": {
        "intuition": "Dla brył staczających się z tej samej wysokości energia potencjalna $mgh$ zamienia się w całkowitą energię kinetyczną. Większy moment bezwładności oznacza mniejsze przyśpieszenie liniowe.",
        "givens": "Walce W1 i W2: równe masy $m$, równe promienie $R$, $I_1 = k_1 m R^2$, $I_2 = k_2 m R^2$, kąt $\\beta$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Ocena prawdziwości zdań",
                "content": "1. Zdanie 1: Prawda (P). W walcu wydrążonym W2 masa jest odsunięta dalej od osi obrotu niż w walcu pełnym W1, co zwiększa moment bezwładności ($k_2 > k_1$).\n2. Zdanie 2: Prawda (P). Z zasady zachowania energii całkowita energia kinetyczna na dole wynosi $E_{k,\\text{całk}} = mgh$ i jest jednakowa dla obu walców.\n3. Zdanie 3: Fałsz (F). Z równania $\\frac{1}{2}m(1+k)v^2 = mgh$ wynika $v = \\sqrt{\\frac{2gh}{1+k}}$. Dla większego $k_2$ prędkość liniowa jest mniejsza ($v_2 < v_1$)."
            },
            {
                "title": "Zadanie 2.2 – Wyznaczenie przyśpieszenia liniowego walca W2",
                "content": "1. Ruch postępowy wzdłuż równi: $m a = mg \\sin\\beta - T$\n2. Ruch obrotowy: $I_2 \\varepsilon = T R$\n3. Z warunku toczenia bez poślizgu $\\varepsilon = \\frac{a}{R}$ i $I_2 = k_2 m R^2$:\n$$k_2 m R^2 \\frac{a}{R} = T R \\implies T = k_2 m a$$\nPodstawiamy $T$ do równania ruchu postępowego:\n$$m a = mg \\sin\\beta - k_2 m a \\implies m(1 + k_2) a = mg \\sin\\beta \\implies a = \\frac{g \\sin\\beta}{1 + k_2}$$"
            }
        ],
        "numerical": "2.1: 1-P, 2-P, 3-F; 2.2: $a = \\frac{g \\sin\\beta}{1 + k_2}$",
        "answer": "2.1: 1 – Prawda (P), 2 – Prawda (P), 3 – Fałsz (F);\n2.2: $a = \\frac{g \\sin\\beta}{1 + k_2}$.",
        "trap": "Równość całkowitych energii kinetycznych nie oznacza równości prędkości postępowych – bryła o większym $k$ zużywa większą część energii na obrót."
    },

    "matura-cke-bryla-2024-grudzien-zad-3": {
        "intuition": "Prędkość punktu toczącego się walca jest sumą wektorową prędkości środka masy i prędkości obrotowej. Wektor siły tarcia statycznego wynika z układu równań dynamiki Newtona.",
        "givens": "$m$, $R$, $I_0 = \\frac{1}{2}mR^2$, prędkość $v_S = 2{,}5\\text{ m/s}$. Siła $F$ ciągnie linkę na szczycie walca.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Prędkości punktów A i B względem podłoża",
                "content": "Prędkość obrotowa punktów na brzegu wynosi $v_{\\text{obr}} = \\omega R = v_S = 2{,}5\\text{ m/s}$:\n- Punkt A (szczyt walca): wektory $\\vec{v}_S$ i $\\vec{v}_{\\text{obr}}$ mają ten sam zwrot (w prawo):\n$$v_A = v_S + v_S = 2 v_S = 2 \\cdot 2{,}5\\text{ m/s} = 5{,}0\\text{ m/s}$$\n- Punkt B (pozioma krawędź): $\\vec{v}_S$ skierowany w prawo, $\\vec{v}_{\\text{obr}}$ skierowany w dół (wektory prostopadłe):\n$$v_B = \\sqrt{v_S^2 + v_S^2} = v_S \\sqrt{2} = 2{,}5\\sqrt{2}\\text{ m/s} \\approx 3{,}54\\text{ m/s}$$"
            },
            {
                "title": "Zadanie 3.2 – Układ równań dynamiki i siła tarcia",
                "content": "Zakładamy zwrot siły tarcia statycznego $T$ w punkcie styku C w prawo (zgodnie z osią $x$):\n1. Ruch postępowy: $m a = F + T$\n2. Ruch obrotowy: $I_0 \\varepsilon = F R - T R$\n3. Warunek toczenia bez poślizgu $\\varepsilon = \\frac{a}{R}$ i $I_0 = \\frac{1}{2}mR^2$:\n$$\\frac{1}{2} m a = F - T$$\nMnożymy drugie równanie przez 2: $m a = 2F - 2T$. Przyrównujemy do pierwszego równania:\n$$F + T = 2F - 2T \\implies 3T = F \\implies T_x = +\\frac{1}{3} F$$\nDodatni znak potwierdza, że siła tarcia statycznego ma zwrot w prawo (zgodny z osią $x$):\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2024-grudzien-z3-rozwiazanie.png\" alt=\"Oficjalny rysunek rozwiązania CKE — zwrot tarcia\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>"
            }
        ],
        "numerical": "3.1: $v_A = 5\\text{ m/s}$, $v_B = 2{,}5\\sqrt{2}\\text{ m/s}$; 3.2: $T_x = +\\frac{1}{3}F$, zwrot w prawo",
        "answer": "3.1: $v_A = 5\\text{ m/s}$, $v_B = 2{,}5\\sqrt{2}\\text{ m/s}$ (ok. $3{,}54\\text{ m/s}$);\n3.2: $T_x = +\\frac{1}{3}F$, siła tarcia $\\vec{T}$ jest skierowana w prawo.",
        "trap": "Siła tarcia statycznego przy ciągnięciu linki u góry walca ma zwrot w prawo (pomaga przyspieszać ruch postępowy, hamując nadmierny obrót)."
    },

    "matura-cke-bryla-2024-czerwiec-zad-2": {
        "intuition": "Dla belki podpartej w dwóch miejscach, gdy środek ciężkości leży poza punktami podparcia, podpora skrajna musi działać w dół, by zrównoważyć moment siły ciężkości.",
        "givens": "Masa $m = 120\\text{ kg}$, $l = 2{,}8\\text{ m}$, $|AB| = 1{,}0\\text{ m}$, $g = 9{,}8\\text{ m/s}^2$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Schemat sił i relacje wartości",
                "content": "Środek masy belki C leży w odległości $1{,}4\\text{ m}$ od punktu A, czyli $|BC| = 1{,}4\\text{ m} - 1{,}0\\text{ m} = 0{,}4\\text{ m}$:\n- Ciężar $\\vec{F}_C$ działa w dół w punkcie C.\n- Względem podpory B ciężar obraca belkę w prawo, więc podpora A musi ciągnąć belkę pionowo w dół (siła $\\vec{F}_A$ w dół).\n- Podpora B równoważy obie siły, więc siła $\\vec{F}_B$ działa pionowo w górę.\nZ równowagi sił $F_B = F_A + F_C$ oraz momentów $F_A \\cdot 1{,}0 = F_C \\cdot 0{,}4$ wynika relacja: $F_B > F_C > F_A$.\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2024-czerwiec-z2-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE\" class=\"theory-img\" style=\"max-height:430px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Obliczenie wartości sił",
                "content": "1. Wartość ciężaru belki:\n$$F_C = m g = 120\\text{ kg} \\cdot 9{,}8\\text{ m/s}^2 = 1176\\text{ N}$$\n2. Z równowagi momentów względem punktu B:\n$$F_A \\cdot |AB| = F_C \\cdot |BC| \\implies F_A \\cdot 1{,}0 = 1176 \\cdot 0{,}4 \\implies F_A = 470{,}4\\text{ N} \\approx 470\\text{ N}$$\n3. Z równowagi sił w pionie:\n$$F_B = F_A + F_C = 470{,}4\\text{ N} + 1176\\text{ N} = 1646{,}4\\text{ N} \\approx 1646\\text{ N}$$"
            }
        ],
        "numerical": "2.1: $\\vec{F}_A$ w dół, $\\vec{F}_B$ w górę, $\\vec{F}_C$ w dół, $F_B > F_C > F_A$; 2.2: $F_A \\approx 470\\text{ N}$, $F_B \\approx 1646\\text{ N}$",
        "answer": "2.1: Wektory: $\\vec{F}_A$ w dół, $\\vec{F}_B$ w górę, $\\vec{F}_C$ w dół; relacja: $F_B > F_C > F_A$;\n2.2: $F_A = 470{,}4\\text{ N} \\approx 470\\text{ N}$, $F_B = 1646{,}4\\text{ N} \\approx 1646\\text{ N}$.",
        "trap": "Podpora A nie pcha belki ku górze – jest zamocowana tak, że działa na belkę siłą skierowaną w dół."
    },

    "matura-cke-bryla-2024-maj-zad-2": {
        "intuition": "Praca siły ciągnącej za oś walca zwiększa całkowitą energię kinetyczną (ruch postępowy + obrotowy). Tarcie statyczne nie wykonuje pracy strat energii.",
        "givens": "$m = 10\\text{ kg}$, $R$, $F = 30\\text{ N}$, $I_0 = \\frac{1}{2}mR^2$, toczenie bez poślizgu.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Stosunek energii postępowej do całkowitej",
                "content": "1. Energia ruchu postępowego: $E_{kin\\ post} = \\frac{1}{2}m v^2$\n2. Energia ruchu obrotowego (przy $\\omega = v/R$):\n$$E_{kin\\ obr} = \\frac{1}{2} I_0 \\omega^2 = \\frac{1}{2} \\left(\\frac{1}{2}m R^2\\right) \\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4}m v^2$$\n3. Całkowita energia kinetyczna:\n$$E_{kin\\ calk} = \\frac{1}{2}m v^2 + \\frac{1}{4}m v^2 = \\frac{3}{4}m v^2$$\nSzukany iloraz wynosi:\n$$\\frac{E_{kin\\ post}}{E_{kin\\ calk}} = \\frac{\\frac{1}{2}m v^2}{\\frac{3}{4}m v^2} = \\frac{2}{3}$$"
            },
            {
                "title": "Zadanie 2.2 – Wyznaczenie przyśpieszenia liniowego",
                "content": "Z zasady pracy i energii całkowitej na drodze $s$:\n$$W = \\Delta E_{kin\\ calk} \\implies F s = \\frac{3}{4}m v^2$$\nW ruchu przyspieszonym od spoczynku $v^2 = 2as$:\n$$F s = \\frac{3}{4}m (2as) = \\frac{3}{2}m a s \\implies F = \\frac{3}{2}m a \\implies a = \\frac{2F}{3m}$$\nPodstawiamy wartości liczbowe:\n$$a = \\frac{2 \\cdot 30\\text{ N}}{3 \\cdot 10\\text{ kg}} = 2\\text{ m/s}^2$$"
            }
        ],
        "numerical": "2.1: $\\frac{2}{3}$; 2.2: $a = 2\\text{ m/s}^2$",
        "answer": "2.1: $\\frac{E_{kin\\ post}}{E_{kin\\ calk}} = \\frac{2}{3}$;\n2.2: $a = 2\\text{ m/s}^2$.",
        "trap": "Nie wolno zapisać $a = F/m$ – siła tarcia statycznego wymusza ruch obrotowy, redukując przyśpieszenie liniowe do $2F/(3m)$."
    },

    "matura-cke-bryla-2023-czerwiec-zad-3": {
        "intuition": "Dźwignia dwustronna podparta w środku ma równe ramiona. Po zanurzeniu w wodzie na klocki działa siła wyporu proporcjonalna do ich objętości – dodatkowy ciężarek kompensuje różnicę sił wyporu.",
        "givens": "$a_A = 2\\text{ cm} = 0{,}02\\text{ m}$, $a_B = 4\\text{ cm} = 0{,}04\\text{ m}$, $\\rho_w = 1000\\text{ kg/m}^3$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Równość mas w powietrzu i obliczenie masy ciężarka C",
                "content": "1. Równowaga na równych ramionach w powietrzu oznacza równość mas: $m_A = m_B$.\n2. Objętości klocków sześciennych:\n$$V_A = (0{,}02\\text{ m})^3 = 8 \\cdot 10^{-6}\\text{ m}^3, \\qquad V_B = (0{,}04\\text{ m})^3 = 64 \\cdot 10^{-6}\\text{ m}^3$$\n3. Po zanurzeniu w wodzie siły naciągu wynoszą $N_A = m_A g - \\rho_w V_A g$ oraz $N_B = m_B g - \\rho_w V_B g$.\nZ równowagi momentów sił względem podpory (ciężarek C na prawym końcu):\n$$N_A \\frac{l}{2} = (N_B + m_C g) \\frac{l}{2} \\implies m_A - \\rho_w V_A = m_B - \\rho_w V_B + m_C$$\nWykorzystując $m_A = m_B$, otrzymujemy:\n$$m_C = \\rho_w (V_B - V_A) = 1000\\text{ kg/m}^3 \\cdot (64 - 8) \\cdot 10^{-6}\\text{ m}^3 = 0{,}056\\text{ kg} = 56\\text{ g}$$"
            },
            {
                "title": "Zadanie 3.2 – Ocena prawdziwości zdań",
                "content": "1. Zdanie 1: Prawda (P). Ponieważ $N_A > N_B$, przesunięcie punktu A bliżej podpory $O$ zmniejsza ramię i pozwala wyrównać momenty bez dodatkowego ciężarka.\n2. Zdanie 2: Fałsz (F). Przesunięcie podpory $O$ w stronę B wydłużyłoby lewe ramię, pogłębiając nierównowagę.\n3. Zdanie 3: Prawda (P). Ze wzoru $m_C = \\rho_{\\text{cieczy}} (V_B - V_A)$ wynika, że mniejsza gęstość cieczy wymaga mniejszej masy ciężarka $m_C$."
            }
        ],
        "numerical": "3.1: $m_C = 56\\text{ g}$; 3.2: 1-P, 2-F, 3-P",
        "answer": "3.1: $m_C = 56\\text{ g}$ ($0{,}056\\text{ kg}$);\n3.2: 1 – Prawda (P), 2 – Fałsz (F), 3 – Prawda (P).",
        "trap": "Siła wyporu zależy od objętości ($V = a^3$), a nie od masy ciała."
    },

    "matura-cke-bryla-2023-maj-zad-3": {
        "intuition": "Ubytek energii potencjalnej opadającego ciężarka zasila ruch postępowy ciężarka oraz ruch postępowy i obrotowy toczącego się walca.",
        "givens": "Walec: masa $m$, promień $R$, $I = \\frac{1}{2}mR^2$. Ciężarek: masa $m$. Toczenie bez poślizgu.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Ocena prawdziwości zdań",
                "content": "1. Zdanie 1: Prawda (P). W toczeniu bez poślizgu jeden pełny obrót odpowiada drodze $s = 2\\pi R$.\n2. Zdanie 2: Prawda (P). $E_{\\text{post}} = \\frac{1}{2}mv^2$, a $E_{\\text{obr}} = \\frac{1}{2}I\\omega^2 = \\frac{1}{4}mv^2$, zatem energia postępowa jest dwukrotnie większa.\n3. Zdanie 3: Fałsz (F). Część energii potencjalnej zamienia się w energię kinetyczną opadającego ciężarka."
            },
            {
                "title": "Zadanie 3.2 – Wyprowadzenie wzoru na przyśpieszenie z zasady zachowania energii",
                "content": "Gdy ciężarek opadnie o $h$, walec pokonuje drogę $s = h$, a oba ciała osiągają prędkość $v$:\n$$\\Delta E_p = E_{k,\\text{układ}}$$\n$$mgh = \\frac{1}{2}m v^2 + \\frac{1}{2}m v^2 + \\frac{1}{2}I \\omega^2$$\nPodstawiamy $I = \\frac{1}{2}mR^2$ oraz $\\omega = \\frac{v}{R}$:\n$$mgh = m v^2 + \\frac{1}{4}m v^2 = \\frac{5}{4}m v^2 \\implies gh = \\frac{5}{4} v^2$$\nW ruchu przyspieszonym od spoczynku $v^2 = 2ah$:\n$$gh = \\frac{5}{4} (2ah) = \\frac{5}{2} a h \\implies a = \\frac{2}{5} g$$"
            }
        ],
        "numerical": "3.1: 1-P, 2-P, 3-F; 3.2: $a = \\frac{2}{5}g$",
        "answer": "3.1: 1 – Prawda (P), 2 – Prawda (P), 3 – Fałsz (F);\n3.2: $a = \\frac{2}{5}g$.",
        "trap": "Nie wolno pominąć energii kinetycznej opadającego ciężarka $\\frac{1}{2}mv^2$ w bilansie energii."
    },

    "matura-cke-bryla-2023-pokazowy-zad-2": {
        "intuition": "Obracający się walec położony na podłożu ślizga się ze stałą siłą tarcia, która przyspiesza ruch postępowy i opóźnia obrót aż do spełnienia warunku $v_1 = \\omega_1 R$.",
        "givens": "$m$, $R$, $I = \\frac{1}{2}mR^2$, początkowo $v_0 = 0$, $\\omega_0 > 0$. Stałe tarcie kinetyczne $T$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Wektor siły tarcia",
                "content": "Punkt styku walca A przemieszcza się względem podłoża w lewo na skutek obrotu. Siła tarcia kinetycznego przeciwdziała poślizgowi, więc wektor $\\vec{T}$ w punkcie A jest skierowany poziomo w prawo:\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2023-pokazowy-z2-rozwiazanie.png\" alt=\"Oficjalny rysunek rozwiązania CKE — siła tarcia\" class=\"theory-img\" style=\"max-height:260px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Charakterystyka ruchu",
                "content": "Stała siła tarcia $T$ nadaje stałe przyśpieszenie liniowe $a = T/m$ (ruch postępowy przyśpieszony – wybór B) oraz stały moment hamujący obrót, przez co prędkość kątowa się zmniejszała (wybór 3). Poprawne zestawienie: B3."
            },
            {
                "title": "Zadanie 2.3 – Iloraz prędkości kątowych",
                "content": "W chwili $t_1$, gdy ustaje poślizg, spełniony jest warunek $v_1 = \\omega_1 R$:\n1. Prędkość liniowa: $v_1 = a t_1 = \\frac{T}{m} t_1$\n2. Prędkość kątowa: $\\omega_1 = \\omega_0 - \\varepsilon t_1$, gdzie $\\varepsilon = \\frac{T R}{I} = \\frac{T R}{\\frac{1}{2}mR^2} = \\frac{2T}{mR} = \\frac{2a}{R}$\nPodstawiamy $\\varepsilon$:\n$$\\omega_1 = \\omega_0 - \\frac{2a}{R} t_1 = \\omega_0 - \\frac{2 v_1}{R}$$\nWykorzystując $\\frac{v_1}{R} = \\omega_1$:\n$$\\omega_1 = \\omega_0 - 2 \\omega_1 \\implies 3\\omega_1 = \\omega_0 \\implies \\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$$"
            }
        ],
        "numerical": "2.1: $\\vec{T}$ w prawo; 2.2: B3; 2.3: $\\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$",
        "answer": "2.1: Wektor $\\vec{T}$ w punkcie A jest skierowany poziomo w prawo;\n2.2: Wybór B3;\n2.3: $\\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$.",
        "trap": "Zależność $v = \\omega R$ nie obowiązuje podczas trwania poślizgu – zaczyna obowiązywać dopiero w chwili $t_1$."
    },

    "matura-cke-bryla-informator-2025-zad-4": {
        "intuition": "O kierunku ruchu kołowrotu decydują momenty sił ciężkości $m_i g R_i$. Przyśpieszenie wynika z równań ruchu obrotowego walców i ruchu postępowego ciężarków.",
        "givens": "Walec 1: $R_1 = 0{,}05\\text{ m}$, $M_1 = 3\\text{ kg}$, $m_1 = 2\\text{ kg}$. Walec 2: $R_2 = 0{,}12\\text{ m}$, $M_2 = 8\\text{ kg}$, $m_2 = 1\\text{ kg}$. $I_{\\text{walca}} = \\frac{1}{2}MR^2$, $g = 9{,}81\\text{ m/s}^2$.",
        "steps": [
            {
                "title": "Zadanie 4.1 – Kierunek ruchu kołowrotu",
                "content": "Obliczamy momenty sił ciężkości względem osi obrotu:\n$$M_1 = m_1 g R_1 = 2\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}05\\text{ m} \\approx 0{,}981\\text{ N}\\cdot\\text{m}$$\n$$M_2 = m_2 g R_2 = 1\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}12\\text{ m} \\approx 1{,}177\\text{ N}\\cdot\\text{m}$$\nPonieważ $M_2 > M_1$, kołowrót obraca się w stronę odwijania sznurka z walca 2, co oznacza, że ciężarek o masie $m_1$ zacznie się wznosić."
            },
            {
                "title": "Zadanie 4.2 – Równania ruchu układu",
                "content": "<div class=\"chart-container-svg\"><img src=\"img/rigid/informator-2025-z4-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE — informator 2025\" class=\"theory-img\" style=\"max-height:390px;display:block;margin:15px auto;\"></div>\n1. Ruch ciężarków:\n$$m_1 a_1 = N_1 - m_1 g \\implies N_1 = m_1 g + m_1 a_1$$\n$$m_2 a_2 = m_2 g - N_2 \\implies N_2 = m_2 g - m_2 a_2$$\n2. Ruch obrotowy kołowrotu ($I = \\frac{1}{2}M_1 R_1^2 + \\frac{1}{2}M_2 R_2^2$):\n$$I \\varepsilon = N_2 R_2 - N_1 R_1$$\n3. Związki kinematyczne: $a_1 = \\varepsilon R_1$, $a_2 = \\varepsilon R_2$."
            },
            {
                "title": "Zadanie 4.2 – Wyznaczenie przyśpieszenia",
                "content": "Podstawiamy wyrażenia na naciągi:\n$$I \\varepsilon = (m_2 g - m_2 \\varepsilon R_2) R_2 - (m_1 g + m_1 \\varepsilon R_1) R_1$$\n$$\\varepsilon (I + m_1 R_1^2 + m_2 R_2^2) = g (m_2 R_2 - m_1 R_1) \\implies a_1 = \\varepsilon R_1 = \\frac{g (m_2 R_2 - m_1 R_1) R_1}{I + m_1 R_1^2 + m_2 R_2^2}$$\nObliczenia liczbowe:\n$$I = \\frac{1}{2} \\cdot 3 \\cdot (0{,}05)^2 + \\frac{1}{2} \\cdot 8 \\cdot (0{,}12)^2 = 0{,}00375 + 0{,}0576 = 0{,}06135\\text{ kg}\\cdot\\text{m}^2$$\n$$I_{\\text{całk}} = 0{,}06135 + 2 \\cdot (0{,}05)^2 + 1 \\cdot (0{,}12)^2 = 0{,}06135 + 0{,}0050 + 0{,}0144 = 0{,}08075\\text{ kg}\\cdot\\text{m}^2$$\n$$m_2 R_2 - m_1 R_1 = 1 \\cdot 0{,}12 - 2 \\cdot 0{,}05 = 0{,}02\\text{ kg}\\cdot\\text{m}$$\n$$a_1 = \\frac{9{,}81 \\cdot 0{,}02 \\cdot 0{,}05}{0{,}08075} \\approx 0{,}1215\\text{ m/s}^2 \\approx 0{,}12\\text{ m/s}^2$$"
            }
        ],
        "numerical": "4.1: Ciężarek $m_1$ wznosi się ($M_2 > M_1$); 4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$",
        "answer": "4.1: Ciężarek o masie $m_1$ zacznie się wznosić, ponieważ moment siły $m_2 g R_2 \\approx 1{,}18\\text{ N m}$ przewyższa moment $m_1 g R_1 \\approx 0{,}98\\text{ N m}$;\n4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$.",
        "trap": "Nie decydują same masy – ciężarek lżejszy ($1\\text{ kg}$) przeważa cięższy ($2\\text{ kg}$), ponieważ wisi na ponad dwukrotnie większym ramieniu."
    },

    "matura-cke-bryla-informator-2023-zad-4": {
        "intuition": "O kierunku ruchu kołowrotu decydują momenty sił ciężkości $m_i g R_i$. Przyśpieszenie wynika z równań ruchu obrotowego walców i ruchu postępowego ciężarków.",
        "givens": "Walec 1: $R_1 = 0{,}05\\text{ m}$, $M_1 = 3\\text{ kg}$, $m_1 = 2\\text{ kg}$. Walec 2: $R_2 = 0{,}12\\text{ m}$, $M_2 = 8\\text{ kg}$, $m_2 = 1\\text{ kg}$. $I_{\\text{walca}} = \\frac{1}{2}MR^2$, $g = 9{,}81\\text{ m/s}^2$.",
        "steps": [
            {
                "title": "Zadanie 4.1 – Kierunek ruchu kołowrotu",
                "content": "Obliczamy momenty sił ciężkości względem osi obrotu:\n$$M_1 = m_1 g R_1 = 2\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}05\\text{ m} \\approx 0{,}981\\text{ N}\\cdot\\text{m}$$\n$$M_2 = m_2 g R_2 = 1\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}12\\text{ m} \\approx 1{,}177\\text{ N}\\cdot\\text{m}$$\nPonieważ $M_2 > M_1$, kołowrót obraca się w stronę odwijania sznurka z walca 2, co oznacza, że ciężarek o masie $m_1$ zacznie się wznosić."
            },
            {
                "title": "Zadanie 4.2 – Równania ruchu układu",
                "content": "<div class=\"chart-container-svg\"><img src=\"img/rigid/informator-2023-z4-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE — informator 2023\" class=\"theory-img\" style=\"max-height:390px;display:block;margin:15px auto;\"></div>\n1. Ruch ciężarków:\n$$m_1 a_1 = N_1 - m_1 g \\implies N_1 = m_1 g + m_1 a_1$$\n$$m_2 a_2 = m_2 g - N_2 \\implies N_2 = m_2 g - m_2 a_2$$\n2. Ruch obrotowy kołowrotu ($I = \\frac{1}{2}M_1 R_1^2 + \\frac{1}{2}M_2 R_2^2$):\n$$I \\varepsilon = N_2 R_2 - N_1 R_1$$\n3. Związki kinematyczne: $a_1 = \\varepsilon R_1$, $a_2 = \\varepsilon R_2$."
            },
            {
                "title": "Zadanie 4.2 – Wyznaczenie przyśpieszenia",
                "content": "Podstawiamy wyrażenia na naciągi:\n$$I \\varepsilon = (m_2 g - m_2 \\varepsilon R_2) R_2 - (m_1 g + m_1 \\varepsilon R_1) R_1$$\n$$\\varepsilon (I + m_1 R_1^2 + m_2 R_2^2) = g (m_2 R_2 - m_1 R_1) \\implies a_1 = \\varepsilon R_1 = \\frac{g (m_2 R_2 - m_1 R_1) R_1}{I + m_1 R_1^2 + m_2 R_2^2}$$\nObliczenia liczbowe:\n$$I = \\frac{1}{2} \\cdot 3 \\cdot (0{,}05)^2 + \\frac{1}{2} \\cdot 8 \\cdot (0{,}12)^2 = 0{,}00375 + 0{,}0576 = 0{,}06135\\text{ kg}\\cdot\\text{m}^2$$\n$$I_{\\text{całk}} = 0{,}06135 + 2 \\cdot (0{,}05)^2 + 1 \\cdot (0{,}12)^2 = 0{,}06135 + 0{,}0050 + 0{,}0144 = 0{,}08075\\text{ kg}\\cdot\\text{m}^2$$\n$$m_2 R_2 - m_1 R_1 = 1 \\cdot 0{,}12 - 2 \\cdot 0{,}05 = 0{,}02\\text{ kg}\\cdot\\text{m}$$\n$$a_1 = \\frac{9{,}81 \\cdot 0{,}02 \\cdot 0{,}05}{0{,}08075} \\approx 0{,}1215\\text{ m/s}^2 \\approx 0{,}12\\text{ m/s}^2$$"
            }
        ],
        "numerical": "4.1: Ciężarek $m_1$ wznosi się ($M_2 > M_1$); 4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$",
        "answer": "4.1: Ciężarek o masie $m_1$ zacznie się wznosić, ponieważ moment siły $m_2 g R_2 \\approx 1{,}18\\text{ N m}$ przewyższa moment $m_1 g R_1 \\approx 0{,}98\\text{ N m}$;\n4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$.",
        "trap": "Nie decydują same masy – ciężarek lżejszy ($1\\text{ kg}$) przeważa cięższy ($2\\text{ kg}$), ponieważ wisi na ponad dwukrotnie większym ramieniu."
    }
};

// Aktualizacja zadań w m-praca
let pracaUpdated = 0;
pracaSub.tasks.forEach(t => {
    if (pracaSolutions[t.id]) {
        const sol = pracaSolutions[t.id];
        if (t.solution && t.solution.source) sol.source = t.solution.source;
        t.solution = sol;
        pracaUpdated++;
    }
});

// Aktualizacja zadań w m-bryla
let brylaUpdated = 0;
brylaSub.tasks.forEach(t => {
    if (brylaSolutions[t.id]) {
        const sol = brylaSolutions[t.id];
        if (t.solution && t.solution.source) sol.source = t.solution.source;
        t.solution = sol;
        brylaUpdated++;
    }
});

console.log(`Updated praca: ${pracaUpdated}/${pracaSub.tasks.length}`);
console.log(`Updated bryla: ${brylaUpdated}/${brylaSub.tasks.length}`);

// Zapisanie do data-courses.js
const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Saved data-courses.js successfully.');
