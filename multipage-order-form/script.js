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

  // const inputNames = ['username', 'email', 'phone', 'address', 'city', 'state', 'zip'];

  async function fillForm() {
    const rndUser = await getRndUsers();

    inputs[0].value = `${rndUser.name.first} ${rndUser.name.last}`;
    inputs[1].value = rndUser.email;
    inputs[2].value = rndUser.phone;
    inputs[3].value = `${rndUser.location.street.number} ${rndUser.location.street.name}`;
    inputs[4].value = rndUser.location.city;
    inputs[5].value = rndUser.location.state;
    inputs[6].value =
      typeof rndUser.location.postcode === 'number'
        ? rndUser.location.postcode
        : 12345;
  }

  fillBtn && fillBtn.addEventListener('click', fillForm);
}
