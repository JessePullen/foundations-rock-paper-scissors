
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



rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection);
    updateRounds()
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection);
    updateRounds()
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection);
    updateRounds()
});

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
            return 'computerWin';
        } else {
            results.textContent = 'You win, rock beats scissors.';
            return 'playerWin';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            results.textContent = 'Computer wins, scissors beats paper.';
            return 'computerWin';
        } else {
            results.textContent = 'You win, paper beats rock.';
            return 'playerWin';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            results.textContent = 'Computer wins, rock beats scissors.';
            return 'computerWin';
        } else {
            results.textContent = 'You win, scissors beats paper.';
            return 'playerWin';
        }
    }
}

// Plays 5 round and handles scoring
// function playGame() {
//     for (let i = 0; i < 5; i++) {
//         let roundResult = playRound();
//         round++;

//         if (roundResult == 'computerWin') {
//             computerTally++;
//         } else if (roundResult == 'playerWin') {
//             playerTally++;
//         }

//         console.log(`Rounds Played: ${round}\n` +
//             `Computer Score: ${computerTally}\n` +
//             `Player Score: ${playerTally}`)
//     }

//     if (computerTally > playerTally) {
//         console.log('Computer wins this game');
//     } else if (computerTally < playerTally) {
//         console.log('You win this game');
//     } else {
//         console.log('This game ends in a draw');
//     }
// }

function updateRounds() {
    // round++
    // if (round = 5) {
    //     round = 0;
    // }
    // rounds.textContent = `Rounds: ${round}`;
    round++
    console.log(round);
    rounds.textContent = `Round: ${round}`;
    if (round == 5) {
        console.log('end of game');
        round = 0;
    }
}