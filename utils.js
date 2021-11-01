export function findById(items, id){
    for (let item of items){
        if (item.id === id)
            return item;
    }
}

export function pullLocal(playerObject) {
    const stringyPlayerObject = localStorage.getItem(playerObject);
    const player = JSON.parse(stringyPlayerObject);
    return player;
}

export function pushLocal(playerObject){
    const stringyPlayerObject = JSON.stringify(playerObject);
    localStorage.setItem('PLAYER', stringyPlayerObject);
}

