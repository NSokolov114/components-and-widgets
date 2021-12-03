'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const btnNew = document.querySelector('.btn-new');
  const btnRepeat = document.querySelector('.btn-repeat');
  let joke = '';

  function tellJoke() {
    const message = new SpeechSynthesisUtterance(`${joke}`);

    window.speechSynthesis.speak(message);
  }

  async function getJoke() {
    const apiURL = `https://v2.jokeapi.dev/joke/Programming`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      joke = data.joke ? data.joke : data.setup + '...' + data.delivery;
      tellJoke(joke);
      btnRepeat.disabled = false;
    } catch (err) {
      console.log(`Oh no, an error: ${err}`);
    }
  }

  btnNew.addEventListener('click', getJoke);
  btnRepeat.addEventListener('click', tellJoke);
}
