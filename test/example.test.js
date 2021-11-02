
import { createHand, createFlop, createTurn, checkFlush, check4Pair, check3Pair, checkPair, check2Pair, checkFullHouse } from '../game/game-utils.js';
// import { playerHand } from '../game/game.js';


const test = QUnit.test;
const skip = QUnit.skip;
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
    }, {
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

test('checking to see if there is a flush and returns a string', (expect) => {
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
        suit: 'heart',
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
    },
    ];

    const expected = 'flush';
    const actual = checkFlush(minideck);
    expect.equal(actual, expected);

});

test('checking to see if it returns an empty string', (expect) => {
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
        suit: 'heart',
        number: '6',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '7',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '8',
        image: '../assets/cards/8C.png',
    }
    ];

    const expected = undefined;
    const actual = checkFlush(minideck);
    expect.equal(actual, expected);

});

test('checking to see if the pair functio nis working, 4 of a kind', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '6',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '6',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '6',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '6',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '7',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '8',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'four-of-a-kind';
    const actual = check4Pair(minideck);

    expect.equal(actual, expected);
});
test('checking to see if the pair functio nis working, full house', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '6',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '6',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '6',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '5',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '7',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '4',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'full-house';
    const actual = checkFullHouse(minideck);

    expect.equal(actual, expected);
});
test('checking to see if the pair function is working, 3 of a kind', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '11',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '6',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '6',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '6',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '7',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '10',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'three-of-a-kind';
    const actual = check3Pair(minideck);

    expect.equal(actual, expected);
});
test('checking to see if the pair functio nis working, 2 pair', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
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
        number: '6',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '6',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '7',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '8',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'two-pair';
    const actual = check2Pair(minideck);

    expect.equal(actual, expected);
});
test('checking to see if the pair functio nis working, pair', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '13',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '9',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '3',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '6',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '8',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '8',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'pair';
    const actual = checkPair(minideck);

    expect.equal(actual, expected);
});