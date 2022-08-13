function genIntNum(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
}

function genSimonArray(){
    const simonArray = []
    for(let i=0; i < 5; i++){
        const num = genIntNum(1, 100);
        if(!simonArray.includes(num)){
            simonArray.push(num);
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

const simonArray = genSimonArray();
alert(simonArray);

const playerArray = getNumPlayer();
setTimeout(playerArray, 30000);

const matchArray = []

for(let i = 0; i < 5; i++){
    if(simonArray.includes(playerArray[i])){
        matchArray.push(playerArray[i]);
    }
}

console.log("Hai indovinato i seguenti numeri >> ", matchArray);