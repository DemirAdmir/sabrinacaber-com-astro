import { readFileSync, readdirSync, statSync } from 'node:fs';
import { join } from 'node:path';

const PATHS = { en: 'dist/index.html', fr: 'dist/fr/index.html', bhs: 'dist/bhs/index.html' };
export const LANGS = ['en', 'fr', 'bhs'];

/** @param {'en'|'fr'|'bhs'} lang */
export function load(lang) {
  return readFileSync(PATHS[lang], 'utf8');
}

/** All text files under dist (html, js, css). */
export function distFiles(dir = 'dist') {
  const out = [];
  for (const name of readdirSync(dir)) {
    const p = join(dir, name);
    if (statSync(p).isDirectory()) out.push(...distFiles(p));
    else if (/\.(html|js|css)$/.test(name)) out.push(p);
  }
  return out;
}

/** Inner HTML of the first element with the given id (naive, for section tests). */
export function section(html, id) {
  const start = html.indexOf(`id="${id}"`);
  if (start < 0) return '';
  const open = html.lastIndexOf('<section', start);
  const close = html.indexOf('</section>', start);
  return html.slice(open, close);
}
