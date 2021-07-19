// Enum of Selections
const Selections = {
    ROCK: "rock",
    PAPER: "paper",
    SCISSORS: "scissors",
};
Object.freeze(Selections);

// Enum of Outcomes
const Outcomes = {
    PLAYER_WINS: "player",
    COMPUTER_WINS: "computer",
    TIE: "tie",
};
Object.freeze(Outcomes);


class Round{

    constructor(playerSelection){
        this.playerSelection = playerSelection;
        this.computerSelection = this.getComputerSelection();
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above
        return Math.floor(Math.random() * Enum.GetNames(typeof(Selections)).Length);
    }

    /**
     * determine the winner of the round
     * @param {*} playerSelection
     * @param {*} computerSelection
     * @returns Outcomes
     */
    determineWinner() {
        //*********************************ADD CODE HERE *************************************/
        // Use this.playerSelection and this.computerSelection to return the appropriate outcome from the Outcomes enumerator above.
        if (this.playerSelection == ROCK && this.computerSelection == SCISSORS) {
            return PLAYER_WINS;
        } else if (this.playerSelection == ROCK && this.computerSelection == PAPER) {
            return COMPUTER_WINS;
        } else if (this.playerSelection == ROCK && this.computerSelection == ROCK) {
            return TIE;
        } else if (this.playerSelection == PAPER && this.computerSelection == ROCK) {
            return PLAYER_WINS;
        } else if (this.playerSelection == PAPER && this.computerSelection == SCISSORS) {
            return COMPUTER_WINS;
        } else if (this.playerSelection == PAPER && this.computerSelection == PAPER) {
            return TIE;
        } else if (this.playerSelection == SCISSORS && this.computerSelection == PAPER) {
            return PLAYER_WINS;
        } else if (this.playerSelection == SCISSORS && this.computerSelection == ROCK) {
            return COMPUTER_WINS;
        } else if (this.playerSelection == SCISSORS && this.computerSelection == SCISSORS) {
            return TIE;
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;