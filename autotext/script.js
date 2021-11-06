'use strict';

const textEl = document.getElementById('text'),
  speedEl = document.getElementById('speed'),
  text = 'Hello, World!';

let index = 1,
  speed = 300 / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, index);
  index++;
  if (index > text.length) {
    index = 1;
  }
  setTimeout(writeText, speed);
}

writeText();

speedEl.addEventListener('input', e => (speed = 300 / e.target.value));
