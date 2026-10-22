const fs = require('fs');
let content = fs.readFileSync('js/data-courses.js', 'utf8');

// 1. Friction formula with Fn and full explanation of symbols
content = content.replace(
  '<div style=\\"text-align:center;margin:4px 0;\\">$$W_T = -T \\\\cdot s = -\\\\mu N s$$</div></li>',
  '<div style=\\"text-align:center;margin:4px 0;\\">$$W_T = -T \\\\cdot s = -\\\\mu F_n s$$</div>\\n    gdzie: $T$ – wartość siły tarcia, $\\\\mu$ – współczynnik tarcia, $F_n$ – siła nacisku na podłoże, $s$ – przemieszczenie (droga).</li>'
);

// 2. Moc średnia
content = content.replace(
  '<li><strong>Moc średnia:</strong> tempo przekazywania energii: $P = \\\\frac{W}{t}$ $[\\\\text{W} = \\\\text{J}/\\\\text{s}]$.</li>',
  '<li><strong>Moc średnia ($P$):</strong> tempo wykonywania pracy / przekazywania energii: $P = \\\\frac{W}{t}$ $[\\\\text{W} = \\\\text{J}/\\\\text{s}]$, gdzie: $W$ – wykonana praca, $t$ – czas jej wykonania.</li>'
);

// 3. Moc przy stałej prędkości
content = content.replace(
  '<li><strong>Moc przy stałej prędkości ($v = \\\\text{const}$):</strong> $P = F \\\\cdot v$. Gdy pojazd porusza się ruchem jednostajnym, siła napędowa silnika równoważy opory ruchu ($F_{\\\\text{napęd}} = F_{\\\\text{op}}$), więc:\\n    <div style=\\\"text-align:center;margin:4px 0;\\\">$$P = F_{\\\\text{op}} \\\\cdot v$$</div></li>',
  '<li><strong>Moc przy stałej prędkości ($v = \\\\text{const}$):</strong> $P = F \\\\cdot v$, gdzie: $F$ – siła ciągu silnika, $v$ – prędkość pojazdu. Gdy pojazd porusza się ruchem jednostajnym, siła napędowa silnika równoważy opory ruchu ($F_{\\\\text{napęd}} = F_{\\\\text{op}}$), więc:\\n    <div style=\\\"text-align:center;margin:4px 0;\\\">$$P = F_{\\\\text{op}} \\\\cdot v$$</div>\\n    gdzie $F_{\\\\text{op}}$ – siła oporów ruchu.</li>'
);

// 4. Sprawność
content = content.replace(
  '<li><strong>Sprawność urządzenia:</strong> stosunek energii użytecznej do energii całkowitej:\\n    <div style=\\\"text-align:center;margin:4px 0;\\\">$$\\\\eta = \\\\frac{W_u}{W_c} = \\\\frac{P_u}{P_c} \\\\le 1 \\\\quad (\\\\text{lub } \\\\eta \\\\cdot 100\\\\%)$$</div>\\n    Dla dźwigu podnoszącego masę $m$ na wysokość $h$: $W_u = mgh$, a $W_c = P_{\\\\text{silnika}} \\\\cdot t$.</li>',
  '<li><strong>Sprawność urządzenia ($\\\\eta$):</strong> stosunek pracy (lub mocy) użytecznej do pracy (lub mocy) dostarczonej (całkowitej):\\n    <div style=\\\"text-align:center;margin:4px 0;\\\">$$\\\\eta = \\\\frac{W_u}{W_c} = \\\\frac{P_u}{P_c} \\\\le 1 \\\\quad (\\\\text{lub } \\\\eta \\\\cdot 100\\\\%)$$</div>\\n    gdzie: $W_u, P_u$ – praca i moc użyteczna, $W_c, P_c$ – praca i moc całkowita (dostarczona).<br>Dla dźwigu podnoszącego masę $m$ na wysokość $h$: praca użyteczna to $W_u = mgh$ (gdzie $m$ – masa, $g$ – przyspieszenie ziemskie, $h$ – wysokość podnoszenia), a praca całkowita to $W_c = P_{\\\\text{silnika}} \\\\cdot t$.</li>'
);

fs.writeFileSync('js/data-courses.js', content, 'utf8');
console.log('Successfully applied all exact replacements!');
