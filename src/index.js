import { localStorage } from './local-storage/local-storage';

document.addEventListener('DOMContentLoaded', () => {
  console.log(Object.entries(window.localStorage));
  const listItemElement = document.querySelector('.notepad__list');
  const inputElement = document.querySelector('.notepad__input');

  inputElement.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      addItem(event.target.value, listItemElement);
      event.target.value = null;
    }
  });
});

function addItem(text, list) {
  
  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.appendChild(textNode);
  el.classList.add('notepad__item');
  list.appendChild(el);
  
  
  localStorage.set('notes-' + Date.now(), JSON.stringify(text));
  console.log(Date.now());
  console.log('ho aggiunto', text);
  
  //const notes = JSON.parse(localStorage.get('notes'));  

}

const removeItems = document.querySelector('notepad__clear');

/*removeItems.addEventListener('onclick', (text, list) => {

  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.removeChild(textNode);
  el.classList.remove('notepad__item');
  list.removeChild(el);

  const removeNotes = JSON.parse(localStorage.remove('notes'));
  //removeNotes.pop(text);
  console.log('ho rimosso', text);

});*/




