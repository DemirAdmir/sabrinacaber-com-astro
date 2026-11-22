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

const STEP1 = { en: 'Brief', fr: 'Brief', bhs: 'Upit' };
const NOTE = {
  en: 'confidentiality of my clients',
  fr: 'confidentialité de mes clients',
  bhs: 'povjerljivost mojih klijenata',
};

for (const lang of LANGS) {
  test(`${lang}: process section lists four steps and the confidentiality note`, () => {
    const s = section(load(lang), 'process');
    assert.match(s, /aria-labelledby="process-title"/);
    const ol = s.match(/<ol[^>]*class="process__steps"[\s\S]*?<\/ol>/);
    assert.ok(ol, 'no steps list');
    assert.equal(count(ol[0], /<li[^>]*class="step"/g), 4);
    assert.match(ol[0], new RegExp(`<h3[^>]*>${STEP1[lang]}<`));
    assert.ok(s.includes(NOTE[lang]), 'missing note');
  });
}

test('testimonials component is gone', () => {
  assert.equal(existsSync('src/components/Testimonials.astro'), false);
});

const BADGE = {
  en: ['Experience', 'Education'],
  fr: ['Expérience', 'Formation'],
  bhs: ['Iskustvo', 'Obrazovanje'],
};

for (const lang of LANGS) {
  test(`${lang}: experience timeline has six labelled entries without item colours`, () => {
    const s = section(load(lang), 'work');
    assert.match(s, /aria-labelledby="work-title"/);
    assert.equal(count(s, /<li[^>]*class="entry"/g), 6);
    assert.equal(count(s, /class="entry__year"/g), 6);
    assert.equal(count(s, new RegExp(`class="entry__type[^"]*"[^>]*>${BADGE[lang][0]}<`, 'g')), 4);
    assert.equal(count(s, new RegExp(`class="entry__type[^"]*"[^>]*>${BADGE[lang][1]}<`, 'g')), 2);
    assert.ok(!/style="[^"]*#[0-9a-f]{3,6}/i.test(s), 'inline item colour found');
  });
}

const FORM_LANG = { en: 'en', fr: 'fr', bhs: 'bhs' };

for (const lang of LANGS) {
  test(`${lang}: contact form is wired for Web3Forms, not Netlify`, () => {
    const s = section(load(lang), 'contact');
    const form = s.match(/<form[^>]*>/)[0];
    assert.match(form, /name="contact"/);
    assert.match(form, /data-key="[^"]*"/);
    assert.doesNotMatch(form, /netlify/);
    assert.doesNotMatch(s, /name="form-name"/);
    assert.match(s, new RegExp(`<input[^>]*type="hidden"[^>]*name="lang"[^>]*value="${FORM_LANG[lang]}"`));
    assert.match(s, /<input[^>]*type="hidden"[^>]*name="subject"[^>]*value="[^"]+"/);
    assert.match(s, /<input[^>]*type="checkbox"[^>]*name="botcheck"/);
  });

  test(`${lang}: contact inputs are labelled and point to their error text`, () => {
    const s = section(load(lang), 'contact');
    for (const id of ['cf-name', 'cf-email', 'cf-message']) {
      assert.match(s, new RegExp(`<label[^>]*for="${id}"`));
      const field = s.match(new RegExp(`<(input|textarea)[^>]*id="${id}"[^>]*>`))[0];
      assert.match(field, new RegExp(`aria-describedby="${id}-error"`));
      assert.match(s, new RegExp(`id="${id}-error"`));
    }
    assert.match(s, /role="status"/);
  });
}

for (const lang of LANGS) {
  test(`${lang}: contact embeds the 30-minute Calendly booking calendar`, () => {
    const s = section(load(lang), 'contact');
    const frame = s.match(/<iframe[^>]*>/);
    assert.ok(frame, 'no booking iframe');
    assert.match(frame[0], /src="https:\/\/calendly\.com\/sabrinacaber\/30min[^"]*"/);
    assert.match(frame[0], /title="[^"]+"/);
    assert.match(frame[0], /loading="lazy"/);
  });
}
