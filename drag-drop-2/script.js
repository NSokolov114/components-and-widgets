'use strict';

const addBtns = document.querySelectorAll('.add-btn:not(.solid)'),
  saveItemBtns = document.querySelectorAll('.solid'),
  addItemContainers = document.querySelectorAll('.add-container'),
  addItems = document.querySelectorAll('.add-item'),
  listColumns = document.querySelectorAll('.drag-item-list'),
  backlogListEl = document.getElementById('backlog-list'),
  progressListEl = document.getElementById('progress-list'),
  completeListEl = document.getElementById('complete-list'),
  onHoldListEl = document.getElementById('on-hold-list');

let updatedOnLoad = false,
  backlogListArray = [],
  progressListArray = [],
  completeListArray = [],
  onHoldListArray = [],
  listArrays = [],
  draggedItem,
  dragging = false,
  currentColumn;

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
    completeListArray,
    onHoldListArray,
  ];

  const arrayNames = ['backlog', 'progress', 'complete', 'onHold'];

  arrayNames.forEach((arrayName, index) => {
    localStorage.setItem(
      `${arrayName}Items`,
      JSON.stringify(listArrays[index])
    );
  });
}

function filterArray(array) {
  const filteredArray = array.filter(item => item !== null);

  return filteredArray;
}

function createItemEl(columnEl, column, item, index) {
  const listEl = document.createElement('li');

  listEl.textContent = item;
  listEl.id = index;
  listEl.classList.add('drag-item');
  listEl.draggable = true;
  listEl.setAttribute('onfocusout', `updateItem(${index}, ${column})`);
  listEl.setAttribute('ondragstart', 'drag(event)');
  listEl.contentEditable = true;

  columnEl.appendChild(listEl);
}

function updateDOM() {
  if (!updatedOnLoad) {
    getSavedColumns();
  }

  backlogListEl.textContent = '';
  backlogListArray.forEach((backlogItem, index) => {
    createItemEl(backlogListEl, 0, backlogItem, index);
  });
  backlogListArray = filterArray(backlogListArray);

  progressListEl.textContent = '';
  progressListArray.forEach((progressItem, index) => {
    createItemEl(progressListEl, 1, progressItem, index);
  });
  progressListArray = filterArray(progressListArray);

  completeListEl.textContent = '';
  completeListArray.forEach((completeItem, index) => {
    createItemEl(completeListEl, 2, completeItem, index);
  });
  completeListArray = filterArray(completeListArray);

  onHoldListEl.textContent = '';
  onHoldListArray.forEach((onHoldItem, index) => {
    createItemEl(onHoldListEl, 3, onHoldItem, index);
  });
  onHoldListArray = filterArray(onHoldListArray);

  updatedOnLoad = true;
  updateSavedColumns();
}

function updateItem(id, column) {
  const selectedArray = listArrays[column];
  const selectedColumn = listColumns[column].children;

  if (!dragging) {
    if (!selectedColumn[id].textContent) {
      delete selectedArray[id];
    } else {
      selectedArray[id] = selectedColumn[id].textContent;
    }
    updateDOM();
  }
}

function addToColumn(column) {
  const itemText = addItems[column].textContent;
  const selectedArray = listArrays[column];

  if (!addItems[column].textContent) return;
  selectedArray.push(itemText);
  addItems[column].textContent = '';
  updateDOM(column);
}

function showInputBox(column, e) {
  addBtns[column].style.visibility = 'hidden';
  saveItemBtns[column].style.display = 'flex';
  addItemContainers[column].style.display = 'flex';
  addItems[column].focus();
}

function hideInputBox(column) {
  addBtns[column].style.visibility = 'visible';
  saveItemBtns[column].style.display = 'none';
  addItemContainers[column].style.display = 'none';
  addToColumn(column);
}

function rebuildArrays() {
  backlogListArray = Array.from(backlogListEl.children).map(i => i.textContent);
  progressListArray = Array.from(progressListEl.children).map(
    i => i.textContent
  );
  completeListArray = Array.from(completeListEl.children).map(
    i => i.textContent
  );
  onHoldListArray = Array.from(onHoldListEl.children).map(i => i.textContent);

  updateDOM();
}

function dragEnter(column) {
  listColumns[column].classList.add('over');
  currentColumn = column;
}

function drag(e) {
  draggedItem = e.target;
  dragging = true;
}

function allowDrop(e) {
  e.preventDefault();
}

function drop(e) {
  e.preventDefault();

  const parent = listColumns[currentColumn];

  listColumns.forEach(column => {
    column.classList.remove('over');
  });

  parent.appendChild(draggedItem);
  dragging = false;
  rebuildArrays();
}

updateDOM();
