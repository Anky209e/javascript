// Function for getting random integer between min and max
function getRandomInt(min, max){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function for getting sum of a array
function getArraySum(arr){
    var total = 0;
    for (var i in arr) {
    total += arr[i];
    }
    return total;
}

// Array for maintaining card Deck
let cardDeck = [];

// Function for handling Game
function newCard()
{
    let cardsEl = document.querySelector("#cards-el");
    let messageEl = document.querySelector("#message-el");
    let sumEl = document.querySelector("#sum-el");
    let btnEl = document.querySelector(".new-btn");

    let newCard = getRandomInt(1,21);
    let sum = 0;

    btnEl.style.backgroundColor = "rgb(81, 216, 81)"
    btnEl.textContent = "New Card";
    messageEl.textContent = "Lets Pick a Card!"
    if (cardDeck.length <= 5){

        cardDeck.push(newCard);
        sum = getArraySum(cardDeck);

    }
    else{
        messageEl.textContent = "Only 5 cards can be aquired"
    }
    
    cardsEl.textContent = "Cards: "+cardDeck;
    sumEl.textContent = "Sum: "+sum;

    // if sum is 21 user won the game
    if (sum === 21){
        messageEl.textContent = "You Won the Game!"
        sum = 0;
        cardDeck = [];
        btnEl.style.backgroundColor = "blue";
        btnEl.textContent = "New Game";

    }
    else if (sum > 21){
        messageEl.textContent = "Your Lost The Game!"
        sum = 0;
        cardDeck = [];
        btnEl.style.backgroundColor = "pink";
        btnEl.textContent = "New Game";
    }

}

