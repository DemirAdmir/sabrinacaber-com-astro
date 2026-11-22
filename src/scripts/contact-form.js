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

/** @param {Record<string, string>} data */
export function encode(data) {
  return Object.entries(data)
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
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

/**
 * Posts to Netlify Forms. Resolves only on a 2xx response.
 * @param {Record<string, string>} data
 * @param {typeof fetch} fetchImpl
 */
export async function submitContact(data, fetchImpl = fetch) {
  const res = await fetchImpl('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: encode(data),
  });
  if (!res.ok) throw new Error('http ' + res.status);
}
