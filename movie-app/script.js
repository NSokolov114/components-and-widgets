'use strict';

const API_URL =
    'https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=55ce14f036ec1cae68d9622b3ebb60fa&page=1',
  IMG_PATH = 'https://image.tmdb.org/t/p/w1280',
  SEARCH_API =
    'https://api.themoviedb.org/4/search/movie?api_key=55ce14f036ec1cae68d9622b3ebb60fa&query="',
  form = document.getElementById('form'),
  search = document.getElementById('search'),
  main = document.getElementById('main');

getMovies(API_URL);
async function getMovies(url) {
  const res = await fetch(url);
  const data = await res.json();

  showMovies(data.results);
}

function showMovies(movies) {
  main.innerHTML = '';
  movies.forEach(movie => {
    const { title, poster_path, vote_average, overview } = movie;
    const movieEl = document.createElement('div');

    movieEl.classList.add('movie');
    movieEl.innerHTML = `
        
            <img src="${IMG_PATH + poster_path}" alt="${title}">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        
        `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return 'green';
  } else if (vote >= 5.5) {
    return 'orange';
  } else {
    return 'red';
  }
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const searchTerm = search;

  if (searchTerm && searchTerm !== '') {
    getMovies(SEARCH_API + searchTerm);
    search.value = '';
  } else {
    window.location.reload();
  }
});
