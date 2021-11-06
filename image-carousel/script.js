'use strict';

const images = document.querySelectorAll('.image-container img'),
  carousel = document.querySelector('.image-container'),
  leftBtn = document.querySelector('#left'),
  rightBtn = document.querySelector('#right');

let idx = 0,
  interval = setInterval(run, 4500);

function run() {
  idx++;
  changeImage();
}

function changeImage() {
  if (idx > images.length - 1) {
    idx = 0;
  } else if (idx < 0) {
    idx = images.length - 1;
  }

  carousel.style.transform = `translateX(${-idx * 500}px)`;
}

function resetInterval() {
  clearInterval(interval);
  interval = setInterval(run, 5000);
}

rightBtn.addEventListener('click', function () {
  idx++;
  changeImage();
  resetInterval();
});

leftBtn.addEventListener('click', function () {
  idx--;
  changeImage();
  resetInterval();
});
