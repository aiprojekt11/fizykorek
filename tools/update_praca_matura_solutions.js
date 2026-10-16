const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const subMatura = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-praca').subchapters
    .find(s => s.id === 'sub-praca-matura');

const newSolutions = {
    "matura-cke-praca-2026-czerwiec-zad-3": {
        "intuition": "Zderzenie klocka ze sprężyną jest procesem ciągłym. W chwili maksymalnego ściśnięcia sprężyny oba klocki poruszają się z taką samą prędkością chwilową (ich prędkość względna wynosi zero). Układ jest izolowany, dlatego stosujemy Zasadę Zachowania Pędu, a ubytek energii kinetycznej jest w całości zmagazynowany w energii potencjalnej sprężystości.",
        "givens": "$m_A = m_B = m$, prędkość początkowa klocka A: $v_1$, klocek B początkowo spoczywa ($v_B = 0$), sprężyna o współczynniku $k$, brak oporów i tarcia.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Analiza sił i prędkości względnej",
                "content": "1. Zgodnie z <strong>III zasadą dynamiki Newtona</strong> oraz pomijalną masą sprężyny, siła wywierana przez sprężynę na klocek A ma taką samą wartość jak siła wywierana na klocek B: $F_{s\\to A} = F_{s\\to B} = k\\Delta x$. Zdanie jest **prawdziwe (P)**.<br><br>2. Maksymalne odkształcenie sprężyny występuje w momencie zwrotnym odkształcenia – klocki przestają się do siebie zbliżać, a jeszcze nie zaczynają oddalać. W tym ułamku sekundy ich prędkości są identyczne ($v_A = v_B = v_2$), a więc ich prędkość względna wynosi $v_{\\text{wzgl}} = v_A - v_B = 0$. Zdanie jest **prawdziwe (P)**."
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie prędkości chwilowej z Zasady Zachowania Pędu",
                "content": "W płaszczyźnie poziomej na klocki nie działają siły zewnętrzne, więc całkowity pęd układu jest stały w każdej chwili ruchu:\n$$p_{\\text{pocz}} = p_{\\text{śr}}$$\n$$m \\cdot v_1 + 0 = (m + m) \\cdot v_2 = 2m \\cdot v_2$$\nStąd prędkość obu klocków przy maksymalnym ściśnięciu sprężyny wynosi:\n$$v_2 = \\frac{v_1}{2}$$"
            },
            {
                "title": "Zadanie 3.2 – Bilans energii mechanicznej i wyznaczenie odkształcenia $\\Delta x_{\\max}$",
                "content": "Zderzenie jest sprężyste i nie ma tarcia, więc całkowita energia mechaniczna układu jest zachowana:\n$$E_{\\text{pocz}} = E_{\\text{śr}}$$\nPoczątkowo układ posiada jedynie energię kinetyczną klocka A. W chwili maksymalnego ściśnięcia posiada energię kinetyczną obu klocków oraz energię potencjalną sprężystości sprężyny:\n$$\\frac{m v_1^2}{2} = \\frac{(2m) v_2^2}{2} + \\frac{1}{2} k (\\Delta x_{\\max})^2$$\nPodstawiamy $v_2 = \\frac{v_1}{2}$:\n$$\\frac{m v_1^2}{2} = m \\left(\\frac{v_1}{2}\\right)^2 + \\frac{1}{2} k (\\Delta x_{\\max})^2$$\n$$\\frac{m v_1^2}{2} = \\frac{m v_1^2}{4} + \\frac{1}{2} k (\\Delta x_{\\max})^2$$\nOdejmujemy $\\frac{m v_1^2}{4}$ od obu stron równania:\n$$\\frac{m v_1^2}{4} = \\frac{1}{2} k (\\Delta x_{\\max})^2$$\nMnożymy obustronnie przez 2 i dzielimy przez $k$:\n$$(\\Delta x_{\\max})^2 = \\frac{m v_1^2}{2k}$$\nWyciągamy pierwiastek kwadratowy:\n$$\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$$"
            }
        ],
        "numerical": "3.1: P, P; 3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$",
        "answer": "3.1: 1-P, 2-P;\n3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$ (lub $\\sqrt{\\frac{m v_1^2}{2k}}$).",
        "trap": "W chwili maksymalnego ściśnięcia sprężyny klocki nie zatrzymują się w układzie odniesienia podłoża! Układ porusza się ze środkiem masy z prędkością $v_1/2$, więc część energii początkowej pozostaje w energii kinetycznej ruchu postępowego."
    },

    "matura-cke-praca-2026-maj-zad-2": {
        "intuition": "W ruchu po okręgu w płaszczyźnie pionowej promień jest zawsze prostopadły do wektora prędkości. Siła naciągu nici pełni rolę siły dośrodkowej, a prędkości w najniższym i najwyższym punkcie toru łączy Zasada Zachowania Energii Mechanicznej.",
        "givens": "Długość nici $l$ (promień okręgu), masa ciała $m$, prędkość maksymalna $v_{\\max}$ na dole, minimalna $v_{\\min}$ na górze, $\\frac{v_{\\max}}{v_{\\min}} = \\sqrt{3}$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Konstrukcja środka okręgu i odczyt promienia",
                "content": "Wektor prędkości w ruchu po okręgu jest styczny do toru w danym punkcie, co oznacza, że promień łączący ciało ze środkiem okręgu $S$ jest zawsze prostopadły do wektora prędkości $\\vec{v}$:\n1. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_1$ w punkcie jego przyłożenia (linia pionowa w dół).\n2. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_2$ w punkcie jego przyłożenia.\n3. Punkt przecięcia obu prostych jednoznacznie wyznacza środek okręgu $S$.\n\nOdliczając kratki pionowo od środka $S$ do punktu zaczepienia wektora $\\vec{v}_1$, odczytujemy promień okręgu:\n$$l = 10\\text{ długości kratek}$$\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Wybór sił w najniższym punkcie toru",
                "content": "W najniższym położeniu na ciało działają dwie pionowe siły:\n- ciężar $\\vec{F}_g = m\\vec{g}$ skierowany w dół,\n- siła reakcji (naciągu) nici $\\vec{F}_n$ skierowana pionowo w górę (do środka okręgu $S$).\nAby ciało poruszało się po okręgu, siła wypadkowa musi być skierowana do środka okręgu (w górę) i pełnić rolę siły dośrodkowej: $F_{\\text{doś}} = F_n - F_g > 0 \\implies F_n > F_g$.\nWektor $\\vec{F}_n$ musi być zatem dłuższy od wektora $\\vec{F}_g$. Warunek ten spełnia wyłącznie **rysunek B**."
            },
            {
                "title": "Zadanie 2.3 – Równania dynamiki w punktach skrajnych",
                "content": "Zapisujemy II zasadę dynamiki dla składowych sił wzdłuż promienia okręgu:\n- **W najniższym punkcie (prędkość maksymalna $v_{\\max}$):**\n$$F_{n\\,\\max} - mg = \\frac{m v_{\\max}^2}{l} \\implies F_{n\\,\\max} = mg + \\frac{m v_{\\max}^2}{l}$$\n- **W najwyższym punkcie (prędkość minimalna $v_{\\min}$):**\nZarówno naciąg nici, jak i grawitacja działają w dół (do środka):\n$$F_{n\\,\\min} + mg = \\frac{m v_{\\min}^2}{l} \\implies F_{n\\,\\min} = \\frac{m v_{\\min}^2}{l} - mg$$"
            },
            {
                "title": "Zadanie 2.3 – Wykorzystanie Zasady Zachowania Energii i obliczenie ilorazu",
                "content": "Różnica wysokości między najniższym a najwyższym punktem toru wynosi $h = 2l$. Z Zasady Zachowania Energii Mechanicznej:\n$$\\frac{m v_{\\max}^2}{2} = \\frac{m v_{\\min}^2}{2} + mg(2l)$$\nMnożymy przez $\\frac{2}{l}$:\n$$\\frac{m v_{\\max}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg$$\nZ treści zadania wiemy, że $v_{\\max} = \\sqrt{3}\\,v_{\\min} \\implies v_{\\max}^2 = 3v_{\\min}^2$. Podstawiamy:\n$$3\\,\\frac{m v_{\\min}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg \\implies 2\\,\\frac{m v_{\\min}^2}{l} = 4mg \\implies \\frac{m v_{\\min}^2}{l} = 2mg$$\nStąd dla prędkości maksymalnej:\n$$\\frac{m v_{\\max}^2}{l} = 3 \\cdot (2mg) = 6mg$$\nObliczamy wartości naciągów nici:\n$$F_{n\\,\\max} = mg + 6mg = 7mg$$\n$$F_{n\\,\\min} = 2mg - mg = mg$$\nIloraz sił wynosi:\n$$\\frac{F_{n\\,\\max}}{F_{n\\,\\min}} = \\frac{7mg}{mg} = 7$$"
            }
        ],
        "numerical": "2.1: $l = 10$; 2.2: B; 2.3: $\\frac{F_{n\\,\\max}}{F_{n\\,\\min}} = 7$",
        "answer": "2.1: Konstrukcja prostych prostopadłych, $l = 10$ kratek;\n2.2: Poprawny rysunek B;\n2.3: $\\frac{F_{n\\,\\max}}{F_{n\\,\\min}} = 7$.",
        "trap": "W najwyższym punkcie toru siła ciężkości działa w tym samym zwrocie co naciąg nici (w dół, do środka), stąd $F_{n\\,\\min} = \\frac{mv_{\\min}^2}{l} - mg$, a nie ze znakiem plus!"
    },

    "matura-cke-praca-2026-styczen-zad-2": {
        "intuition": "W zderzeniu sprężystym spełniona jest zarówno Zasada Zachowania Pędu, jak i Zasada Zachowania Energii Kinetycznej. Siły wzajemnego oddziaływania kulek podczas zderzenia stanowią parę sił akcji i reakcji opisaną III zasadą dynamiki Newtona.",
        "givens": "Kula K1 o masie $m_1$ z prędkością początkową $v_1$, kula K2 o masie $m_2$ spoczywa ($v_{2\\text{pocz}} = 0$). Po zderzeniu obie kule mają tę samą wartość prędkości $v_2$, lecz przeciwne zwroty: $u_1 = -v_2$, $u_2 = +v_2$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Siły wzajemnego oddziaływania (III zasada dynamiki)",
                "content": "Podczas zderzenia kule oddziałują na siebie siłami sprężystości:\n- Siła $\\vec{F}_{21}$ (działająca na kulę K1 od kuli K2) jest zaczepiona w środku kuli K1 i skierowana poziomo w lewo (hamuje kulę K1).\n- Siła $\\vec{F}_{12}$ (działająca na kulę K2 od kuli K1) jest zaczepiona w środku kuli K2 i skierowana poziomo w prawo (rozpędza kulę K2).\nZgodnie z **III zasadą dynamiki Newtona** siły te mają ten sam kierunek, przeciwne zwroty oraz **dokładnie równe wartości** ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$), bez względu na stosunek mas kul!\nOba wektory zaczepiamy w środkach odpowiednich kul i rysujemy wzdłuż prostej łączącej ich środki z zachowaniem jednakowej długości wektorów (np. 5 kratek w kluczu CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-sily-rozwiazanie.png\" alt=\"Siły oddziaływania kul według klucza CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Zapisanie Zasad Zachowania Pędu i Energii",
                "content": "Przyjmujemy oś $x$ skierowaną w prawo:\n1. **Zasada Zachowania Pędu:**\n$$m_1 v_1 + 0 = -m_1 v_2 + m_2 v_2$$\nPrzenosimy wyrazy z $m_1$ na lewą stronę:\n$$m_1 (v_1 + v_2) = m_2 v_2 \\quad \\implies \\quad \\frac{m_2}{m_1} = \\frac{v_1 + v_2}{v_2} = \\frac{v_1}{v_2} + 1 \\quad \\text{(Równanie 1)}$$\n\n2. **Zasada Zachowania Energii Kinetycznej (zderzenie idealnie sprężyste):**\n$$\\frac{m_1 v_1^2}{2} = \\frac{m_1 v_2^2}{2} + \\frac{m_2 v_2^2}{2}$$\nMnożymy przez 2 i grupujemy wyrazy z $m_1$:\n$$m_1 (v_1^2 - v_2^2) = m_2 v_2^2 \\quad \\implies \\quad \\frac{m_2}{m_1} = \\frac{v_1^2 - v_2^2}{v_2^2} = \\left(\\frac{v_1}{v_2}\right)^2 - 1 \\quad \\text{(Równanie 2)}$$"
            },
            {
                "title": "Zadanie 2.2 – Wyznaczenie ilorazu mas $\\frac{m_2}{m_1}$",
                "content": "Przyrównujemy prawe strony Równania 1 i Równania 2:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2}\right)^2 - 1$$\nRozpisujemy różnicę kwadratów: $\\left(\\frac{v_1}{v_2}\right)^2 - 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$$\nPonieważ $v_1 + v_2 > 0$, możemy podzielić obie strony przez $\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$1 = \\frac{v_1}{v_2} - 1 \\quad \\implies \\quad \\frac{v_1}{v_2} = 2$$\nPodstawiamy obliczony stosunek $\\frac{v_1}{v_2} = 2$ do Równania 1:\n$$\\frac{m_2}{m_1} = \\frac{v_1}{v_2} + 1 = 2 + 1 = 3$$"
            }
        ],
        "numerical": "2.1: Siły równej długości, przeciwne zwroty; 2.2: $\\frac{m_2}{m_1} = 3$",
        "answer": "2.1: Wektor na K1 w lewo, wektor na K2 w prawo, równe długości;\n2.2: $\\frac{m_2}{m_1} = 3$.",
        "trap": "Częsty błąd: rysowanie dłuższego wektora siły dla kuli o większej masie. III zasada dynamiki gwarantuje bezwzględną równość wartości sił akcji i reakcji!"
    },

    "matura-cke-praca-2023-czerwiec-zad-2": {
        "intuition": "Dla sprężystego centralnego zderzenia dwóch ciał o identycznych masach następuje całkowita wymiana prędkości (kula przejmuje wektor prędkości drugiej kuli). Gdy dochodzi do trwałego sczepienia (zderzenie doskonale niesprężyste), pęd jest zachowany, lecz część energii kinetycznej bezpowrotnie przechodzi w pracę odkształcenia i ciepło.",
        "givens": "$m_1 = m_2 = m$, prędkości początkowe: $\\vec{v}_1 = [2v_2]$ (w prawo), $\\vec{v}_2 = [-v_2]$ (w lewo, $v_1 = 2v_2$).",
        "steps": [
            {
                "title": "Zadanie 2.1 – Zderzenie doskonale sprężyste identycznych mas",
                "content": "Dla centralnego zderzenia sprężystego ciał o jednakowych masach ($m_1 = m_2$) z układu Zasad Zachowania Pędu i Energii wynika fundamentalna reguła: **ciała wymieniają się prędkościami wraz ze zwrotami**:\n- Kula K1 po zderzeniu uzyskuje prędkość kuli K2: $\\vec{u}_1 = \\vec{v}_2$ (wektor skierowany w lewo o długości odpowiadającej $v_2$).\n- Kula K2 po zderzeniu uzyskuje prędkość kuli K1: $\\vec{u}_2 = \\vec{v}_1$ (wektor skierowany w prawo o długości odpowiadającej $2v_2$).\nRelację tę poprawnie przedstawia **rysunek B**."
            },
            {
                "title": "Zadanie 2.2 – Wyznaczenie prędkości wspólnej po połączeniu (ZZP)",
                "content": "Przyjmijmy oś $x$ skierowaną w prawo. Z Zasady Zachowania Pędu dla trwałego połączenia obu kul:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 - m v_2 = (m + m) \\cdot u$$\nPodstawiamy $v_1 = 2v_2$:\n$$m(2v_2) - m v_2 = 2m \\cdot u \\implies m v_2 = 2m \\cdot u \\implies u = \\frac{v_2}{2}$$\nPołączone kule poruszają się wspólnie w prawo z prędkością $u = 0{,}5\\,v_2$."
            },
            {
                "title": "Zadanie 2.2 – Obliczenie utraconej części energii kinetycznej",
                "content": "Obliczamy całkowitą początkową energię kinetyczną obu kul:\n$$E_{k,\\text{pocz}} = \\frac{m v_1^2}{2} + \\frac{m v_2^2}{2} = \\frac{m(2v_2)^2}{2} + \\frac{m v_2^2}{2} = \\frac{4m v_2^2}{2} + \\frac{m v_2^2}{2} = \\frac{5}{2} m v_2^2 = 2{,}5\\,m v_2^2$$\nObliczamy końcową energię kinetyczną połączonego układu:\n$$E_{k,\\text{końc}} = \\frac{(2m) u^2}{2} = m u^2 = m \\left(\\frac{v_2}{2}\\right)^2 = \\frac{m v_2^2}{4} = 0{,}25\\,m v_2^2$$\nUtracona energia kinetyczna wynosi:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 2{,}5\\,m v_2^2 - 0{,}25\\,m v_2^2 = 2{,}25\\,m v_2^2$$\nSzukany ułamek (część utraconej energii) to:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{2{,}25\\,m v_2^2}{2{,}5\\,m v_2^2} = \\frac{2{,}25}{2{,}5} = \\frac{9}{10} = 0{,}90 \\quad (90\\%)$$"
            }
        ],
        "numerical": "2.1: B; 2.2: $\\frac{\\Delta E_k}{E_k} = 0{,}9$ ($90\\%$)",
        "answer": "2.1: Odpowiedź B;\n2.2: Układ utracił $\\frac{9}{10}$ (czyli $0{,}90$ lub $90\\%$) początkowej energii kinetycznej.",
        "trap": "Nie wolno dodawać prędkości skalarnie przy wyznaczaniu pędu – kule poruszają się naprzeciwko siebie, więc pędy mają przeciwne zwroty: $p_{\\text{pocz}} = m(2v_2) - mv_2 = mv_2$."
    },

    "matura-cke-praca-2023-maj-zad-2": {
        "intuition": "Zderzenie gładkich krążków bez tarcia oznacza, że siły wzajemnego oddziaływania działają wyłącznie wzdłuż prostej łączącej ich środki w momencie zderzenia (kierunek normalny, równoległy do osi x). Składowa prędkości krążka K1 prostopadła do tej linii (kierunek styczny) nie ulega żadnej zmianie, ponieważ nie działa na nią żadna siła.",
        "givens": "Jednakowe masy $m_1 = m_2 = m$, krążek K2 początkowo spoczywa, brak tarcia, zderzenie idealnie sprężyste.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Rysunek sił wzajemnego oddziaływania",
                "content": "W chwili zderzenia brak tarcia sprawia, że siły kontaktowe działają ściśle wzdłuż prostej przechodzącej przez środki obu krążków (linii normalnej, równoległej do osi $x$):\n- Siła $\\vec{F}_{12}$ (działająca na krążek K1) jest zaczepiona w środku krążka K1 i skierowana wzdłuż osi $x$ w lewo.\n- Siła $\\vec{F}_{21}$ (działająca na krążek K2) jest zaczepiona w środku krążka K2 i skierowana wzdłuż osi $x$ w prawo.\nZgodnie z **III zasadą dynamiki Newtona** siły te leżą na jednej prostej, mają przeciwne zwroty i **równe wartości** ($|\\vec{F}_{12}| = |\\vec{F}_{21}|$). Wektory rysujemy poziomo o jednakowej długości (4 kratki według klucza CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-sily-rozwiazanie.png\" alt=\"Siły działające podczas zderzenia krążków według klucza CKE\" class=\"theory-img\" style=\"max-height:340px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Analiza wektorów prędkości po zderzeniu",
                "content": "Rozkładamy ruch na kierunek wzdłuż linii środków (oś $x$) oraz kierunek prostopadły do linii środków (oś $y$):\n1. **Wzdłuż osi $y$ (stycznej):** Nie działa żadna siła, więc krążek K2 nie uzyskuje składowej $v_y$ ($u_{2y} = 0$). Składowa prędkości krążka K1 pozostaje nienaruszona: $\\vec{u}_{1y} = \\vec{v}_y$.\n2. **Wzdłuż osi $x$ (normalnej):** Dochodzi do sprężystego zderzenia ciał o jednakowych masach. Krążek K1 przekazuje całą swoją składową prędkości normalnej spoczywającemu krążkowi K2:\n$$u_{1x} = 0, \\qquad \\vec{u}_{2x} = \\vec{v}_x$$\n3. **Podsumowanie wektorów prędkości:**\n- Krążek K1 ma po zderzeniu jedynie składową $\\vec{u}_1 = \\vec{v}_y$ (skierowaną pionowo w dół),\n- Krążek K2 ma po zderzeniu jedynie składową $\\vec{u}_2 = \\vec{v}_x$ (skierowaną poziomo w prawo).\nWarunek ten idealnie spełnia **rysunek C**."
            }
        ],
        "numerical": "2.1: Siły wzdłuż linii środków o równych wartościach; 2.2: C",
        "answer": "2.1: Siły wzdłuż linii łączącej środki krążków, równe długości wektorów;\n2.2: Odpowiedź C.",
        "trap": "Klocek/krążek uderzany K2 może uzyskać prędkość wyłącznie w kierunku działającej na niego siły normalnej (w prawo wzdłuż linii środków), nie może mieć żadnej składowej pionowej przy braku tarcia!"
    },

    "matura-cke-praca-informator-2025-zad-2": {
        "intuition": "Spadek kulki modelujemy z Zasady Zachowania Energii Mechanicznej lub równań ruchu jednostajnie przyspieszonego. Podczas odbicia od podłoża prędkość zmienia zwrot na przeciwny, a siła reakcji podłoża musi z II zasady dynamiki nie tylko nadać kulce przyspieszenie w górę (zmienić pęd), ale także zrównoważyć ściągający w dół ciężar kulki.",
        "givens": "$m = 0{,}250\\text{ kg}$, $h = 1{,}80\\text{ m}$, $v_0 = 3{,}20\\text{ m/s}$, czas zderzenia $\\Delta t = 5{,}00\\cdot 10^{-3}\\text{ s}$, $g = 9{,}81\\text{ m/s}^2$, strata energii przy zderzeniu: $25\\%$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
                "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
            },
            {
                "title": "Zadanie 2.2 – Wykazanie prędkości $v_1$ tuż przed uderzeniem (ZZE)",
                "content": "Przyjmując zerowy poziom energii potencjalnej na podłożu ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{m v_0^2}{2} + mgh = \\frac{m v_1^2}{2}$$\nDzielimy przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20)^2 + 2 \\cdot 9{,}81 \\cdot 1{,}80} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$"
            },
            {
                "title": "Zadanie 2.3 – Obliczenie prędkości po odbiciu i siły reakcji podłoża",
                "content": "1. **Prędkość po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii mechanicznej (kinetycznej), więc po odbiciu ma $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{m v_2^2}{2} = 0{,}75 \\cdot \\frac{m v_1^2}{2} \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495 \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia i siła reakcji podłoża:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie i pędzie):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250 \\cdot (6{,}7495 + 5{,}845)}{0{,}005} = 50 \\cdot 12{,}5945 \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45 + 629{,}7 \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
            }
        ],
        "numerical": "2.1: $t \\approx 0{,}36\\text{ s}$; 2.2: $v_1 \\approx 6{,}75\\text{ m/s}$; 2.3: $F_R \\approx 632\\text{ N}$",
        "answer": "2.1: $t \\approx 0{,}36\\text{ s}$ (dokładnie ok. $0{,}362\\text{ s}$);\n2.2: $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: $F_R \\approx 632\\text{ N}$.",
        "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki ($F_R = F_{\\text{wyp}} + mg$)."
    },

    "matura-cke-praca-informator-2025-zad-3": {
        "intuition": "Zdjęcia stroboskopowe w równych odstępach czasu oznaczają, że przesunięcie na siatce między kolejnymi punktami jest wprost proporcjonalne do wektora prędkości. Stosujemy Zasadę Zachowania Pędu niezależnie dla składowych x oraz y, a sprężystość zderzenia sprawdzamy przez bilans całkowitej energii kinetycznej.",
        "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), jednakowe odstępy czasu $\\Delta t$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu",
                "content": "Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (między punktami 1–3):**\nCiało A porusza się poziomo w prawo o 18,5 kratki na 1 krok czasowy: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (między punktami 4–6):**\nCiało A: przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{u}_A = [8{,}5;\\; -7{,}5]$.\nCiało B: przesuwa się o 8 kratek w prawo i 6 kratek w górę: $\\vec{u}_B = [8{,}0;\\; +6{,}0]$."
            },
            {
                "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z ZZP w osi Y",
                "content": "Początkowo układ nie miał żadnego pędu w pionie ($p_{y,\\text{pocz}} = 0$). Z Zasady Zachowania Pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot u_{Ay} + m_B \\cdot u_{By}$$\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50$$\n$$m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n*(Sprawdzenie w osi x: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – pęd w osi x jest ściśle zachowany).* "
            },
            {
                "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
                "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy energia kinetyczna układu po zderzeniu jest równa energii przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał po zderzeniu (twierdzenie Pitagorasa):**\n$$u_A^2 = u_{Ax}^2 + u_{Ay}^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$u_B^2 = u_{Bx}^2 + u_{By}^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot (18{,}5)^2 = 0{,}10 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A u_A^2 + \\frac{1}{2} m_B u_B^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (iloraz $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii)."
            }
        ],
        "numerical": "3.1: $m_B = 250\\text{ g}$; 3.2: zderzenie niesprężyste, $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$",
        "answer": "3.1: Wykazano $m_B = 250\\text{ g}$;\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej uległa rozproszeniu, stosunek energii wynosi ok. $0{,}74$).",
        "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $u^2 = u_x^2 + u_y^2$, a nie braniu pojedynczej współrzędnej!"
    },

    "matura-cke-praca-informator-2023-zad-2": {
        "intuition": "Spadek kulki modelujemy z Zasady Zachowania Energii Mechanicznej lub równań ruchu jednostajnie przyspieszonego. Podczas odbicia od podłoża prędkość zmienia zwrot na przeciwny, a siła reakcji podłoża musi z II zasady dynamiki nie tylko nadać kulce przyspieszenie w górę (zmienić pęd), ale także zrównoważyć ściągający w dół ciężar kulki.",
        "givens": "$m = 0{,}250\\text{ kg}$, $h = 1{,}80\\text{ m}$, $v_0 = 3{,}20\\text{ m/s}$, czas zderzenia $\\Delta t = 5{,}00\\cdot 10^{-3}\\text{ s}$, $g = 9{,}81\\text{ m/s}^2$, strata energii przy zderzeniu: $25\\%$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
                "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
            },
            {
                "title": "Zadanie 2.2 – Wykazanie prędkości $v_1$ tuż przed uderzeniem (ZZE)",
                "content": "Przyjmując zerowy poziom energii potencjalnej na podłożu ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{m v_0^2}{2} + mgh = \\frac{m v_1^2}{2}$$\nDzielimy przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20)^2 + 2 \\cdot 9{,}81 \\cdot 1{,}80} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$"
            },
            {
                "title": "Zadanie 2.3 – Obliczenie prędkości po odbiciu i siły reakcji podłoża",
                "content": "1. **Prędkość po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii mechanicznej (kinetycznej), więc po odbiciu ma $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{m v_2^2}{2} = 0{,}75 \\cdot \\frac{m v_1^2}{2} \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495 \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia i siła reakcji podłoża:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie i pędzie):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250 \\cdot (6{,}7495 + 5{,}845)}{0{,}005} = 50 \\cdot 12{,}5945 \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45 + 629{,}7 \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
            }
        ],
        "numerical": "2.1: $t \\approx 0{,}36\\text{ s}$; 2.2: $v_1 \\approx 6{,}75\\text{ m/s}$; 2.3: $F_R \\approx 632\\text{ N}$",
        "answer": "2.1: $t \\approx 0{,}36\\text{ s}$ (dokładnie ok. $0{,}362\\text{ s}$);\n2.2: $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: $F_R \\approx 632\\text{ N}$.",
        "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć ściągający w dół ciężar kulki ($F_R = F_{\\text{wyp}} + mg$)."
    },

    "matura-cke-praca-informator-2023-zad-3": {
        "intuition": "Zdjęcia stroboskopowe w równych odstępach czasu oznaczają, że przesunięcie na siatce między kolejnymi punktami jest wprost proporcjonalne do wektora prędkości. Stosujemy Zasadę Zachowania Pędu niezależnie dla składowych x oraz y, a sprężystość zderzenia sprawdzamy przez bilans całkowitej energii kinetycznej.",
        "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), jednakowe odstępy czasu $\\Delta t$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu",
                "content": "Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (między punktami 1–3):**\nCiało A porusza się poziomo w prawo o 18,5 kratki na 1 krok czasowy: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (między punktami 4–6):**\nCiało A: przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{u}_A = [8{,}5;\\; -7{,}5]$.\nCiało B: przesuwa się o 8 kratek w prawo i 6 kratek w górę: $\\vec{u}_B = [8{,}0;\\; +6{,}0]$."
            },
            {
                "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z ZZP w osi Y",
                "content": "Początkowo układ nie miał żadnego pędu w pionie ($p_{y,\\text{pocz}} = 0$). Z Zasady Zachowania Pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot u_{Ay} + m_B \\cdot u_{By}$$\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50$$\n$$m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n*(Sprawdzenie w osi x: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – pęd w osi x jest ściśle zachowany).* "
            },
            {
                "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
                "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy energia kinetyczna układu po zderzeniu jest równa energii przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał po zderzeniu (twierdzenie Pitagorasa):**\n$$u_A^2 = u_{Ax}^2 + u_{Ay}^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$u_B^2 = u_{Bx}^2 + u_{By}^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot (18{,}5)^2 = 0{,}10 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A u_A^2 + \\frac{1}{2} m_B u_B^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (iloraz $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii)."
            }
        ],
        "numerical": "3.1: $m_B = 250\\text{ g}$; 3.2: zderzenie niesprężyste, $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$",
        "answer": "3.1: Wykazano $m_B = 250\\text{ g}$;\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej uległa rozproszeniu, stosunek energii wynosi ok. $0{,}74$).",
        "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $u^2 = u_x^2 + u_y^2$, a nie braniu pojedynczej współrzędnej!"
    }
};

subMatura.tasks.forEach(task => {
    if (newSolutions[task.id]) {
        const sol = newSolutions[task.id];
        // Preserve source link if present
        if (task.solution && task.solution.source) {
            sol.source = task.solution.source;
        }
        task.solution = sol;
        console.log('Updated solution for:', task.id);
    }
});

// Also ensure m-dynamika has the solution graphic for 2026-maj-zad-2
const dynSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
if (dynSec) {
    const dynTask = dynSec.subchapters.flatMap(s => s.tasks || []).find(t => t.id === 'matura-cke-2026-maj-zad-2');
    if (dynTask && dynTask.solution && dynTask.solution.steps && dynTask.solution.steps[0]) {
        if (!dynTask.solution.steps[0].content.includes('2026-maj-z2-konstrukcja-rozwiazanie.png')) {
            dynTask.solution.steps[0].content = "Przez punkty zaczepienia obu prędkości poprowadź proste prostopadłe do tych prędkości. Ich przecięcie to środek $S$. Leży on 10 kratek poniżej punktu zaczepienia $\\vec v_1$. Promień wynosi $l=10$ długości boku kratki.<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>";
        }
    }
}

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully updated all solutions in sub-praca-matura and m-dynamika!');

