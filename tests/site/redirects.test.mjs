import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

const config = JSON.parse(readFileSync('vercel.json', 'utf8'));

const EXPECTED = {
  '/about': '/#about',
  '/about.html': '/#about',
  '/services': '/#services',
  '/services.html': '/#services',
  '/contact': '/#contact',
  '/contact.html': '/#contact',
  '/index.html': '/',
};

test('old site pages redirect permanently to the matching section', () => {
  for (const [source, destination] of Object.entries(EXPECTED)) {
    const rule = config.redirects.find((r) => r.source === source);
    assert.ok(rule, `missing redirect for ${source}`);
    assert.equal(rule.destination, destination);
    assert.equal(rule.permanent, true);
  }
});
