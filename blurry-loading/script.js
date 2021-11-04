'use strict';

const loadText = document.querySelector('.loading-text'),
  bg = document.querySelector('.bg');

let load = 0,
  int = setInterval(blurring, 30);

function blurring() {
  load++;
  if (load > 99) {
    clearInterval(int);
  }
  loadText.innerText = `${load}%`;
  loadText.style.opacity = (100 - load) / 100;
  if (load % 4 === 0) {
    bg.style.filter = `blur(${50 - load / 2}px)`;
  }
}
