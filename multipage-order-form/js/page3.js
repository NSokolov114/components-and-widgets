'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const submittedList = document.querySelector('.submitted-form ul');
  const inputKeys = [
    'username',
    'email',
    'phone',
    'address',
    'city',
    'state',
    'zip',
    'food-allergies',
    'frequency',
    'package-size',
  ];

  // get data from the query string
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  inputKeys.forEach(key => {
    const item = document.createElement('li');

    item.innerText = `${key}=${params[key] ? params[key] : 'none'}`;
    submittedList.appendChild(item);
  });
}
