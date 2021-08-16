'use strict';

const container = document.querySelector('.container'),
  colors = [
    'red',
    'blue',
    'green',
    'orange',
    'yellow',
    'white',
    'purple',
    'black',
    'turquoise',
  ],
  SQUARES = 500,
  defaultColor = 'rgb(39, 39, 39)';

for (let i = 0; i < SQUARES; i++) {
  const square = document.createElement('div');
  square.classList.add('square');
  container.appendChild(square);
  square.addEventListener('mouseover', () => {
    setColor(square);
  });
  square.addEventListener('mouseout', () => {
    removeColor(square);
  });
}

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
  return colors[Math.floor(Math.random() * colors.length)];
}
