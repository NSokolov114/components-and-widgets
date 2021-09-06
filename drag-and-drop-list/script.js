'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const draggable_list = document.getElementById('draggable-list'),
    check = document.getElementById('check');

  const richestPeople = [
    'Jeff Bezos',
    'Bill Gates',
    'Warren Buffett',
    'Bernard Arnault',
    'Carlos Slim Helu',
    'Amancio Ortega',
    'Larry Ellison',
    'Mark Zuckerberg',
    'Michael Bloomberg',
    'Larry Page',
  ];

  const listItems = []; // for storing list items

  let dragStartIndex;

  createList();

  function createList() {
    //insert list items into DOM
    [...richestPeople]
      .map(a => ({ value: a, sort: Math.random() }))
      .sort((a, b) => a.sort - b.sort)
      .map(a => a.value)
      .forEach((person, index) => {
        const listItem = document.createElement('li');
        listItem.setAttribute('data-index', index);
        listItem.innerHTML = `<span class="number">${index + 1}</span>
  <div class="draggable" draggable="true">
    <p class="person-name">${person}</p>
    <i class="fas fa-grip-lines"></i>
  </div>`;
        // console.log(listItem);
        listItems.push(listItem);
        draggable_list.appendChild(listItem);
      });
  }
}
