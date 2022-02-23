'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputs = document.querySelectorAll('.signup-form input');
  const urlSearchParams = new URLSearchParams(window.location.search);

  for (const [key, value] of urlSearchParams.entries()) {
    for (let i = 0; i < inputs.length; i++) {
      if (inputs[i].id.includes(key)) {
        inputs[i].value = value;
        inputs[i].closest('p').classList.add('hidden');
        break;
      }
    }
  }
}
