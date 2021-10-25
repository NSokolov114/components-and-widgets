'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const open_btn = document.querySelector('.open-btn'),
    close_btn = document.querySelector('.close-btn'),
    nav = document.querySelectorAll('.nav');

  open_btn.addEventListener('click', () => {
    nav.forEach(nav_el => {
      nav_el.classList.add('visible');
    });
  });

  close_btn.addEventListener('click', () => {
    nav.forEach(nav_el => {
      nav_el.classList.remove('visible');
    });
  });
}
