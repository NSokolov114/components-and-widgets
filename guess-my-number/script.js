'use strict';

let secretNumber = generateSecretNumber(),
  score = 20,
  highscore = 0;

function generateSecretNumber() {
  return Math.trunc(Math.random() * 20 + 1);
}

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'No number!';
  } else if (guess < 1 || guess > 20) {
    document.querySelector('.message').textContent = 'From 1 to 20, please...';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = 'Correct Number!';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    secretNumber = generateSecretNumber();
    document.querySelector('.number').textContent = secretNumber;
  } else {
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? 'Too High' : 'Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You Lost!';
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.message').textContent = 'Start guessing...';
  secretNumber = generateSecretNumber();
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
