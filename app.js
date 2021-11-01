import { pullLocal, pushLocal } from './utils.js';



const playerData = {
    name: 'noah',
    money: 50,
    img:''
};

pushLocal(playerData);

console.log(pullLocal());
