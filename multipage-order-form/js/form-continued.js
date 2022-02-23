'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputs = document.querySelectorAll('.signup-form input');
  const urlSearchParams = new URLSearchParams(window.location.search);

  for (const [key, value] of urlSearchParams.entries()) {
    inputs.forEach(input => {
      if (input.id.includes(key)) {
        input.value = value;
        input.closest('p').classList.add('hidden');
      }
    });
  }
}
