'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const result = document.getElementById('result'),
    filter = document.getElementById('filter'),
    listItems = [];

  async function getData() {
    const res = await fetch('https://randomuser.me/api?results=25');
    const { results } = await res.json();

    result.innerHTML = '';

    results.forEach(user => {
      const li = document.createElement('li');

      listItems.push(li);

      li.innerHTML = `
      <img src="${user.picture.large}" alt="${user.name.first}">
      <div class="user-info">
        <h4>${user.name.first} ${user.name.last}</h4>
        <p>${user.location.city}, ${user.location.country}</p>
      </div>
      `;

      result.appendChild(li);
    });
  }

  function filterData(searchTerm) {
    listItems.forEach(item => {
      if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
        item.classList.remove('hide');
      } else {
        item.classList.add('hide');
      }
    });
  }

  getData();
  filter.addEventListener('input', e => {
    filterData(e.target.value);
  });
}
