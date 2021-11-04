import { pullLocal } from '../utils.js';
import { hadesQuotes } from './results-data.js';

const player = pullLocal();
const resultsP = document.getElementById('results-p');
const ranQuote = document.getElementById('ran-quote');
const quote1 = document.getElementById('first-quote');

if (player.souls >= 100) {
    resultsP.textContent = 'Congratulations, you won your Souls!';
} else {
    resultsP.textContent = 'You remain in Damnation';
}

ranQuote.textContent = hadesQuotes[Math.floor(Math.random() * hadesQuotes.length)];

setTimeout(() => {
    quote1.classList.remove('hidden'); 
    quote1.classList.add('unhidden');
}, 1000);

setTimeout(() => {
    ranQuote.classList.remove('hidden');
    ranQuote.classList.add('unhidden');
}, 4000);

setTimeout(() => {
    resultsP.classList.remove('hidden');
    resultsP.classList.add('unhidden');
}, 8000);