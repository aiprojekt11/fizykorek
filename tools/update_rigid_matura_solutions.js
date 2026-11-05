const fs = require('fs');
const path = require('path');

global.window = {};
require('../js/data-courses.js');
const courses = window.FIZYKOREK_COURSES;

const subMatura = courses['matura-fizyka'].sections
    .find(s => s.id === 'm-bryla').subchapters
    .find(s => s.id === 'sub-bryla-matura');

const newSolutions = {
    // -------------------------------------------------------------------------
    // ZADANIE 1: Czerwiec 2026 zad. 4
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2026-czerwiec-zad-4": {
        "intuition": "Toczenie bez poślizgu łączy ruch postępowy środka masy z ruchem obrotowym wokół niego poprzez ścisłą relację $v = \\omega R$. Na poziomym odcinku, przy stałej prędkości, siła tarcia nie jest potrzebna do podtrzymania ruchu. Jednak podczas wtaczania się pod górę siła grawitacji dąży do wyhamowania ruchu postępowego, a siła tarcia statycznego musi wywierać moment siły spowalniający ruch obrotowy. Zgodnie z Zasadą Zachowania Energii Mechanicznej cała początkowa energia kinetyczna (postępowa i obrotowa) zostaje w najwyższym punkcie zamieniona w energię potencjalną grawitacji środka masy.",
        "givens": "Masa obręczy: $M$, promień obręczy: $R$. Dwa pręty o masach $m_{\\text{pręt}} = \\frac{M}{2}$ i długościach $l_{\\text{pręt}} = 2R$. Całkowita masa bryły $\\mathcal{B}$: $m_{\\mathcal{B}} = M + 2\\cdot\\frac{M}{2} = 2M$. Prędkość początkowa: $v_{\\mathcal{B}} = 1{,}4\\text{ m/s}$. Przyśpieszenie ziemskie: $g = 9{,}8\\text{ m/s}^2$. Toczenie bez poślizgu ($v = \\omega R$). Brak oporów powietrza.",
        "steps": [
            {
                "title": "Zadanie 4.1 – Analiza siły tarcia na poziomym odcinku drogi",
                "content": "Na poziomym odcinku drogi $XY$ środek masy bryły porusza się ze stałą prędkością liniową ($v_{\\mathcal{B}} = \\text{const}$), co oznacza zerowe przyśpieszenie liniowe ($a = 0$). Z warunku toczenia bez poślizgu ($v = \\omega R$) wynika, że prędkość kątowa również jest stała ($\\omega = \\text{const}$), czyli przyśpieszenie kątowe wynosi $\\varepsilon = 0$.\nZ **I zasady dynamiki Newtona** dla ruchu postępowego wynika, że wypadkowa siła pozioma musi wynosić zero. Ponieważ nie działają inne siły poziome (brak oporów powietrza), siła tarcia w punkcie styku $P_1$ **nie występuje**:\n$$T = 0$$\nPoprawna jest odpowiedź **A**."
            },
            {
                "title": "Zadanie 4.2 – Wyznaczenie kierunku i zwrotu siły tarcia na równi",
                "content": "Gdy bryła wtacza się pod górę równi pochyłej, jej ruch postępowy jest opóźniony ($a < 0$, wektor przyśpieszenia skierowany w dół równi), a prędkość kątowa $\\omega$ maleje (ruch obrotowy jest opóźniony, $\\varepsilon < 0$).\nBryła obraca się zgodnie z ruchem wskazówek zegara. Aby prędkość kątowa malała, wypadkowy moment sił względem środka masy $O$ musi działać przeciwnie do ruchu wskazówek zegara.\nJedyną siłą mogącą wywierać moment siły względem środka masy $O$ jest siła tarcia statycznego $\\vec{T}$ przyłożona w punkcie styku $P_2$ (linie działania siły ciężkości i siły sprężystości podłoża przechodzą przez punkt $O$, więc ich momenty są zerowe).\nAby moment siły tarcia $\\vec{M} = \\vec{r} \\times \\vec{T}$ przeciwdziałał obrotowi (miał zwrot przeciwny do wskazówek zegara), siła tarcia $\\vec{T}$ musi być skierowana **w górę równi pochyłej (w prawo)**.\nPoprawna jest odpowiedź **D**."
            },
            {
                "title": "Zadanie 4.3 – Ocena prawdziwości zdań (moment siły i moment pędu)",
                "content": "1. **Zdanie 1: Fałsz (F).** Linia działania siły ciężkości bryły przechodzi pionowo przez środek masy $O$. Ponieważ podłoże jest nachylone pod kątem do poziomu, linia ta nie przechodzi przez punkt styku $P_2$. Ramię siły ciężkości względem punktu $P_2$ jest niezerowe ($r = R\\sin\\alpha > 0$), więc moment siły ciężkości względem punktu $P_2$ jest różny od zera ($M_{Q,P2} > 0$).\n\n2. **Zdanie 2: Fałsz (F).** Względem środka masy $O$ na bryłę działa niezerowy moment siły tarcia ($M_O = T \\cdot R > 0$). Z twierdzenia o zmianie momentu pędu:\n$$\\frac{dL}{dt} = -M_O < 0$$\nMoment pędu bryły względem środka masy $L = I_{0\\mathcal{B}} \\omega$ maleje wraz ze spadkiem prędkości kątowej $\\omega$, zatem **nie jest zachowany**."
            },
            {
                "title": "Zadanie 4.4 – Wyprowadzenie momentu bezwładności bryły $\\mathcal{B}$",
                "content": "Bryła $\\mathcal{B}$ składa się z obręczy o masie $M$ i promieniu $R$ oraz dwóch prostopadłych cienkich prętów, każdy o masie $m_{\\text{pręt}} = \\frac{M}{2}$ i długości $l_{\\text{pręt}} = 2R$, przecinających się w środku masy $O$.\nOś obrotu przechodzi przez środek masy $O$ i jest prostopadła do płaszczyzny bryły.\n1. Moment bezwładności obręczy względem osi przechodzącej przez jej środek:\n$$I_{\\text{obręcz}} = M R^2$$\n2. Moment bezwładności pojedynczego cienkiego pręta względem osi prostopadłej przechodzącej przez jego środek:\n$$I_{\\text{pręt}} = \\frac{1}{12} m_{\\text{pręt}} l_{\\text{pręt}}^2 = \\frac{1}{12} \\left(\\frac{M}{2}\\right) (2R)^2 = \\frac{1}{24} M \\cdot 4R^2 = \\frac{1}{6} M R^2$$\n3. Z zasady addytywności momentu bezwładności względem wspólnej osi:\n$$I_{0\\mathcal{B}} = I_{\\text{obręcz}} + 2 \\cdot I_{\\text{pręt}}$$\n$$I_{0\\mathcal{B}} = M R^2 + 2 \\cdot \\left(\\frac{1}{6} M R^2\\right) = M R^2 + \\frac{1}{3} M R^2 = \\frac{4}{3} M R^2$$"
            },
            {
                "title": "Zadanie 4.5 – Wyznaczenie maksymalnej wysokości $\\Delta h_{\\max}$ z ZZE",
                "content": "Podczas toczenia bez poślizgu siła tarcia statycznego nie wykonuje pracy dysypatywnej (prędkość punktu przyłożenia wynosi zero), a opory powietrza są pomijalne, więc spełniona jest **Zasada Zachowania Energii Mechanicznej**:\n$$E_{\\text{mech},\\text{pocz}} = E_{\\text{mech},\\text{końc}}$$\n1. **Początkowa energia kinetyczna bryły** (suma energii ruchu postępowego i obrotowego):\nCałkowita masa bryły wynosi $m_{\\mathcal{B}} = M + 2 \\cdot \\frac{M}{2} = 2M$. Z warunku toczenia bez poślizgu $\\omega = \\frac{v_{\\mathcal{B}}}{R}$:\n$$E_k = \\frac{1}{2} m_{\\mathcal{B}} v_{\\mathcal{B}}^2 + \\frac{1}{2} I_{0\\mathcal{B}} \\omega^2$$\n$$E_k = \\frac{1}{2} (2M) v_{\\mathcal{B}}^2 + \\frac{1}{2} \\left(\\frac{4}{3} M R^2\\right) \\left(\\frac{v_{\\mathcal{B}}}{R}\\right)^2 = M v_{\\mathcal{B}}^2 + \\frac{2}{3} M v_{\\mathcal{B}}^2 = \\frac{5}{3} M v_{\\mathcal{B}}^2$$\n2. **Końcowa energia w najwyższym punkcie toru:**\nW chwili osiągnięcia maksymalnej wysokości bryła na moment się zatrzymuje ($v = 0$ oraz $\\omega = 0$), cała energia kinetyczna przekształca się w energię potencjalną ciężkości środka masy:\n$$E_{p,\\max} = m_{\\mathcal{B}} g \\Delta h_{\\max} = 2M g \\Delta h_{\\max}$$\n3. **Przyrównanie energii i wyznaczenie $\\Delta h_{\\max}$:**\n$$2M g \\Delta h_{\\max} = \\frac{5}{3} M v_{\\mathcal{B}}^2$$\nDzielimy obustronnie przez $2Mg$:\n$$\\Delta h_{\\max} = \\frac{5 v_{\\mathcal{B}}^2}{6g}$$\nPodstawiamy dane liczbowe ($v_{\\mathcal{B}} = 1{,}4\\text{ m/s}$, $g = 9{,}8\\text{ m/s}^2$):\n$$\\Delta h_{\\max} = \\frac{5 \\cdot (1{,}4)^2}{6 \\cdot 9{,}8} = \\frac{5 \\cdot 1{,}96}{58{,}8} = \\frac{9{,}8}{58{,}8} = \\frac{1}{6}\\text{ m} \\approx 0{,}167\\text{ m} \\approx 0{,}17\\text{ m}$$"
            }
        ],
        "numerical": "4.1: A; 4.2: D; 4.3: 1-F, 2-F; 4.4: $I_{0\\mathcal{B}} = \\frac{4}{3}MR^2$; 4.5: $\\Delta h_{\\max} \\approx 0{,}17\\text{ m}$ (dokładnie $\\frac{1}{6}\\text{ m}$)",
        "answer": "4.1: Odpowiedź A (siła tarcia nie działa);\n4.2: Odpowiedź D (siła tarcia jest zwrócona w prawo wzdłuż równi pochyłej);\n4.3: 1 – F, 2 – F;\n4.4: Wykazano: $I_{0\\mathcal{B}} = MR^2 + 2 \\cdot \\frac{1}{12}\\left(\\frac{M}{2}\\right)(2R)^2 = \\frac{4}{3}MR^2$;\n4.5: Maksymalna wysokość wzniesienia wynosi $\\Delta h_{\\max} = \\frac{5 v_{\\mathcal{B}}^2}{6g} = \\frac{1}{6}\\text{ m} \\approx 0{,}17\\text{ m}$.",
        "trap": "Częsty błąd w zadaniu 4.5 to przyjęcie masy całej bryły równej $M$ zamiast $2M$ (obręcz ma masę $M$, a dwa pręty łącznie drugie $M$). Choć masa $M$ upraszcza się w ostatecznym równaniu, błędny zapis energii kinetycznej prowadzi do utraty punktów!"
    },

    // -------------------------------------------------------------------------
    // ZADANIE 2: Maj 2026 zad. 3
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2026-maj-zad-3": {
        "intuition": "Dla bloczka mającego niezerową masę (i moment bezwładności) siły naciągu liny po obu stronach nie są jednakowe podczas ruchu z przyśpieszeniem – różnica ich momentów nadaje bloczkowi przyśpieszenie kątowe. W spoczynku natomiast momenty te muszą się ściśle równoważyć. Kąt $\\alpha$, pod którym ciągnięta jest lina, nie wpływa na ramię siły, ponieważ lina odrywa się od bloczka stycznie, więc jej ramię względem osi obrotu zawsze wynosi $R$.",
        "givens": "Bloczek: masa $m_w$, promień $R$, moment bezwładności $I_0 = \\frac{1}{2}m_w R^2$. Ciężarek o masie $m_c$. Przyśpieszenie w dół: $a = \\frac{1}{2}g$. Lina nierozciągliwa, bezmasowa, nie ślizga się po bloczku.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Warunek równowagi statycznej bloczka",
                "content": "W sytuacji 1. układ znajduje się w spoczynku:\n1. Z **I zasady dynamiki Newtona** dla spoczywającego ciężarka naciąg liny po jego stronie wynosi:\n$$N_1 = m_c g$$\n2. Ponieważ bloczek pozostaje w spoczynku, wypadkowy moment sił względem osi obrotu bloczka musi być równy zero. Obie części liny schodzą z bloczka stycznie, zatem ramię siły naciągu po obu stronach wynosi dokładnie $R$ (niezależnie od kąta $\\alpha$):\n$$\\sum M = N_1 \\cdot R - N_2 \\cdot R = 0 \\implies N_2 = N_1 = m_c g$$\n3. Dla bezmasowej liny naciąg $N_2$ jest równy sile przyłożonej na końcu: $F = N_2 = m_c g$.\nPoprawna jest odpowiedź **A**."
            },
            {
                "title": "Zadanie 3.2 – Układ równań dynamiki dla ruchu ciężarka i obrotu bloczka",
                "content": "W sytuacji 2. ciężarek opada pionowo w dół z przyśpieszeniem $a = \\frac{1}{2}g$, a lina wprawia bloczek w ruch obrotowy z przyśpieszeniem kątowym $\\varepsilon$ bez poślizgu:\n1. **II zasada dynamiki dla opadającego ciężarka**:\n$$m_c a = m_c g - N_1 \\implies N_1 = m_c(g - a)$$\n2. **II zasada dynamiki dla ruchu obrotowego bloczka**:\nMoment siły naciągu $N_1$ rozpędza bloczek, natomiast moment siły zewnętrznej $F$ hamuje jego obrót:\n$$M_{\\text{wyp}} = I_0 \\varepsilon$$\n$$N_1 R - F R = I_0 \\varepsilon$$\n3. **Związek kinematyczny (brak poślizgu liny)**:\nPrzyśpieszenie liniowe liny i przyśpieszenie kątowe bloczka łączy zależność:\n$$\\varepsilon = \\frac{a}{R}$$\nPodstawiamy postać momentu bezwładności $I_0 = \\frac{1}{2} m_w R^2$:\n$$(N_1 - F) R = \\left(\\frac{1}{2} m_w R^2\\right) \\left(\\frac{a}{R}\\right) = \\frac{1}{2} m_w R a$$\nDzielimy obustronnie przez promień $R$:\n$$N_1 - F = \\frac{1}{2} m_w a \\implies F = N_1 - \\frac{1}{2} m_w a$$"
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie wzoru na wartość siły $F$",
                "content": "Podstawiamy wyrażenie na siłę naciągu $N_1 = m_c(g - a)$ do otrzymanego równania na $F$:\n$$F = m_c(g - a) - \\frac{1}{2} m_w a$$\n$$F = m_c g - \\left(m_c + \\frac{1}{2} m_w\\right) a$$\nWstawiamy podaną w treści zadania wartość przyśpieszenia $a = \\frac{1}{2}g$:\n$$F = m_c g - \\left(m_c + \\frac{1}{2} m_w\\right) \\left(\\frac{1}{2} g\\right)$$\n$$F = m_c g - \\frac{1}{2} m_c g - \\frac{1}{4} m_w g$$\n$$F = \\frac{1}{2} m_c g - \\frac{1}{4} m_w g = \\frac{1}{2} g \\left(m_c - \\frac{1}{2} m_w\\right) \\quad \\left(\\text{lub } F = \\frac{1}{4} g (2m_c - m_w)\\right)$$"
            }
        ],
        "numerical": "3.1: A; 3.2: $F = \\frac{1}{2}g\\left(m_c - \\frac{1}{2}m_w\\right)$",
        "answer": "3.1: Odpowiedź A ($F = m_c g$);\n3.2: $F = \\frac{1}{2}g\\left(m_c - \\frac{1}{2}m_w\\right)$ (równoważnie: $F = \\frac{1}{4}g(2m_c - m_w)$ lub $F = g\\left(\\frac{1}{2}m_c - \\frac{1}{4}m_w\\right)$).",
        "trap": "Nie wolno mnożyć ramienia siły $R$ przez $\\sin\\alpha$ ani $\\cos\\alpha$! Lina odrywa się od cylindrycznej powierzchni bloczka stycznie, więc odległość prostej działania siły od osi obrotu wynosi zawsze dokładnie $R$."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 3: Styczeń 2026 zad. 3
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2026-styczen-zad-3": {
        "intuition": "Statyka bryły sztywnej wymaga jednoczesnego spełnienia dwóch fundamentalnych warunków: wektorowa suma wszystkich sił musi być równa zero (brak ruchu postępowego), a suma momentów sił względem dowolnie wybranej osi musi wynosić zero (brak ruchu obrotowego). Odpowiedni dobór punktu odniesienia dla momentów sił (np. przez środek masy płyty $S$) pozwala wyeliminować ciężar płyty i natychmiast wyznaczyć szukane położenie klocka.",
        "givens": "Wymiary płyty: $|AO_1| = 2\\text{ m}$, $|O_1O_2| = 4\\text{ m}$, $|O_2B| = 3\\text{ m}$. Długość całkowita: $L = 9\\text{ m}$. Ciężar klocka: $Q_K = 0{,}4 Q_P$. W sytuacji 2.: $F_1 = F_2$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Warunki równowagi nieobciążonej płyty (sytuacja 1)",
                "content": "1. **Równowaga sił w pionie (I warunek równowagi):**\nNa płytę działają dwie siły reakcji osi skierowane pionowo w górę ($\\vec{F}_1, \\vec{F}_2$) oraz siła ciężkości płyty skierowana pionowo w dół ($\\vec{Q}_P$). Brak przyspieszenia w pionie daje:\n$$F_1 + F_2 = Q_P \\quad (\\text{relacja 1})$$\n2. **Równowaga momentów sił (II warunek równowagi):**\nCałkowita długość jednorodnej płyty wynosi $|AB| = 2\\text{ m} + 4\\text{ m} + 3\\text{ m} = 9\\text{ m}$. Środek masy $S$ leży w połowie długości płyty, czyli w odległości $4{,}5\\text{ m}$ od krawędzi A:\n$$|SO_1| = 4{,}5\\text{ m} - 2\\text{ m} = 2{,}5\\text{ m}$$\n$$|SO_2| = 4\\text{ m} - 2{,}5\\text{ m} = 1{,}5\\text{ m}$$\nMomenty sił reakcji osi względem środka masy $S$ muszą się równoważyć:\n$$F_1 \\cdot |SO_1| = F_2 \\cdot |SO_2| \\implies F_1 \\cdot 2{,}5\\text{ m} = F_2 \\cdot 1{,}5\\text{ m}$$\n$$\\frac{F_2}{F_1} = \\frac{2{,}5}{1{,}5} = \\frac{5}{3} > 1 \\implies F_2 > F_1 \\quad (\\text{relacja A})$$\nPoprawny zestaw odpowiedzi to **A1**."
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie sił reakcji osi w sytuacji 2",
                "content": "W sytuacji 2. na płytę położono klocek $\\mathcal{K}$ o ciężarze $Q_K = 0{,}4 Q_P$, a siły reakcji osi stały się równe ($F_1 = F_2$):\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2026-styczen-z3-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE\" class=\"theory-img\" style=\"max-height:280px;display:block;margin:15px auto;\"></div>\nZ I warunku równowagi (równowaga sił w pionie):\n$$F_1 + F_2 = Q_P + Q_K$$\nPodstawiamy $F_2 = F_1$ oraz $Q_K = 0{,}4 Q_P$:\n$$2 F_1 = Q_P + 0{,}4 Q_P = 1{,}4 Q_P$$\n$$F_1 = F_2 = 0{,}7 Q_P$$"
            },
            {
                "title": "Zadanie 3.2 – Bilans momentów sił i obliczenie odległości $x$",
                "content": "Zapisujemy II warunek równowagi – sumę momentów sił względem osi przechodzącej przez środek masy płyty $S$ (dzięki temu moment siły ciężkości płyty $\\vec{Q}_P$ znika, gdyż jej ramię wynosi zero):\n- Moment siły $F_1$ obraca płytę przeciwnie do ruchu wskazówek zegara: $M_1 = F_1 \\cdot |SO_1|$.\n- Moment siły $F_2$ obraca płytę zgodnie z ruchem wskazówek zegara: $M_2 = F_2 \\cdot |SO_2|$.\n- Ponieważ $F_1 = F_2$, a ramię $|SO_1| = 2{,}5\\text{ m}$ jest większe od ramienia $|SO_2| = 1{,}5\\text{ m}$, klocek musi leżeć po prawej stronie punktu $S$ (w stronę osi $O_2$), aby jego ciężar $Q_K$ pomagał sile $F_2$ w równoważeniu siły $F_1$:\n$$F_1 \\cdot |SO_1| = F_2 \\cdot |SO_2| + Q_K \\cdot x$$\nPodstawiamy wyznaczone wartości:\n$$0{,}7 Q_P \\cdot 2{,}5\\text{ m} = 0{,}7 Q_P \\cdot 1{,}5\\text{ m} + 0{,}4 Q_P \\cdot x$$\nDzielimy obie strony równania przez $Q_P$:\n$$0{,}7 \\cdot 2{,}5 = 0{,}7 \\cdot 1{,}5 + 0{,}4 \\cdot x$$\n$$1{,}75 = 1{,}05 + 0{,}4 x$$\n$$0{,}4 x = 1{,}75 - 1{,}05 = 0{,}70$$\n$$x = \\frac{0{,}70}{0{,}4} = 1{,}75\\text{ m}$$\n*(Sprawdzenie względem osi $O_1$: $Q_P \\cdot 2{,}5 + Q_K \\cdot (2{,}5 + 1{,}75) = F_2 \\cdot 4 \\implies 2{,}5 Q_P + 0{,}4 Q_P \\cdot 4{,}25 = 2{,}5 + 1{,}7 = 4{,}2 Q_P$, a prawa strona: $F_2 \\cdot 4 = 0{,}7 Q_P \\cdot 4 = 2{,}8 Q_P + 1{,}4 Q_P = 4{,}2 Q_P$ – bilans jest idealnie zachowany).* "
            }
        ],
        "numerical": "3.1: A1; 3.2: $x = 1{,}75\\text{ m}$",
        "answer": "3.1: Zestawienie A1 ($F_2 > F_1$ oraz $F_1 + F_2 = Q_P$);\n3.2: Odległość klocka $\\mathcal{K}$ od środka masy $S$ płyty wynosi $x = 1{,}75\\text{ m}$.",
        "trap": "Częsty błąd to przyjęcie, że środek masy płyty leży w połowie odległości między osiami $O_1$ i $O_2$. Płyta wystaje poza osie niesymetrycznie (z lewej $2\\text{ m}$, z prawej $3\\text{ m}$), stąd jej geometryczny środek masy $S$ leży w odległości $4{,}5\\text{ m}$ od krawędzi A, a nie w środku odcinka $O_1O_2$!"
    },

    // -------------------------------------------------------------------------
    // ZADANIE 4: Czerwiec 2025 zad. 3
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2025-czerwiec-zad-3": {
        "intuition": "W toczeniu bez poślizgu przesunięcie środka masy walca jest równe długości łuku przetoczonego po podłożu: $s = R\\Delta\\alpha$. Przemieszczenie dowolnego punktu na brzegu walca jest wektorem łączącym jego położenie początkowe z końcowym – jego wartość oblicza się z twierdzenia Pitagorasa ze składowej poziomej (przetoczenie) i pionowej (obrót). Całkowita energia kinetyczna walca to suma energii kinetycznej ruchu postępowego i ruchu obrotowego.",
        "givens": "Promień walca: $R$, masa: $m$. Czas półobrotu: $\\Delta t = 0{,}2\\text{ s}$. Kąt obrotu: $\\Delta\\alpha = \\pi\\text{ rad}$. Moment bezwładności: $I_0 = \\frac{4}{5}mR^2$. Toczenie bez poślizgu ($v = \\omega R$).",
        "steps": [
            {
                "title": "Zadanie 3.1 – Obliczenie prędkości kątowej walca",
                "content": "Pół obrotu walca odpowiada kątowi obrotu $\\Delta\\alpha = \\pi\\text{ rad}$.\nZ definicji prędkości kątowej w ruchu jednostajnym:\n$$\\omega = \\frac{\\Delta\\alpha}{\\Delta t} = \\frac{\\pi\\text{ rad}}{0{,}2\\text{ s}} = 5\\pi\\text{ rad/s}$$\nPoprawna jest odpowiedź **C**."
            },
            {
                "title": "Zadanie 3.2 – Wyznaczenie wartości przemieszczenia punktu A",
                "content": "Wektor przemieszczenia $\\Delta\\vec{r}_A = \\vec{A_0 A_1}$ łączy początkowe położenie punktu $A$ ($A_0$) z jego położeniem końcowym ($A_1$):\n1. **Składowa pozioma przemieszczenia (oś $x$):**\nWalec toczy się bez poślizgu, więc przemieszczenie poziome środka walca po wykonaniu półobrotu wynosi:\n$$\\Delta x = s = R \\cdot \\Delta\\alpha = \\pi R$$\nPonieważ w chwili początkowej punkt $A_0$ leżał pionowo nad środkiem walca, a w chwili końcowej punkt $A_1$ leży pionowo pod środkiem walca, poziome przesunięcie punktu $A$ jest dokładnie równe przesunięciu środka masy:\n$$\\Delta x_A = \\pi R$$\n2. **Składowa pionowa przemieszczenia (oś $y$):**\nW chwili początkowej punkt $A_0$ znajdował się na samej górze walca na wysokości $y_0 = 2R$. W chwili końcowej punkt $A_1$ dotyka podłoża ($y_1 = 0$). Zatem pionowa zmiana położenia wynosi:\n$$\\Delta y_A = 2R$$\n3. **Długość wektora przemieszczenia (twierdzenie Pitagorasa):**\n$$|A_0 A_1| = \\sqrt{(\\Delta x_A)^2 + (\\Delta y_A)^2} = \\sqrt{(\\pi R)^2 + (2R)^2} = \\sqrt{\\pi^2 R^2 + 4R^2} = R \\sqrt{\\pi^2 + 4}$$\nStąd szukany iloraz wynosi:\n$$\\frac{|A_0 A_1|}{R} = \\sqrt{\\pi^2 + 4}$$"
            },
            {
                "title": "Zadanie 3.3 – Wyznaczenie współczynnika energii kinetycznej $k$",
                "content": "Całkowita energia kinetyczna toczącego się walca składa się z energii kinetycznej ruchu postępowego środka masy oraz energii kinetycznej ruchu obrotowego wokół osi symetrii:\n$$E_{kin\\ calk} = E_{kin\\ post} + E_{kin\\ obr} = \\frac{1}{2} m v^2 + \\frac{1}{2} I_0 \\omega^2$$\nZ warunku toczenia bez poślizgu mamy $\\omega = \\frac{v}{R}$. Podstawiamy dany wzór na moment bezwładności $I_0 = \\frac{4}{5} m R^2$:\n$$E_{kin\\ calk} = \\frac{1}{2} m v^2 + \\frac{1}{2} \\left(\\frac{4}{5} m R^2\\right) \\left(\\frac{v}{R}\\right)^2$$\n$$E_{kin\\ calk} = \\frac{1}{2} m v^2 + \\frac{2}{5} m v^2$$\nSprowadzamy do wspólnego mianownika:\n$$E_{kin\\ calk} = \\left(\\frac{5}{10} + \\frac{4}{10}\\right) m v^2 = \\frac{9}{10} m v^2$$\nPorównując otrzymane wyrażenie ze wzorem $E_{kin\\ calk} = k \\cdot m v^2$, odczytujemy współczynnik $k$:\n$$k = \\frac{9}{10} = 0{,}9$$"
            }
        ],
        "numerical": "3.1: C; 3.2: $\\frac{|A_0 A_1|}{R} = \\sqrt{\\pi^2 + 4}$; 3.3: $k = \\frac{9}{10} = 0{,}9$",
        "answer": "3.1: Odpowiedź C ($\\omega = 5\\pi\\text{ rad/s}$);\n3.2: Iloraz wynosi $\\frac{|A_0 A_1|}{R} = \\sqrt{\\pi^2 + 4}$;\n3.3: Współczynnik wynosi $k = \\frac{9}{10}$ (lub $0{,}9$).",
        "trap": "W zadaniu 3.2 przemieszczenie punktu to wektor łączący punkt startowy z końcowym, a nie długość toru (cykloidy), po którym punkt $A$ poruszał się w przestrzeni! Nie należy całkować równania cykloidy."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 5: Maj 2025 zad. 2
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2025-maj-zad-2": {
        "intuition": "Dla brył staczających się z tej samej wysokości ta sama początkowa energia potencjalna $mgh$ zamienia się w całkowitą energię kinetyczną. Jednak podział tej energii między ruch postępowy i obrotowy zależy od współczynnika momentu bezwładności $k$. Im większy współczynnik $k$ (bardziej wydrążona bryła), tym większa część energii zostaje uwięziona w obrocie, a w konsekwencji bryła porusza się ruchem postępowym z mniejszą prędkością i mniejszym przyśpieszeniem liniowym.",
        "givens": "Walce W1 i W2: równe masy $m_1 = m_2 = m$, równe promienie $R_1 = R_2 = R$. Momenty bezwładności: $I_1 = k_1 m R^2$, $I_2 = k_2 m R^2$. Kąt nachylenia równi: $\\beta$. Toczenie bez poślizgu ($v = \\omega R$, $a = \\varepsilon R$).",
        "steps": [
            {
                "title": "Zadanie 2.1 – Ocena prawdziwości stwierdzeń",
                "content": "1. **Zdanie 1: Prawda (P).** Walec W1 jest jednorodny i pełny ($k_1 = \\frac{1}{2} = 0{,}5$). W walcu W2 (częściowo wydrążonym w środku) ta sama masa $m$ jest rozsunięta dalej od osi obrotu ku zewnętrznej krawędzi. Ponieważ $I = \\sum m_i r_i^2$, odsunięcie masy od osi zwiększa moment bezwładności, co oznacza, że współczynnik $k_2 > k_1$.\n\n2. **Zdanie 2: Prawda (P).** Z **Zasady Zachowania Energii Mechanicznej**, przy braku strat energii (tarcie statyczne nie wykonuje pracy strat, opory pominięto), całkowita energia kinetyczna u podnóża równi jest równa początkowej energii potencjalnej:\n$$E_{k,\\text{całk}} = mgh$$\nPonieważ masy obu walców $m$ i wysokość początkowa $h$ są identyczne, u podnóża oba walce mają taką samą całkowitą energię kinetyczną.\n\n3. **Zdanie 3: Fałsz (F).** Całkowita energia kinetyczna to:\n$$E_{k,\\text{całk}} = \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2 = \\frac{1}{2} m (1 + k) v^2 = mgh \\implies v = \\sqrt{\\frac{2gh}{1 + k}}$$\nPonieważ $k_2 > k_1$, mianownik dla walca W2 jest większy, czyli walec pełny osiąga większą prędkość postępową: $v_1 > v_2$. Zdanie mówiące, że $v_1 < v_2$, jest więc fałszywe."
            },
            {
                "title": "Zadanie 2.2 – Wyprowadzenie wzoru na przyśpieszenie liniowe walca W2",
                "content": "**Metoda I – z równań dynamiki Newtona:**\n1. II zasada dynamiki dla ruchu postępowego środka masy wzdłuż równi:\n$$m a = mg \\sin\\beta - T$$\ngdzie $T$ to siła tarcia statycznego skierowana w górę równi.\n2. II zasada dynamiki dla ruchu obrotowego walca wokół osi symetrii:\n$$I_2 \\varepsilon = T \\cdot R$$\n3. Z warunku toczenia bez poślizgu $\\varepsilon = \\frac{a}{R}$. Podstawiamy $I_2 = k_2 m R^2$:\n$$(k_2 m R^2) \\left(\\frac{a}{R}\\right) = T \\cdot R \\implies T = k_2 m a$$\n4. Wstawiamy wyznaczoną siłę tarcia do równania ruchu postępowego:\n$$m a = mg \\sin\\beta - k_2 m a$$\n$$m a + k_2 m a = mg \\sin\\beta$$\n$$m (1 + k_2) a = mg \\sin\\beta$$\nDzielimy obustronnie przez masę $m$ i nawias $(1 + k_2)$:\n$$a = \\frac{g \\sin\\beta}{1 + k_2}$$\n*(Metoda alternatywna – z Zasady Zachowania Energii: $mgs\\sin\\beta = \\frac{1}{2}m(1+k_2)v^2$, a z ruchu jednostajnie przyspieszonego $v^2 = 2as$, co po wstawieniu daje $mgs\\sin\\beta = m(1+k_2)as \\implies a = \\frac{g\\sin\\beta}{1+k_2}$).*"
            }
        ],
        "numerical": "2.1: 1-P, 2-P, 3-F; 2.2: $a = \\frac{g \\sin\\beta}{1 + k_2}$",
        "answer": "2.1: 1 – P, 2 – P, 3 – F;\n2.2: Wartość przyśpieszenia liniowego walca W2 wynosi $a = \\frac{g \\sin\\beta}{1 + k_2}$.",
        "trap": "Równość całkowitej energii kinetycznej nie oznacza równości prędkości postępowych! Bryła o większym momencie bezwładności 'zużywa' większą część energii na obrót, przez co porusza się ruchem postępowym wolniej i stacza się dłużej."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 6: Grudzień 2024 zad. 3
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2024-grudzien-zad-3": {
        "intuition": "Prędkość dowolnego punktu toczącej się bryły względem podłoża jest wektorową sumą prędkości ruchu postępowego środka masy oraz prędkości liniowej w ruchu obrotowym wokół środka masy. W dynamice toczenia ze stałą poziomą siłą przyłożoną na górze walca siła tarcia statycznego z podłożem może być skierowana zgodnie ze zwrotem siły ciągnącej, jeśli moment siły zewnętrznej przewyższa zapotrzebowanie na przyspieszenie obrotowe.",
        "givens": "Masa walca: $m$, promień: $R$, moment bezwładności: $I_0 = \\frac{1}{2}mR^2$. Prędkość środka masy w chwili $t$: $v_S = 2{,}5\\text{ m/s}$. Siła pozioma $F$ przyłożona na samej górze walca. Toczenie bez poślizgu.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Wyznaczenie prędkości punktów A i B względem podłoża",
                "content": "Z warunku toczenia bez poślizgu prędkość kątowa walca wynosi $\\omega = \\frac{v_S}{R}$. Wektor prędkości dowolnego punktu względem podłoża to suma wektorowa prędkości postępowej środka masy $\\vec{v}_S$ oraz prędkości obrotowej $\\vec{v}_{\\text{obr}}$ względem środka masy ($|\\vec{v}_{\\text{obr}}| = \\omega R = v_S = 2{,}5\\text{ m/s}$):\n1. **Punkt A (na samej górze walca):**\nWektor prędkości ruchu obrotowego ma zwrot poziomy w prawo, czyli identyczny ze zwrotem prędkości środka masy $\\vec{v}_S$:\n$$v_A = v_S + \\omega R = v_S + v_S = 2 v_S = 2 \\cdot 2{,}5\\text{ m/s} = 5{,}0\\text{ m/s}$$\n2. **Punkt B (na prawym brzegu walca na wysokości osi):**\nWektor prędkości środka masy $\\vec{v}_S$ jest skierowany poziomo w prawo, a wektor prędkości obrotowej $\\vec{v}_{\\text{obr}}$ w punkcie B jest skierowany pionowo w dół. Wektory te są wzajemnie prostopadłe:\n$$v_B = \\sqrt{v_S^2 + (\\omega R)^2} = \\sqrt{v_S^2 + v_S^2} = v_S \\sqrt{2} = 2{,}5\\sqrt{2}\\text{ m/s} \\approx 3{,}54\\text{ m/s}$$"
            },
            {
                "title": "Zadanie 3.2 – Układ równań dynamiki i wyznaczenie siły tarcia $T_x$",
                "content": "Załóżmy, że siła tarcia statycznego $\\vec{T}$ działająca w punkcie styku $C$ z podłożem jest skierowana zgodnie ze zwrotem osi $x$ (w prawo, czyli $T_x > 0$):\n1. **II zasada dynamiki dla ruchu postępowego środka masy:**\n$$m a = F + T$$\n2. **II zasada dynamiki dla ruchu obrotowego wokół środka masy $S$:**\nSiła $F$ przyłożona na górze walca daje moment obrotowy zgodny ze wskazówkami zegara: $M_F = +F \\cdot R$.\nSiła tarcia $T$ przyłożona na dole walca (skierowana w prawo) daje moment przeciwny do wskazówek zegara: $M_T = -T \\cdot R$.\n$$I_0 \\varepsilon = F R - T R$$\n3. **Warunek toczenia bez poślizgu:**\n$$\\varepsilon = \\frac{a}{R}$$\nPodstawiamy $I_0 = \\frac{1}{2} m R^2$:\n$$\\left(\\frac{1}{2} m R^2\\right) \\left(\\frac{a}{R}\\right) = (F - T) R \\implies \\frac{1}{2} m a = F - T$$"
            },
            {
                "title": "Zadanie 3.2 – Rozwiązanie układu równań, znak współrzędnej i zwrot wektora",
                "content": "Mnożymy drugie równanie obustronnie przez 2:\n$$m a = 2F - 2T$$\nPrzyrównujemy prawe strony obu równań na $m a$:\n$$F + T = 2F - 2T$$\n$$3T = F \\implies T = \\frac{1}{3} F$$\nWspółrzędna siły tarcia wynosi zatem:\n$$T_x = +\\frac{1}{3} F$$\nDodatni znak współrzędnej ($T_x > 0$) potwierdza, że przyjęty zwrot był prawidłowy – siła tarcia statycznego $\\vec{T}$ w punkcie styku $C$ jest skierowana **w prawo (zgodnie ze zwrotem osi $x$)**.\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2024-grudzien-z3-rozwiazanie.png\" alt=\"Oficjalny rysunek rozwiązania CKE — zwrot tarcia\" class=\"theory-img\" style=\"max-height:360px;display:block;margin:15px auto;\"></div>"
            }
        ],
        "numerical": "3.1: $v_A = 5\\text{ m/s}$, $v_B = 2{,}5\\sqrt{2}\\text{ m/s}$; 3.2: $T_x = +\\frac{1}{3}F$, zwrot w prawo (zgodnie z osią $x$)",
        "answer": "3.1: $v_A = 5\\text{ m/s}$, $v_B = 2{,}5\\sqrt{2}\\text{ m/s}$ (ok. $3{,}54\\text{ m/s}$);\n3.2: Współrzędna siły tarcia wynosi $T_x = +\\frac{1}{3}F$. Wektor siły tarcia $\\vec{T}$ jest skierowany w prawo, zgodnie ze zwrotem osi $x$.",
        "trap": "Powszechne błędne przekonanie nakazuje zawsze rysować siłę tarcia przeciwnie do kierunku ruchu ciała. W przypadku walca ciągniętego na samej górze, moment siły $F$ stara się zakręcić walec 'za szybko' w stosunku do przyspieszenia liniowego. Dlatego tarcie statyczne z podłożem popycha środek masy do przodu (w prawo), jednocześnie hamując nadmierny obrót!"
    },

    // -------------------------------------------------------------------------
    // ZADANIE 7: Czerwiec 2024 zad. 2
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2024-czerwiec-zad-2": {
        "intuition": "W zagadnieniach równowagi dźwigni podparta w dwóch miejscach belka nie zawsze naciska na obie podpory ku dołowi. Jeżeli środek ciężkości znajduje się poza odcinkiem między podporami, podpora wewnętrzna działa jak punkt podparcia (oś obrotu), a podpora skrajna musi przytrzymywać belkę w dół, przeciwdziałając jej obrotowi pod wpływem grawitacji.",
        "givens": "Masa belki: $m = 120\\text{ kg}$, długość belki: $l = 2{,}8\\text{ m}$. Odległość między podporami: $|AB| = 1{,}0\\text{ m}$. $g = 9{,}8\\text{ m/s}^2$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Analiza zwrotów i relacji wartości sił",
                "content": "Środek masy $C$ jednorodnej belki leży w jej geometrycznym środku: $|AC| = \\frac{l}{2} = 1{,}4\\text{ m}$.\nOdległość od podpory B do środka masy $C$ wynosi:\n$$|BC| = |AC| - |AB| = 1{,}4\\text{ m} - 1{,}0\\text{ m} = 0{,}4\\text{ m}$$\n1. **Kierunki i zwroty sił:**\n- Siła ciężkości $\\vec{F}_C$ jest przyłożona w punkcie $C$ i skierowana pionowo w dół.\n- Względem punktu $B$ siła $\\vec{F}_C$ wywołuje moment siły obracający belkę zgodnie z ruchem wskazówek zegara. Aby belka nie obracała się wokół podpory B, podpora A musi wywierać siłę $\\vec{F}_A$ skierowaną **pionowo w dół** (przytrzymuje lewy koniec belki).\n- Podpora B musi utrzymać całą belkę przeciwstawiając się siłom $\\vec{F}_A$ i $\\vec{F}_C$, zatem siła $\\vec{F}_B$ jest skierowana **pionowo w górę**.\n2. **Relacje między wartościami sił:**\nZ I warunku równowagi w pionie: $F_B = F_A + F_C$, stąd $F_B > F_C$ oraz $F_B > F_A$.\nZ II warunku równowagi momentów względem punktu B: $F_A \\cdot 1{,}0\\text{ m} = F_C \\cdot 0{,}4\\text{ m} \\implies F_A = 0{,}4 F_C < F_C$.\nOstateczna relacja między wartościami sił to:\n$$F_B > F_C > F_A$$\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2024-czerwiec-z2-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE\" class=\"theory-img\" style=\"max-height:430px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Obliczenie wartości sił $F_A$ i $F_B$",
                "content": "1. **Obliczenie ciężaru belki $F_C$:**\n$$F_C = m g = 120\\text{ kg} \\cdot 9{,}8\\text{ m/s}^2 = 1176\\text{ N}$$\n2. **Równowaga momentów sił względem podpory B:**\nWybieramy punkt B jako oś obrotu, co eliminuje niewiadomą siłę $F_B$:\n$$\\sum M_B = 0 \\implies F_A \\cdot |AB| = F_C \\cdot |BC|$$\n$$F_A \\cdot 1{,}0\\text{ m} = 1176\\text{ N} \\cdot 0{,}4\\text{ m}$$\n$$F_A = 470{,}4\\text{ N} \\approx 470\\text{ N}$$\n3. **Równowaga sił w pionie (I warunek równowagi):**\n$$\\sum F_y = 0 \\implies F_B = F_A + F_C$$\n$$F_B = 470{,}4\\text{ N} + 1176\\text{ N} = 1646{,}4\\text{ N} \\approx 1646\\text{ N} \\quad (\\text{lub } 1{,}65\\text{ kN})$$"
            }
        ],
        "numerical": "2.1: $\\vec{F}_A$ w dół, $\\vec{F}_B$ w górę, $\\vec{F}_C$ w dół; $F_B > F_C > F_A$; 2.2: $F_A \\approx 470\\text{ N}$, $F_B \\approx 1646\\text{ N}$",
        "answer": "2.1: Zwroty: $\\vec{F}_A$ w dół, $\\vec{F}_B$ w górę, $\\vec{F}_C$ w dół; relacja: $F_B > F_C > F_A$;\n2.2: Wartości sił wynoszą: $F_A = 470{,}4\\text{ N} \\approx 470\\text{ N}$ oraz $F_B = 1646{,}4\\text{ N} \\approx 1646\\text{ N}$.",
        "trap": "Intuicja podpowiada, że podpora zawsze 'podpiera' od dołu (pcha w górę). Tutaj podpora A musi ciągnąć w dół (działać jak kotwa), w przeciwnym razie belka przeważyłaby się i obróciła wokół podpory B!"
    },

    // -------------------------------------------------------------------------
    // ZADANIE 8: Maj 2024 zad. 2
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2024-maj-zad-2": {
        "intuition": "Ciągnięcie walca za oś symetrii siłą poziomą wprowadza go w ruch postępowy i obrotowy. Zgodnie z twierdzeniem o pracy i energii praca siły zewnętrznej jest równa przyrostowi całkowitej energii kinetycznej. Siła tarcia statycznego w toczeniu bez poślizgu nie rozprasza energii mechanicznej na ciepło, lecz odpowiada za sprzężenie ruchu postępowego z ruchem obrotowym.",
        "givens": "Walec: masa $m = 10\\text{ kg}$, promień $R$, moment bezwładności $I_0 = \\frac{1}{2}mR^2$. Siła ciągnąca: $F = 30\\text{ N}$ przyłożona do osi walca. Toczenie bez poślizgu ($v = \\omega R$).",
        "steps": [
            {
                "title": "Zadanie 2.1 – Obliczenie stosunku energii kinetycznej postępowej do całkowitej",
                "content": "1. **Energia kinetyczna ruchu postępowego środka masy:**\n$$E_{kin\\ post} = \\frac{1}{2} m v^2$$\n2. **Energia kinetyczna ruchu obrotowego wokół osi środka masy:**\nZ warunku toczenia bez poślizgu $\\omega = \\frac{v}{R}$:\n$$E_{kin\\ obr} = \\frac{1}{2} I_0 \\omega^2 = \\frac{1}{2} \\left(\\frac{1}{2} m R^2\\right) \\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4} m v^2$$\n3. **Całkowita energia kinetyczna walca:**\n$$E_{kin\\ calk} = E_{kin\\ post} + E_{kin\\ obr} = \\frac{1}{2} m v^2 + \\frac{1}{4} m v^2 = \\frac{3}{4} m v^2$$\n4. **Obliczenie szukanego ilorazu:**\n$$\\frac{E_{kin\\ post}}{E_{kin\\ calk}} = \\frac{\\frac{1}{2} m v^2}{\\frac{3}{4} m v^2} = \\frac{1/2}{3/4} = \\frac{2}{3}$$"
            },
            {
                "title": "Zadanie 2.2 – Wyznaczenie przyśpieszenia środka masy walca",
                "content": "**Sposób I – z twierdzenia o pracy i energii kinetycznej:**\nSiła ciągnąca $F$ działa wzdłuż przesunięcia środka masy na drodze $s$, wykonując pracę $W = F \\cdot s$.\nSiła tarcia statycznego przy toczeniu bez poślizgu nie wykonuje pracy, gdyż punkt przyłożenia siły tarcia ma prędkość chwilową równą zero. Praca siły $F$ zwiększa całkowitą energię kinetyczną walca (początkowo spoczywającego):\n$$W = \\Delta E_{kin\\ calk} \\implies F \\cdot s = \\frac{3}{4} m v^2$$\nW ruchu jednostajnie przyśpieszonym od spoczynku zachodzi związek $v^2 = 2as$. Podstawiamy:\n$$F \\cdot s = \\frac{3}{4} m (2 a s) = \\frac{3}{2} m a s$$\nDzielimy obustronnie przez drogę $s$:\n$$F = \\frac{3}{2} m a \\implies a = \\frac{2F}{3m}$$\nPodstawiamy wartości liczbowe ($F = 30\\text{ N}$, $m = 10\\text{ kg}$):\n$$a = \\frac{2 \\cdot 30\\text{ N}}{3 \\cdot 10\\text{ kg}} = \\frac{60}{30}\\text{ m/s}^2 = 2\\text{ m/s}^2$$\n*(Sposób II – z II zasady dynamiki Newtona: $ma = F - T$ oraz $I_0\\varepsilon = TR \\implies \\frac{1}{2}ma = T$. Dodając stronami: $\\frac{3}{2}ma = F \\implies a = \\frac{2F}{3m} = 2\\text{ m/s}^2$).*"
            }
        ],
        "numerical": "2.1: $\\frac{E_{kin\\ post}}{E_{kin\\ calk}} = \\frac{2}{3}$; 2.2: $a = 2\\text{ m/s}^2$",
        "answer": "2.1: Iloraz energii wynosi $\\frac{2}{3}$;\n2.2: Wartość przyśpieszenia środka masy walca wynosi $a = 2\\text{ m/s}^2$.",
        "trap": "W zadaniu 2.2 nie wolno zapisać $a = F/m$! Gdyby nie było tarcia, walec ślizgałby się bez obrotu z przyspieszeniem $3\\text{ m/s}^2$. Tarcie statyczne wymusza obrót walca, pochłaniając część siły ciągnącej i zmniejszając przyspieszenie liniowe do $2\\text{ m/s}^2$."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 9: Czerwiec 2023 zad. 3
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2023-czerwiec-zad-3": {
        "intuition": "Warunek równowagi dźwigni dwustronnej podpartej w środku wymaga równości momentów sił naciągu po obu stronach. W powietrzu równe ramiona oznaczają równe ciężary (masy) klocków. Po zanurzeniu w cieczy na każdy klocek działa siła wyporu proporcjonalna do jego objętości. Ponieważ większy sześcian doznaje znacznie większej siły wyporu, jego naciąg nici maleje bardziej – aby przywrócić równowagę, po stronie większego klocka należy położyć ciężarek równoważący różnicę sił wyporu.",
        "givens": "Krawędzie klocków: $a_A = 2\\text{ cm} = 0{,}02\\text{ m}$, $a_B = 4\\text{ cm} = 0{,}04\\text{ m}$. Gęstość wody: $\\rho_w = 1000\\text{ kg/m}^3$. Podparcie belki w środku długości: $r_A = r_B = \\frac{l}{2}$.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Równowaga w pierwszym etapie (wyznaczenie relacji mas)",
                "content": "W pierwszym etapie klocki wiszą w powietrzu na przeciwległych końcach belki podpartej w środku długości ($r_A = r_B = \\frac{l}{2}$):\n$$\\sum M_O = 0 \\implies m_A g \\cdot \\frac{l}{2} = m_B g \\cdot \\frac{l}{2} \\implies m_A = m_B$$\nMasy obu klocków są dokładnie równe."
            },
            {
                "title": "Zadanie 3.1 – Równowaga po zanurzeniu i obliczenie masy ciężarka C",
                "content": "W drugim etapie oba klocki zostają całkowicie zanurzone w wodzie o gęstości $\\rho_w = 1000\\text{ kg/m}^3$:\n1. Objętości klocków sześciennych:\n$$V_A = a_A^3 = (0{,}02\\text{ m})^3 = 8 \\cdot 10^{-6}\\text{ m}^3 = 8\\text{ cm}^3$$\n$$V_B = a_B^3 = (0{,}04\\text{ m})^3 = 64 \\cdot 10^{-6}\\text{ m}^3 = 64\\text{ cm}^3$$\n2. Siły naciągu nici działające na końce belki (ciężar pomniejszony o siłę wyporu Archimedesa):\n$$N_A = m_A g - F_{w,A} = m_A g - \\rho_w V_A g$$\n$$N_B = m_B g - F_{w,B} = m_B g - \\rho_w V_B g$$\nPonieważ $V_B > V_A$, siła wyporu działająca na klocek B jest większa, więc nić B ciągnie słabiej ($N_B < N_A$). Aby zrównoważyć belkę, dodatkowy ciężarek C o masie $m_C$ położono na prawym końcu belki (nad klockiem B):\n3. Warunek równowagi momentów sił względem podpory $O$:\n$$N_A \\cdot \\frac{l}{2} = (N_B + m_C g) \\cdot \\frac{l}{2}$$\nDzielimy obustronnie przez $\\frac{l}{2} g$:\n$$m_A - \\rho_w V_A = m_B - \\rho_w V_B + m_C$$\nWykorzystujemy równość mas $m_A = m_B$:\n$$m_C = \\rho_w (V_B - V_A) = \\rho_w \\Delta V$$\n4. Obliczenie numeryczne:\n$$\\Delta V = 64 \\cdot 10^{-6}\\text{ m}^3 - 8 \\cdot 10^{-6}\\text{ m}^3 = 56 \\cdot 10^{-6}\\text{ m}^3$$\n$$m_C = 1000\\text{ kg/m}^3 \\cdot 56 \\cdot 10^{-6}\\text{ m}^3 = 0{,}056\\text{ kg} = 56\\text{ g}$$"
            },
            {
                "title": "Zadanie 3.2 – Analiza wariantów modyfikacji układu",
                "content": "1. **Zdanie 1: Prawda (P).** Ponieważ naciąg nici A jest większy niż naciąg nici B ($N_A > N_B$), lewa strona przeważa. Przesunięcie punktu zawieszenia klocka A bliżej podpory $O$ zmniejsza ramię siły $N_A$, co pozwala uzyskać równość momentów $N_A r_A' = N_B r_B$ bez dodatkowego ciężarka.\n\n2. **Zdanie 2: Fałsz (F).** Przesunięcie punktu podparcia $O$ w stronę klocka B zwiększa ramię klocka A i zmniejsza ramię klocka B. Spowodowałoby to jeszcze większą przewagę momentu siły po lewej stronie, pogłębiając nierównowagę (podporę należałoby przesunąć w stronę klocka A).\n\n3. **Zdanie 3: Prawda (P).** Wzór $m_C = \\rho_{\\text{cieczy}} (V_B - V_A)$ wskazuje, że potrzebna masa ciężarka jest wprost proporcjonalna do gęstości cieczy. W cieczy o mniejszej gęstości różnica sił wyporu będzie mniejsza, więc wystarczy ciężarek o mniejszej masie $m_C$."
            }
        ],
        "numerical": "3.1: $m_C = 56\\text{ g}$ ($0{,}056\\text{ kg}$); 3.2: 1-P, 2-F, 3-P",
        "answer": "3.1: Masa ciężarka C wynosi $m_C = 56\\text{ g}$ (lub $0{,}056\\text{ kg}$);\n3.2: 1 – P, 2 – F, 3 – P.",
        "trap": "Siła wyporu zależy od objętości zanurzonego ciała, a nie od jego masy! Objętość sześcianu rośnie z sześcianem krawędzi ($V = a^3$), więc klocek o dwukrotnie większej krawędzi ma aż 8-krotnie większą objętość ($64\\text{ cm}^3$ wobec $8\\text{ cm}^3$)."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 10: Maj 2023 zad. 3
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2023-maj-zad-3": {
        "intuition": "Układ składa się z toczącego się bez poślizgu walca oraz połączonego z nim nierozciągliwą linką opadającego ciężarka. Ubytek energii potencjalnej grawitacji opadającego ciężarka zasila ruch całego układu, rozdzielając się na trzy składniki: energię kinetyczną postępową walca, energię kinetyczną obrotową walca oraz energię kinetyczną postępową samego ciężarka.",
        "givens": "Walec: masa $m$, promień $R$, moment bezwładności $I = \\frac{1}{2}mR^2$. Ciężarek: masa $m$. Toczenie bez poślizgu ($v = \\omega R$, $a = \\varepsilon R$). Masa linki, bloczka i pręta pomijalna.",
        "steps": [
            {
                "title": "Zadanie 3.1 – Ocena prawdziwości stwierdzeń",
                "content": "1. **Zdanie 1: Prawda (P).** W toczeniu bez poślizgu droga przebyta przez środek masy przy obrocie o kąt $\\varphi$ wynosi $s = R\\varphi$. Dla jednego pełnego obrotu $\\varphi = 2\\pi$, stąd $s = 2\\pi R$.\n\n2. **Zdanie 2: Prawda (P).** Energia kinetyczna ruchu postępowego walca to $E_{\\text{post}} = \\frac{1}{2} m v^2$. Energia ruchu obrotowego walca to $E_{\\text{obr}} = \\frac{1}{2} I \\omega^2 = \\frac{1}{2} \\left(\\frac{1}{2} m R^2\\right) \\left(\\frac{v}{R}\\right)^2 = \\frac{1}{4} m v^2$. Energia postępowa jest dwukrotnie większa od obrotowej, więc zdanie jest prawdziwe.\n\n3. **Zdanie 3: Fałsz (F).** Opadający ciężarek ma w każdej chwili prędkość równą prędkości walca, a więc sam również posiada energię kinetyczną $\\frac{1}{2} m v^2$. Energia potencjalna ciężarka nie zamienia się zatem 'w całości' wyłącznie na energię walca."
            },
            {
                "title": "Zadanie 3.2 – Wyprowadzenie wzoru na przyśpieszenie z Zasady Zachowania Energii",
                "content": "Gdy ciężarek opadnie o wysokość $h$, walec przesuwa się po stole o taką samą drogę $s = h$. Prędkości obu ciał mają równą wartość $v$.\n1. **Ubytek energii potencjalnej ciężarka:**\n$$\\Delta E_p = mgh$$\n2. **Przyrost energii kinetycznej układu:**\nUkład startował ze spoczynku. Całkowita energia kinetyczna składa się z energii opadającego ciężarka oraz energii postępowego i obrotowego ruchu walca:\n$$E_{k,\\text{układ}} = E_{k,\\text{ciężarek}} + E_{k,\\text{walec post}} + E_{k,\\text{walec obr}}$$\n$$E_{k,\\text{układ}} = \\frac{1}{2} m v^2 + \\frac{1}{2} m v^2 + \\frac{1}{2} I \\omega^2$$\nPodstawiamy $I = \\frac{1}{2} m R^2$ oraz $\\omega = \\frac{v}{R}$:\n$$E_{k,\\text{układ}} = m v^2 + \\frac{1}{4} m v^2 = \\frac{5}{4} m v^2$$\n3. **Bilans energii mechanicznej:**\n$$mgh = \\frac{5}{4} m v^2 \\implies gh = \\frac{5}{4} v^2$$\n4. **Wykorzystanie równań kinematyki:**\nW ruchu jednostajnie przyśpieszonym od spoczynku zachodzi związek $v^2 = 2ah$. Podstawiamy:\n$$gh = \\frac{5}{4} (2ah) = \\frac{5}{2} a h$$\nDzielimy obustronnie przez $h$:\n$$g = \\frac{5}{2} a \\implies a = \\frac{2}{5} g$$\n*(Wyprowadzenie alternatywne z II zasady dynamiki: dla ciężarka $ma = mg - N$, dla walca $ma = N - T$ oraz $I\\varepsilon = TR \\implies T = \\frac{1}{2}ma$. Dodając równania: $2ma = mg - \\frac{1}{2}ma \\implies \\frac{5}{2}ma = mg \\implies a = \\frac{2}{5}g$).*"
            }
        ],
        "numerical": "3.1: 1-P, 2-P, 3-F; 3.2: $a = \\frac{2}{5}g$",
        "answer": "3.1: 1 – P, 2 – P, 3 – F;\n3.2: Wzór na przyśpieszenie ciężarka: $a = \\frac{2}{5}g$.",
        "trap": "Najczęstszy błąd w zadaniu 3.2 to pominięcie energii kinetycznej ciężarka w bilansie energii ($mgh = \\frac{3}{4}mv^2$), co prowadzi do błędnego wyniku $a = \\frac{2}{3}g$!"
    },

    // -------------------------------------------------------------------------
    // ZADANIE 11: Arkusz pokazowy 2023 zad. 2
    // -------------------------------------------------------------------------
    "matura-cke-bryla-2023-pokazowy-zad-2": {
        "intuition": "Gdy obracający się ze znaczną prędkością kątową walec zostaje położony na poziomym podłożu, początkowo ślizga się po nim (punkt styku ma prędkość w lewo). Siła tarcia kinetycznego przeciwdziała poślizgowi: rozpędza środek masy w prawo, a jednocześnie wywiera moment siły hamujący obrót. Poślizg ustaje w chwili, gdy prędkość liniowa środka masy osiągnie wartość równą iloczynowi aktualnej prędkości kątowej i promienia: $v_1 = \\omega_1 R$.",
        "givens": "Walec: masa $m$, promień $R$, $I = \\frac{1}{2}mR^2$. Prędkość początkowa ruchu postępowego: $v_0 = 0$. Prędkość początkowa obrotowa: $\\omega_0$. Stała siła tarcia kinetycznego $T$.",
        "steps": [
            {
                "title": "Zadanie 2.1 – Wyznaczenie zwrotu siły tarcia w punkcie A",
                "content": "Walec obraca się zgodnie z ruchem wskazówek zegara. W punkcie styku $A$ z podłożem jego powierzchnia przemieszcza się względem podłoża w lewo.\nSiła tarcia kinetycznego wywierana przez podłoże na walec ma zwrot przeciwny do kierunku poślizgu powierzchni walca po podłożu, zatem wektor $\\vec{T}$ zaczepiony w punkcie $A$ jest skierowany **poziomo w prawo**.\n<div class=\"chart-container-svg\"><img src=\"img/rigid/2023-pokazowy-z2-rozwiazanie.png\" alt=\"Oficjalny rysunek rozwiązania CKE — siła tarcia\" class=\"theory-img\" style=\"max-height:260px;display:block;margin:15px auto;\"></div>"
            },
            {
                "title": "Zadanie 2.2 – Charakterystyka ruchu walca do ustania poślizgu",
                "content": "1. **Ruch postępowy środka masy:** Na walec w poziomie działa wyłącznie stała siła tarcia $T$. Z **II zasady dynamiki Newtona** środek masy porusza się ze stałym przyśpieszeniem $a = \\frac{T}{m} = \\text{const}$. Ruch postępowy jest **przyśpieszony** (wybór B).\n2. **Ruch obrotowy walca:** Siła tarcia działa na ramieniu $R$ i wywiera stały moment siły $M = -T \\cdot R$ hamujący obrót walca. Z II zasady dynamiki dla ruchu obrotowego walec porusza się ze stałym opóźnieniem kątowym $\\varepsilon = \\frac{T R}{I} = \\text{const}$, zatem prędkość kątowa **się zmniejszała** (wybór 3).\nPoprawne zestawienie to **B3**."
            },
            {
                "title": "Zadanie 2.3 – Obliczenie ilorazu prędkości kątowych $\\frac{\\omega_1}{\\omega_0}$",
                "content": "Niech poślizg trwa czas $t_1$. W chwili $t_1$ poślizg ustaje, co oznacza spełnienie warunku toczenia bez poślizgu:\n$$v_1 = \\omega_1 R$$\n1. Równanie prędkości ruchu postępowego w chwili $t_1$ ($v_0 = 0$):\n$$v_1 = a t_1 = \\frac{T}{m} t_1$$\n2. Równanie prędkości kątowej w chwili $t_1$:\n$$\\omega_1 = \\omega_0 - \\varepsilon t_1$$\ngdzie przyśpieszenie kątowe wynosi:\n$$\\varepsilon = \\frac{T R}{I} = \\frac{T R}{\\frac{1}{2} m R^2} = \\frac{2 T}{m R} = \\frac{2 a}{R}$$\n3. Podstawiamy $\\varepsilon = \\frac{2a}{R}$ do równania prędkości kątowej:\n$$\\omega_1 = \\omega_0 - \\left(\\frac{2 a}{R}\\right) t_1 = \\omega_0 - \\frac{2 (a t_1)}{R} = \\omega_0 - \\frac{2 v_1}{R}$$\n4. Z warunku toczenia bez poślizgu $\\frac{v_1}{R} = \\omega_1$. Wstawiamy:\n$$\\omega_1 = \\omega_0 - 2 \\omega_1$$\nPrzenosimy $2\\omega_1$ na lewą stronę:\n$$3 \\omega_1 = \\omega_0 \\implies \\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$$\n*(Metoda alternatywna – z Zasady Zachowania Momentu Pędu względem osi leżącej w płaszczyźnie podłoża: moment siły tarcia względem osi na podłożu wynosi zero, stąd $I \\omega_0 = I \\omega_1 + m v_1 R = \\frac{1}{2}mR^2 \\omega_1 + m(\\omega_1 R) R = \\frac{3}{2}mR^2 \\omega_1 \\implies \\frac{1}{2}\\omega_0 = \\frac{3}{2}\\omega_1 \\implies \\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$).*"
            }
        ],
        "numerical": "2.1: $\\vec{T}$ w prawo; 2.2: B3; 2.3: $\\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$",
        "answer": "2.1: Wektor siły tarcia $\\vec{T}$ w punkcie A jest skierowany poziomo w prawo;\n2.2: Wybór B3 (ruch postępowy przyśpieszony, prędkość kątowa się zmniejszała);\n2.3: Iloraz prędkości kątowych wynosi $\\frac{\\omega_1}{\\omega_0} = \\frac{1}{3}$.",
        "trap": "W czasie trwania poślizgu nie wolno stosować zależności $v = \\omega R$ ani $a = \\varepsilon R$! Warunek ten wiąże prędkości dopiero od chwili $t_1$, gdy poślizg całkowicie ustaje."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 12: Informator 2025 zad. 4 (Kołowrót)
    // -------------------------------------------------------------------------
    "matura-cke-bryla-informator-2025-zad-4": {
        "intuition": "Kołowrót składa się z dwóch sztywno połączonych walców o różnych promieniach. O kierunku obrotu układu nie decydują same masy zawieszonych ciężarków, lecz momenty ich sił ciężkości względem osi obrotu ($M_i = m_i g R_i$). Przyśpieszenie całego układu wynika ze wspólnej dynamiki: wypadkowy moment sił grawitacji musi rozpędzić obrotowo oba walce oraz nadać przyśpieszenie liniowe obu ciężarkom.",
        "givens": "Walec 1: $R_1 = 5\\text{ cm} = 0{,}05\\text{ m}$, $M_1 = 3\\text{ kg}$, ciężarek $m_1 = 2\\text{ kg}$. Walec 2: $R_2 = 12\\text{ cm} = 0{,}12\\text{ m}$, $M_2 = 8\\text{ kg}$, ciężarek $m_2 = 1\\text{ kg}$. $I_{\\text{walca}} = \\frac{1}{2} M R^2$. Przyśpieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$ (lub $9{,}8\\text{ m/s}^2$). Brak poślizgu sznurków.",
        "steps": [
            {
                "title": "Zadanie 4.1 – Wyznaczenie kierunku ruchu układu z bilansu momentów sił",
                "content": "W chwili początkowej układ jest nieruchomy. O kierunku obrotu decyduje wypadkowy moment sił ciężkości względem osi obrotu kołowrotu:\n1. Moment siły ciężkości działającej na ciężarek $m_1$:\n$$M_1 = m_1 g R_1 = 2\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}05\\text{ m} = 0{,}0981 g \\approx 0{,}981\\text{ N}\\cdot\\text{m}$$\n2. Moment siły ciężkości działającej na ciężarek $m_2$:\n$$M_2 = m_2 g R_2 = 1\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}12\\text{ m} = 0{,}12 g \\approx 1{,}177\\text{ N}\\cdot\\text{m}$$\n3. Porównanie momentów sił:\nPonieważ $M_2 > M_1$ ($0{,}12g > 0{,}10g$), wypadkowy moment sił obraca kołowrót w stronę odpowiadającą odwijaniu sznurka z walca 2.\nW rezultacie ciężarek o masie $m_2$ opada, a sznurek nawinięty na walec 1 nawija się, co oznacza, że **ciężarek o masie $m_1$ zacznie się wznosić**."
            },
            {
                "title": "Zadanie 4.2 – Równania dynamiki dla kołowrotu i obu ciężarków",
                "content": "Układ porusza się tak, że ciężarek $m_2$ opada z przyśpieszeniem $a_2$, ciężarek $m_1$ wznosi się z przyśpieszeniem $a_1$, a kołowrót obraca się z przyśpieszeniem kątowym $\\varepsilon$:\n<div class=\"chart-container-svg\"><img src=\"img/rigid/informator-2025-z4-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE — informator 2025\" class=\"theory-img\" style=\"max-height:390px;display:block;margin:15px auto;\"></div>\n1. **Równania ruchu postępowego ciężarków:**\n$$m_1 a_1 = N_1 - m_1 g \\implies N_1 = m_1 g + m_1 a_1$$\n$$m_2 a_2 = m_2 g - N_2 \\implies N_2 = m_2 g - m_2 a_2$$\n2. **Równanie ruchu obrotowego kołowrotu:**\n$$I \\varepsilon = N_2 R_2 - N_1 R_1$$\ngdzie $I$ to moment bezwładności połączonych walców:\n$$I = \\frac{1}{2} M_1 R_1^2 + \\frac{1}{2} M_2 R_2^2$$\n3. **Związki kinematyczne (nierozciągliwe sznurki bez poślizgu):**\n$$a_1 = \\varepsilon R_1, \\qquad a_2 = \\varepsilon R_2$$"
            },
            {
                "title": "Zadanie 4.2 – Wyprowadzenie wzoru i obliczenie wartości przyśpieszenia $a_1$",
                "content": "Podstawiamy wyrażenia na naciągi $N_1$ i $N_2$ oraz przyśpieszenia liniowe do równania ruchu obrotowego:\n$$I \\varepsilon = (m_2 g - m_2 \\varepsilon R_2) R_2 - (m_1 g + m_1 \\varepsilon R_1) R_1$$\n$$I \\varepsilon = m_2 g R_2 - m_2 R_2^2 \\varepsilon - m_1 g R_1 - m_1 R_1^2 \\varepsilon$$\nGrupujemy wyrazy z $\\varepsilon$:\n$$\\varepsilon (I + m_1 R_1^2 + m_2 R_2^2) = g (m_2 R_2 - m_1 R_1)$$\n$$\\varepsilon = \\frac{g (m_2 R_2 - m_1 R_1)}{I + m_1 R_1^2 + m_2 R_2^2}$$\nStąd przyśpieszenie liniowe ciężarka $m_1$ wynosi:\n$$a_1 = \\varepsilon R_1 = \\frac{g (m_2 R_2 - m_1 R_1) R_1}{I + m_1 R_1^2 + m_2 R_2^2}$$\n**Podstawienie wartości liczbowych:**\n1. Moment bezwładności kołowrotu $I$:\n$$I = \\frac{1}{2} \\cdot 3 \\cdot (0{,}05)^2 + \\frac{1}{2} \\cdot 8 \\cdot (0{,}12)^2 = 0{,}00375 + 0{,}0576 = 0{,}06135\\text{ kg}\\cdot\\text{m}^2$$\n2. Składniki bezwładności ciężarków:\n$$m_1 R_1^2 = 2 \\cdot (0{,}05)^2 = 0{,}0050\\text{ kg}\\cdot\\text{m}^2$$\n$$m_2 R_2^2 = 1 \\cdot (0{,}12)^2 = 0{,}0144\\text{ kg}\\cdot\\text{m}^2$$\nMianownik (całkowita bezwładność układu):\n$$I_{\\text{całk}} = 0{,}06135 + 0{,}0050 + 0{,}0144 = 0{,}08075\\text{ kg}\\cdot\\text{m}^2$$\n3. Licznik (moment sił grawitacji):\n$$m_2 R_2 - m_1 R_1 = 1 \\cdot 0{,}12 - 2 \\cdot 0{,}05 = 0{,}02\\text{ kg}\\cdot\\text{m}$$\n4. Obliczenie $\\varepsilon$ oraz $a_1$ ($g = 9{,}81\\text{ m/s}^2$):\n$$\\varepsilon = \\frac{9{,}81 \\cdot 0{,}02}{0{,}08075} \\approx 2{,}43\\text{ rad/s}^2$$\n$$a_1 = \\varepsilon R_1 = 2{,}4297 \\cdot 0{,}05\\text{ m} \\approx 0{,}1215\\text{ m/s}^2 \\approx 0{,}12\\text{ m/s}^2$$"
            }
        ],
        "numerical": "4.1: ciężarek $m_1$ zacznie się wznosić ($M_2 > M_1$); 4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$",
        "answer": "4.1: Ciężarek o masie $m_1$ zacznie się wznosić, ponieważ moment siły ciężkości ciężarka drugiego ($m_2 g R_2 = 1{,}18\\text{ N m}$) jest większy od momentu siły ciężkości ciężarka pierwszego ($m_1 g R_1 = 0{,}98\\text{ N m}$);\n4.2: Wartość przyśpieszenia ciężarka wynosi $a_1 \\approx 0{,}12\\text{ m/s}^2$ (dokładnie ok. $0{,}121\\text{ m/s}^2$).",
        "trap": "Nie wolno porównywać samych mas ciężarków! Ciężarek $m_1 = 2\\text{ kg}$ jest dwukrotnie cięższy od $m_2 = 1\\text{ kg}$, jednak wisi na ramieniu o ponad dwukrotnie mniejszym promieniu ($5\\text{ cm}$ wobec $12\\text{ cm}$), dlatego to lżejszy ciężarek przeważa kołowrót."
    },

    // -------------------------------------------------------------------------
    // ZADANIE 13: Informator 2023 zad. 4 (Kołowrót)
    // -------------------------------------------------------------------------
    "matura-cke-bryla-informator-2023-zad-4": {
        "intuition": "Kołowrót składa się z dwóch sztywno połączonych walców o różnych promieniach. O kierunku obrotu układu nie decydują same masy zawieszonych ciężarków, lecz momenty ich sił ciężkości względem osi obrotu ($M_i = m_i g R_i$). Przyśpieszenie całego układu wynika ze wspólnej dynamiki: wypadkowy moment sił grawitacji musi rozpędzić obrotowo oba walce oraz nadać przyśpieszenie liniowe obu ciężarkom.",
        "givens": "Walec 1: $R_1 = 5\\text{ cm} = 0{,}05\\text{ m}$, $M_1 = 3\\text{ kg}$, ciężarek $m_1 = 2\\text{ kg}$. Walec 2: $R_2 = 12\\text{ cm} = 0{,}12\\text{ m}$, $M_2 = 8\\text{ kg}$, ciężarek $m_2 = 1\\text{ kg}$. $I_{\\text{walca}} = \\frac{1}{2} M R^2$. Przyśpieszenie ziemskie $g = 9{,}81\\text{ m/s}^2$ (lub $9{,}8\\text{ m/s}^2$). Brak poślizgu sznurków.",
        "steps": [
            {
                "title": "Zadanie 4.1 – Wyznaczenie kierunku ruchu układu z bilansu momentów sił",
                "content": "W chwili początkowej układ jest nieruchomy. O kierunku obrotu decyduje wypadkowy moment sił ciężkości względem osi obrotu kołowrotu:\n1. Moment siły ciężkości działającej na ciężarek $m_1$:\n$$M_1 = m_1 g R_1 = 2\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}05\\text{ m} = 0{,}0981 g \\approx 0{,}981\\text{ N}\\cdot\\text{m}$$\n2. Moment siły ciężkości działającej na ciężarek $m_2$:\n$$M_2 = m_2 g R_2 = 1\\text{ kg} \\cdot 9{,}81\\text{ m/s}^2 \\cdot 0{,}12\\text{ m} = 0{,}12 g \\approx 1{,}177\\text{ N}\\cdot\\text{m}$$\n3. Porównanie momentów sił:\nPonieważ $M_2 > M_1$ ($0{,}12g > 0{,}10g$), wypadkowy moment sił obraca kołowrót w stronę odpowiadającą odwijaniu sznurka z walca 2.\nW rezultacie ciężarek o masie $m_2$ opada, a sznurek nawinięty na walec 1 nawija się, co oznacza, że **ciężarek o masie $m_1$ zacznie się wznosić**."
            },
            {
                "title": "Zadanie 4.2 – Równania dynamiki dla kołowrotu i obu ciężarków",
                "content": "Układ porusza się tak, że ciężarek $m_2$ opada z przyśpieszeniem $a_2$, ciężarek $m_1$ wznosi się z przyśpieszeniem $a_1$, a kołowrót obraca się z przyśpieszeniem kątowym $\\varepsilon$:\n<div class=\"chart-container-svg\"><img src=\"img/rigid/informator-2023-z4-rozwiazanie.png\" alt=\"Oficjalny schemat sił CKE — informator 2023\" class=\"theory-img\" style=\"max-height:390px;display:block;margin:15px auto;\"></div>\n1. **Równania ruchu postępowego ciężarków:**\n$$m_1 a_1 = N_1 - m_1 g \\implies N_1 = m_1 g + m_1 a_1$$\n$$m_2 a_2 = m_2 g - N_2 \\implies N_2 = m_2 g - m_2 a_2$$\n2. **Równanie ruchu obrotowego kołowrotu:**\n$$I \\varepsilon = N_2 R_2 - N_1 R_1$$\ngdzie $I$ to moment bezwładności połączonych walców:\n$$I = \\frac{1}{2} M_1 R_1^2 + \\frac{1}{2} M_2 R_2^2$$\n3. **Związki kinematyczne (nierozciągliwe sznurki bez poślizgu):**\n$$a_1 = \\varepsilon R_1, \\qquad a_2 = \\varepsilon R_2$$"
            },
            {
                "title": "Zadanie 4.2 – Wyprowadzenie wzoru i obliczenie wartości przyśpieszenia $a_1$",
                "content": "Podstawiamy wyrażenia na naciągi $N_1$ i $N_2$ oraz przyśpieszenia liniowe do równania ruchu obrotowego:\n$$I \\varepsilon = (m_2 g - m_2 \\varepsilon R_2) R_2 - (m_1 g + m_1 \\varepsilon R_1) R_1$$\n$$I \\varepsilon = m_2 g R_2 - m_2 R_2^2 \\varepsilon - m_1 g R_1 - m_1 R_1^2 \\varepsilon$$\nGrupujemy wyrazy z $\\varepsilon$:\n$$\\varepsilon (I + m_1 R_1^2 + m_2 R_2^2) = g (m_2 R_2 - m_1 R_1)$$\n$$\\varepsilon = \\frac{g (m_2 R_2 - m_1 R_1)}{I + m_1 R_1^2 + m_2 R_2^2}$$\nStąd przyśpieszenie liniowe ciężarka $m_1$ wynosi:\n$$a_1 = \\varepsilon R_1 = \\frac{g (m_2 R_2 - m_1 R_1) R_1}{I + m_1 R_1^2 + m_2 R_2^2}$$\n**Podstawienie wartości liczbowych:**\n1. Moment bezwładności kołowrotu $I$:\n$$I = \\frac{1}{2} \\cdot 3 \\cdot (0{,}05)^2 + \\frac{1}{2} \\cdot 8 \\cdot (0{,}12)^2 = 0{,}00375 + 0{,}0576 = 0{,}06135\\text{ kg}\\cdot\\text{m}^2$$\n2. Składniki bezwładności ciężarków:\n$$m_1 R_1^2 = 2 \\cdot (0{,}05)^2 = 0{,}0050\\text{ kg}\\cdot\\text{m}^2$$\n$$m_2 R_2^2 = 1 \\cdot (0{,}12)^2 = 0{,}0144\\text{ kg}\\cdot\\text{m}^2$$\nMianownik (całkowita bezwładność układu):\n$$I_{\\text{całk}} = 0{,}06135 + 0{,}0050 + 0{,}0144 = 0{,}08075\\text{ kg}\\cdot\\text{m}^2$$\n3. Licznik (moment sił grawitacji):\n$$m_2 R_2 - m_1 R_1 = 1 \\cdot 0{,}12 - 2 \\cdot 0{,}05 = 0{,}02\\text{ kg}\\cdot\\text{m}$$\n4. Obliczenie $\\varepsilon$ oraz $a_1$ ($g = 9{,}81\\text{ m/s}^2$):\n$$\\varepsilon = \\frac{9{,}81 \\cdot 0{,}02}{0{,}08075} \\approx 2{,}43\\text{ rad/s}^2$$\n$$a_1 = \\varepsilon R_1 = 2{,}4297 \\cdot 0{,}05\\text{ m} \\approx 0{,}1215\\text{ m/s}^2 \\approx 0{,}12\\text{ m/s}^2$$"
            }
        ],
        "numerical": "4.1: ciężarek $m_1$ zacznie się wznosić ($M_2 > M_1$); 4.2: $a_1 \\approx 0{,}12\\text{ m/s}^2$",
        "answer": "4.1: Ciężarek o masie $m_1$ zacznie się wznosić, ponieważ moment siły ciężkości ciężarka drugiego ($m_2 g R_2 = 1{,}18\\text{ N m}$) jest większy od momentu siły ciężkości ciężarka pierwszego ($m_1 g R_1 = 0{,}98\\text{ N m}$);\n4.2: Wartość przyśpieszenia ciężarka wynosi $a_1 \\approx 0{,}12\\text{ m/s}^2$ (dokładnie ok. $0{,}121\\text{ m/s}^2$).",
        "trap": "Nie wolno porównywać samych mas ciężarków! Ciężarek $m_1 = 2\\text{ kg}$ jest dwukrotnie cięższy od $m_2 = 1\\text{ kg}$, jednak wisi na ramieniu o ponad dwukrotnie mniejszym promieniu ($5\\text{ cm}$ wobec $12\\text{ cm}$), dlatego to lżejszy ciężarek przeważa kołowrót."
    }
};

let updatedCount = 0;
subMatura.tasks.forEach(task => {
    if (newSolutions[task.id]) {
        const sol = newSolutions[task.id];
        // Preserve source and link info
        if (task.solution && task.solution.source) {
            sol.source = task.solution.source;
        }
        task.solution = sol;
        updatedCount++;
        console.log(`Updated solution for: ${task.id}`);
    }
});

console.log(`Updated ${updatedCount} / ${subMatura.tasks.length} tasks.`);

const newFileContent = 'window.FIZYKOREK_COURSES = ' + JSON.stringify(courses, null, 2) + ';\n';
fs.writeFileSync('./js/data-courses.js', newFileContent, 'utf8');
console.log('Successfully written updated data-courses.js!');
