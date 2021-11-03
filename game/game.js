//render card function
import { playerHand, dealerHand, tableFlop, tableTurn, tableRiver, shuffle } from './game-render.js';
import deck from './card-data.js';
import { createFlop, createHand, createTurn, checkHand } from './game-utils.js';
import { pullLocal, pushLocal } from '../utils.js';

const player = pullLocal();
console.log(player);

const name = document.getElementById('name');
const soulCount = document.getElementById('soul-count');

name.textContent = `Name: ${player.name}`;
soulCount.textContent = `souls: ${player.souls}`;

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

let playerHandRanking = 0;
let dealerHandRanking = 0;

const fullPlayerHand = [].concat(pHand, tFlop, tHand, rHand);
playerHandRanking = checkHand(fullPlayerHand);

const fullDealerHand = [].concat(dHand, tFlop, tHand, rHand);
dealerHandRanking = checkHand(fullDealerHand);
console.log(playerHandRanking);
console.log(dealerHandRanking);


const dealButton = document.getElementById('deal-button');
const tableSection = document.getElementById('table-section');
const refreshButton = document.getElementById('play-again-button');
const dealerSection = document.getElementById('dealer-section');
const faceDown = document.getElementById('face-down');
const resultsSpan = document.getElementById('results');

dealButton.addEventListener('click', ()=> {
    tableSection.classList.remove('hidden');
    tableSection.classList.add('unHidden');
    dealerSection.classList.remove('hidden');
    faceDown.classList.add('hidden');
    const results = checkWhoWon(playerHandRanking, dealerHandRanking);
    resultsSpan.textContent = results;
    console.log(results);

    
});

refreshButton.addEventListener('click', ()=>{
    location.reload();
});

function checkWhoWon(playerHandRanking, dealerHandRanking){
    if (playerHandRanking > dealerHandRanking){
        return 'You win!';
    } else if (playerHandRanking === dealerHandRanking){
        return 'Tie!';
    } else {
        return 'You lose!';
    }
}

