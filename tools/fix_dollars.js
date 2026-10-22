const fs = require('fs');
let content = fs.readFileSync('js/data-courses.js', 'utf8');

// Replace any single-dollar display math inside the theory with double dollars
content = content.replace(
  '<div style=\\"text-align:center;margin:4px 0;\\">$W_T = -T \\cdot s = -\\mu F_n s$</div>',
  '<div style=\\"text-align:center;margin:4px 0;\\">$$W_T = -T \\cdot s = -\\mu F_n s$$</div>'
);
content = content.replace(
  '<div style=\\"text-align:center;margin:4px 0;\\">$P = F_{\\text{op}} \\cdot v$</div>',
  '<div style=\\"text-align:center;margin:4px 0;\\">$$P = F_{\\text{op}} \\cdot v$$</div>'
);
content = content.replace(
  '<div style=\\"text-align:center;margin:4px 0;\\">$\\eta = \\frac{W_u}{W_c} = \\frac{P_u}{P_c} \\le 1 \\quad (\\text{lub } \\eta \\cdot 100\\%)$</div>',
  '<div style=\\"text-align:center;margin:4px 0;\\">$$\\eta = \\frac{W_u}{W_c} = \\frac{P_u}{P_c} \\le 1 \\quad (\\text{lub } \\eta \\cdot 100\\%)$$</div>'
);

fs.writeFileSync('js/data-courses.js', content, 'utf8');
console.log('Fixed double dollars successfully!');
