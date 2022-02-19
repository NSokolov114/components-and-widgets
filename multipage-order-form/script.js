'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  // fetching random user data to fill the form
  async function getRndUsers() {
    let api;

    try {
      api = await fetch(`https://randomuser.me/api/`);
      const data = await api.json();
      return data.results[0];
    } catch (err) {
      console.log(`Error fetching rnd users data: ${err.message}`);
    }
  }

  const form = document.querySelector('.signup-form');
  const fillBtn = document.querySelector('.fill-form-btn');
  // const username = form.querySelector('#signup-form__input-username');
  // const username = form.querySelector('#signup-form__input-username');
  // const username = form.querySelector('#signup-form__input-username');
  // const username = form.querySelector('#signup-form__input-username');
  // const username = form.querySelector('#signup-form__input-username');
  // const username = form.querySelector('#signup-form__input-username');
  // const username = form.querySelector('#signup-form__input-username');
  const inputs = form.querySelectorAll('input');

  const inputKeys = [
    'username',
    'email',
    'phone',
    'address',
    'city',
    'state',
    'zip',
  ];

  async function fillForm() {
    const rndUser = await getRndUsers();

    const rndUserArr = [
      `${rndUser.name.first} ${rndUser.name.last}`,
      rndUser.email,
      rndUser.phone,
      `${rndUser.location.street.number} ${rndUser.location.street.name}`,
      rndUser.location.city,
      rndUser.location.state,
      typeof rndUser.location.postcode === 'number'
        ? rndUser.location.postcode
        : 12345,
    ];

    inputKeys.forEach((_, i) => {
      inputs[i].value = rndUserArr[i];
    });
  }

  fillBtn && fillBtn.addEventListener('click', fillForm);

  if (!fillBtn) {
    const params = new Proxy(new URLSearchParams(window.location.search), {
      get: (searchParams, prop) => searchParams.get(prop),
    });
    console.log(params[inputKeys[0]]);

    inputKeys.forEach((key, i) => {
      inputs[i].value = params[key];

      // tmp, add hidden in HTML
      inputs[i].closest('p').classList.add('hidden');
    });
  }
}
