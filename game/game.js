//render card function
import { playerHand, dealerHand, tableFlop, tableTurn, tableRiver, shuffle } from './game-render.js';
import deck from './card-data.js';
import { createFlop, createHand, createTurn, checkHand } from './game-utils.js';
import { pullLocal, pushLocal } from '../utils.js';

let player = pullLocal();

const name = document.getElementById('name');
const soulCount = document.getElementById('soul-count');
const betForm = document.getElementById('bet-form');
const betButton = document.getElementById('bet-button');

name.textContent = `Name: ${player.name}`;
soulCount.textContent = `souls: ${player.souls}`;

betForm.addEventListener('submit', (event) =>{
    event.preventDefault();
    const bet = new FormData(betForm);
    const betAmount = bet.get('bet-amount');
    if (betAmount > player.souls){
        alert('you do not have that many souls to bet');
    } else {
        player.souls = player.souls - betAmount;
        player.bet = betAmount;
        pushLocal(player);
    
        player = pullLocal();
        name.textContent = `Name: ${player.name}`;
        soulCount.textContent = `souls: ${player.souls}`;
        pushLocal(player);
        betButton.classList.add('hidden');
    }
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
    const results = checkWhoWon(playerHandRanking, dealerHandRanking);
    if (player.bet < 1) {
        alert('you must bet atleast 1 soul');
    } else {
        resultsSpan.textContent = results;
        tableSection.classList.remove('hidden');
        tableSection.classList.add('unHidden');
        dealerSection.classList.remove('hidden');
        faceDown.classList.add('hidden');
        refreshButton.classList.remove('hidden');
        if (resultsSpan.textContent === 'You win!'){
            player.souls = Number(player.souls) + Number(player.bet * 2);
            player.bet = 0;
            pushLocal(player);
            player = pullLocal();
            name.textContent = `Name: ${player.name}`;
            soulCount.textContent = `souls: ${player.souls}`;
    
        } else if (resultsSpan.textContent === 'Tie!'){
            player.souls = Number(player.souls) + Number(player.bet);
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

