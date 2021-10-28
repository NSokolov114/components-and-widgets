'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const toggleSwitch = document.querySelector('.theme-switch__checkbox');
  const nav = document.getElementById('nav');
  const toggleIcon = document.getElementById('toggle-icon');
  const image1 = document.getElementById('image1');
  const image2 = document.getElementById('image2');
  const image3 = document.getElementById('image3');
  const textBox = document.getElementById('text-box');

  function imgMode(color) {
    image1.src = `./img/undraw_proud_coder_${color}.svg`;
    image2.src = `./img/undraw_feeling_proud_${color}.svg`;
    image3.src = `./img/undraw_conceptual_idea_${color}.svg`;
  }

  function darkMode() {
    nav.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    toggleIcon.children[0].textContent = 'Dark';
    toggleIcon.children[1].classList.replace('fa-sun', 'fa-moon');

    imgMode('dark');
  }

  function lightMode() {
    nav.style.backgroundColor = 'rgb(255 255 255 / 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0 / 50%)';
    toggleIcon.children[0].textContent = 'Light';
    toggleIcon.children[1].classList.replace('fa-moon', 'fa-sun');
    imgMode('light');
  }

  function switchTheme(e) {
    if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      darkMode();
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
      lightMode();
    }
  }

  toggleSwitch.addEventListener('change', switchTheme);
}
