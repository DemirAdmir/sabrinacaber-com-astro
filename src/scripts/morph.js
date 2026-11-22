// Letter-by-letter morph between two phrases. Pure: no DOM, no timers.

/** Characters shown while a letter is still "in translation". */
export const GLYPHS = 'abcdefghijklmnopqrstuvwxyzéèàçčćšžđ';

/** Stable per-index jitter in [0, 1) so a settled letter never flickers back. */
function jitter(i) {
  const x = Math.sin((i + 1) * 12.9898) * 43758.5453;
  return x - Math.floor(x);
}

/**
 * @param {string} from
 * @param {string} to
 * @param {number} progress 0..1
 * @param {() => number} rand random source in [0, 1) for glyph choice
 * @returns {string}
 */
export function morphFrame(from, to, progress, rand = Math.random) {
  if (progress <= 0) return from;
  if (progress >= 1) return to;
  const length = Math.round(from.length + (to.length - from.length) * progress);
  let out = '';
  for (let i = 0; i < length; i++) {
    const target = to[i];
    if (target === ' ') { out += ' '; continue; }
    const threshold = (0.85 * (i + 1)) / to.length + 0.15 * jitter(i);
    if (target !== undefined && progress >= threshold) out += target;
    // Unsettled: keep the source's word breaks too, so no frame forms a word
    // longer than either phrase has (that would wrap and shift the layout).
    else if (from[i] === ' ') out += ' ';
    else out += GLYPHS[Math.floor(rand() * GLYPHS.length)];
  }
  return out;
}

/**
 * Order of languages the hero visits, always returning to the page language.
 * @param {'en'|'fr'|'bhs'} page
 * @returns {Array<'en'|'fr'|'bhs'>}
 */
export function cycleOrder(page) {
  const others = { en: ['fr', 'bhs'], fr: ['en', 'bhs'], bhs: ['fr', 'en'] }[page];
  return [others[0], page, others[1], page];
}
