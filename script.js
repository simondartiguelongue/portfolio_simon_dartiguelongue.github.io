/* ============================================================
   LANGUE — bascule FR / EN
============================================================ */
let lang = 'fr';

function toggleLang() {
  lang = lang === 'fr' ? 'en' : 'fr';
  document.getElementById('langBtn').textContent = lang === 'fr' ? 'EN' : 'FR';
  document.querySelectorAll('[data-fr]').forEach(el => {
    el.innerHTML = el.getAttribute('data-' + lang);
  });
  document.documentElement.lang = lang;
}

/* ============================================================
   SCROLL REVEAL
============================================================ */
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 100);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll('.card-stagger').forEach(el => observer.observe(el));
