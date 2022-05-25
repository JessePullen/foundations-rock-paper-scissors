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

//Takes player input for their selection and checks that the answer is valid, if not the function is called again to re-prompt the player
function playerPlay() {
    let selection = prompt('Please enter: rock, paper or scissors.').toLowerCase();

    if (selection == 'rock' || selection == 'paper' || selection == 'scissors') {
        return selection;
    } else {
        playerPlay();
    }
}

//Takes player and computer selection using previous functions and returns who wins the round based on rules of the game
function playRound() {
    let playerSelection = playerPlay();
    let computerSelection = computerPlay();

    console.log(`You chose: ${playerSelection}, Computer chose: ${computerSelection}`);

    if (playerSelection == computerSelection) {
        console.log('Draw');
    } else if (playerSelection == 'rock') {
        if (computerSelection == 'paper') {
            console.log('Computer wins, paper beats rock.');
            return 'computerWin';
        } else {
            console.log('You win, rock beats scissors.');
            return 'playerWin';
        }
    } else if (playerSelection == 'paper') {
        if (computerSelection == 'scissors') {
            console.log('Computer wins, scissors beats paper.');
            return 'computerWin';
        } else {
            console.log('You win, paper beats rock.');
            return 'playerWin';
        }
    } else if (playerSelection == 'scissors') {
        if (computerSelection == 'rock') {
            console.log('Computer wins, rock beats scissors.');
            return 'computerWin';
        } else {
            console.log('You win, scissors beats paper.');
            return 'playerWin';
        }
    }
}

//Plays 5 rounds and handles scoring
function playGame() {
    let rounds = 0;
    let playerTally = 0;
    let computerTally = 0;
    
    for (let i = 0; i < 5; i++) {
        let roundResult = playRound();
        rounds++;

        if (roundResult == 'computerWin') {
            computerTally++;
        } else if (roundResult == 'playerWin') {
            playerTally++;
        }

        console.log(`Rounds Played: ${rounds}\n` + 
        `Computer Score: ${computerTally}\n` +
        `Player Score: ${playerTally}`)
    }

    if (computerTally > playerTally) {
        console.log('Computer wins this game');
    } else if (computerTally < playerTally) {
        console.log('You win this game');
    } else {
        console.log('This game ends in a draw');
    }
}

playGame();