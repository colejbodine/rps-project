var game = new Game();


// main entry point
function playGame() {
    //*********************************ADD CODE HERE *************************************/
    // Call the function game.newGame() to reset the counts.
    game.newGame();

    //*********************************ADD CODE HERE *************************************/
    // Get the number of rounds from the user, and store it in a variable called numberOfRounds.
    let numberOfRounds = prompt("Pick a number of rounds between 1 and 5.");
    // Use game.IsNumberOfRoundsValid() to validate the user input.
    // If the input is valid, use game.setNumberOfRounds(numberOfRounds) to set the number of rounds for the game 
    //  >> Else, try to get the number of rounds for the suer again
    if (game.isNumberOfRoundsValid(numberOfRounds)) {
        game.setNumberOfRounds(numberOfRounds);
    }

    //*********************************ADD CODE HERE *************************************/
    // Call playRound() with a parameter of the round count (1 thru numberOfRounds) for each round 
    for(i = numberOfRounds; i > 0; i--) {
        playRound();
        console.log("Number of rounds left: ", i - 1);
    }

    //*********************************ADD CODE HERE *************************************/
    // Display the Final Score from the properties stored in the Game object
    console.log(`Player wins: ${game.countOfPlayerWins} \nComputer wins: ${game.countOfComputerWins} \nTies: ${game.countOfTies}`);
}

/**
 * play a round of rock paper scissors
 * @param {*} roundNumber
 */
function playRound(roundNumber) {
    //*********************************ADD CODE HERE *************************************/
    // Display the Current Score to the User
    console.log(`Player wins: ${game.countOfPlayerWins} \nComputer wins: ${game.countOfComputerWins} \nTies: ${game.countOfTies}`);
    
    //Prompt for Player Selection
    playerSelection = getPlayerSelection();
    console.log(`Player selection: ${playerSelection}`)
    var round = new Round(playerSelection);

    //Play the Round
    var outcome = round.determineWinner();

    //*********************************ADD CODE HERE *************************************/
    // Display the Round Results from the properties stored in the Round object
    if (outcome == Outcomes.PLAYER_WINS) {
        game.incrementPlayerWins();
        console.log("You won!");
    } else if (outcome == Outcomes.COMPUTER_WINS) {
        game.incrementComputerWins();
        console.log("Computer won.");
    } else if (outcome == Outcomes.TIE) {
        game.incrementCountOfTies;
        console.log("It's a tie!");
    }
}



/**
 * prompt the user to get a selection
 * @returns Selections
 */
function getPlayerSelection() {
    
    //*********************************ADD CODE HERE *************************************/
    // Prompt, Validate and Return the player selection. This must be in the form of "rock", "paper", or "scissors" exactly
    let playerSelection = prompt('Select "rock", "paper", or "scissors".').toLowerCase();

    switch(playerSelection) {
        case "rock":
            return Selections.ROCK;
            break;
        case "paper":
            return Selections.PAPER;
            break;
        case "scissors":
            return Selections.SCISSORS;
            break;
        default:
            return Selections.ROCK;
            break;
    }
}

