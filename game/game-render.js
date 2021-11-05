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

export function dealerHand(deck){
    for (let item of deck){
        const dealerTable = document.getElementById('dealer-hand');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        dealerTable.append(div);
    }

}

export function tableFlop(deck){
    for (let item of deck){
        const table = document.getElementById('table-hand');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.classList.add('tableCss');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }
}

export function tableTurn(deck){
    for (let item of deck){
        const table = document.getElementById('table-turn');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.classList.add('tableCss');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }
}

export function tableRiver(deck){
    for (let item of deck){
        const table = document.getElementById('table-river');
        const div = document.createElement('div');
    
        const img = document.createElement('img');
        img.classList.add('tableCss');
        img.src = `${item.image}`;
    
        const suit = document.createElement('p');
        suit.textContent = item.suit;
    
        const number = document.createElement('p');
        number.textContent = item.number;
    
        div.append(img, suit, number);
        table.append(div);
    }
}

export function shuffle(array) {
    let currentIndex = array.length, randomIndex;
    while (currentIndex !== 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [
            array[randomIndex], array[currentIndex]];
    }
    console.log(array);
    return array;
    
}