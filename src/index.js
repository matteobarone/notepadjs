import {localStorage} from './local-storage/local-storage';

const storeItems = [];  

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

function addItem(text, list, storeItems) {
  
  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  el.classList.add('notepad__item');
  list.appendChild(el);

  // retrieve the notes that are already in localstorage
  const notes = JSON.parse(localStorage.getItem('notes'));  
  // setting the notes array JSON into localStorage
  notes.push(text);  
  // pushing your new note into the notes array - mutation
  localStorage.setItem('notes', JSON.stringify(text));  

}
