'use strict';

document.addEventListener('DOMContentLoaded', ready);
function ready() {
  const addBtn = document.getElementById('add'),
    clearBtn = document.getElementById('clear'),
    notes = JSON.parse(localStorage.getItem('notes'));

  if (notes) notes.forEach(note => addNewNote(note));

  addBtn.addEventListener('click', () => addNewNote());
  clearBtn.addEventListener('click', () => deleteAll());

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
      updateLS();
    });
    textArea.addEventListener('input', e => {
      const { value } = e.target;
      main.innerHTML = marked(value);
      updateLS();
    });
    document.body.appendChild(note);
  }

  function updateLS() {
    const notesText = document.querySelectorAll('textarea'),
      notes = [];
    notesText.forEach(note => notes.push(note.value));
    localStorage.setItem('notes', JSON.stringify(notes));
  }

  function deleteAll() {
    const check = window.prompt(
      'Type "YES" if you want to delete all your notes: '
    );
    if (check.toLowerCase() === 'yes') {
      localStorage.clear();
      const currentNotes = document.querySelectorAll('.note');
      for (let i = 0; i < currentNotes.length; i++) currentNotes[i].remove();
    }
  }
}
