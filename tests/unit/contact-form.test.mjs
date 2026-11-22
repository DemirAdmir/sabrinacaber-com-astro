import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate, encode, submitContact } from '../../src/scripts/contact-form.js';

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

test('encode produces urlencoded pairs', () => {
  assert.equal(encode({ 'form-name': 'contact', a: 'x y' }), 'form-name=contact&a=x%20y');
});

test('submitContact rejects on non-2xx', async () => {
  const fake = async () => ({ ok: false, status: 500 });
  await assert.rejects(submitContact({ a: '1' }, fake), /http 500/);
});

test('submitContact posts urlencoded body to / and resolves on 2xx', async () => {
  let call;
  const fake = async (url, init) => { call = { url, init }; return { ok: true, status: 200 }; };
  await submitContact({ 'form-name': 'contact', name: 'Ana' }, fake);
  assert.equal(call.url, '/');
  assert.equal(call.init.method, 'POST');
  assert.equal(call.init.headers['Content-Type'], 'application/x-www-form-urlencoded');
  assert.equal(call.init.body, 'form-name=contact&name=Ana');
});

test('submitContact propagates network errors', async () => {
  const fake = async () => { throw new TypeError('Failed to fetch'); };
  await assert.rejects(submitContact({}, fake), /Failed to fetch/);
});
