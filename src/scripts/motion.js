// anime.js motion layer. Opt-in: nothing is hidden unless this runs and adds html.motion.
import anime from 'animejs/lib/anime.es.js';
import { morphFrame, cycleOrder, GLYPHS } from './morph.js';

const CODES = { en: 'EN', fr: 'FR', bhs: 'BHS' };
const MORPH_MS = 1200;
const HOLD_PAGE_MS = 4000;
const HOLD_OTHER_MS = 1600;

function token(name, fallback) {
  const v = parseFloat(getComputedStyle(document.documentElement).getPropertyValue(name));
  return Number.isFinite(v) ? v : fallback;
}

function randomText(text) {
  return [...text].map((c) => (c === ' ' ? ' ' : GLYPHS[Math.floor(Math.random() * GLYPHS.length)])).join('');
}

function initHero() {
  const hero = document.querySelector('.hero');
  const layer = hero && hero.querySelector('.hero__morph');
  if (!hero || !layer) return;

  const page = hero.dataset.lang;
  const phrases = {};
  hero.querySelectorAll('[data-phrase]').forEach((el) => { phrases[el.dataset.phrase] = el.textContent; });
  const routeFrom = hero.querySelector('[data-route-from]');
  const routeTo = hero.querySelector('[data-route-to]');
  const order = cycleOrder(page);

  let index = 0;
  let current = order[0];
  let visible = true;
  let pending = false;
  let timer = 0;

  const show = (text) => {
    hero.classList.add('is-morphing');
    layer.textContent = text;
  };
  const settleOnPage = () => {
    hero.classList.remove('is-morphing');
    layer.textContent = '';
  };

  const schedule = (ms) => {
    clearTimeout(timer);
    timer = window.setTimeout(() => {
      if (visible && !document.hidden) step();
      else pending = true;
    }, ms);
  };

  const step = () => {
    pending = false;
    const next = order[(index + 1) % order.length];
    const from = phrases[current];
    const to = phrases[next];
    if (routeFrom) routeFrom.textContent = CODES[current];
    if (routeTo) routeTo.textContent = CODES[next];
    show(from);
    const state = { p: 0 };
    anime({
      targets: state,
      p: 1,
      duration: MORPH_MS,
      easing: 'easeOutQuad',
      update: () => { layer.textContent = morphFrame(from, to, state.p); },
      complete: () => {
        index = (index + 1) % order.length;
        current = next;
        if (current === page) settleOnPage();
        else show(to);
        schedule(current === page ? HOLD_PAGE_MS : HOLD_OTHER_MS);
      },
    });
  };

  const resume = () => { if (pending && visible && !document.hidden) step(); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; resume(); }).observe(hero);
  document.addEventListener('visibilitychange', resume);

  show(phrases[current]);
  if (routeFrom) routeFrom.textContent = CODES[current];
  schedule(700);
}

function initReveals() {
  const slow = token('--dur-slow', 700);
  const distance = token('--reveal-distance', 1.5) * token('font-size', 16);
  let batch = [];
  let frame = 0;

  const flush = () => {
    frame = 0;
    const reveals = batch.filter((el) => el.hasAttribute('data-reveal'));
    const rules = batch.filter((el) => el.hasAttribute('data-rule'));
    batch = [];
    if (reveals.length) {
      anime({
        targets: reveals,
        opacity: [0, 1],
        translateY: [distance, 0],
        delay: anime.stagger(80),
        duration: slow,
        easing: 'easeOutCubic',
      });
    }
    if (rules.length) {
      anime({ targets: rules, scaleX: [0, 1], duration: slow, easing: 'easeOutCubic' });
    }
  };

  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      batch.push(e.target);
    }
    if (batch.length && !frame) frame = requestAnimationFrame(flush);
  }, { threshold: 0.15 });

  document.querySelectorAll('[data-reveal], [data-rule]').forEach((el) => io.observe(el));
}

function initScramble() {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (!e.isIntersecting) continue;
      io.unobserve(e.target);
      const el = e.target;
      const text = el.textContent;
      const from = randomText(text);
      const state = { p: 0 };
      anime({
        targets: state,
        p: 1,
        duration: 900,
        delay: 250,
        easing: 'easeOutQuad',
        update: () => { el.textContent = morphFrame(from, text, state.p); },
      });
    }
  }, { threshold: 0.6 });
  document.querySelectorAll('[data-scramble]').forEach((el) => io.observe(el));
}

export function initMotion() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  // Without IntersectionObserver nothing would ever be revealed, so stay static.
  if (!('IntersectionObserver' in window)) return;
  document.documentElement.classList.add('motion');
  initHero();
  initReveals();
  initScramble();
}
