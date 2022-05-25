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

const content = document.querySelector('.content');
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const moves = document.querySelector('.moves');
const results = document.querySelector('.results');

let playerSelection;
let rounds = 0;

rock.addEventListener('click', () => {
    playerSelection = 'rock';
    playRound(playerSelection)
});
paper.addEventListener('click', () => {
    playerSelection = 'paper';
    playRound(playerSelection)
});
scissors.addEventListener('click', () => {
    playerSelection = 'scissors';
    playRound(playerSelection)
});


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

// Plays 5 rounds and handles scoring
// function playGame() {
//     let rounds = 0;
//     let playerTally = 0;
//     let computerTally = 0;

//     for (let i = 0; i < 5; i++) {
//         let roundResult = playRound();
//         rounds++;

//         if (roundResult == 'computerWin') {
//             computerTally++;
//         } else if (roundResult == 'playerWin') {
//             playerTally++;
//         }

//         console.log(`Rounds Played: ${rounds}\n` +
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