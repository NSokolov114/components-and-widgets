'use strict';

window.addEventListener('DOMContentLoaded', ready);

function ready() {
  const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
  const saveItemBtns = document.querySelectorAll('.solid');
  const addItemContainers = document.querySelectorAll('.add-container');
  const addItems = document.querySelectorAll('.add-item');

  const itemLists = document.querySelectorAll('.drag-item-list');
  const backlogList = document.querySelector('.backlog-list');
  const progressList = document.querySelector('.progress-list');
  const completeList = document.querySelector('.complete-list');
  const onHoldList = document.querySelector('.on-hold-list');

  let backlogListArray = [];
  let progressListArray = [];
  let completeListArray = [];
  let onHoldListArray = [];
  let listArrays = [];
  let updatedOnLoad = false;

  function getSavedColumns() {
    if (localStorage.getItem('backlogItems')) {
      backlogListArray = JSON.parse(localStorage.backlogItems);
      progressListArray = JSON.parse(localStorage.progressItems);
      completeListArray = JSON.parse(localStorage.completeItems);
      onHoldListArray = JSON.parse(localStorage.onHoldItems);
    } else {
      backlogListArray = ['Release the course', 'Sit back and relax'];
      progressListArray = ['Work on projects', 'Listen to music'];
      completeListArray = ['Being cool', 'Getting stuff done'];
      onHoldListArray = ['Being uncool'];
    }
  }

  function updateSavedColumns() {
    listArrays = [
      backlogListArray,
      progressListArray,
      progressListArray,
      completeListArray,
    ];
    const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];
    listArrays.forEach((array, idx) => {
      localStorage.setItem(`${arrayNames[idx]}Items`, JSON.stringify(array));
    });
  }

  function createItemEl(columnEl, column, item, index) {
    const listEl = document.createElement('li');
    listEl.classList.add('drag-item');
    listEl.textContent = item;
    columnEl.appendChild(listEl);
  }

  // Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
  function updateDOM() {
    if (!updatedOnLoad) {
      getSavedColumns();
    }

    // Backlog Column
    backlogList.textContent = '';
    backlogListArray.forEach((backlogItem, idx) => {
      createItemEl(backlogList, 0, backlogItem, idx);
    });

    progressList.textContent = '';
    progressListArray.forEach((progressItem, idx) => {
      createItemEl(progressList, 0, progressItem, idx);
    });

    completeList.textContent = '';
    completeListArray.forEach((completeItem, idx) => {
      createItemEl(completeList, 0, completeItem, idx);
    });

    onHoldList.textContent = '';
    onHoldListArray.forEach((onHoldItem, idx) => {
      createItemEl(onHoldList, 0, onHoldItem, idx);
    });
    // Progress Column
    // Complete Column
    // On Hold Column
    // Run getSavedColumns only once, Update Local Storage
  }

  updateDOM();
}
