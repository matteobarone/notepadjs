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

/*Nota Manuel: ho notato che il local storage memorizza solo l'ultima stringa inserita,
non tutte come fa il notepad da cui abbiamo preso spunto. Forse c'è un errore. Da vedere insieme.*/
function addItem(text, list) {
  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  el.classList.add('notepad__item');
  list.appendChild(el);

  localStorage.set('notes', JSON.stringify([text]));
  console.log('ho aggiunto', text);
}

/* 1. Step per finire il set
- init app: get dal local storage dell'array notes (se esiste),
altrimenti settare array vuoto per le nostre notes nella variabile "notesStore"
- popolare la variabile "notesStore" con il nuovo dato inserito (notesStore.push(text))
2. Step get
- popolare la lista delle note con le eventuali note del local storage*/

/*Nota Manuel: ho provato a scrivere il codice sotto, ma in realtà non succede nulla,
quando però lo faccio da console su Chrome funziona. Magari vediamo insieme stasera*/

if(text.length != 0){
  localStorage.getItem('notes');
  console.log(localStorage.getItem('notes'));
}
else{
  var notesStore = new Array();
  notesStore.push(text);
  console.log(notesStore);
}

