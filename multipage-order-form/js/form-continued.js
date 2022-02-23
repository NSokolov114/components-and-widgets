'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const form = document.querySelector('.signup-form');
  const urlSearchParams = new URLSearchParams(window.location.search);
  let html = '';

  for (const [key, value] of urlSearchParams.entries()) {
    html += `<input type="hidden" name="${key}" value="${value}">`;
  }

  form.insertAdjacentHTML('afterbegin', html);
}
