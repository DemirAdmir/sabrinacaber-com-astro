import { test } from 'node:test';
import assert from 'node:assert/strict';
import { load, LANGS } from './_load.mjs';

const PHRASE = {
  en: 'Words are my craft.',
  fr: 'Les mots sont mon métier.',
  bhs: 'Riječi su moj zanat.',
};

for (const lang of LANGS) {
  test(`${lang}: h1 carries the page-language phrase`, () => {
    const h1 = load(lang).match(/<h1[\s\S]*?<\/h1>/)[0];
    assert.ok(h1.includes(PHRASE[lang]), h1);
  });

  test(`${lang}: no unverified stats or testimonials`, () => {
    const html = load(lang);
    for (const bad of ['15+', '20+', '3+', 'Happy Clients', 'testimonial']) {
      assert.ok(!html.includes(bad), `found ${bad}`);
    }
  });

  test(`${lang}: states the verified start year`, () => {
    assert.ok(load(lang).includes('2015'));
  });
}
