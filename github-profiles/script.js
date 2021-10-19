'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const APIURL = 'https://api.github.com/users/';
  const form = document.getElementById('form');
  const search = document.getElementById('search');
  const main = document.getElementById('main');

  async function getUser(username) {
    try {
      const { data } = await axios(APIURL + username);
      createUserCard(data);
      getRepos(username);
    } catch (err) {
      if (err.response.status == 404) {
        createErrorCard('User is not found, try another name');
      }
    }
  }

  function createErrorCard(msg) {
    const cardHTML = `
  <div class="card">
    <h1>${msg}</h1>
  </div>
  `;

    main.innerHTML = cardHTML;
  }

  async function getRepos(username) {
    try {
      const { data } = await axios(APIURL + username + '/repos?sort=created');
      addReposToCard(data);
    } catch (err) {
      createErrorCard('Problem with fetching repos');
    }
  }

  function createUserCard(user) {
    const cardHTML = `
    <div class="card">
    <div>
      <img
        src="${user.avatar_url}"
        alt="${user.name}"
        class="avatar"
      />
    </div>
    <div class="user-info">
      <h2>${user.name}</h2>
      <p>${user.bio}</p>

      <ul>
        <li>${user.followers} <strong>followers</strong></li>
        <li>${user.following} <strong>following</strong></li>
        <li>${user.public_repos} <strong>repos</strong></li>
      </ul>

      <div id="repos"></div>
    </div>
  </div>
    `;
    main.innerHTML = cardHTML;
  }

  function addReposToCard(repos) {
    const reposEl = document.getElementById('repos');
    repos.slice(0, 10).forEach(repo => {
      const repoEl = document.createElement('a');
      repoEl.classList.add('repo');
      repoEl.href = repo.html_url;
      repoEl.target = '_blank';
      repoEl.innerHTML = repo.name;
      reposEl.appendChild(repoEl);
    });
  }

  form.addEventListener('submit', e => {
    e.preventDefault();

    const user = search.value;

    if (user) {
      getUser(user);

      search.value = '';
    }
  });
}
