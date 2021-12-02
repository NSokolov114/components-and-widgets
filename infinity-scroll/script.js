'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const imageContainer = document.querySelector('.image-container');
  const loader = document.querySelector('.loader');

  let photosArray = [];

  const count = 20;
  const p1 = 'W1i5zHnpDxpuvpsZw3tYfOXzrTB2ybH3UUK';
  const p2 = '9YPOg' + 14;
  const apiKey = `${p1}-${p2}`;
  const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&username=nsokolov114`;

  async function getPhotos() {
    try {
      const response = await fetch(apiURL);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {}
  }

  function displayPhotos() {
    photosArray.forEach(photo => {
      const item = document.createElement('a');
      setAttributes(item, {
        href: photo.links.html,
        target: '_blank',
      });

      const img = document.createElement('img');
      setAttributes(img, {
        src: photo.urls.regular,
        alt: photo.alt_description,
        title: photo.alt_description,
      });

      item.appendChild(img);
      imageContainer.appendChild(item);
    });
  }

  function setAttributes(el, att) {
    for (const key in att) {
      el.setAttribute(key, att[key]);
    }
  }

  getPhotos();
}
