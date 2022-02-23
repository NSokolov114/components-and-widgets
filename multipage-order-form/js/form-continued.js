'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const prevInputsContainer = document.querySelector('.signup-form__previous-inputs');
  const urlSearchParams = new URLSearchParams(window.location.search);

  for (const [key, value] of urlSearchParams.entries()) {
    const input = document.createElement('input');

    input.type = 'hidden';
    input.name = key;
    input.value = value;
    prevInputsContainer.appendChild(input);
  }
}
