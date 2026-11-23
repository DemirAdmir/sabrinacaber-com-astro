import { test } from 'node:test';
import assert from 'node:assert/strict';
import { toMs } from '../../src/scripts/tokens.js';

test('toMs reads milliseconds and seconds (minifiers rewrite 1200ms as 1.2s)', () => {
  assert.equal(toMs('1200ms'), 1200);
  assert.equal(toMs(' 1.2s'), 1200);
  assert.equal(toMs('.7s'), 700);
  assert.equal(toMs('80ms'), 80);
});

test('toMs returns 0 for missing or unparsable values', () => {
  assert.equal(toMs(''), 0);
  assert.equal(toMs('auto'), 0);
});
