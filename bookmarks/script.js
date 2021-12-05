'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const modal = document.querySelector('.modal-container');
  const modalShow = document.querySelector('.show-modal');
  const modalClose = document.querySelector('.close-modal');
  const bookmarkForm = document.querySelector('.bookmark-form');
  const websiteNameEl = document.querySelector('#website-name');
  const bookmarksContainer = document.querySelector('.bookmarks-container');
  const websiteURLEl = document.querySelector('#website-url');
  const btn = document.querySelector('button');

  function showModal() {
    modal.classList.add('show-modal');
    websiteNameEl.focus();
  }

  function hideModal() {
    modal.classList.remove('show-modal');
  }

  function storeBookmark(e) {
    e.preventDefault();

    const nameValue = e.srcElement[0].value;
    let urlValue = e.srcElement[1].value;
    if (!urlValue.includes('http://') && !urlValue.includes('https://')) {
      urlValue = 'https://' + urlValue;
    }
    validate(nameValue, urlValue);
  }

  function validate(name, url) {
    const expr =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expr);
    if (!url.match(regex)) {
      alert('Please, enter a valid web address');
      return false;
    }

    if (!name) {
      alert('Please, enter the bookmark name');
      return false;
    }
    return true;
  }

  modalShow.addEventListener('click', showModal);
  modalClose.addEventListener('click', hideModal);
  window.addEventListener('click', e => {
    if (e.target === modal) {
      hideModal();
    }
  });

  bookmarkForm.addEventListener('submit', storeBookmark);
}
