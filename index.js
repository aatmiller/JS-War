//we're gonna start by initializing all the variables, arrays, and functions that we'll use in the later operations section

//makes a "deck" and assigns value to the 52 "cards"
let wholeDeckArray = [1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6, 7, 7, 7, 7, 8, 8, 8, 8, 9, 9, 9, 9, 10, 10, 10, 10, 11, 11, 11, 11, 12, 12, 12, 12, 13, 13, 13, 13];

//these arrays represent the decks of our "players"
let playerArray1 = [];
let playerArray2 = [];

//these arrays represent the cards that the players have "played" from their decks
let tempArray1 = [];
let tempArray2 = [];

//an incrementor for a while loop we'll use to make the players play their cards
let incrementor = 0;

let round = 0;

//a function to push the elements in the whole deck to the individual player decks
function splitDeck (playerArray, numberOfCards){
    for (i=0;i<numberOfCards;i++){
        playerArray.push(wholeDeckArray.pop);
    }
}

//a function to empty the played cards into the "bottom" of a player's deck when a player wins a comparison
function emptyTemps (playerArray) {
    for (i = 0; i<tempArray1.length; i++){
        playerArray.push(tempArray1.pop);
    }
    for (i = 0; i<tempArray2.length; i++){
        playerArray.push(tempArray2.pop);
    }
}

//from here on it is the operations that actually simulate the game

//shuffles the whole 52 card "deck"
wholeDeckArray.sort(() => Math.random() - 0.5);

//actually splits the now shuffled whole deck between the 2 "players"
splitDeck(playerArray1, 26);
splitDeck(playerArray2, 26);

//the game begins! the "game" will continue until one of the player's decks don't have any cards remaining OR the round count exceeds 1000
while ((playerArray1.length != 0) && (playerArray2.length != 0) && round < 1000){
    //the players will play one more card when the following while loop happens
    incrementor++;
    round++;

    //moves the "top" card of the deck to the played state arrays. the value at 0 in these arrays will be compared, that way only the most recently unshifted value will matter for comparison
    while (incrementor != 0){
        tempArray1.unshift(playerArray1.shift);
        tempArray2.unshift(playerArray2.shift);
        incrementor--;
    }

    if(tempArray1[0] > tempArray2[0]){
        emptyTemps(playerArray1);
    } else if(tempArray1[0] < tempArray2[0]){
        emptyTemps(playerArray2);
    } else {
        incrementor++;
    }
}

//the winner is declared
if (round==1000){
    console.log("The game went on too long!");
}
else if (playerArray2.length==0){
    console.log("Player 1 wins!");
} else {
    console.log("Player 2 wins!");
}

//blabla