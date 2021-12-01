'use strict';
document.addEventListener('DOMContentLoaded', ready);

function ready() {
  const count = 20;
  const apiKey = '';
  const apiURL = `https://api.unsplash.com/photos/random/?client_id=${apiKey}&count=${count}`;

  async function getPhotos() {
    try {
      const response = await fetch(apiURL);
      const data = await response.json();
      console.log(data);
    } catch (error) {}
  }

  getPhotos();
}
// &username=nsokolov114
