//The game defines valid moves: rock, paper, and scissors.
//The player's move is taken as a command-line argument.

const moves = ['rock', 'paper', 'scissors'];

const Move = process.argv[2];


//Checks if the player's move is valid.
//If not, it displays an error message and exits the program.

if (!moves.includes(playerMove)) {
    console.log('Invalid move. Please choose rock, paper, or scissors.');
    process.exit(1);
}

//The computer randomly selects its move.
const computerMove = moves[Math.floor(Math.random() * moves.length)];

//Prints both the player's and computer's moves.
console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);

//it function that compares the player's move against the computer's move.
//Returns the result: You win , You lose, or "It's a draw


function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a draw!';
    } else if (player === 'rock') {
        if (computer === 'scissors') {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    } else if (player === 'scissors') {
        if (computer === 'paper') {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    } else if (player === 'paper') {
        if (computer === 'rock') {
            return 'You win!';
        } else {
            return 'You lose!';
        }
    }
}
//Calls the determineWinner function and displays the result.
console.log(determineWinner(playerMove, computerMove));

