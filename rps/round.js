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
        console.log(`Computer selection: ${this.computerSelection}`)
    }

    /**
     * get a random computer selection
     * @returns Selections
     */
    getComputerSelection() {
        //*********************************ADD CODE HERE *************************************/
        // Use Math.floor and select a random Selections enumerator from above
        let randomNum = Math.floor(Math.random() * 3);
        
        switch(randomNum) {
            case 0:
                return Selections.ROCK;
                break;
            case 1:
                return Selections.PAPER;
                break;
            case 2:
                return Selections.SCISSORS;
                break;
        }
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
        if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.SCISSORS) {
            return Outcomes.PLAYER_WINS;
        } else if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.PAPER) {
            return Outcomes.COMPUTER_WINS;
        } else if (this.playerSelection == Selections.ROCK && this.computerSelection == Selections.ROCK) {
            return Outcomes.TIE;
        } else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.ROCK) {
            return Outcomes.PLAYER_WINS;
        } else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.SCISSORS) {
            return Outcomes.COMPUTER_WINS;
        } else if (this.playerSelection == Selections.PAPER && this.computerSelection == Selections.PAPER) {
            return Outcomes.TIE;
        } else if (this.playerSelection == Selections.SCISSORS && this.computerSelection == Selections.PAPER) {
            return Outcomes.PLAYER_WINS;
        } else if (this.playerSelection == Selections.SCISSORS && this.computerSelection == Selections.ROCK) {
            return Outcomes.COMPUTER_WINS;
        } else if (this.playerSelection == Selections.SCISSORS && this.computerSelection == Selections.SCISSORS) {
            return Outcomes.TIE;
        }
    }



}


//DO NOT TOUCH THIS LINE OF CODE//
let unit_test1 = Round;