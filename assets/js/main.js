/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro ed emetto un messaggio in console
con il numero della cella cliccata.
*/

// seleziono elemento della dom
const containerEl = document.querySelector('.container');


for (let i = 0; i < 100; i++) {

    // creo elemento da inserire nella dom
    const cellEl = document.createElement('div');

    //inserisco elemento nella dom con ciclo
    containerEl.append(cellEl);

    //aggiungo la classe al'elemento
    cellEl.className = 'cell';

}