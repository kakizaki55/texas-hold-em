//render card function
import { playerHand, dealerHand, tableFlop, tableTurn, tableRiver, shuffle } from './game-render.js';
import deck from './card-data.js';
import { createFlop, createHand, createTurn, checkHand } from './game-utils.js';
import { pullLocal, pushLocal } from '../utils.js';

let player = pullLocal();

const name = document.getElementById('name');
const soulCount = document.getElementById('soul-count');
const betForm = document.getElementById('bet-form');

name.textContent = `Name: ${player.name}`;
soulCount.textContent = `souls: ${player.souls}`;

betForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const bet = new FormData(betForm);
    const betAmount = bet.get('bet-amount');
    player.souls = player.souls - betAmount;
    player.bet = betAmount;
    pushLocal(player);

    player = pullLocal();
    name.textContent = `Name: ${player.name}`;
    soulCount.textContent = `souls: ${player.souls}`;
    pushLocal(player);
});

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

    if (resultsSpan.textContent === 'You win!'){
        player.souls += (player.bet * 2);
        player.bet = 0;
        pushLocal(player);
        player = pullLocal();
        name.textContent = `Name: ${player.name}`;
        soulCount.textContent = `souls: ${player.souls}`;

    } else if (resultsSpan.textContent === 'Tie!'){
        player.souls += player.bet;
        player.bet = 0;
        pushLocal(player);
        player = pullLocal();
        name.textContent = `Name: ${player.name}`;
        soulCount.textContent = `souls: ${player.souls}`;

    } else {
        player = pullLocal();
        name.textContent = `Name: ${player.name}`;
        soulCount.textContent = `souls: ${player.souls}`;
    }
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

