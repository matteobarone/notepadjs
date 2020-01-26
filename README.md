## Notepad js

Todos:
 * Fix `addItem()`: dobbiamo trovare una soluzione per storare tutte le note e non solamente l'ultima   inserita, perché al momento sovrascriviamo l'array.
   Nel punto in cui facciamo il set (linea 24) dobbiamo passare al metodo l'array già popolato con tutte le note storate (`storeItems`) + la nuova nota.
 * All'init dell'applicazione dobbiamo storare nella nostra variabile (`storeItems`) le eventuali note che sono presenti al local storage.
   Utilizzare il metodo get del local storage.
 * All'init dell'applicazione, popolare l'HTML con le eventuali note presenti al local storage.
