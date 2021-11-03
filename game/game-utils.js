export function createHand(array){
    const hand = (array.splice(0, 2));
    return hand;
}

export function createFlop(array){
    const flop = (array.splice(0, 3));
    return flop;
}

export function createTurn(array){
    const turn = (array.splice(0, 1));
    return turn;
}

export function checkFlush(array){
    // this takes all the suits and turns it into an array //
    let suitArray = [];
    for (let arr of array){
        suitArray.push(arr.suit);
    }
    // this takes the array and turns it into an object w/ a count //
    let suitCount = {};
    suitArray.forEach((suit)=> {
        suitCount[suit] = (suitCount[suit] || 0) + 1;
    });
    for (const [key, value] of Object.entries(suitCount)){
        if (value >= 5){
            if (key){
                return 'flush';
            }
        }
    }
}

export function check4Pair(array){
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
            case 4 :
                return 'four-of-a-kind';
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
                return 'three-of-a-kind';
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
                return 'pair';
        }
    }}

export function checkStraight(array){
    let stringArray = [];
    for (let arr of array){
        stringArray.push(arr.number);
    }
    let numberArray = [];
    for (let number of stringArray){
        numberArray.push(parseInt(number));
    }
    const sortedArray = numberArray.sort((a, b) => a - b);
    let dupArray = [... new Set(sortedArray)];

    let count = 1;
    for (let i = 0; i < dupArray.length; i++){
        if (dupArray[i] + 1 === dupArray[i + 1]){
            count ++;
        } else {
            count = 0;
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
        console.log('You have 4 of a kind');
        return rank;

    } else if (checkFlush(hand)){
        rank = 6;
        console.log('You have a flush');
        return rank;

    } else if (checkStraight(hand)){
        rank = 5;
      console.log('You have a straight');
        return rank;

    } else if (check3Pair(hand)){
        rank = 4;
      console.log('You have 3 of a kind');
        return rank;

    } else if (check2Pair(hand)){
        rank = 3;
      console.log('You have a 2 pair');
        return rank;

    } else if (checkPair(hand)){
        rank = 2;
      console.log('You have a pair');
        return rank;

    } else {
        rank = 0;
        console.log('You didnt win');
        return rank;
    }
}

