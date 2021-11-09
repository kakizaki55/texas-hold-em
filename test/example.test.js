
import { createHand, createFlop, createTurn, checkFlush, check4Pair, check3Pair, checkPair, checkStraight, check2Pair } from '../game/game-utils.js';
// import { playerHand } from '../game/game.js'


const test = QUnit.test;
const skip = QUnit.skip;

// this is just a suggestion, but I liked to use the following style
// when testing multiple functions in the same file so its clear from the 
// test description exactly which function I'm testing

test('#createHand should return two cards from the array', (expect) => {
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
test('#createHand should remove the two cards from the array', (expect) => {
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

test('#createFlop should return three cards from the deck', (expect) => {
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

test('#createFlop should return one card from the deck', (expect) => {
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

test('#checkFlush should return a string if there is a flush', (expect) => {
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

test('#checkFlush should return undefined if no flush', (expect) => {
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
    const expected = 'four-of-a-kind 6';
    const actual = check4Pair(minideck);

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
    const expected = 'three-of-a-kind 6';
    const actual = check3Pair(minideck);

    expect.equal(actual, expected);
});
test('checking to see if the pair function is working, 2 pair', (expect) => {
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
    const expected = 'pair 8';
    const actual = checkPair(minideck);

    expect.equal(actual, expected);
});
test('checking to see if check straight function is working', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '5',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '6',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '12',
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
        number: '7',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'straight';
    const actual = checkStraight(minideck);

    expect.equal(actual, expected);
});
skip('checking to see if check straight function is working', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '5',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '13',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '9',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '10',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '8',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '7',
        image: '../assets/cards/8C.png',
    }];
    const expected = 'straight';
    const actual = checkStraight(minideck);

    expect.equal(actual, expected);
});
test('checking to see if check straight function is working (mini straight)', (expect) => {
    const minideck = [{
        id: 1,
        suit: 'club',
        number: '4',
        image: '../assets/cards/2C.png',
    
    }, {
        id: 2,
        suit: 'club',
        number: '5',
        image: '../assets/cards/3C.png',
    }, {
        id: 3,
        suit: 'club',
        number: '13',
        image: '../assets/cards/4C.png',
    }, {
        id: 4,
        suit: 'club',
        number: '9',
        image: '../assets/cards/5C.png',
    }, {
        id: 5,
        suit: 'heart',
        number: '10',
        image: '../assets/cards/6C.png',
    }, {
        id: 6,
        suit: 'heart',
        number: '8',
        image: '../assets/cards/7C.png',
    }, {
        id: 7,
        suit: 'spade',
        number: '6',
        image: '../assets/cards/8C.png',
    }];
    const expected = undefined;
    const actual = checkStraight(minideck);

    expect.equal(actual, expected);
});