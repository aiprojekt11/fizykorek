const fs = require('fs');

let code = fs.readFileSync('tools/add_work_energy_tasks.js', 'utf8');

// 1. Remove closedBadge and maturaBadge variable declarations
code = code.replace(/const closedBadge = `[\s\S]*?`;\n*/, '');
code = code.replace(/const maturaBadge = `[\s\S]*?`;\n*/, '');

// 2. Remove ${closedBadge} and ${maturaBadge} usages from problem templates
code = code.replace(/\$\{closedBadge\}\n?/g, '');
code = code.replace(/\$\{maturaBadge\}\n?/g, '');

// 3. Remove duplicate "Krok X: " in step titles so it doesn't say "KROK 1" and then "Krok 1: ..."
code = code.replace(/title:\s*["']Krok\s*\d+:\s*(.*?)["']/g, 'title: "$1"');

// Also handle Zadanie 42: "Część (a): " -> "(a) "
code = code.replace(/title:\s*["']Część\s*(\([a-c]\)):\s*(.*?)["']/g, 'title: "$1 $2"');

// 4. In Task 12: replace dW/dt derivative definition with standard high school physics formula
code = code.replace(
  'Ponieważ $P = \\frac{dW}{dt}$, pole pod wykresem mocy w czasie odpowiada wykonanej pracy mechanicznej $W$. Dzielimy pole na trójkąt i prostokąt.',
  'Praca wykonana przez siłę silnika jest równa polu powierzchni pod wykresem mocy od czasu $P(t)$ (analogicznie jak droga pod wykresem $v(t)$). Dzielimy pole na trójkąt i prostokąt.'
);

fs.writeFileSync('tools/add_work_energy_tasks.js', code, 'utf8');
console.log('add_work_energy_tasks.js has been successfully patched!');
