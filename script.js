/*
function playRound(playerSelection, computerSelection)
    -return string that declares winner of the round
    =eg "You Lose! Paper beats Rock"
    -case insensitive input for playerSelection

function playRound
    call playRound
    play 5 round game using for loop
    keep score and report winner or loser at the end
*/


//Randomises a choice for the computer opponent and returns the result.
function computerPlay() {
    // variable choice becomes a random float between 0 and 2, Math.floor rounds down to an integer
    let computerSelection = Math.floor(Math.random() * 3);
    if (computerSelection == 2) {
        return 'rock';
    } else if (computerSelection == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
//Takes user input and checks that the answer is valid, if not the function is called again to re-prompt the user.
function userPlay() {
    let playerSelection = prompt('Please enter: rock, paper or scissors.').toLowerCase();
    
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        console.log(playerSelection);
    } else {
        userPlay();
    }
}

//incomplete
function playRound(playerSelection, computerSelection) {
    playerSelection = userPlay();
    computerSelection = computerPlay();

    console.log(playerSelection);
}

userPlay();