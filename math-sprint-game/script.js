'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const gamePage = document.getElementById('game-page'),
    scorePage = document.getElementById('score-page'),
    splashPage = document.getElementById('splash-page'),
    countdownPage = document.getElementById('countdown-page'),
    startForm = document.getElementById('start-form'),
    radioContainers = document.querySelectorAll('.radio-container'),
    radioInputs = document.querySelectorAll('input'),
    bestScores = document.querySelectorAll('.best-score-value'),
    countdown = document.querySelector('.countdown'),
    itemContainer = document.querySelector('.item-container'),
    finalTimeEl = document.querySelector('.final-time'),
    baseTimeEl = document.querySelector('.base-time'),
    penaltyTimeEl = document.querySelector('.penalty-time'),
    playAgainBtn = document.querySelector('.play-again'),
    wrongBtn = document.querySelector('.wrong'),
    rightBtn = document.querySelector('.right');

  const wrongFormat = [];
  let playerGuessArray = [];
  let equationsArray = [];
  let firstNumber = 0;
  let secondNumber = 0;
  let equationObject = {};
  let questionAmount = 10;
  let valueY = 0;
  let timer;
  let timePlayed = 0;
  let baseTime = 0;
  let penaltyTime = 0;
  let finalTime = 0;
  let finalTimeDisplay = '0.0s';

  function playAgain() {
    gamePage.addEventListener('click', startTimer);
    scorePage.hidden = true;
    splashPage.hidden = false;
    equationsArray = [];
    playerGuessArray = [];
    valueY = 0;
    playAgainBtn.hidden = true;
  }

  function showScorePage() {
    setTimeout(() => {
      playAgainBtn.hidden = false;
    }, 1000);
    gamePage.hidden = true;
    scorePage.hidden = false;
  }

  function scoresToDOM() {
    finalTimeDisplay = finalTime.toFixed(1);
    baseTime = timePlayed.toFixed(1);
    penaltyTime = penaltyTime.toFixed(1);
    baseTimeEl.textContent = `Base Time: ${baseTime}s`;
    penaltyTimeEl.textContent = `Penalty: +${penaltyTime}s`;
    finalTimeEl.textContent = `${finalTimeDisplay}s`;
    itemContainer.scrollTo({ top: 0, behavior: 'instant' });
    showScorePage();
  }

  function checkTime() {
    console.log(timePlayed);
    if (playerGuessArray.length == questionAmount) {
      console.log(playerGuessArray);
      clearInterval(timer);
      equationsArray.forEach((eq, idx) => {
        if (eq.evaluated === playerGuessArray[idx]) {
        } else {
          penaltyTime += 1;
        }
      });

      finalTime = timePlayed + penaltyTime;
      console.log(timePlayed, penaltyTime);
      scoresToDOM();
    }
  }

  function addTime() {
    timePlayed += 0.1;
    checkTime();
  }

  function startTimer() {
    timePlayed = 0;
    penaltyTime = 0;
    finalTime = 0;
    timer = setInterval(addTime, 100);
    gamePage.removeEventListener('click', startTimer);
  }

  function select(guessedTrue) {
    console.log('hey');
    valueY += 80;
    itemContainer.scroll(0, valueY);
    return guessedTrue
      ? playerGuessArray.push('true')
      : playerGuessArray.push('false');
  }

  function showGamePage() {
    gamePage.hidden = false;
    countdownPage.hidden = true;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * Math.floor(max));
  }

  function createEquations() {
    const correctEquations = getRandomInt(questionAmount);

    const wrongEquations = questionAmount - correctEquations;

    for (let i = 0; i < correctEquations; i++) {
      firstNumber = getRandomInt(9);
      secondNumber = getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      const equation = `${firstNumber} x ${secondNumber} = ${equationValue}`;
      equationObject = { value: equation, evaluated: 'true' };
      equationsArray.push(equationObject);
    }

    for (let i = 0; i < wrongEquations; i++) {
      firstNumber = getRandomInt(9);
      secondNumber = getRandomInt(9);
      const equationValue = firstNumber * secondNumber;
      wrongFormat[0] = `${firstNumber} x ${
        secondNumber + 1
      } = ${equationValue}`;
      wrongFormat[1] = `${firstNumber} x ${secondNumber} = ${
        equationValue - 1
      }`;
      wrongFormat[2] = `${
        firstNumber + 1
      } x ${secondNumber} = ${equationValue}`;
      const formatChoice = getRandomInt(3);
      const equation = wrongFormat[formatChoice];
      equationObject = { value: equation, evaluated: 'false' };
      equationsArray.push(equationObject);
    }

    shuffle(equationsArray);
  }

  function equationsToDOM() {
    equationsArray.forEach(eq => {
      const item = document.createElement('div');
      item.classList.add('item');

      const equationText = document.createElement('h1');
      equationText.textContent = eq.value;

      item.appendChild(equationText);
      itemContainer.appendChild(item);
    });
  }

  function populateGamePage() {
    itemContainer.textContent = '';

    const topSpacer = document.createElement('div');
    topSpacer.classList.add('height-240');

    const selectedItem = document.createElement('div');
    selectedItem.classList.add('selected-item');

    itemContainer.append(topSpacer, selectedItem);

    createEquations();
    equationsToDOM();

    const bottomSpacer = document.createElement('div');
    bottomSpacer.classList.add('height-500');
    itemContainer.appendChild(bottomSpacer);
  }

  function countdownStart() {
    countdown.textContent = '3';
    setTimeout(() => {
      countdown.textContent = '2';
    }, 1000);
    setTimeout(() => {
      countdown.textContent = '1';
    }, 2000);
    setTimeout(() => {
      countdown.textContent = 'GO!';
    }, 3000);
  }

  function getRadioValue() {
    let radioValue;
    radioInputs.forEach(radioInput => {
      if (radioInput.checked) {
        radioValue = radioInput.value;
      }
    });
    return radioValue;
  }

  function showCountdown() {
    countdownPage.hidden = false;
    splashPage.hidden = true;
    countdownStart();
    populateGamePage();
    setTimeout(() => {
      showGamePage();
    }, 4000);
  }

  function selectQuestionAmount(e) {
    e.preventDefault();
    questionAmount = getRadioValue();
    if (questionAmount) {
      showCountdown();
    }
  }

  startForm.addEventListener('click', () => {
    radioContainers.forEach(radioEl => {
      radioEl.classList.remove('selected-label');
      if (radioEl.children[1].checked) {
        radioEl.classList.add('selected-label');
      }
    });
  });

  startForm.addEventListener('submit', selectQuestionAmount);
  wrongBtn.addEventListener('click', () => {
    select(false);
  });
  rightBtn.addEventListener('click', () => {
    select(true);
  });

  gamePage.addEventListener('click', startTimer);
  playAgainBtn.addEventListener('click', playAgain);
}
