import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load, LANGS, section } from './_load.mjs';

const PHRASES = ['Words are my craft.', 'Les mots sont mon métier.', 'Riječi su moj zanat.'];
const PAGE = { en: PHRASES[0], fr: PHRASES[1], bhs: PHRASES[2] };

for (const lang of LANGS) {
  test(`${lang}: hero reserves the longest phrase`, () => {
    const hero = section(load(lang), 'home');
    const h1 = hero.match(/<h1[\s\S]*?<\/h1>/)[0];
    assert.match(h1, new RegExp(`class="hero__phrase"[^>]*>${PAGE[lang].replace('.', '\\.')}<`));
    assert.match(h1, /class="hero__morph"[^>]*aria-hidden="true"/);
    for (const p of PHRASES) {
      if (p === PAGE[lang]) continue;
      const sizer = h1.match(new RegExp(`<span[^>]*class="hero__sizer"[^>]*>${p.replace('.', '\\.')}<`));
      assert.ok(sizer, `missing sizer for ${p}`);
      assert.match(sizer[0], /aria-hidden="true"/);
    }
  });

  test(`${lang}: portrait has intrinsic size and priority`, () => {
    const img = section(load(lang), 'home').match(/<img[^>]*>/)[0];
    assert.match(img, /width="\d+"/);
    assert.match(img, /height="\d+"/);
    assert.match(img, /alt="Sabrina Caber"/);
    assert.match(img, /fetchpriority="high"/);
  });

  test(`${lang}: hero CTAs go to contact and services`, () => {
    const hero = section(load(lang), 'home');
    assert.match(hero, /<a[^>]*href="#contact"[^>]*class="btn btn--primary"/);
    assert.match(hero, /<a[^>]*href="#services"[^>]*class="btn btn--ghost"/);
  });
}
