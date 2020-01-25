import {localStorage} from './local-storage/local-storage';

document.addEventListener('DOMContentLoaded', () => {
  const listItemElement = document.querySelector('.notepad__list');
  const inputElement = document.querySelector('.notepad__input');

  inputElement.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addItem(event.target.value, listItemElement);
      event.target.value = null;
    }
  })
});

function addItem(text, list) {
  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  el.classList.add('notepad__item');
  list.appendChild(el);

  // retrieve the notes that are already in localstorage
  const notes = JSON.parse(localStorage.getItem('notes'));

  for (let [id, note] of Object.entries(notes)) {
    console.log(`${id}: ${note.content}`);
  }

  const id = document.querySelector('.notepad__input').id;
  const content = document.querySelector('.notepad__input').value; 

  // Get saved notes
  const savedNotes = JSON.parse(localStorage.getItem('notes'));

  // Update the old note
  savedNotes[id] = content;

  // Save
  localStorage.setItem('notes', JSON.stringify(savedNotes));

}
