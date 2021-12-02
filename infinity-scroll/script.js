'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const imageContainer = document.querySelector('.image-container'),
    loader = document.querySelector('.loader');

  let photosArray = [],
    readyForMore = false,
    imagesLoaded = 0,
    totalImages = 0;

  const count = 8,
    p1 = 'W1i5zHnpDxpuvpsZw3tYfOXzrTB2ybH3UUK',
    p2 = '9YPOg' + 14,
    apiKey = `${p1}-${p2}`,
    apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}&username=nsokolov114`;

  async function getPhotos() {
    try {
      const response = await fetch(apiURL);
      photosArray = await response.json();
      displayPhotos();
    } catch (error) {}
  }

  function displayPhotos() {
    imagesLoaded = 0;
    totalImages = photosArray.length;
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

      img.addEventListener('load', imageLoaded);

      item.appendChild(img);
      imageContainer.appendChild(item);
    });
  }

  function setAttributes(el, att) {
    for (const key in att) {
      el.setAttribute(key, att[key]);
    }
  }

  function imageLoaded() {
    imagesLoaded++;
    if (imagesLoaded === totalImages) {
      readyForMore = true;
      loader.hidden = true;
    }
  }

  window.addEventListener('scroll', () => {
    if (
      window.innerHeight + window.scrollY >=
        document.body.offsetHeight - 1400 &&
      readyForMore
    ) {
      readyForMore = false;
      getPhotos();
    }
  });

  getPhotos();
}
