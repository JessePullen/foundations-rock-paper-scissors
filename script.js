
const content = document.querySelector('.content');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const moves = document.querySelector('.moves');
const results = document.querySelector('.results');
const rounds = document.querySelector('.rounds');
const score = document.querySelector('.score');

let playerSelection;
let round = 0;
let playerTally = 0;
let computerTally = 0;
let winner;

//Randomises a choice for the computer opponent and returns the result
function computerPlay() {
    let selection = Math.floor(Math.random() * 3);

    if (selection == 2) {
        return 'Rock';
    } else if (selection == 1) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

//Takes player and computer selection using previous functions and returns who wins the round based on rules of the game
function playRound(playerSelection) {
    let computerSelection = computerPlay();

    moves.textContent = `You chose: ${playerSelection}, Computer chose: ${computerSelection}`;

    if (playerSelection == computerSelection) {
        results.textContent = 'This round is a draw';
    } else if (playerSelection == 'Rock') {
        if (computerSelection == 'Paper') {
            results.textContent = 'Computer wins this round, Paper beats Rock.';
            computerTally++
        } else {
            results.textContent = 'You win this round, Rock beats Scissors.';
            playerTally++
        }
    } else if (playerSelection == 'Paper') {
        if (computerSelection == 'Scissors') {
            results.textContent = 'Computer wins this round, Scissors beats Paper.';
            computerTally++
        } else {
            results.textContent = 'You win this round, Paper beats Rock.';
            playerTally++
        }
    } else if (playerSelection == 'Scissors') {
        if (computerSelection == 'Rock') {
            results.textContent = 'Computer wins this round, Rock beats Scissors.';
            computerTally++
        } else {
            results.textContent = 'You win this round, Scissors beats Paper.';
            playerTally++
        }
    }
}

function declareWinner() {
    score.textContent = `Score: Player ${playerTally}, Computer ${computerTally}`;
    if (playerTally == 5) {
        results.textContent = 'Congratulations! You win!';
    } else if (computerTally == 5) {
        results.textContent = 'Computer wins. Better luck next time!'
    }
    if (playerTally == 5 || computerTally == 5) {
        playerTally = 0;
        computerTally = 0;
        round = 0;
    }
}

function addRounds() {
    round++
    rounds.textContent = `Round: ${round}`;
}

function playGame() {
    addRounds();
    playRound(playerSelection)
    declareWinner();
}

rock.addEventListener('click', () => {
    playerSelection = 'Rock';
    playGame(playerSelection);
});
paper.addEventListener('click', () => {
    playerSelection = 'Paper';
    playGame(playerSelection);
});
scissors.addEventListener('click', () => {
    playerSelection = 'Scissors';
    playGame(playerSelection);
});