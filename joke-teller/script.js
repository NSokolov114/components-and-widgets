'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const btnNew = document.querySelector('.btn-new'),
    btnRepeat = document.querySelector('.btn-repeat');
  let joke = '';

  function tellJoke(e) {
    const message = new SpeechSynthesisUtterance(`${joke}`);

    btnRepeat.disabled = true;
    btnNew.disabled = true;
    window.speechSynthesis.speak(message);
    message.addEventListener('end', function (e) {
      btnRepeat.disabled = false;
      btnNew.disabled = false;
    });
  }

  async function getJoke() {
    const apiURL = `https://v2.jokeapi.dev/joke/Programming`;

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      joke = data.joke ? data.joke : data.setup + '...' + data.delivery;
      tellJoke(joke);
    } catch (err) {
      console.log(`Oh no, an error: ${err}`);
    }
  }

  btnNew.addEventListener('click', getJoke);
  btnRepeat.addEventListener('click', tellJoke);
}
