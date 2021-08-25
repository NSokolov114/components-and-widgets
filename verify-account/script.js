'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const codes = document.querySelectorAll('.code'),
    container = document.querySelector('.container'),
    title = container.querySelector('h2'),
    subtitle = container.querySelector('p');

  codes[0].focus();

  codes.forEach((code, idx) => {
    code.addEventListener('keydown', e => {
      if (e.key >= 0 && e.key <= 9) {
        codes[idx].value = '';
        if (idx < codes.length - 1)
          setTimeout(() => codes[idx + 1].focus(), 10);
        setTimeout(() => success(), 15);
      } else if (e.key === 'Backspace') {
        setTimeout(() => codes[idx - 1].focus(), 10);
      }
    });
  });
  // codes[1].disabled = true;
  function success() {
    let full = 0;
    for (let i = 0; i < codes.length; i++) {
      if (codes[i].value !== '') full++;
    }
    if (full > 5) {
      for (let i = 0; i < codes.length; i++) {
        codes[i].disabled = true;
        container.style.borderColor = 'green';
        title.innerHTML = 'Your email was successfully verified!';
        title.style.color = 'green';
        subtitle.innerHTML =
          'Congratulations! You will be redirected to the home page in _999_ seconds.';
      }
    }
  }
}
