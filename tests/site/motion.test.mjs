import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { load, LANGS, distFiles } from './_load.mjs';

const css = () => distFiles().filter((f) => f.endsWith('.css')).map((f) => readFileSync(f, 'utf8')).join('\n')
  + LANGS.map((l) => (load(l).match(/<style[^>]*>[\s\S]*?<\/style>/g) || []).join('\n')).join('\n');

test('no-js content visible: reveal hiding is scoped to html.motion', () => {
  const all = css();
  const rules = all.match(/[^{}]*\[data-reveal\][^{}]*\{[^}]*opacity:\s*0/g) || [];
  assert.ok(rules.length > 0, 'expected a reveal-hiding rule');
  for (const r of rules) assert.match(r.trim(), /^html\.motion/, r);
});

for (const lang of LANGS) {
  test(`${lang}: html starts as no-js`, () => {
    assert.match(load(lang), /<html[^>]*class="no-js"/);
  });

  test(`${lang}: sections render in order`, () => {
    const html = load(lang);
    const ids = [...html.matchAll(/<section[^>]*id="([^"]+)"/g)].map((m) => m[1]);
    assert.deepEqual(ids, ['home', 'about', 'services', 'process', 'work', 'contact']);
  });

  test(`${lang}: motion script is bundled`, () => {
    const html = load(lang);
    const srcs = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) => m[1]);
    const bundled = srcs.map((s) => readFileSync('dist' + s, 'utf8')).join('\n');
    assert.ok(bundled.includes('prefers-reduced-motion'), 'motion guard missing from bundle');
  });
}

test('motion opts in only when IntersectionObserver exists', () => {
  const html = load('en');
  const srcs = [...html.matchAll(/<script[^>]*src="([^"]+)"/g)].map((m) => m[1]);
  const bundled = srcs.map((s) => readFileSync('dist' + s, 'utf8')).join('\n');
  assert.match(bundled, /"IntersectionObserver"\s*in\s*window/);
});
