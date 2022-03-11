'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const container = document.querySelector('.container');

  const side = 50;
  const defaultColor = 'rgb(39, 39, 39)';
  const width = container.offsetWidth;
  const height = container.offsetHeight;
  const numSquares = (width * height) / side ** 2 + 150;

  function setColor(e) {
    const color = getRandomColor();

    e.style.background = color;
    e.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
  }

  function removeColor(e) {
    e.style.background = defaultColor;
    e.style.boxShadow = `0 0 2px #000`;
  }

  function getRandomColor(e) {
    return `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(
      Math.random() * 256
    )}, ${Math.floor(Math.random() * 256)})`;
  }

  for (let i = 0; i < numSquares; i++) {
    const square = document.createElement('div');

    square.classList.add('square');
    square.addEventListener('mouseover', () => {
      setColor(square);
    });
    square.addEventListener('mouseout', () => {
      removeColor(square);
    });
    container.appendChild(square);
  }
}
