// Contact form logic. Pure apart from the injected fetch.

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * @param {{ name: string; email: string; message: string }} fields
 * @returns {{ name?: 'name'; email?: 'email'; message?: 'message' }}
 */
export function validate({ name, email, message }) {
  const errors = {};
  if (!name.trim()) errors.name = 'name';
  if (!EMAIL.test(email.trim())) errors.email = 'email';
  if (!message.trim()) errors.message = 'message';
  return errors;
}

/**
 * Wraps an async function so calls made while one is still running are ignored
 * (Enter pressed again during a send must not post twice).
 * @template T
 * @param {() => Promise<T>} fn
 * @returns {() => Promise<T | undefined>}
 */
export function guardInFlight(fn) {
  let running = false;
  return async () => {
    if (running) return undefined;
    running = true;
    try { return await fn(); } finally { running = false; }
  };
}

const ENDPOINT = 'https://api.web3forms.com/submit';

/**
 * Sends the message through Web3Forms. Resolves only when the service confirms delivery.
 * @param {Record<string, string>} data
 * @param {string} accessKey Web3Forms public access key (PUBLIC_WEB3FORMS_KEY at build time)
 * @param {typeof fetch} fetchImpl
 */
export async function submitContact(data, accessKey, fetchImpl = fetch) {
  if (!accessKey) throw new Error('contact form not configured');
  const res = await fetchImpl(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({ ...data, access_key: accessKey }),
  });
  if (!res.ok) throw new Error('http ' + res.status);
  const body = await res.json();
  if (!body.success) throw new Error(body.message || 'delivery failed');
}
