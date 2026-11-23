import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate, submitContact } from '../../src/scripts/contact-form.js';

test('validate flags blank name, malformed email and blank message', () => {
  assert.deepEqual(validate({ name: ' ', email: 'a@b', message: '' }), {
    name: 'name',
    email: 'email',
    message: 'message',
  });
});

test('validate accepts a complete submission', () => {
  assert.deepEqual(validate({ name: 'Ana', email: 'ana@firma.ba', message: 'Hello' }), {});
});

const okJson = (body) => async () => ({ ok: true, status: 200, json: async () => body });

test('submitContact refuses to send without an access key', async () => {
  let called = false;
  const fake = async () => { called = true; return { ok: true, status: 200, json: async () => ({ success: true }) }; };
  await assert.rejects(submitContact({ name: 'Ana' }, '', fake), /not configured/);
  assert.equal(called, false);
});

test('submitContact rejects on non-2xx', async () => {
  const fake = async () => ({ ok: false, status: 500, json: async () => ({}) });
  await assert.rejects(submitContact({ a: '1' }, 'key', fake), /http 500/);
});

test('submitContact rejects when the service reports failure', async () => {
  await assert.rejects(submitContact({ a: '1' }, 'key', okJson({ success: false, message: 'Invalid key' })), /Invalid key/);
});

test('submitContact posts JSON with the access key to Web3Forms and resolves on success', async () => {
  let call;
  const fake = async (url, init) => { call = { url, init }; return { ok: true, status: 200, json: async () => ({ success: true }) }; };
  await submitContact({ name: 'Ana', email: 'ana@firma.ba' }, 'abc-123', fake);
  assert.equal(call.url, 'https://api.web3forms.com/submit');
  assert.equal(call.init.method, 'POST');
  assert.equal(call.init.headers['Content-Type'], 'application/json');
  assert.deepEqual(JSON.parse(call.init.body), { name: 'Ana', email: 'ana@firma.ba', access_key: 'abc-123' });
});

test('submitContact propagates network errors', async () => {
  const fake = async () => { throw new TypeError('Failed to fetch'); };
  await assert.rejects(submitContact({}, 'key', fake), /Failed to fetch/);
});

test('guardInFlight ignores calls while a submission is running', async () => {
  const { guardInFlight } = await import('../../src/scripts/contact-form.js');
  let calls = 0;
  let release;
  const guarded = guardInFlight(() => { calls++; return new Promise((r) => { release = r; }); });
  const first = guarded();
  const second = guarded();
  assert.equal(calls, 1);
  release();
  await first; await second;
  guarded(); release();
  assert.equal(calls, 2);
});
