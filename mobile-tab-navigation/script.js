'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const images = document.querySelectorAll('.content');
  const menuItems = document.querySelectorAll('li');

  for (let i = 0; i < images.length; i++) {
    menuItems[i].addEventListener('click', () => {
      for (let j = 0; j < images.length; j++) {
        if (i !== j) {
          images[j].classList.remove('show');
          menuItems[j].classList.remove('active');
        }
      }
      images[i].classList.add('show');
      menuItems[i].classList.add('active');
    });
  }
}
