'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const addBtn = document.getElementById('add');
  addBtn.addEventListener('click', () => addNewNote());

  function addNewNote(text = '') {
    const note = document.createElement('div');
    note.classList.add('note');
    note.innerHTML = `
    <div class="tools">
      <button class="edit">
        <i class="fas fa-edit"></i>
      </button>
      <button class="delete">
        <i class="fas fa-trash-alt"></i>
      </button>
    </div>
    <div class="main ${text ? '' : 'hidden'}"></div>
    <textarea class="${text ? 'hidden' : ''}"></textarea>
  `;
    const editBtn = note.querySelector('.edit'),
      deleteBtn = note.querySelector('.delete'),
      main = note.querySelector('.main'),
      textArea = note.querySelector('textarea');

    textArea.value = text;
    main.innerHTML = marked(text); // marked library!

    editBtn.addEventListener('click', () => {
      main.classList.toggle('hidden');
      textArea.classList.toggle('hidden');
    });

    deleteBtn.addEventListener('click', () => {
      note.remove();
    });
    textArea.addEventListener('input', e => {
      const { value } = e.target;
      main.innerHTML = marked(value);
    });
    document.body.appendChild(note);
  }
}
