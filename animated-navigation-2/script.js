'use strict';
window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const menuBars = document.querySelector('.menu-bars');
  const overlay = document.querySelector('.overlay');
  const navItems = document.querySelectorAll('.nav-item');

  menuBars.addEventListener('click', toggleNav);
  navItems.forEach(navItem => {
    navItem.addEventListener('click', toggleNav);
  });

  function toggleNav() {
    menuBars.classList.toggle('change');
    overlay.classList.toggle('overlay-slide');
    navItems.forEach(navItem => {
      navItem.classList.toggle('overlay-slide');
    });
  }
}
