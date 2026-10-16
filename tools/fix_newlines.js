const fs = require('fs');

const path = 'c:/Users/barto/Desktop/aplikacja/js/data-courses.js';
let code = fs.readFileSync(path, 'utf8');

// We will do a character-by-character scan to find double-quoted strings and escape raw newlines inside them.
let inString = false;
let escapeNext = false;
let fixedCode = '';

for (let i = 0; i < code.length; i++) {
    const char = code[i];
    
    if (escapeNext) {
        fixedCode += char;
        escapeNext = false;
        continue;
    }
    
    if (char === '\\') {
        escapeNext = true;
        fixedCode += char;
        continue;
    }
    
    if (char === '"') {
        // We toggle string state, BUT we have to be careful about strings inside backticks if there are any.
        // For simplicity, assuming no complex backticks.
        inString = !inString;
        fixedCode += char;
        continue;
    }
    
    if (inString && char === '\n') {
        // We found a raw newline inside a double-quoted string!
        // Escape it so it becomes \n
        fixedCode += '\\n';
    } else if (inString && char === '\r') {
        // Ignore or escape
        fixedCode += '';
    } else {
        fixedCode += char;
    }
}

fs.writeFileSync(path, fixedCode, 'utf8');
console.log('Fixed newlines inside strings!');
