import { localStorage } from './local-storage/local-storage';

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
  
  // setting the notes array JSON into localStorage
  localStorage.set('notes', JSON.stringify(text));
  
  console.log('ho aggiunto', text);
  // retrieve the notes that are already in localstorage
  const notes = JSON.parse(localStorage.getItem('notes'));
  //pushing your new note into the notes array - mutation
  notes.push(text);

}

// Ho provato con questo per fare il remove Item ma non funziona
function remove(text, list){
  const removeElement = document.querySelector('.notepad__item::after');
  removeElement.addEventListener('onclick', ()=>{
    JSON.stringify(localStorage.remove(text));
  });
}




