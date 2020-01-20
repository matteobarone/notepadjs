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

  localStorage.set('notes', JSON.stringify([text]));
  console.log('ho aggiunto', text);
}

// Step per finire il set
// - init app: get dal local storage dell'array notes (se esiste),
//   altrimenti settare array vuoto per le nostre notes nella variabile "notesStore"
// - popolare la variabile "notesStore" con il nuovo dato inserito (notesStore.push(text))
function getItem(text, list){
  localStorage.get('notes'. JSON.stringify([text]));
  console.log('ho preso', text);
}

// Step get
// - popolare la lista delle note con le eventuali note del local storage