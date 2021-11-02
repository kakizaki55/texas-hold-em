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