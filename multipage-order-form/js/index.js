'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputs = document.querySelectorAll('.signup-form input');
  const fillBtn = document.querySelector('.fill-form-btn');
  const inputKeys = ['username', 'email', 'phone', 'address', 'city', 'state', 'zip'];

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

  // fill the form with fetched data
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
}
