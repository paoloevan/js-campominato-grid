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

//aggiungo event listner
playButton.addEventListener('click', function () {
    //azzero griglia
    containerEl.innerHTML = ''
    //appare la griglia
    document.querySelector('.container').style.display = 'flex';
    //seleziono elemento select
    const difficultEl = document.getElementById('difficult').value;
    //condizione per difficoltà
    if (difficultEl == 'difficile') {
        numberCells = 100;
    } else if (difficultEl == 'normale') {
        numberCells = 81;
    } else if (difficultEl == 'facile'){
        numberCells = 49;
    }

    for (let i = 1; i <= numberCells; i++) {

        // creo elemento da inserire nella dom
        const cellEl = document.createElement('div');

        //inserisco elemento nella dom con ciclo
        containerEl.append(cellEl);

        //aggiungo la classe al'elemento
        if (difficultEl == 'facile') {
            cellEl.className = 'cell_hard cell';
        } else if (difficultEl == 'normale') {
            cellEl.className = 'cell_md cell';
        } else if (difficultEl == 'difficile'){
            cellEl.className = 'cell_easy cell';
            
        }

        // aggiungo numero nella cella
        cellEl.innerText = i;

        
        cellEl.addEventListener('click', function () {
            //aggiungo classe active
            //cellEl.classList.add('active'); //soluzione alternativa
            this.classList.add('active');
            //this.classList.toggle('active'); //soluzione alternativa
            
            //emissione messaggio console con numero della cella
            console.log(cellEl.innerText);
        })
    }
})