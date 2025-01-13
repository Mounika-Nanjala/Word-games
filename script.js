
const moves = ['rock', 'paper', 'scissors'];

const playerMove = process.argv[2];

if (!moves.includes(playerMove)) {
    console.log('Invalid move. Please choose rock, paper, or scissors.');
    process.exit(1);
}
const computerMove = moves[Math.floor(Math.random() * moves.length)];


console.log(`You chose ${playerMove}. Computer chose ${computerMove}.`);


function determineWinner(player, computer) {
    if (player === computer) {
        return 'It\'s a draw!';
    }
    if (
        (player === 'rock' && computer === 'scissors') ||
        (player === 'scissors' && computer === 'paper') ||
        (player === 'paper' && computer === 'rock')
    ) {
        return 'You win!';
    }
    return 'You lose!';
}

console.log(determineWinner(playerMove, computerMove));
