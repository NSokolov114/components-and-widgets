'use strict';

const form = document.getElementById('form'),
  password1El = document.getElementById('password1'),
  password2El = document.getElementById('password2'),
  messageContainer = document.querySelector('.message-container'),
  message = document.getElementById('message');

let isValid = false,
  passwordsMatch = false;

function validateForm() {
  // using constraint API
  isValid = form.checkValidity();

  // message error
  if (!isValid) {
    message.textContent = 'Please, fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  // check matching pwds
  if (password1El.value === password2El.value) {
    passwordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passwordsMatch = false;
    message.textContent = 'Make sure passwords match.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }

  // success msg
  if (isValid && passwordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
  const user = {
    name: form.name.value,
    phone: form.phone.value,
    email: form.email.value,
    website: form.website.value,
    password: form.password.value,
  };
  console.log(user);
}

function processFormData(e) {
  e.preventDefault();

  // validate
  validateForm();

  // store data if valid
  if (isValid && passwordsMatch) {
    storeFormData();
  }
}

form.addEventListener('submit', processFormData);
