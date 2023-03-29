

let firstCard = getRamdon()
let secondCard = getRamdon()
let sum = firstCard + secondCard
let hasBlackJack = false; 
let isAlive = true; 
let message = "";
let messageEl = document.getElementById("message-el"); 
let sumEl = document.getElementById("sum")
let cards = document.getElementById("cards")
let newCard = document.getElementById("newcard")
let arr = [firstCard,secondCard];

function startGame (){
    sumEl.textContent =`Sum: ${sum}` 
    cards.textContent = ` Cards: `
    
    for(let i = 0; i < arr.length; i++){
        cards.textContent += arr[i] + " "  
    }

    if(sum <= 20){
        message = "Do you want to draw a new card ?"
    } else if(sum === 21){
        hasBlackJack = true; 
        message = "You've got BlackJack"
    } else { 
        isAlive = false
        message = "Better look next time, you are out of the game."
    }
    messageEl.textContent = message
}


function drawNewCard(){

    
    const sum2 = getRamdon()
    if(sum > 11 && sum2 == 11) {
        sum += 1
    arr.push(1)

    }
     else if (sum > 21 ){
        return;
     }
    else {
        sum += sum2
        arr.push(sum2)
    }

    startGame()
}


function getRamdon(){
    let randomCard = Math.floor(Math.random() * 13 ) + 1; 
    if(randomCard > 10) return 10; 
    else if(randomCard === 1) return 11
    else return randomCard
}


function reset(){
    
}