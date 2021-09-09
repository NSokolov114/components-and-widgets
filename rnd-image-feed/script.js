'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const container = document.querySelector('.container');

  const width = window.innerWidth;
  const height = window.innerHeight;

  const x = Math.round(width / 500);
  const y = Math.round(height / 500);

  for (let i = 0; i < x * y; i++) {
    const newImg = document.createElement('img');
    newImg.src = `https://source.unsplash.com/user/nsokolov114/${
      width / x + i
    }x${height / y}`;
    newImg.style.width = `${100 / x}%`;
    container.appendChild(newImg);
  }
}
