'use strict';
window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const menuBars = document.querySelector('.menu-bars'),
    overlay = document.querySelector('.overlay'),
    navItems = document.querySelectorAll('.nav-item');

  function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('slide');
    navItems.forEach(navItem => {
      navItem.classList.toggle('slide');
    });
  }

  menuBars.addEventListener('click', toggleNav);
  navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleNav);
  });
}
