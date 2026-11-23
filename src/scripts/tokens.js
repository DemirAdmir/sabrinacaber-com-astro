// Reading CSS design tokens from JS.

/**
 * Converts a CSS time value to milliseconds. Handles both units because the
 * build minifier rewrites e.g. 1200ms as 1.2s.
 * @param {string} value
 * @returns {number} milliseconds, or 0 when missing/unparsable
 */
export function toMs(value) {
  const v = value.trim();
  const n = parseFloat(v);
  if (!Number.isFinite(n)) return 0;
  return v.endsWith('ms') ? n : v.endsWith('s') ? n * 1000 : n;
}
