'use strict';

const background = document.getElementById('background');
const password = document.getElementById('password');

password.addEventListener('input', () => {
  background.style.filter = `blur(${16 - password.value.length * 2}px)`;
  if (password.value.length > 7)
    password.style.background = 'rgba(57, 168, 168, 0.3)';
});
