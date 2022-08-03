function genIntNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function genSimonArray(){
    const simonArray = []
    for(let i=0; i < 5; i++){
        const num = genIntNum(1, 100);
        if(!simonArray.includes(n)){
            simonArray.push(n);
        }
    }
    return simonArray
}

function getNumPlayer(){
    const playerArray = []
    for(let i = 0; i < 5; i++){
        playerArray.push(parseInt(prompt('Inserisci il numero >> ' + (i + 1) + ';')));
    }
    return playerArray
}

function matchSimonNum(numSimon, numPlayer){
    if(numSimon === numPlayer){
        console.log('Hai preso il >> ', numPlayer);
        return numPlayer;
    }
    console.log('Hai dimenticato il >> ', numSimon);
    return numSimon;
}

const simonArray = genSimonArray();
alert(simonArray);

const playerArray = getNumPlayer();
setTimeout(playerArray, 5000);

for(let i = 0; i < 5; i++){
    matchSimonNum(simonArray[i], playerArray[i]);
}


// console.log('Simon >> ', genSimonArray(), ' || Player >> ', getNumPlayer(), ';')