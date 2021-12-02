'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputContainer = document.querySelector('.input-container');
  const countdownForm = document.querySelector('.form');
  const dateEl = document.querySelector('#date-picker');
  const countdownEl = document.querySelector('.countdown');
  const countdownElTitle = document.querySelector('.countdown-title');
  const countdownBtn = document.querySelector('.countdown-button');
  const timeElements = document.querySelectorAll('span');
  const completeEl = document.querySelector('.complete');
  const completeElInfo = document.querySelector('.complete-info');
  const completeBtn = document.querySelector('.complete-button');

  let countdownTitle = '';
  let countdownDate = '';
  let countdownValue = Date;
  let countdownActive;
  let savedCountdown;

  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const today = new Date().toISOString().slice(0, 10);

  dateEl.setAttribute('min', today);

  countdownForm.addEventListener('submit', updateCountdown);
  countdownBtn.addEventListener('click', reset);
  completeBtn.addEventListener('click', reset);

  restore();

  function updateCountdown(e) {
    e.preventDefault();

    countdownTitle = e.srcElement[0].value;
    countdownDate = e.srcElement[1].value;
    savedCountdown = {
      title: countdownTitle,
      date: countdownDate,
    };
    localStorage.setItem('countdown', JSON.stringify(savedCountdown));
    if (countdownDate === '') {
      alert('Please select a date for the countdown');
    } else {
      countdownValue = new Date(countdownDate).getTime();
      updateDOM();
    }
  }

  function updateDOM() {
    countdownActive = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownValue - now;

      const days = Math.floor(distance / day);
      const hours = Math.floor((distance % day) / hour);
      const minutes = Math.floor((distance % hour) / minute);
      const seconds = Math.floor((distance % minute) / second);

      inputContainer.classList.add('hidden');

      if (distance <= 0) {
        countdownEl.classList.add('hidden');
        clearInterval(countdownActive);
        completeElInfo.textContent = `${countdownTitle} finished on ${countdownDate}`;
        completeEl.classList.remove('hidden');
      } else {
        countdownElTitle.textContent = `${countdownTitle}`;
        timeElements[0].textContent = `${days}`;
        timeElements[1].textContent = `${hours}`;
        timeElements[2].textContent = `${minutes}`;
        timeElements[3].textContent = `${seconds}`;
        completeEl.classList.add('hidden');
        countdownEl.classList.remove('hidden');
      }
    }, second);
  }

  function reset() {
    countdownEl.classList.add('hidden');
    inputContainer.classList.remove('hidden');
    clearInterval(countdownActive);
    countdownTitle = '';
    countdownDate = '';
    completeEl.classList.add('hidden');
    localStorage.removeItem('countdown');
  }

  function restore() {
    if (localStorage.getItem('countdown')) {
      inputContainer.classList.add('hidden');
      savedCountdown = JSON.parse(localStorage.getItem('countdown'));
      countdownTitle = savedCountdown.title;
      countdownDate = savedCountdown.date;
      countdownValue = new Date(countdownDate).getTime();
      updateDOM();
    }
  }
}
