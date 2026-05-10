/* DJ's Mobile Rust & Mechanical — main.js
   Minimal vanilla JS. Hamburger menu only. */

(function () {
  'use strict';

  const hamburger = document.getElementById('hamburger');
  const body = document.body;

  if (!hamburger) return;

  // Toggle nav open/closed
  hamburger.addEventListener('click', function () {
    const isOpen = body.classList.toggle('nav-open');
    hamburger.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  });

  // Close mobile nav when a link is tapped
  const mobileLinks = document.querySelectorAll('.nav__mobile-menu a');
  mobileLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
    });
  });

  // Close nav on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      hamburger.setAttribute('aria-expanded', 'false');
      hamburger.focus();
    }
  });
})();
