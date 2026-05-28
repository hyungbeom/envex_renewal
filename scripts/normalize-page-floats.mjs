import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

const standard = `
      <aside class="page-floats" aria-label="바로가기">
        <a href="#" class="page-floats__online">온라인<br>전시회</a>
        <button type="button" class="page-floats__top" data-scroll-top aria-label="맨 위로">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5l7 7H5l7-7z" fill="currentColor" />
          </svg>
        </button>
      </aside>`;

const asideRe = /\s*<aside class="[a-z0-9_-]+-floats" aria-label="바로가기">[\s\S]*?<\/aside>/g;

function walk(dir) {
  for (const name of fs.readdirSync(dir)) {
    if (name.endsWith('~')) continue;
    const full = path.join(dir, name);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      walk(full);
      continue;
    }
    if (!name.endsWith('.html')) continue;
    const content = fs.readFileSync(full, 'utf8');
    const next = content.replace(asideRe, standard);
    if (next !== content) {
      fs.writeFileSync(full, next);
      console.log('Updated:', full);
    }
  }
}

walk(root);
