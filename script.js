/*
function playRound
    call playRound
    play 5 round game using for loop
    keep score and report winner or loser at the end

-fix issue where playRound() returns undefined if the user does not enter a valid input.

*/


//Randomises a choice for the computer opponent and returns the result
function computerPlay() {
    //Variable choice becomes a random float between 0 and 2, Math.floor rounds down to an integer
    let computerSelection = Math.floor(Math.random() * 3);
    //Assigns a selection based on 3 numbers
    if (computerSelection == 2) {
        return 'rock';
    } else if (computerSelection == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}
//Takes user input for their selection and checks that the answer is valid, if not the function is called again to re-prompt the user
function userPlay() {
    let playerSelection = prompt('Please enter: rock, paper or scissors.').toLowerCase();
    
    if (playerSelection == 'rock' || playerSelection == 'paper' || playerSelection == 'scissors') {
        return playerSelection;
    } else {
        userPlay();
    }
}

//Takes user and computer selection from previous functions and checks who wins the round based on rules of the game
function playRound(playerSelection, computerSelection) {
    //Calls functions to determine the selection for the user and computer
    playerSelection = userPlay();
    computerSelection = computerPlay();
    //Prints selections for the round
    console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`);
    //Checks who wins based on scissors, paper, rock game rules and prints the winner
    if (playerSelection == computerSelection) {
        console.log('Draw');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Computer wins, paper beats rock.');
        } else {
            console.log('You win, rock beats scissors.');
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('Computer wins, scissors beats paper.');
        } else {
            console.log('You win, paper beats rock.');
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Computer wins, rock beats scissors.');
        } else {
            console.log('You win, scissors beats paper.');
        }
    }
}

playRound();