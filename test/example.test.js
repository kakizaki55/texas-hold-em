import { createHand, createFlop, createTurn } from '../game/game-utils.js';

const test = QUnit.test;

test('generate a hand, two cards outof the array and removce them from array', (expect) => {
    const minideck = [{
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
        suit: 'club',
        number: '7',
        image: '../assets/cards/7C.png',
    }];


    const expected = [{
        id: 1,
        suit: 'club',
        number: '2',
        image: '../assets/cards/2C.png',
        
    }, {
        id: 2,
        suit: 'club',
        number: '3',
        image: '../assets/cards/3C.png',
    }];

    const actual = createHand(minideck);

    expect.deepEqual(actual, expected);
});
test('makeing sure the card is actually takin outo of the array ', (expect) => {
    const minideck = [{
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
        suit: 'club',
        number: '7',
        image: '../assets/cards/7C.png',
    }];


    const expected = [{
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
        suit: 'club',
        number: '7',
        image: '../assets/cards/7C.png',
    }];

    createHand(minideck);
    
    const actual = minideck;
    
    expect.deepEqual(actual, expected);
});

test('generate three cards and take them out of the array', (expect) => {
    const minideck = [{
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
        suit: 'club',
        number: '7',
        image: '../assets/cards/7C.png',
    }];

    const expected = [{
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
        image: '../assets/cards/4C.png'
    }];
    const actual = createFlop(minideck);
    expect.deepEqual(actual, expected);
});

test('generate one card and take them out of the array', (expect) => {
    const minideck = [{
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
        suit: 'club',
        number: '7',
        image: '../assets/cards/7C.png',
    }];

    const expected = [{
        id: 1,
        suit: 'club',
        number: '2',
        image: '../assets/cards/2C.png',
    }];
    const actual = createTurn(minideck);
    expect.deepEqual(actual, expected);
});
