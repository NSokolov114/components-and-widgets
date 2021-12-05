'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const modal = document.querySelector('.modal-container'),
    modalShow = document.querySelector('.show-modal'),
    modalClose = document.querySelector('.close-modal'),
    bookmarkForm = document.querySelector('.bookmark-form'),
    websiteNameEl = document.querySelector('#website-name'),
    bookmarksContainer = document.querySelector('.container'),
    websiteURLEl = document.querySelector('#website-url');

  let bookmarks = [];

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
    if (!validate(nameValue, urlValue)) {
      return false;
    }

    const bookmark = {
      name: nameValue,
      url: urlValue,
    };

    bookmarks.push(bookmark);
    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
    bookmarkForm.reset();
    hideModal();
    buildBookmark(bookmark);
  }

  function validate(name, url) {
    const expr =
      /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    const regex = new RegExp(expr);
    if (!url.match(regex)) {
      alert('Please, enter a valid web address');
      return false;
    }
    if (!name || !url) {
      alert('Please, fill up the fields');
      return false;
    }
    return true;
  }

  function fetchBookmarks() {
    const fetched = JSON.parse(localStorage.getItem('bookmarks'));

    if (fetched) {
      bookmarks = fetched;
    } else {
      bookmarks.push({
        name: 'Google',
        url: 'https://google.com',
      });
    }
    bookmarks.forEach(bookmark => buildBookmark(bookmark));
  }

  function buildBookmark(bookmark) {
    const { name, url } = bookmark;
    const html = `
      <div class="item">
        <div class="name">
          <img src="http://www.google.com/s2/favicons?domain=${url}" alt="favicon" />
          <a href="${url}" target="_blank">${name}</a>
        </div>
        <i
          class="fas fa-times-circle delete-bookmark"
          title="Delete bookmark"
        ></i>
      </div>
    `;

    bookmarksContainer.insertAdjacentHTML('beforeend', html);
  }

  function deleteBookmark(t) {
    const closest = t.closest('.item');
    const closestA = closest.querySelector('a');
    const idx = bookmarks.findIndex(
      b => b.name.toLowerCase() === closestA.innerText.toLowerCase()
    );

    closest.remove();
    bookmarks.splice(idx, 1);

    localStorage.setItem('bookmarks', JSON.stringify(bookmarks));
  }

  modalShow.addEventListener('click', showModal);
  modalClose.addEventListener('click', hideModal);
  window.addEventListener('click', e => {
    if (e.target === modal) {
      hideModal();
    }
  });

  fetchBookmarks();

  bookmarkForm.addEventListener('submit', storeBookmark);

  bookmarksContainer.addEventListener('click', e => {
    const target = e.target;

    if (target.tagName !== 'I') {
      return;
    } else {
      deleteBookmark(target);
    }
  });
}
