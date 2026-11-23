import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load, LANGS, distFiles } from './_load.mjs';

const allCss = () => distFiles().filter((f) => f.endsWith('.css')).map((f) => readFileSync(f, 'utf8')).join('\n')
  + LANGS.map((l) => (load(l).match(/<style[^>]*>[\s\S]*?<\/style>/g) || []).join('\n')).join('\n');

test('print shows content that was never scrolled into view', () => {
  const css = allCss();
  const print = css.match(/@media print\s*\{([\s\S]*?\})\s*\}/);
  assert.ok(print, 'no print block');
  assert.match(print[1], /\[data-reveal\][\s\S]*opacity:\s*1/);
});

test('submit spinner does not rotate under reduced motion', () => {
  const css = allCss();
  const blocks = [...css.matchAll(/@media \(prefers-reduced-motion:\s*reduce\)\s*\{([\s\S]*?\})\s*\}/g)].map((m) => m[1]).join('\n');
  assert.match(blocks, /contact__spinner[^{]*\{[^}]*animation:\s*none/);
});

test('timings and display type come from tokens, not literals', () => {
  const motion = readFileSync('src/scripts/motion.js', 'utf8');
  assert.doesNotMatch(motion, /\b(1200|4000|1600|900|250)\b/);
  assert.doesNotMatch(motion, /stagger\(\d/);
  const hero = readFileSync('src/components/Hero.astro', 'utf8');
  assert.doesNotMatch(hero, /font-weight:\s*\d/);
  assert.doesNotMatch(hero, /letter-spacing:\s*-?\d/);
  const contact = readFileSync('src/components/Contact.astro', 'utf8');
  assert.doesNotMatch(contact, /\d+(\.\d+)?s\b(?![a-z-])/);
});

for (const lang of LANGS) {
  test(`${lang}: current language marked aria-current="page"; switch links keep the section`, () => {
    const header = load(lang).match(/<header[\s\S]*?<\/header>/)[0];
    assert.match(header, /<span[^>]*aria-current="page"/);
    assert.doesNotMatch(header, /aria-current="true"/);
    const links = header.match(/<a[^>]*class="nav__lang-item"[^>]*>/g);
    assert.ok(links && links.length >= 2);
    for (const a of links) assert.match(a, /data-lang-switch/);
  });
}
