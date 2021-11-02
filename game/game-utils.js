

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
        console.log(number, count);
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
        console.log(number, count);
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
        console.log(number, count);
        switch (count) {
            case 2 :
                return 'pair';
        }
    }}

export function check2Pair(){}

export function checkFullHouse(){}


