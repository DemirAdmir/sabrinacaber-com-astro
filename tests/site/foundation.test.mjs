import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load, LANGS, distFiles } from './_load.mjs';

const HTML_LANG = { en: 'en', fr: 'fr', bhs: 'bs' };

for (const lang of LANGS) {
  test(`${lang}: skip link targets main`, () => {
    const html = load(lang);
    assert.match(html, /<a[^>]*class="skip-link"[^>]*href="#main"/);
    assert.match(html, /<main[^>]*id="main"/);
  });

  test(`${lang}: exactly one h1`, () => {
    assert.equal((load(lang).match(/<h1[\s>]/g) || []).length, 1);
  });

  test(`${lang}: html lang attribute`, () => {
    assert.match(load(lang), new RegExp(`<html[^>]*lang="${HTML_LANG[lang]}"`));
  });

  test(`${lang}: loads Fraunces and Inter`, () => {
    const html = load(lang);
    assert.match(html, /fonts\.googleapis\.com[^"]*Fraunces/);
    assert.match(html, /fonts\.googleapis\.com[^"]*Inter/);
  });

  test(`${lang}: no emoji or pictographs`, () => {
    // Arrows (U+2190-21FF) are allowed by the spec; everything else pictographic is not.
    const hit = load(lang).match(/(?![←-⇿])[\p{Extended_Pictographic}✓✔◆]/u);
    assert.equal(hit, null, `found ${hit && hit[0]}`);
  });
}

test('build output has no gsap, three, lenis or hidden cursor', () => {
  for (const f of distFiles()) {
    const s = readFileSync(f, 'utf8');
    for (const bad of ['gsap', 'THREE.', 'GLTFLoader', 'lenis', 'cursor:none', 'cursor: none']) {
      assert.ok(!s.includes(bad), `${f} contains ${bad}`);
    }
  }
});
