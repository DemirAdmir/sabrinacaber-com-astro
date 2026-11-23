// anime.js motion layer. Opt-in: nothing is hidden unless this runs and adds html.motion.
import anime from 'animejs/lib/anime.es.js';
import { morphFrame, cycleOrder, GLYPHS } from './morph.js';
import { toMs } from './tokens.js';

const CODES = { en: 'EN', fr: 'FR', bhs: 'BHS' };

const css = (name) => getComputedStyle(document.documentElement).getPropertyValue(name);

/** A duration token in milliseconds; 0 if missing, which just makes motion instant. */
const ms = (name) => toMs(css(name));

/** A plain numeric token (rem or px value without its unit); 0 if missing. */
function num(name) {
  const v = parseFloat(css(name));
  return Number.isFinite(v) ? v : 0;
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
      duration: ms('--dur-morph'),
      easing: 'easeOutQuad',
      update: () => { layer.textContent = morphFrame(from, to, state.p); },
      complete: () => {
        index = (index + 1) % order.length;
        current = next;
        if (current === page) settleOnPage();
        else show(to);
        schedule(ms(current === page ? '--dur-hold' : '--dur-hold-short'));
      },
    });
  };

  const resume = () => { if (pending && visible && !document.hidden) step(); };
  new IntersectionObserver(([e]) => { visible = e.isIntersecting; resume(); }).observe(hero);
  document.addEventListener('visibilitychange', resume);

  show(phrases[current]);
  if (routeFrom) routeFrom.textContent = CODES[current];
  schedule(ms('--dur-slow'));
}

function initReveals() {
  const slow = ms('--dur-slow');
  const distance = num('--reveal-distance') * num('font-size');
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
        delay: anime.stagger(ms('--stagger')),
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
        duration: ms('--dur-scramble'),
        delay: ms('--delay-scramble'),
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
