'use strict';

const button = document.getElementById('button'),
  toasts = document.getElementById('toasts'),
  messages = ['Message One', 'Message Two', 'Message Three', 'Message Four'],
  types = ['info', 'success', 'error'];

function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
  return types[Math.floor(Math.random() * types.length)];
}

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
  const notif = document.createElement('div');
  notif.classList.add('toast');
  notif.classList.add(type ? type : getRandomType());
  notif.innerText = message ? message : getRandomMessage();
  toasts.appendChild(notif);
  setTimeout(() => {
    notif.remove();
  }, 3000);
}
