'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputs = document.querySelectorAll('.signup-form input');
  const inputKeys = ['username', 'email', 'phone', 'address', 'city', 'state', 'zip'];

  // get data from the query string
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  inputKeys.forEach((key, i) => {
    inputs[i].value = params[key];
  });
}
