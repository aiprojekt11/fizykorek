const fs = require('fs');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const pracaSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-praca');
const subMatura = pracaSec.subchapters.find(s => s.id === 'sub-praca-matura');

const standardizedSolutions = {
  "matura-cke-praca-2026-czerwiec-zad-3": {
    "givens": "$m_A = m_B = m$, prędkość początkowa klocka A: $v_1$, klocek B początkowo spoczywa ($v_{B,\\text{pocz}} = 0$), sprężyna o współczynniku sprężystości $k$, brak oporów ruchu i tarcia.",
    "steps": [
      {
        "title": "Zadanie 3.1 – Analiza prawdziwości stwierdzeń (III zasada dynamiki i ruch względny)",
        "content": "1. Zgodnie z **III zasadą dynamiki Newtona** oraz założeniem o pomijalnej masie sprężyny, siła wywierana przez sprężynę na klocek A ma w każdej chwili dokładnie taką samą wartość jak siła wywierana na klocek B:\n$$F_{s\\to A} = F_{s\\to B} = k\\Delta x$$\nStwierdzenie 1. jest **prawdziwe (P)**.\n\n2. Maksymalne ściśnięcie sprężyny następuje w punkcie zwrotnym odkształcenia – klocki przestają się zbliżać, a jeszcze nie zaczynają oddalać. W tym ułamku sekundy poruszają się z tą samą prędkością chwilową ($v_A = v_B = v_2$), zatem ich prędkość względna wynosi:\n$$v_{\\text{wzgl}} = v_A - v_B = 0$$\nStwierdzenie 2. jest **prawdziwe (P)**."
      },
      {
        "title": "Zadanie 3.2 – Prędkość chwilowa klocków z zasady zachowania pędu",
        "content": "W płaszczyźnie poziomej na układ nie działają żadne siły zewnętrzne, więc całkowity pęd układu jest zachowany w każdej chwili ruchu:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 + 0 = (m + m) v_2 = 2m v_2$$\nDzieląc obustronnie przez $2m$, otrzymujemy prędkość obu klocków przy maksymalnym ściśnięciu sprężyny:\n$$v_2 = \\frac{v_1}{2}$$"
      },
      {
        "title": "Zadanie 3.2 – Bilans energii mechanicznej i wyznaczenie odkształcenia $\\Delta x_{\\max}$",
        "content": "Układ jest izolowany, a ruch odbywa się bez tarcia, więc całkowita energia mechaniczna układu jest zachowana:\n$$E_{\\text{pocz}} = E_{\\text{końc}}$$\nPoczątkowo układ posiada wyłącznie energię kinetyczną klocka A. W chwili maksymalnego odkształcenia sprężyny posiada energię kinetyczną obu klocków oraz energię potencjalną sprężystości sprężyny:\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{2}(2m) v_2^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nPodstawiamy wyznaczoną prędkość $v_2 = \\frac{v_1}{2}$:\n$$\\frac{1}{2}m v_1^2 = m \\left(\\frac{v_1}{2}\\right)^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\n$$\\frac{1}{2}m v_1^2 = \\frac{1}{4}m v_1^2 + \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nOdejmujemy $\\frac{1}{4}m v_1^2$ od obu stron równania:\n$$\\frac{1}{4}m v_1^2 = \\frac{1}{2}k(\\Delta x_{\\max})^2$$\nMnożymy obustronnie przez 2 i dzielimy przez współczynnik $k$:\n$$(\\Delta x_{\\max})^2 = \\frac{m v_1^2}{2k}$$\nWyciągamy pierwiastek kwadratowy:\n$$\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}} \\qquad \\left(\\text{lub } \\sqrt{\\frac{m v_1^2}{2k}}\\right)$$"
      }
    ],
    "answer": "3.1: 1 – Prawda (P), 2 – Prawda (P);\n3.2: $\\Delta x_{\\max} = v_1 \\sqrt{\\frac{m}{2k}}$ (lub $\\sqrt{\\frac{m v_1^2}{2k}}$).",
    "trap": "W chwili maksymalnego ściśnięcia sprężyny klocki nie zatrzymują się w układzie odniesienia podłoża! Układ porusza się dalej z prędkością środka masy $v_1/2$, więc część energii początkowej pozostaje w energii kinetycznej ruchu postępowego obu klocków."
  },

  "matura-cke-praca-2026-maj-zad-2": {
    "givens": "Długość nici (promień okręgu): $l$, masa ciała: $m$, stosunek prędkości skrajnych: $\\frac{v_{\\max}}{v_{\\min}} = \\sqrt{3}$, ruch po okręgu w płaszczyźnie pionowej, brak oporów ruchu.",
    "steps": [
      {
        "title": "Zadanie 2.1 – Konstrukcja środka okręgu i odczyt promienia",
        "content": "Wektor prędkości w ruchu po okręgu jest w każdej chwili styczny do toru, co oznacza, że promień łączący ciało ze środkiem okręgu $S$ jest zawsze prostopadły do wektora prędkości $\\vec{v}$:\n1. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_1$ w punkcie jego przyłożenia (pionowo w dół).\n2. Prowadzimy prostą prostopadłą do wektora prędkości $\\vec{v}_2$ w punkcie jego przyłożenia.\n3. Punkt przecięcia obu prostych jednoznacznie wyznacza środek okręgu $S$.\n\nOdliczając kratki pionowo od środka $S$ do punktu zaczepienia wektora $\\vec{v}_1$, odczytujemy promień okręgu:\n$$l = 10\\text{ długości kratek}$$\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-maj-z2-konstrukcja-rozwiazanie.png\" alt=\"Konstrukcja środka i promienia okręgu według klucza CKE\" class=\"theory-img\" style=\"max-height:440px;display:block;margin:15px auto;\"></div>"
      },
      {
        "title": "Zadanie 2.2 – Wybór sił działających w najniższym położeniu",
        "content": "W najniższym położeniu na ciało działają dwie pionowe siły:\n- siła grawitacji $\\vec{F}_g = m\\vec{g}$ skierowana pionowo w dół,\n- siła reakcji (naciągu) nici $\\vec{F}_n$ skierowana pionowo w górę (w stronę środka okręgu $S$).\n\nAby ciało poruszało się po okręgu, siła wypadkowa musi być skierowana do środka okręgu (w górę) i pełnić rolę siły dośrodkowej:\n$$F_{\\text{doś}} = F_n - F_g = \\frac{m v_{\\max}^2}{l} > 0 \\implies F_n > F_g$$\nWektor siły reakcji nici $\\vec{F}_n$ musi mieć zatem większą długość niż wektor ciężaru $\\vec{F}_g$. Warunek ten spełnia wyłącznie **rysunek B**."
      },
      {
        "title": "Zadanie 2.3 – Równania dynamiki w skrajnych punktach toru",
        "content": "Zapisujemy II zasadę dynamiki dla składowych sił wzdłuż promienia okręgu w punktach o prędkości maksymalnej i minimalnej:\n- **W najniższym punkcie (prędkość maksymalna $v_{\\max}$):**\n$$F_{n,\\max} - mg = \\frac{m v_{\\max}^2}{l} \\implies F_{n,\\max} = mg + \\frac{m v_{\\max}^2}{l}$$\n- **W najwyższym punkcie (prędkość minimalna $v_{\\min}$):**\nZarówno siła reakcji nici, jak i siła grawitacji działają w dół (w stronę środka $S$):\n$$F_{n,\\min} + mg = \\frac{m v_{\\min}^2}{l} \\implies F_{n,\\min} = \\frac{m v_{\\min}^2}{l} - mg$$"
      },
      {
        "title": "Zadanie 2.3 – Zastosowanie zasady zachowania energii i obliczenie ilorazu sił",
        "content": "Różnica wysokości między najniższym a najwyższym punktem toru wynosi $h = 2l$. Z zasady zachowania energii mechanicznej:\n$$\\frac{1}{2}m v_{\\max}^2 = \\frac{1}{2}m v_{\\min}^2 + mg(2l)$$\nMnożymy obustronnie przez $\\frac{2}{l}$:\n$$\\frac{m v_{\\max}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg$$\nZ treści zadania wiemy, że $v_{\\max} = \\sqrt{3}\\,v_{\\min}$, co oznacza $v_{\\max}^2 = 3v_{\\min}^2$. Podstawiamy:\n$$3\\,\\frac{m v_{\\min}^2}{l} = \\frac{m v_{\\min}^2}{l} + 4mg \\implies 2\\,\\frac{m v_{\\min}^2}{l} = 4mg \\implies \\frac{m v_{\\min}^2}{l} = 2mg$$\nStąd dla prędkości maksymalnej:\n$$\\frac{m v_{\\max}^2}{l} = 3 \\cdot (2mg) = 6mg$$\nObliczamy wartości sił reakcji nici:\n$$F_{n,\\max} = mg + 6mg = 7mg$$\n$$F_{n,\\min} = 2mg - mg = mg$$\nIloraz poszukiwanych sił wynosi:\n$$\\frac{F_{n,\\max}}{F_{n,\\min}} = \\frac{7mg}{mg} = 7$$"
      }
    ],
    "answer": "2.1: Konstrukcja prostych prostopadłych, $l = 10\\text{ długości kratek}$;\n2.2: Poprawny rysunek B ($F_n > F_g$);\n2.3: Iloraz wynosi $\\frac{F_{n,\\max}}{F_{n,\\min}} = 7$.",
    "trap": "W najwyższym punkcie toru siła ciężkości działa w tym samym zwrocie co siła naciągu nici (w dół, w stronę środka okręgu), dlatego $F_{n,\\min} = \\frac{mv_{\\min}^2}{l} - mg$, a nie ze znakiem plus!"
  },

  "matura-cke-praca-2026-styczen-zad-2": {
    "givens": "Kula K1 o masie $m_1$ z prędkością początkową $v_1$, kula K2 o masie $m_2$ początkowo spoczywa ($v_{2,\\text{pocz}} = 0$). Zderzenie sprężyste centralne. Po zderzeniu obie kule mają tę samą wartość prędkości $v_2$, lecz przeciwne zwroty ($v_1' = -v_2$, $v_2' = +v_2$).",
    "steps": [
      {
        "title": "Zadanie 2.1 – Wektory sił wzajemnego oddziaływania kul (III zasada dynamiki)",
        "content": "W chwili zderzenia kule oddziałują na siebie siłami sprężystości:\n- Siła $\\vec{F}_{21}$ (wywierana na kulę K1 przez kulę K2) jest zaczepiona w środku kuli K1 i skierowana poziomo w lewo (wyhamowuje kulę K1).\n- Siła $\\vec{F}_{12}$ (wywierana na kulę K2 przez kulę K1) jest zaczepiona w środku kuli K2 i skierowana poziomo w prawo (rozpędza kulę K2).\n\nZgodnie z **III zasadą dynamiki Newtona** siły te tworzą parę akcja–reakcja: leżą na prostej łączącej środki kul, mają przeciwne zwroty oraz **dokładnie równe wartości** ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$), bez względu na relację między masami kul!\nOba wektory rysujemy zaczepione w środkach kul z zachowaniem identycznej długości (np. 5 kratek w kluczu CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2026-styczen-z2-sily-rozwiazanie.png\" alt=\"Rysunek wektorów sił według klucza CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>"
      },
      {
        "title": "Zadanie 2.2 – Zasada zachowania pędu i zderzenie sprężyste",
        "content": "Przyjmujemy oś $x$ skierowaną w prawo.\n1. **Zasada zachowania pędu:**\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m_1 v_1 + 0 = -m_1 v_2 + m_2 v_2$$\nGrupujemy wyrazy z masą $m_1$:\n$$m_1 (v_1 + v_2) = m_2 v_2 \\implies \\frac{m_2}{m_1} = \\frac{v_1 + v_2}{v_2} = \\frac{v_1}{v_2} + 1 \\quad \\text{(Równanie 1)}$$\n\n2. **Zasada zachowania energii kinetycznej (zderzenie sprężyste):**\n$$E_{k,\\text{pocz}} = E_{k,\\text{końc}}$$\n$$\\frac{1}{2}m_1 v_1^2 + 0 = \\frac{1}{2}m_1 v_2^2 + \\frac{1}{2}m_2 v_2^2$$\nMnożymy obustronnie przez 2 i przenosimy wyrazy z $m_1$ na lewą stronę:\n$$m_1 (v_1^2 - v_2^2) = m_2 v_2^2 \\implies \\frac{m_2}{m_1} = \\frac{v_1^2 - v_2^2}{v_2^2} = \\left(\\frac{v_1}{v_2}\\right)^2 - 1 \\quad \\text{(Równanie 2)}$$"
      },
      {
        "title": "Zadanie 2.2 – Wyznaczenie ilorazu mas $\\frac{m_2}{m_1}$",
        "content": "Przyrównujemy prawe strony Równania 1 i Równania 2:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2}\\right)^2 - 1$$\nRozpisujemy prawą stronę ze wzoru skróconego mnożenia na różnicę kwadratów: $\\left(\\frac{v_1}{v_2}\\right)^2 - 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$\\frac{v_1}{v_2} + 1 = \\left(\\frac{v_1}{v_2} - 1\\right)\\left(\\frac{v_1}{v_2} + 1\\right)$$\nPonieważ $v_1 + v_2 > 0$, możemy podzielić obie strony przez $\\left(\\frac{v_1}{v_2} + 1\\right)$:\n$$1 = \\frac{v_1}{v_2} - 1 \\implies \\frac{v_1}{v_2} = 2$$\nPodstawiamy obliczony stosunek $\\frac{v_1}{v_2} = 2$ do Równania 1:\n$$\\frac{m_2}{m_1} = \\frac{v_1}{v_2} + 1 = 2 + 1 = 3$$"
      }
    ],
    "answer": "2.1: Wektory sił $\\vec{F}_{21}$ i $\\vec{F}_{12}$ zaczepione w środkach kul, o jednakowych długościach i przeciwnych zwrotach;\n2.2: Iloraz mas wynosi $\\frac{m_2}{m_1} = 3$.",
    "trap": "Częsty błąd na maturze to rysowanie dłuższego wektora siły dla kuli o większej masie. III zasada dynamiki Newtona gwarantuje bezwzględną równość wartości sił akcji i reakcji ($|\\vec{F}_{21}| = |\\vec{F}_{12}|$)!"
  },

  "matura-cke-praca-2023-czerwiec-zad-2": {
    "givens": "Masy kul: $m_1 = m_2 = m$, prędkości początkowe: $\\vec{v}_1$ o wartości $2v_2$ (skierowana w prawo), $\\vec{v}_2$ o wartości $v_2$ (skierowana w lewo, czyli $v_1 = 2v_2$).",
    "steps": [
      {
        "title": "Zadanie 2.1 – Centralne zderzenie sprężyste ciał o jednakowych masach",
        "content": "Dla centralnego zderzenia idealnie sprężystego ciał o identycznych masach ($m_1 = m_2$) z zasad zachowania pędu i energii wynika reguła wymiany prędkości wraz ze zwrotami:\n$$\\vec{v}_1' = \\vec{v}_2 \\qquad \\text{oraz} \\qquad \\vec{v}_2' = \\vec{v}_1$$\nOznacza to, że po zderzeniu:\n- kula K1 przejmuje wektor prędkości kuli K2: porusza się w lewo z szybkością $v_2$,\n- kula K2 przejmuje wektor prędkości kuli K1: porusza się w prawo z szybkością $2v_2$.\n\nRelację tę poprawnie przedstawia **rysunek B**."
      },
      {
        "title": "Zadanie 2.2 – Wyznaczenie prędkości po sczepieniu z zasady zachowania pędu",
        "content": "W zderzeniu niesprężystym (kule trwale się łączą) całkowity pęd układu jest ściśle zachowany. Przyjmując oś $x$ skierowaną w prawo:\n$$p_{\\text{pocz}} = p_{\\text{końc}}$$\n$$m v_1 - m v_2 = (m + m) u$$\nPodstawiamy $v_1 = 2v_2$:\n$$m(2v_2) - m v_2 = 2m u \\implies m v_2 = 2m u \\implies u = \\frac{v_2}{2} = 0{,}5\\,v_2$$\nPołączone kule poruszają się w prawo ze wspólną prędkością $u = \\frac{v_2}{2}$."
      },
      {
        "title": "Zadanie 2.2 – Obliczenie utraconej części energii kinetycznej",
        "content": "1. Obliczamy całkowitą początkową energię kinetyczną obu kul:\n$$E_{k,\\text{pocz}} = \\frac{1}{2}m v_1^2 + \\frac{1}{2}m v_2^2 = \\frac{1}{2}m(2v_2)^2 + \\frac{1}{2}m v_2^2 = \\frac{4}{2}m v_2^2 + \\frac{1}{2}m v_2^2 = \\frac{5}{2}m v_2^2 = 2{,}5\\,m v_2^2$$\n2. Obliczamy energię kinetyczną połączonego układu po zderzeniu:\n$$E_{k,\\text{końc}} = \\frac{1}{2}(2m) u^2 = m u^2 = m \\left(\\frac{v_2}{2}\\right)^2 = \\frac{1}{4}m v_2^2 = 0{,}25\\,m v_2^2$$\n3. Obliczamy ubytek energii kinetycznej:\n$$\\Delta E_k = E_{k,\\text{pocz}} - E_{k,\\text{końc}} = 2{,}5\\,m v_2^2 - 0{,}25\\,m v_2^2 = 2{,}25\\,m v_2^2 = \\frac{9}{4}m v_2^2$$\n4. Wyznaczamy stosunek utraconej energii do energii początkowej:\n$$\\frac{\\Delta E_k}{E_{k,\\text{pocz}}} = \\frac{2{,}25\\,m v_2^2}{2{,}5\\,m v_2^2} = \\frac{2{,}25}{2{,}5} = \\frac{9}{10} = 0{,}90 = 90\\%$$"
      }
    ],
    "answer": "2.1: Poprawny rysunek B;\n2.2: Układ utracił $\\frac{9}{10}$ (czyli $0{,}90$ lub $90\\%$) początkowej energii kinetycznej.",
    "trap": "Nie wolno dodawać prędkości skalarnie przy wyznaczaniu pędu – kule poruszają się naprzeciwko siebie, więc pędy mają przeciwne zwroty: $p_{\\text{pocz}} = m(2v_2) - mv_2 = mv_2$, a nie $3mv_2$!"
  },

  "matura-cke-praca-2023-maj-zad-2": {
    "givens": "Jednakowe masy krążków: $m_1 = m_2 = m$, krążek K2 początkowo spoczywa w początku układu współrzędnych, brak oporów i tarcia, zderzenie idealnie sprężyste. Linia środków w chwili zderzenia równoległa do osi $x$.",
    "steps": [
      {
        "title": "Zadanie 2.1 – Wektory sił wzajemnego oddziaływania krążków",
        "content": "W chwili zderzenia brak tarcia sprawia, że siły kontaktowe działają ściśle w kierunku normalnym (prostopadłym do powierzchni styku), czyli wzdłuż prostej łączącej środki obu krążków (kierunek osi $x$):\n- Siła $\\vec{F}_{12}$ (działająca na krążek K1 od krążka K2): zaczepiona w środku krążka K1 i skierowana poziomo w lewo (wzdłuż osi $x$).\n- Siła $\\vec{F}_{21}$ (działająca na krążek K2 od krążka K1): zaczepiona w środku krążka K2 i skierowana poziomo w prawo (wzdłuż osi $x$).\n\nZgodnie z **III zasadą dynamiki Newtona** siły te leżą na jednej prostej, mają przeciwne zwroty oraz **równe wartości** ($|\\vec{F}_{12}| = |\\vec{F}_{21}|$). Wektory rysujemy poziomo o jednakowej długości (4 kratki według klucza CKE):\n<div class=\"chart-container-svg\"><img src=\"img/energy/2023-maj-z2-sily-rozwiazanie.png\" alt=\"Siły działające podczas zderzenia krążków według klucza CKE\" class=\"theory-img\" style=\"max-height:340px;display:block;margin:15px auto;\"></div>"
      },
      {
        "title": "Zadanie 2.2 – Rozkład ruchu na osie i wektory prędkości po zderzeniu",
        "content": "Rozkładamy ruch na kierunek prostopadły do powierzchni styku (oś $x$ – kierunek normalny) oraz kierunek styczny (oś $y$):\n1. **Wzdłuż osi $y$ (stycznej):** Nie działa żadna siła ($F_y = 0$). Zatem krążek K2 nie uzyskuje składowej prędkości pionowej ($v_{2y}' = 0$), a składowa pionowa prędkości krążka K1 pozostaje całkowicie niezmieniona:\n$$\\vec{v}_{1y}' = \\vec{v}_{1y} = -v_y$$\n2. **Wzdłuż osi $x$ (normalnej):** Zachodzi sprężyste zderzenie centralne ciał o identycznych masach. Ciała wymieniają się prędkościami w tej osi:\n- krążek K1 wyhamowuje do zera w osi $x$: $v_{1x}' = 0$,\n- spoczywający początkowo krążek K2 przejmuje całą składową prędkości poziomej: $v_{2x}' = v_x$.\n\n3. **Podsumowanie wektorów po zderzeniu:**\n- Krążek K1 ma wyłącznie prędkość pionową w dół: $\\vec{v}_1' = [0; -v_y]$,\n- Krążek K2 ma wyłącznie prędkość poziomą w prawo: $\\vec{v}_2' = [v_x; 0]$.\n\nWarunek ten idealnie spełnia **rysunek C**."
      }
    ],
    "answer": "2.1: Wektory sił $\\vec{F}_{12}$ i $\\vec{F}_{21}$ leżą na linii środków krążków (oś $x$), mają jednakowe długości i przeciwne zwroty;\n2.2: Poprawny rysunek C.",
    "trap": "Uderzany krążek K2 może uzyskać prędkość wyłącznie w kierunku działającej na niego siły normalnej (w prawo wzdłuż linii środków). Przy braku tarcia nie ma możliwości przekazania żadnego pędu w osi pionowej (stycznej)!"
  },

  "matura-cke-praca-informator-2025-zad-2": {
    "givens": "Masa kulki: $m = 0{,}250\\text{ kg}$, wysokość początkowa: $h = 1{,}80\\text{ m}$, prędkość początkowa: $v_0 = 3{,}20\\text{ m/s}$ (skierowana pionowo w dół), czas zderzenia z podłożem: $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, przyśpieszenie ziemskie: $g = 9{,}81\\text{ m/s}^2$, strata energii mechanicznej przy odbiciu: $25\\%$.",
    "steps": [
      {
        "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
        "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe w jednostkach SI:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
      },
      {
        "title": "Zadanie 2.2 – Wykazanie prędkości tuż przed uderzeniem z zasady zachowania energii",
        "content": "Przyjmując poziom zerowy energii potencjalnej na powierzchni podłoża ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2$$\nDzielimy obustronnie przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$\n*(co należało wykazać).*"
      },
      {
        "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża z II zasady dynamiki",
        "content": "1. **Prędkość kulki tuż po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii kinetycznej, więc po odbiciu zachowała $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}m v_2^2 = 0{,}75 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia kulki z podłożem:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (skierowana pionowo w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie siły i zmianie pędu):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250\\text{ kg} \\cdot (6{,}7495\\text{ m/s} + 5{,}845\\text{ m/s})}{0{,}005\\text{ s}} = 50 \\cdot 12{,}5945\\text{ N} \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45\\text{ N} + 629{,}7\\text{ N} \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
      }
    ],
    "answer": "2.1: Czas spadania wynosi $t \\approx 0{,}36\\text{ s}$ (dokładnie $0{,}362\\text{ s}$);\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: Siła reakcji podłoża wynosi $F_R \\approx 632\\text{ N}$.",
    "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki: $F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$."
  },

  "matura-cke-praca-informator-2025-zad-3": {
    "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), równe odstępy czasu $\\Delta t$, ruch w płaszczyźnie poziomej bez oporów ruchu.",
    "steps": [
      {
        "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu stroboskopowego",
        "content": "Ponieważ kolejne zdjęcia wykonywano w jednakowych odstępach czasu $\\Delta t$, przesunięcie wektora położenia na siatce między kolejnymi błyskami stroboskopu jest wprost proporcjonalne do wektora prędkości ciała. Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (punkty 1–3):**\nCiało A przemieszcza się poziomo w prawo o 18,5 kratki na krok: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (punkty 4–6):**\nCiało A przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{v}_A' = [8{,}5;\\; -7{,}5]$.\nCiało B przesuwa się o 8,0 kratek w prawo i 6,0 kratek w górę: $\\vec{v}_B' = [8{,}0;\\; +6{,}0]$."
      },
      {
        "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zasady zachowania pędu w osi Y",
        "content": "Układ jest izolowany, więc całkowity pęd jest zachowany niezależnie w osi $x$ oraz w osi $y$.\nPrzed zderzeniem pęd w osi pionowej $y$ wynosił zero ($p_{y,\\text{pocz}} = 0$). Z zasady zachowania pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot v_{Ay}' + m_B \\cdot v_{By}'$$\nPodstawiamy wartości składowych:\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50 \\implies m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n\n*(Sprawdzenie w osi $x$: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – zasada zachowania pędu w osi poziomej jest spełniona tożsamościowo).*"
      },
      {
        "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
        "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa energii kinetycznej przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał (z twierdzenia Pitagorasa):**\n$$v_A^2 = (18{,}5)^2 = 342{,}25$$\n$$(v_A')^2 = (v_{Ax}')^2 + (v_{Ay}')^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$(v_B')^2 = (v_{Bx}')^2 + (v_{By}')^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A (v_A')^2 + \\frac{1}{2} m_B (v_B')^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (stosunek energii wynosi $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii mechanicznej)."
      }
    ],
    "answer": "3.1: Masa ciała B wynosi $m_B = 250\\text{ g}$ ($0{,}250\\text{ kg}$);\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, energia po zderzeniu wynosi ok. $74\\%$ energii początkowej).",
    "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $v^2 = v_x^2 + v_y^2$. Nie wolno porównywać samych pojedynczych współrzędnych!"
  },

  "matura-cke-praca-informator-2023-zad-2": {
    "givens": "Masa kulki: $m = 0{,}250\\text{ kg}$, wysokość początkowa: $h = 1{,}80\\text{ m}$, prędkość początkowa: $v_0 = 3{,}20\\text{ m/s}$ (skierowana pionowo w dół), czas zderzenia z podłożem: $\\Delta t = 5{,}00 \\cdot 10^{-3}\\text{ s}$, przyśpieszenie ziemskie: $g = 9{,}81\\text{ m/s}^2$, strata energii mechanicznej przy odbiciu: $25\\%$.",
    "steps": [
      {
        "title": "Zadanie 2.1 – Obliczenie czasu spadania kulki",
        "content": "Kierujemy oś pionową w dół z początkiem na wysokości wyrzutu. Równanie drogi w ruchu jednostajnie przyspieszonym z prędkością początkową $v_0$:\n$$h = v_0 t + \\frac{1}{2}gt^2 \\implies \\frac{1}{2}gt^2 + v_0 t - h = 0$$\nPodstawiamy wartości liczbowe w jednostkach SI:\n$$4{,}905\\,t^2 + 3{,}20\\,t - 1{,}80 = 0$$\nObliczamy wyróżnik trójmianu kwadratowego $\\Delta$:\n$$\\Delta = (3{,}20)^2 - 4 \\cdot 4{,}905 \\cdot (-1{,}80) = 10{,}24 + 35{,}316 = 45{,}556$$\n$$\\sqrt{\\Delta} \\approx 6{,}7495$$\nWybieramy pierwiastek dodatni (czas $t > 0$):\n$$t = \\frac{-3{,}20 + 6{,}7495}{2 \\cdot 4{,}905} = \\frac{3{,}5495}{9{,}81} \\approx 0{,}362\\text{ s} \\approx 0{,}36\\text{ s}$$"
      },
      {
        "title": "Zadanie 2.2 – Wykazanie prędkości tuż przed uderzeniem z zasady zachowania energii",
        "content": "Przyjmując poziom zerowy energii potencjalnej na powierzchni podłoża ($h = 0$), całkowita energia mechaniczna kulki jest zachowana (brak oporów powietrza):\n$$E_{\\text{mech},\\text{góra}} = E_{\\text{mech},\\text{dół}}$$\n$$\\frac{1}{2}m v_0^2 + mgh = \\frac{1}{2}m v_1^2$$\nDzielimy obustronnie przez masę $m$ i mnożymy przez 2:\n$$v_1^2 = v_0^2 + 2gh \\implies v_1 = \\sqrt{v_0^2 + 2gh}$$\nPodstawiamy dane liczbowe:\n$$v_1 = \\sqrt{(3{,}20\\text{ m/s})^2 + 2 \\cdot 9{,}81\\text{ m/s}^2 \\cdot 1{,}80\\text{ m}} = \\sqrt{10{,}24 + 35{,}316} = \\sqrt{45{,}556} \\approx 6{,}7495\\text{ m/s} \\approx 6{,}75\\text{ m/s}$$\n*(co należało wykazać).*"
      },
      {
        "title": "Zadanie 2.3 – Prędkość po odbiciu i siła reakcji podłoża z II zasady dynamiki",
        "content": "1. **Prędkość kulki tuż po odbiciu $v_2$:**\nKulka straciła $25\\%$ energii kinetycznej, więc po odbiciu zachowała $75\\%$ energii początkowej:\n$$E_{k2} = 0{,}75\\,E_{k1} \\implies \\frac{1}{2}m v_2^2 = 0{,}75 \\cdot \\left(\\frac{1}{2}m v_1^2\\right) \\implies v_2 = \\sqrt{0{,}75}\\,v_1$$\n$$v_2 = \\sqrt{0{,}75} \\cdot 6{,}7495\\text{ m/s} \\approx 0{,}8660 \\cdot 6{,}7495\\text{ m/s} \\approx 5{,}845\\text{ m/s}$$\n\n2. **Dynamika zderzenia kulki z podłożem:**\nPodczas kontaktu z podłożem na kulkę działają dwie siły: siła reakcji podłoża $\\vec{F}_R$ (skierowana pionowo w górę) oraz grawitacja $m\\vec{g}$ (w dół). Siła wypadkowa wynosi:\n$$F_{\\text{wyp}} = F_R - mg$$\nZ II zasady dynamiki Newtona w postaci pędowej (twierdzenie o impulsie siły i zmianie pędu):\n$$F_{\\text{wyp}} \\cdot \\Delta t = \\Delta p = m v_2 - (-m v_1) = m(v_1 + v_2)$$\n$$(F_R - mg) \\cdot \\Delta t = m(v_1 + v_2) \\implies F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$$\nPodstawiamy wartości liczbowe:\n$$mg = 0{,}250\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 = 2{,}4525\\text{ N}$$\n$$\\frac{m(v_1 + v_2)}{\\Delta t} = \\frac{0{,}250\\text{ kg} \\cdot (6{,}7495\\text{ m/s} + 5{,}845\\text{ m/s})}{0{,}005\\text{ s}} = 50 \\cdot 12{,}5945\\text{ N} \\approx 629{,}7\\text{ N}$$\n$$F_R = 2{,}45\\text{ N} + 629{,}7\\text{ N} \\approx 632{,}2\\text{ N} \\approx 632\\text{ N}$$"
      }
    ],
    "answer": "2.1: Czas spadania wynosi $t \\approx 0{,}36\\text{ s}$ (dokładnie $0{,}362\\text{ s}$);\n2.2: Wykazano $v_1 = \\sqrt{v_0^2 + 2gh} \\approx 6{,}75\\text{ m/s}$;\n2.3: Siła reakcji podłoża wynosi $F_R \\approx 632\\text{ N}$.",
    "trap": "Siła reakcji podłoża $F_R$ to nie jest sama siła wypadkowa! Podłoże musi nie tylko wyhamować kulkę i odbić ją w górę, ale również zrównoważyć stale działający ciężar kulki: $F_R = mg + \\frac{m(v_1 + v_2)}{\\Delta t}$."
  },

  "matura-cke-praca-informator-2023-zad-3": {
    "givens": "Masa ciała A: $m_A = 200\\text{ g} = 0{,}20\\text{ kg}$, ciało B początkowo spoczywa ($B_1 - B_3$), równe odstępy czasu $\\Delta t$, ruch w płaszczyźnie poziomej bez oporów ruchu.",
    "steps": [
      {
        "title": "Zadanie 3.1 – Odczyt wektorów przesunięć z diagramu stroboskopowego",
        "content": "Ponieważ kolejne zdjęcia wykonywano w jednakowych odstępach czasu $\\Delta t$, przesunięcie wektora położenia na siatce między kolejnymi błyskami stroboskopu jest wprost proporcjonalne do wektora prędkości ciała. Przyjmujemy jednostkę umowną: 1 kratka na jeden odstęp czasu $\\Delta t$ ($[\\text{kr}/\\Delta t]$):\n- **Przed zderzeniem (punkty 1–3):**\nCiało A przemieszcza się poziomo w prawo o 18,5 kratki na krok: $\\vec{v}_A = [18{,}5;\\; 0]$.\nCiało B spoczywa w miejscu: $\\vec{v}_B = [0;\\; 0]$.\n- **Po zderzeniu (punkty 4–6):**\nCiało A przesuwa się o 8,5 kratki w prawo i 7,5 kratki w dół: $\\vec{v}_A' = [8{,}5;\\; -7{,}5]$.\nCiało B przesuwa się o 8,0 kratek w prawo i 6,0 kratek w górę: $\\vec{v}_B' = [8{,}0;\\; +6{,}0]$."
      },
      {
        "title": "Zadanie 3.1 – Wyznaczenie masy ciała B z zasady zachowania pędu w osi Y",
        "content": "Układ jest izolowany, więc całkowity pęd jest zachowany niezależnie w osi $x$ oraz w osi $y$.\nPrzed zderzeniem pęd w osi pionowej $y$ wynosił zero ($p_{y,\\text{pocz}} = 0$). Z zasady zachowania pędu dla osi $y$:\n$$p_{y,\\text{pocz}} = p_{y,\\text{końc}}$$\n$$0 = m_A \\cdot v_{Ay}' + m_B \\cdot v_{By}'$$\nPodstawiamy wartości składowych:\n$$0 = 0{,}20\\text{ kg} \\cdot (-7{,}5) + m_B \\cdot (+6{,}0)$$\n$$6{,}0 \\cdot m_B = 0{,}20 \\cdot 7{,}5 = 1{,}50 \\implies m_B = \\frac{1{,}50}{6{,}0} = 0{,}250\\text{ kg} = 250\\text{ g}$$\n\n*(Sprawdzenie w osi $x$: $p_{x,\\text{pocz}} = 0{,}20 \\cdot 18{,}5 = 3{,}70$; $p_{x,\\text{końc}} = 0{,}20 \\cdot 8{,}5 + 0{,}25 \\cdot 8{,}0 = 1{,}70 + 2{,}00 = 3{,}70$ – zasada zachowania pędu w osi poziomej jest spełniona tożsamościowo).*"
      },
      {
        "title": "Zadanie 3.2 – Ocena sprężystości zderzenia (bilans energii kinetycznej)",
        "content": "Zderzenie jest doskonale sprężyste wtedy i tylko wtedy, gdy całkowita energia kinetyczna układu po zderzeniu jest równa energii kinetycznej przed zderzeniem ($E_{k,\\text{końc}} = E_{k,\\text{pocz}}$).\n1. **Kwadraty wartości prędkości ciał (z twierdzenia Pitagorasa):**\n$$v_A^2 = (18{,}5)^2 = 342{,}25$$\n$$(v_A')^2 = (v_{Ax}')^2 + (v_{Ay}')^2 = (8{,}5)^2 + (-7{,}5)^2 = 72{,}25 + 56{,}25 = 128{,}5$$\n$$(v_B')^2 = (v_{Bx}')^2 + (v_{By}')^2 = (8{,}0)^2 + (6{,}0)^2 = 64{,}0 + 36{,}0 = 100{,}0$$\n2. **Energia kinetyczna przed zderzeniem (w jednostkach umownych):**\n$$E_{k,\\text{pocz}} = \\frac{1}{2} m_A v_A^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 342{,}25 = 34{,}225$$\n3. **Energia kinetyczna po zderzeniu:**\n$$E_{k,\\text{końc}} = \\frac{1}{2} m_A (v_A')^2 + \\frac{1}{2} m_B (v_B')^2 = \\frac{1}{2} \\cdot 0{,}20 \\cdot 128{,}5 + \\frac{1}{2} \\cdot 0{,}25 \\cdot 100{,}0$$\n$$E_{k,\\text{końc}} = 12{,}85 + 12{,}50 = 25{,}35$$\n4. **Wniosek:**\nPonieważ $E_{k,\\text{końc}} = 25{,}35 < E_{k,\\text{pocz}} = 34{,}225$, układ utracił około $26\\%$ początkowej energii kinetycznej (stosunek energii wynosi $\\frac{E_{k,\\text{końc}}}{E_{k,\\text{pocz}}} \\approx 0{,}74$).\nZderzenie **nie było doskonale sprężyste** (było zderzeniem niesprężystym ze stratami energii mechanicznej)."
      }
    ],
    "answer": "3.1: Masa ciała B wynosi $m_B = 250\\text{ g}$ ($0{,}250\\text{ kg}$);\n3.2: Zderzenie nie było doskonale sprężyste (część energii kinetycznej została rozproszona, energia po zderzeniu wynosi ok. $74\\%$ energii początkowej).",
    "trap": "Obliczając wartość prędkości pod kątem, należy pamiętać o zsumowaniu kwadratów obu składowych: $v^2 = v_x^2 + v_y^2$. Nie wolno porównywać samych pojedynczych współrzędnych!"
  }
};

