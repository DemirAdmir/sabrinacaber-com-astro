import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load, LANGS } from './_load.mjs';

const URL = { en: '/', fr: '/fr/', bhs: '/bhs/' };
const HL = { en: 'en', fr: 'fr', bhs: 'bs' };

function header(html) {
  return html.match(/<header[\s\S]*?<\/header>/)[0];
}

for (const lang of LANGS) {
  test(`${lang}: language switch marks current and links the others`, () => {
    const h = header(load(lang));
    assert.match(h, new RegExp(`<span[^>]*aria-current="page"[^>]*>\\s*${lang.toUpperCase()}\\s*<`));
    for (const other of LANGS.filter((l) => l !== lang)) {
      const a = h.match(new RegExp(`<a[^>]*href="${URL[other]}"[^>]*>\\s*${other.toUpperCase()}\\s*<`));
      assert.ok(a, `missing link to ${other}`);
      assert.match(a[0], new RegExp(`hreflang="${HL[other]}"`));
      assert.match(a[0], new RegExp(`lang="${HL[other]}"`));
    }
  });

  test(`${lang}: menu button is a disclosure for the mobile menu`, () => {
    const h = header(load(lang));
    const btn = h.match(/<button[^>]*>/)[0];
    assert.match(btn, /aria-expanded="false"/);
    assert.match(btn, /aria-controls="mobile-menu"/);
    assert.match(h, /id="mobile-menu"/);
  });

  test(`${lang}: nav links include process`, () => {
    assert.match(header(load(lang)), /href="#process"/);
  });
}
