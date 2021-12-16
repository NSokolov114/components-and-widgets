'use strict';

const addBtns = document.querySelectorAll('.add-btn:not(.solid)');
const saveItemBtns = document.querySelectorAll('.solid');
const addItemContainers = document.querySelectorAll('.add-container');
const addItems = document.querySelectorAll('.add-item');

const listColumns = document.querySelectorAll('.drag-item-list');
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
let draggedItem;
let currentColumn;

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
  listEl.draggable = true;
  listEl.setAttribute('ondragstart', `drag(event)`);
  columnEl.appendChild(listEl);
}

// Update Columns in DOM - Reset HTML, Filter Array, Update localStorage
function updateDOM() {
  if (!updatedOnLoad) {
    getSavedColumns();
  }

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

  updatedOnLoad = true;
  updateSavedColumns();
}

function rebuildArrays() {
  backlogListArray.length = 0;
  for (let i = 0; i < backlogList.children.length; i++) {
    backlogListArray.push(backlogList.children[i].textContent);
  }
  progressListArray.length = 0;
  for (let i = 0; i < progressList.children.length; i++) {
    progressListArray.push(progressList.children[i].textContent);
  }
  completeListArray.length = 0;
  for (let i = 0; i < completeList.children.length; i++) {
    completeListArray.push(completeList.children[i].textContent);
  }
  onHoldListArray.length = 0;
  for (let i = 0; i < onHoldList.children.length; i++) {
    onHoldListArray.push(onHoldList.children[i].textContent);
  }

  updateDOM();
}

function drag(e) {
  draggedItem = e.target;
  console.log(draggedItem);
}

function dragEnter(column) {
  listColumns[column].classList.add('over');
  currentColumn = column;
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();
  listColumns.forEach(column => {
    column.classList.remove('over');
  });
  const parent = listColumns[currentColumn];
  parent.appendChild(draggedItem);
  rebuildArrays();
}

updateDOM();
