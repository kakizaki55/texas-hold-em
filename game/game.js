//render card function

import deck from './card-data.js';
import { createHand } from './game-utils.js';
import { findById, pullLocal, pushLocal } from '../utils.js';

// dealerHand is Flop + Turn + river
// const dealerHand =

// player hand is just 2 cards
// const playerHand = createHand();

const fakeHand = [{
    id: 1,
    suit: 'club',
    number: '2',
    image: '../assets/cards/2C.png',
    
}, {
    id: 2,
    suit: 'club',
    number: '3',
    image: '../assets/cards/3C.png',
}, {
    id: 3,
    suit: 'club',
    number: '4',
    image: '../assets/cards/4C.png',
}, {
    id: 4,
    suit: 'club',
    number: '5',
    image: '../assets/cards/5C.png',
}, {
    id: 5,
    suit: 'club',
    number: '6',
    image: '../assets/cards/6C.png',
}, {
    id: 6,
    suit: 'heart',
    number: '7',
    image: '../assets/cards/7C.png',
}, {
    id: 7,
    suit: 'club',
    number: '8',
    image: '../assets/cards/8C.png',
}];

playerHand(fakeHand);

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
dealerHand(fakeHand);
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
tableFlop(fakeHand);
function tableFlop(deck){
    for (let item of deck){
        const table = document.getElementById('table-hand');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }

}
shuffle(fakeHand);
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