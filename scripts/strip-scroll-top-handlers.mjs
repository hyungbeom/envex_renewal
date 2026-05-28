import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const jsRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..', 'js');

const patterns = [
  /\n?\s*var scrollBtn = document\.querySelector\('\[data-scroll-top\]'\);\s*\n\s*if \(scrollBtn\) \{\s*\n\s*scrollBtn\.addEventListener\('click', function \(\) \{\s*\n\s*window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\n\s*\}\);\s*\n\s*\}\s*/g,
  /\n?\s*const floatTop = document\.querySelector\('\[data-scroll-top\]'\);\s*\n\s*if \(floatTop\) \{\s*\n\s*floatTop\.addEventListener\('click', \(\) => \{\s*\n\s*window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\n\s*\}\);\s*\n\s*\}\s*/g,
  /\n?\s*const scrollTop = document\.querySelector\('\[data-scroll-top\]'\);\s*[\s\S]*?if \(scrollTop\) \{\s*scrollTop\.addEventListener\('click', function \(\) \{\s*window\.scrollTo\(\{ top: 0, behavior: 'smooth' \}\);\s*\}\);\s*\}\s*/g,
];

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    const full = path.join(dir, name);
    if (fs.statSync(full).isDirectory()) {
      walk(full);
      continue;
    }
    if (!name.endsWith('.js') || name === 'app.js') continue;
    let content = fs.readFileSync(full, 'utf8');
    let next = content;
    for (const re of patterns) {
      next = next.replace(re, '\n');
    }
    if (next !== content) {
      fs.writeFileSync(full, next.replace(/\n{3,}/g, '\n\n'));
      console.log('Stripped:', full);
    }
  }
}

walk(jsRoot);
