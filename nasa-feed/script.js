'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const resultsNav = document.querySelector('.navigation-results');
  const favoritesNav = document.querySelector('.navigation-favorites');
  const imagesContainer = document.querySelector('.images-container');
  const saveConfirmed = document.querySelector('.save-confirmed');
  const loader = document.querySelector('.loader');

  const count = 8;
  const apiKey = 'DEMO_KEY';
  const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;

  let resultsArray = [];
  let favorites = {};

  function createDOMNodes(page) {
    const currentArray =
      page === 'results' ? resultsArray : Object.values(favorites);

    currentArray.forEach(result => {
      const card = document.createElement('div');
      card.classList.add('card');

      const link = document.createElement('a');
      link.href = result.hdurl;
      link.title = 'View full image';
      link.target = '_blank';

      const img = document.createElement('img');
      img.src = result.url;
      imagesContainer.alt = 'NASA picture of the day';
      img.loading = 'lazy';
      img.classList.add('card-img-top');

      const cardBody = document.createElement('div');
      cardBody.classList.add('card-body');

      const cardTitle = document.createElement('h5');
      cardTitle.classList.add('card-title');
      cardTitle.textContent = result.title;

      const saveText = document.createElement('p');
      saveText.classList.add('clickable');
      if (page === 'results') {
        saveText.textContent = 'Add to favorites';
        saveText.addEventListener('click', () => {
          saveFavorite(result.url);
        });
      } else {
        saveText.textContent = 'Remove from favorites';
        saveText.addEventListener('click', () => {
          removeFavorite(result.url);
        });
      }

      const cardText = document.createElement('p');
      cardText.classList.add('card-text');
      cardText.textContent = result.explanation;

      const footer = document.createElement('small');
      footer.classList.add('text-muted');

      const date = document.createElement('strong');
      date.textContent = result.date;

      footer.append(date);

      if (result.copyright) {
        const copyright = document.createElement('span');
        copyright.textContent = ` ${result.copyright}`;
        footer.append(copyright);
      }

      cardBody.append(cardTitle, saveText, cardText, footer);
      link.appendChild(img);
      card.append(link, cardBody);
      imagesContainer.appendChild(card);
    });
  }

  function updateDOM(page) {
    if (localStorage.getItem('nasaFavorites')) {
      favorites = JSON.parse(localStorage.getItem('nasaFavorites'));
    }
    imagesContainer.textContent = '';
    createDOMNodes(page);
  }

  function saveFavorite(itemUrl) {
    resultsArray.forEach(item => {
      if (item.url.includes(itemUrl) && !favorites[itemUrl]) {
        favorites[itemUrl] = item;
        saveConfirmed.hidden = false;
        setTimeout(() => {
          saveConfirmed.hidden = true;
        }, 2000);

        localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
      }
    });
  }

  function removeFavorite(itemUrl) {
    if (favorites[itemUrl]) {
      delete favorites[itemUrl];
      localStorage.setItem('nasaFavorites', JSON.stringify(favorites));
      updateDOM('favorites');
    }
  }

  async function getNasaPictures() {
    try {
      const response = await fetch(apiUrl);
      resultsArray = await response.json();

      updateDOM('favorites');
    } catch (error) {
      console.log(error);
    }
  }

  getNasaPictures();
}
