// L'utente clicca su un bottone che genererà una griglia di gioco quadrata. ✔️
// Ogni cella ha un numero progressivo, da 1 a 100. ✔️
// Ci saranno quindi 10 caselle per ognuna delle 10 righe. ✔️
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto 
// un messaggio in console con il numero della cella cliccata. ✔️

// Seleziono il bottone al qaule attribuire l'evento "click"
const playButton = document.querySelector("#play");
playButton.addEventListener("click", function(){
    // Inserisco le classi all'interno del box 
    const box = document.querySelector("#box");
    box.classList.add('container');
    box.classList.add('ms-container');
    box.classList.add('flex-wrap');
    box.classList.add('d-flex');
    // Genero un ciclo per creare 100 qaudrati nel DOM
    for(let i = 1; i <= 100; i++) {
        const newSquare = generateSquare(i);
        box.append(newSquare);
    }
    
    // Funzione che genera un quadrato
    function generateSquare(number) {
        const newSquare = document.createElement('div');
        newSquare.classList.add('square');
        newSquare.classList.add('d-flex')
        newSquare.classList.add('justify-content-center')
        newSquare.classList.add('align-items-center')
        newSquare.innerHTML = `<span>${number}</span>`;
    
        // Gestione del click su ogni qudrato
        newSquare.addEventListener('click', function() {
            newSquare.classList.add("azzurro");
            console.log(number)
        });
    
        return newSquare;
    }
    
});


    


// Bonus
// Aggiungere una select accanto al bottone di generazione, che fornisca una scelta tra tre diversi livelli di difficoltà:
// - con difficoltà 1 => 100 caselle, con un numero compreso tra 1 e 100, divise in 10 caselle per 10 righe;
// - con difficoltà 2 => 81 caselle, con un numero compreso tra 1 e 81, divise in 9 caselle per 9 righe;
// - con difficoltà 3 => 49 caselle, con un numero compreso tra 1 e 49, divise in 7 caselle per 7 righe;
// Consigli del giorno:
// Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
// Ad esempio:
// Di cosa ho bisogno per generare i numeri?
// Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
// Trovate allegato gli screenshot con e senza bonus e il logo da usare nell'header.

