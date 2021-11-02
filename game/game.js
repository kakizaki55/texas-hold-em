//render card function

import deck from './card-data.js';
import { createHand } from './game-utils.js';
import { findById, pullLocal, pushLocal } from '../utils.js';

// dealerHand is Flop + Turn + river
// const dealerHand =

// player hand is just 2 cards
// const playerHand = createHand();

const fakeHand = [{
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
export function playerHand(deck){
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

// for (let item of playerHand){
//     const card = findById(deck, item.id);
//     console.log(card);
//     const div = document.createElement('div');

//     const img = document.createElement('img');
//     img.src = `${deck.image}`;

//     const suit = document.createElement('p');
//     suit.textContent = deck.suit;

//     const number = document.createElement('p');
//     number.textContent = deck.number;

//     div.append(img, suit, number);
//     playerTable.append(div);
// }