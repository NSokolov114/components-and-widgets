'use strict';

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
  'Message One',
  'Message Two',
  'Message Three',
  'Message Four',
];

button.addEventListener('click', () => createNotification());

function createNotification() {
  console.log('tesdt');
}
