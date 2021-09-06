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
    addEventListeners();
  }

  function dragStart() {
    dragStartIndex = +this.closest('li').getAttribute('data-index');
  }

  function dragEnter() {
    this.classList.add('over');
  }

  function dragLeave() {
    this.classList.remove('over');
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragDrop() {
    const dragEndIndex = +this.getAttribute('data-index');
    swapItems(dragStartIndex, dragEndIndex);
    this.classList.remove('over');
  }

  function swapItems(fromIndex, toIndex) {
    const item1 = listItems[fromIndex].querySelector('.draggable');
    const item2 = listItems[toIndex].querySelector('.draggable');
    listItems[fromIndex].appendChild(item2);
    listItems[toIndex].appendChild(item1);
  }

  function addEventListeners() {
    const draggables = document.querySelectorAll('.draggable');
    const dragListItems = document.querySelectorAll('.draggable-list li');

    draggables.forEach(draggable => {
      draggable.addEventListener('dragstart', dragStart);
    });

    dragListItems.forEach(item => {
      item.addEventListener('dragover', dragOver);
      item.addEventListener('drop', dragDrop);
      item.addEventListener('dragenter', dragEnter);
      item.addEventListener('dragleave', dragLeave);
    });
  }
}
