import { test } from 'node:test';
import assert from 'node:assert/strict';
import { existsSync } from 'node:fs';
import { load, LANGS, section } from './_load.mjs';

const FACT_VALUES = {
  en: ['Since 2015', '3 languages', 'Certified', 'MA'],
  fr: ['Depuis 2015', '3 langues', 'Certifiée', 'Master'],
  bhs: ['Od 2015.', '3 jezika', 'Certificirana', 'MA'],
};

const count = (s, re) => (s.match(re) || []).length;

for (const lang of LANGS) {
  test(`${lang}: about shows four verified facts, skills and the confidentiality note`, () => {
    const about = section(load(lang), 'about');
    assert.equal(count(about, /class="fact"/g), 4);
    for (const v of FACT_VALUES[lang]) assert.ok(about.includes(`>${v}<`), `missing fact ${v}`);
    assert.match(about, /class="about__skills"/);
    assert.match(about, /class="about__note"/);
  });

  test(`${lang}: services is an ordered index of five with full content`, () => {
    const s = section(load(lang), 'services');
    const ol = s.match(/<ol[^>]*class="services__list"[\s\S]*?<\/ol>/);
    assert.ok(ol, 'no services list');
    assert.equal(count(ol[0], /<li[^>]*class="service"/g), 5);
    assert.equal(count(ol[0], /<h3[\s>]/g), 5);
    assert.equal(count(ol[0], /class="service__desc"/g), 5);
    assert.equal(count(ol[0], /class="service__tags"/g), 5);
    assert.match(s, /<a[^>]*href="#contact"/);
  });

  test(`${lang}: every section is labelled by its heading and carries a decorative second-language line`, () => {
    const html = load(lang);
    for (const id of ['about', 'services']) {
      const s = section(html, id);
      assert.match(s, new RegExp(`aria-labelledby="${id}-title"`));
      assert.match(s, new RegExp(`<h2[^>]*id="${id}-title"`));
      assert.match(s, /class="section-alt"[^>]*aria-hidden="true"/);
    }
  });
}
