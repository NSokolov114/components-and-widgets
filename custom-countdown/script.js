'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const inputContainer = document.querySelector('.input-container'),
    countdownForm = document.querySelector('.form'),
    dateEl = document.querySelector('#date-picker'),
    countdownEl = document.querySelector('.countdown'),
    countdownElTitle = document.querySelector('.countdown-title'),
    countdownBtn = document.querySelector('.countdown-button'),
    timeElements = document.querySelectorAll('span'),
    completeEl = document.querySelector('.complete'),
    completeElInfo = document.querySelector('.complete-info'),
    completeBtn = document.querySelector('.complete-button');

  let countdownTitle = '',
    countdownDate = '',
    countdownValue = new Date(),
    countdownActive,
    savedCountdown;

  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

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
      const now = new Date().getTime(),
        distance = countdownValue - now,
        days = Math.floor(distance / day),
        hours = Math.floor((distance % day) / hour),
        minutes = Math.floor((distance % hour) / minute),
        seconds = Math.floor((distance % minute) / second);

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
    completeEl.classList.add('hidden');
    clearInterval(countdownActive);
    countdownTitle = '';
    countdownDate = '';
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
