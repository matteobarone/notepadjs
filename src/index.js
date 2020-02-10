import { localStorage } from './local-storage/local-storage';

// dichiarazione variabili globali
let listItemElement;
let removeItems;

// All'init dell'applicazione prendo le note dal local storage
let storedNotes = Object.entries(window.localStorage).filter(entity => entity[0].includes('notes-'));

// Loading del DOM
document.addEventListener('DOMContentLoaded', () => {
  // selezione degli elementi del DOM che mi servono
  listItemElement = document.querySelector('.notepad__list');
  removeItems = document.querySelector('.notepad__clear');
  const inputElement = document.querySelector('.notepad__input');

  // ricostruisco la lista in base a cosa ho salvato a local storage
  console.log('storedNotes: ', storedNotes);
  storedNotes.forEach(note => addItemToDom(note[1], listItemElement, note[0]));

  // aggiunta di un item tramite input (click su invio tastiera)
  inputElement.addEventListener('keyup', (event) => {
    if (event.keyCode === 13) {
      const noteId = 'notes-' + Date.now(); // genero ID
      const text = event.target.value; // testo della nota
      addItemToDom(text, listItemElement, noteId); // aggiungo un elemento della lista al DOM
      localStorage.set(noteId, text); // setto al local storage la nuova nota
      storedNotes.push([noteId, text]); // salvo in memoria nel mio array la nuova nota
      event.target.value = null; // resetto il valore così l'input torna vuoto
    }
  });

  // rimozione di tutti gli items tramite il bottone 'CLEAR LIST'
  removeItems.addEventListener('click', (e) => {
    // ciclo le note salvate in memoria nel mio array
    storedNotes.forEach(note => {
      removeItemFromDom(note[0]); // rimozione dell'elemento dalla lista al DOM
      localStorage.remove(note[0]); // rimozione della nota dal local storage
    });
    storedNotes = []; // svuoto la memoria del javascript eliminando tutte le note dall'array
  });
});

// aggiunta singolo item al DOM
function addItemToDom(text, list, noteId) {
  const el = document.createElement('li');
  const textNode = document.createTextNode(text);
  el.setAttribute('id', noteId); // aggiungo un id alla nota al DOM (la stessa che ho salvato al local storage ed in memoria)
  el.appendChild(textNode);
  el.classList.add('notepad__item');
  list.appendChild(el);

  // TODO: aggiungere listener che al click dell'elemento elimini l'elemento stesso dalla lista
  // la funzione del listener dovrà fare due cose:
  // - eliminare dal DOM l'elemento
  // - eliminare dal local storage la nota con l'ID specifico
  el.addEventListener('click', () => {
    removeItemFromDom(noteId);
    localStorage.remove(noteId);
  });
}

// rimozione singolo item dal DOM tramite la sua chiave
function removeItemFromDom(key) {
  const el = document.querySelector('#' + key);
  el.remove();
}
