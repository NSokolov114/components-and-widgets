'use strict';

const images = document.querySelectorAll('.image-container img');
console.log(images);
const carousel = document.querySelector('.image-container');
const leftBtn = document.querySelector('#left');
const rightBtn = document.querySelector('#right');

// rightBtn.style.backgroundColor = 'green';
let idx = 0;

let interval = setInterval(run, 4500);

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
