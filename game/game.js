//render card function
import { playerHand, dealerHand, tableFlop, tableTurn, tableRiver } from './game-render.js';
import deck from './card-data.js';
import { createFlop, createHand, createTurn } from './game-utils.js';
// import { findById, pullLocal, pushLocal } from '../utils.js';

shuffle(deck);

const pHand = createHand(deck);

const dHand = createHand(deck);

const tFlop = createFlop(deck);

const tHand = createTurn(deck);

const rHand = createTurn(deck);


playerHand(pHand);

dealerHand(dHand);

tableFlop(tFlop);

tableTurn(tHand);

tableRiver(rHand);


shuffle(deck);
function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    return array;
}

const dealButton = document.getElementById('deal-button');
const tableSection = document.getElementById('table-section');
const refreshButton = document.getElementById('play-again-button');
const dealerSection = document.getElementById('dealer-section');
const faceDown = document.getElementById('face-down');

dealButton.addEventListener('click', (e)=>{
    tableSection.classList.remove('hidden');
    tableSection.classList.add('unHidden');
    dealerSection.classList.remove('hidden');
    faceDown.classList.add('hidden');
});

refreshButton.addEventListener('click', (e)=>{
    location.reload();
});