// ===============================
// NEXT SOLUTION — SCRIPT.JS
// Interações profissionais e suaves
// ===============================

// ===== MENU MOBILE =====
const menuBtn = document.createElement('div');
menuBtn.classList.add('menu-btn');
menuBtn.innerHTML = '<span></span><span></span><span></span>';
document.querySelector('.header .container').appendChild(menuBtn);

const nav = document.querySelector('.nav');

menuBtn.addEventListener('click', () => {
  nav.classList.toggle('active');
  menuBtn.classList.toggle('open');
});

// ===== SCROLL SUAVE =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 80,
        behavior: 'smooth'
      });
      nav.classList.remove('active');
      menuBtn.classList.remove('open');
    }
  });
});

// ===== ANIMAÇÃO DE ENTRADA (FADE-IN) =====
const elements = document.querySelectorAll('.section, .service-card, .case, .stat');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// ===== HEADER TRANSPARENTE AO ROLAR =====
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 50) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
});
