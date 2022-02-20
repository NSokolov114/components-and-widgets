'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputs = document.querySelectorAll('.signup-form input');
  const submittedList = document.querySelector('.submitted-form ul');
  const inputKeys = ['username', 'email', 'phone', 'address', 'city', 'state', 'zip'];

  ///// page 1
  if (inputs.length === inputKeys.length) {
    // btn to fill the form with rnd data for testing purposes
    const fillBtn = document.querySelector('.fill-form-btn');

    // fetching random user data
    async function getRndUsers() {
      try {
        const api = await fetch(`https://randomuser.me/api/`);
        const data = await api.json();

        return data.results[0];
      } catch (err) {
        console.log(`Error fetching rnd users data: ${err.message}`);
      }
    }

    async function fillForm() {
      const rndUser = await getRndUsers();

      const rndUserArr = [
        `${rndUser.name.first} ${rndUser.name.last}`,
        rndUser.email,
        rndUser.phone,
        `${rndUser.location.street.number} ${rndUser.location.street.name}`,
        rndUser.location.city,
        rndUser.location.state,
        typeof rndUser.location.postcode === 'number' ? rndUser.location.postcode : 12345,
      ];

      inputKeys.forEach((_, i) => {
        inputs[i].value = rndUserArr[i];
      });
    }

    fillBtn && fillBtn.addEventListener('click', fillForm);
    return;
  }

  // get data from the query string
  const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
  });

  ///// page 2
  if (inputs.length) {
    inputKeys.forEach((key, i) => {
      inputs[i].value = params[key];
    });
  }

  ///// page 3
  if (submittedList) {
    inputKeys.push('food-allergies', 'frequency', 'package-size');
    inputKeys.forEach(key => {
      const item = document.createElement('li');

      item.innerText = `${key}=${params[key] ? params[key] : 'none'}`;
      submittedList.appendChild(item);
    });
  }
}
