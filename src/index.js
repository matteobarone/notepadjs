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

function addItem(text, list) {
  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  el.classList.add('notepad__item');
  list.appendChild(el);

  localStorage.set('notes', JSON.stringify([text]));
  console.log('ho aggiunto', text);
  storeItems.push(text);
}
