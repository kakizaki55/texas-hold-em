export function createHand(array){
    const hand = array.splice(0, 2);
    return hand;
}

export function createFlop(array){
    const flop = array.splice(0, 3);
    return flop;
}

export function createTurn(array){
    const turn = array.splice(0, 1);
    return turn;
}

export function checkFlush(array){
    // just a little refactor to reduce the number of loops you need
    let flush;
    array.reduce((acc, card) => {
        acc[card.suit]++;
        if (acc[card.suit] >= 5) flush = 'flush';
        return acc;
    }, { heart: 0, club: 0, spade: 0, diamond:0 });
    return flush;
}

export function check4Pair(array){
    // think about how you could do this using a .map
    let numberArray = [];
    for (let arr of array){
        numberArray.push(arr.number);
    }
    //  this can also be done using a .reduce -- check out my code above and see if you can modify
    let numberCount = {};
    numberArray.forEach((num)=> {
        numberCount[num] = (numberCount[num] || 0) + 1;
    });
    // siwtch is for checking the count number and seeing how many 
    for (const [number, count] of Object.entries(numberCount)){
        
        switch (count) {
            case 4 :
                return `four-of-a-kind ${number}`;
        }
    }}

export function check3Pair(array){
    let numberArray = [];
    for (let arr of array){
        numberArray.push(arr.number);
    }
    let numberCount = {};
    numberArray.forEach((num)=> {
        numberCount[num] = (numberCount[num] || 0) + 1;
    });
        // siwtch is for checking the count number and seeing how many 
    for (const [number, count] of Object.entries(numberCount)){
        switch (count) {
            case 3 :
                return `three-of-a-kind ${number}`;
        }
    }}

export function checkPair(array){
    let numberArray = [];
    for (let arr of array){
        numberArray.push(arr.number);
    }
    let numberCount = {};
    numberArray.forEach((num)=> {
        numberCount[num] = (numberCount[num] || 0) + 1;
    });
        // siwtch is for checking the count number and seeing how many 
    for (const [number, count] of Object.entries(numberCount)){
        switch (count) {
            case 2 :
                return `pair ${number}`;
        }
    }}

export function checkStraight(array){
    // let stringArray = [];
    // for (let arr of array){
    //     stringArray.push(arr.number);
    // }
    // let numberArray = [];
    // for (let number of stringArray){
    //     numberArray.push(parseInt(number));
    // }
    
    let numberArray = array.map(card => parseInt(card.number));
    const sortedArray = numberArray.sort((a, b) => a - b);
    let dupArray = [... new Set(sortedArray)];

    let count = 1;
    for (let i = 0; i < dupArray.length; i++){
        if (dupArray[i] + 1 === dupArray[i + 1]){
            count ++;
        } else {
            count = 1;
        }
        if (count === 5){
            return 'straight';
        }
    }
}

export function check2Pair(array){
    let numberArray = [];
    for (let arr of array){
        numberArray.push(arr.number);
    }
    let numberCount = {};
    numberArray.forEach((num)=> {
        numberCount[num] = (numberCount[num] || 0) + 1;
    });
    let paircounter = 0;
    const pairArray = Object.values(numberCount);
    for (let pair of pairArray){
        if (pair === 2){
            paircounter ++;
        }
        if (paircounter === 2){
            return 'two-pair';
        }
    }
}

export function checkHand(hand){
    let rank = 0;
    if (check4Pair(hand)){
        rank = 8;
        return rank;

    } else if (checkFlush(hand)){
        rank = 6;
        return rank;

    } else if (checkStraight(hand)){
        rank = 5;
        return rank;

    } else if (check3Pair(hand)){
        rank = 4;
        return rank;

    } else if (check2Pair(hand)){
        rank = 3;
        return rank;

    } else if (checkPair(hand)){
        rank = 2;
        return rank;

    } else {
        rank = 0;
        return rank;
    }
}