// 1. Update subMatura.tasks
subMatura.tasks.forEach(t => {
  if (standardizedSolutions[t.id]) {
    const existingSource = t.solution ? t.solution.source : null;
    const newSol = Object.assign({}, standardizedSolutions[t.id]);
    if (existingSource) newSol.source = existingSource;
    t.solution = newSol;
    console.log('Updated subMatura task:', t.id);
  }
});

// 2. Update pracaSec.tasks (tasks 42..50)
if (pracaSec.tasks) {
  pracaSec.tasks.forEach(t => {
    if (standardizedSolutions[t.id]) {
      const existingSource = t.solution ? t.solution.source : null;
      const newSol = Object.assign({}, standardizedSolutions[t.id]);
      if (existingSource) newSol.source = existingSource;
      t.solution = newSol;
      console.log('Updated pracaSec flat task:', t.id);
    }
  });
}

// 3. Also update matura-cke-2026-maj-zad-2 in m-dynamika if present
const dynSec = courses['matura-fizyka'].sections.find(s => s.id === 'm-dynamika');
if (dynSec) {
  const dynTask = (dynSec.subchapters || []).flatMap(s => s.tasks || []).find(t => t.id === 'matura-cke-2026-maj-zad-2');
  if (dynTask) {
    const existingSource = dynTask.solution ? dynTask.solution.source : null;
    const newSol = Object.assign({}, standardizedSolutions['matura-cke-praca-2026-maj-zad-2']);
    if (existingSource) newSol.source = existingSource;
    dynTask.solution = newSol;
    console.log('Updated m-dynamika task: matura-cke-2026-maj-zad-2');
  }
}

// Save back to js/data-courses.js
const updatedContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', updatedContent, 'utf8');
console.log('Successfully written updated data-courses.js!');
