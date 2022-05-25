
const content = document.querySelector('.content');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const moves = document.querySelector('.moves');
const results = document.querySelector('.results');
const rounds = document.querySelector('.rounds');

let playerSelection;
let round = 0;
let playerTally = 0;
let computerTally = 0;
let winner;

//Randomises a choice for the computer opponent and returns the result
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);

    if (selection == 2) {
        return 'rock';
    } else if (selection == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

//Takes player and computer selection using previous functions and returns who wins the round based on rules of the game
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    moves.textContent = `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;

    if (playerSelection == computerSelection) {
        results.textContent = 'Draw';
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            results.textContent = 'Computer wins, paper beats rock.';
            computerTally++
        } else {
            results.textContent = 'You win, rock beats scissors.';
            playerTally++
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            results.textContent = 'Computer wins, scissors beats paper.';
            computerTally++
        } else {
            results.textContent = 'You win, paper beats rock.';
            playerTally++
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            results.textContent = 'Computer wins, rock beats scissors.';
            computerTally++
        } else {
            results.textContent = 'You win, scissors beats paper.';
            playerTally++
        }
    }
}

function declareWinner() {
    console.log(`computer: ${computerTally}, player: ${playerTally}`);
    if (playerTally == 5) {
        console.log('player wins');
    } else if (computerTally == 5) {
        console.log('computer wins');
    }
    if (playerTally == 5 || computerTally == 5) {
        playerTally = 0;
        computerTally = 0;
    }
}

function addRounds() {
    round++
    console.log(round);
    rounds.textContent = `Round: ${round}`;
}

function playGame() {
    addRounds();
    playRound(playerSelection)
    declareWinner();
}

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playGame(playerSelection);
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playGame(playerSelection);
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playGame(playerSelection);
});