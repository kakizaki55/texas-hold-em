//render card function

import deck from './card-data.js';
import { createFlop, createHand, createTurn } from './game-utils.js';
// import { findById, pullLocal, pushLocal } from '../utils.js';

// dealerHand is Flop + Turn + river
// const dealerHand =

// player hand is just 2 cards
// const playerHand = createHand();
shuffle(deck);
console.log(deck);

const pHand = createHand(deck);
console.log(pHand, deck);

const dHand = createHand(deck);
console.log(dHand, deck);

const tFlop = createFlop(deck);
console.log(tFlop);

const tHand = createTurn(deck);
console.log(tHand);

const rHand = createTurn(deck);
console.log(rHand);





playerHand(pHand);

// where player hand goes
function playerHand(deck){
    for (let item of deck){
        const playerTable = document.getElementById('player-hand');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        playerTable.append(div);
    }

}
dealerHand(dHand);
function dealerHand(deck){
    for (let item of deck){
        const dealerTable = document.getElementById('dealer-hand');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        dealerTable.append(div);
    }

}
tableFlop(tFlop);
function tableFlop(deck){
    for (let item of deck){
        const table = document.getElementById('table-hand');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.classList.add('tableCss');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }
}

tableTurn(tHand);
function tableTurn(deck){
    for (let item of deck){
        const table = document.getElementById('table-turn');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.classList.add('tableCss');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }
}

tableRiver(rHand);
function tableRiver(deck){
    for (let item of deck){
        const table = document.getElementById('table-river');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.classList.add('tableCss');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }
}


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

dealButton.addEventListener('click', (e)=>{
    tableSection.classList.remove('hidden');
    tableSection.classList.add('unHidden');

});