'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const form = document.querySelector('.signup-form');
  const urlSearchParams = new URLSearchParams(window.location.search);
  // let html = '';

  for (const [key, value] of urlSearchParams.entries()) {
    // html += `<input type="hidden" name="${key}" value="${value}">`;
    // const inputTmpl = ;
    // const input = document.createElement(`input type="hidden" name="${key}" value="${value}"`);
    const inputTmpl = `<input type="hidden" name="${key}" value="${value}">`;
    // const input = document.createElement(inputTmpl);
    const parser = new DOMParser();
    form.appendChild(parser.parseFromString(inputTmpl, 'text/xml').firstChild);
    // form.append(inputTmpl);
    // console.log(input);
  }

  // form.insertAdjacentHTML('afterbegin', html);
}
