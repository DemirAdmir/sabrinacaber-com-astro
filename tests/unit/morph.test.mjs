import { test } from 'node:test';
import assert from 'node:assert/strict';
import { morphFrame, cycleOrder, GLYPHS } from '../../src/scripts/morph.js';

const zero = () => 0;
const one = () => 0.999999;

test('progress 0 returns the source', () => {
  assert.equal(morphFrame('abc', 'xyz', 0, Math.random), 'abc');
});

test('progress 1 returns the target', () => {
  assert.equal(morphFrame('abc', 'xyz', 1, Math.random), 'xyz');
});

test('progress 1 returns the target across different lengths', () => {
  assert.equal(morphFrame('Les mots', 'Words are', 1, Math.random), 'Words are');
  assert.equal(morphFrame('Les mots sont mon métier.', 'Words are my craft.', 1, one), 'Words are my craft.');
});

test('target spaces are preserved mid-morph', () => {
  const out = morphFrame('abcdefgh', 'ab cd ef', 0.5, zero);
  for (const i of [2, 5]) assert.equal(out[i], ' ', out);
});

test('mid-morph length lies between both lengths', () => {
  const out = morphFrame('abcdefghij', 'xyz', 0.5, zero);
  assert.ok(out.length <= 10 && out.length >= 3, out);
});

test('unsettled characters come from GLYPHS', () => {
  const out = morphFrame('aaaaaaaaaa', 'bbbbbbbbbb', 0.1, zero);
  for (const ch of out) assert.ok(ch === 'b' || GLYPHS.includes(ch), ch);
});

test('cycle order per page language', () => {
  assert.deepEqual(cycleOrder('en'), ['fr', 'en', 'bhs', 'en']);
  assert.deepEqual(cycleOrder('fr'), ['en', 'fr', 'bhs', 'fr']);
  assert.deepEqual(cycleOrder('bhs'), ['fr', 'bhs', 'en', 'bhs']);
});

test('mid-morph frames never build a word longer than the longest real word', () => {
  const phrases = ['Words are my craft.', 'Les mots sont mon métier.', 'Riječi su moj zanat.'];
  const longest = Math.max(...phrases.flatMap((p) => p.split(' ').map((w) => w.length)));
  for (const from of phrases) for (const to of phrases) {
    if (from === to) continue;
    for (let p = 0.01; p < 1; p += 0.01) {
      const frame = morphFrame(from, to, p, Math.random);
      const run = Math.max(...frame.split(' ').map((w) => w.length));
      assert.ok(run <= longest, `${from} -> ${to} @${p.toFixed(2)}: "${frame}"`);
    }
  }
});
