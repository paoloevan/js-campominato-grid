/*
L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
Ogni cella ha un numero progressivo, da 1 a 100.
Ci saranno quindi 10 caselle per ognuna delle 10 righe.
Quando l'utente clicca su ogni cella,
la cella cliccata si colora di azzurro ed emetto un messaggio in console
con il numero della cella cliccata.

Aggiungere una select accanto al bottone di generazione,
che fornisca una scelta tra tre diversi livelli di difficoltà:
con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100,
divise in 10 caselle per 10 righe;
con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81,
divise in 9 caselle per 9 righe;
con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49,
divise in 7 caselle per 7 righe;
*/

// seleziono elemento della dom
const containerEl = document.querySelector('.container');
//seleziono bottone dalla dom
const playButton = document.getElementById('play');
//seleziono elemento select
const difficultEl = document.getElementById('difficult').value;

//aggiungo event listner
playButton.addEventListener('click', function () {
    document.querySelector('.container').style.display = 'flex';

    for (let i = 1; i < 101; i++) {

        // creo elemento da inserire nella dom
        const cellEl = document.createElement('div');

        //inserisco elemento nella dom con ciclo
        containerEl.append(cellEl);

        //aggiungo la classe al'elemento
        cellEl.className = 'cell';

        // aggiungo numero nella cella
        cellEl.innerText = i;

        cellEl.addEventListener('click', function () {
            //aggiungo classe active
            cellEl.classList.add('active')

            //emissione messaggio console con numero della cella
            console.log(cellEl.innerText);
        })
    }

})