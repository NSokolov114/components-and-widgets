'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const submittedList = document.querySelector('.submitted-form ul');
  const urlSearchParams = new URLSearchParams(window.location.search);

  for (const [key, value] of urlSearchParams.entries()) {
    const item = document.createElement('li');

    item.innerText = `${key}=${value ? value : 'none'}`;
    submittedList.appendChild(item);
  }
}
