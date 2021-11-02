export function findById(items, id){
    for (let item of items){
        if (item.id === id)
            return item;
    }
}

export function pullLocal() {
    const stringyPlayerObject = localStorage.getItem('PLAYER');
    const player = JSON.parse(stringyPlayerObject);
    return player;
}

export function pushLocal(playerObject){
    const stringyPlayerObject = JSON.stringify(playerObject);
    localStorage.setItem('PLAYER', stringyPlayerObject);
}

