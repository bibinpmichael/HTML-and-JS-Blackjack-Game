// Object representing the player with a name and the number of chips they have
let player = {
    name: "Per",
    chips: 200
}

// Initialize an empty array to hold the cards
let cards = [];
// Initialize the sum of the cards to 0
let sum = 0;
// Boolean flag to check if the player has a Blackjack
let hasBlackJack = false;
// Boolean flag to check if the player is still in the game
let isAlive = false;
// String to store the message to be displayed to the player
let message = "";

// Get the elements from the HTML to update their content dynamically
let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");
let playerEl = document.getElementById("player-el");

// Display the player's name and the number of chips they have
playerEl.textContent = player.name + ": $" + player.chips;

// Function to generate a random card value between 1 and 11
function getRandomCard() {
    // Generate a random number between 1 and 13
    let randomNumber = Math.floor(Math.random() * 13) + 1;
    // If the random number is greater than 10 (i.e., 11, 12, 13), return 10 (Jack, Queen, King)
    if (randomNumber > 10) {
        return 10;
    // If the random number is 1, return 11 (Ace)
    } else if (randomNumber === 1) {
        return 11;
    // Otherwise, return the number itself (2-10)
    } else {
        return randomNumber;
    }
}

// Function to start the game
function startGame() {
    isAlive = true; // Player is now alive in the game
    // Draw two cards for the player to start the game
    let firstCard = getRandomCard();
    let secondCard = getRandomCard();
    cards = [firstCard, secondCard]; // Store the drawn cards in an array
    sum = firstCard + secondCard; // Calculate the initial sum of the cards
    renderGame(); // Render the game state to the screen
}

// Function to render the current game state
function renderGame() {
    // Display the cards held by the player
    cardsEl.textContent = "Cards: ";
    for (let i = 0; i < cards.length; i++) {
        cardsEl.textContent += cards[i] + " ";
    }
    
    // Display the sum of the cards
    sumEl.textContent = "Sum: " + sum;

    // Determine the game message based on the sum of the cards
    if (sum <= 20) {
        message = "Do you want to draw a new card?";
    } else if (sum === 21) {
        message = "You've got Blackjack!";
        hasBlackJack = true;
    } else {
        message = "You're out of the game!";
        isAlive = false;
    }
    
    // Display the message to the player
    messageEl.textContent = message;
}

// Function to draw a new card
function newCard() {
    // Check if the player is still in the game and does not have Blackjack
    if (isAlive === true && hasBlackJack === false) {
        let card = getRandomCard(); // Draw a new card
        sum += card; // Add the new card to the sum
        cards.push(card); // Add the new card to the player's hand
        renderGame(); // Update the game state on the screen
    }
}
