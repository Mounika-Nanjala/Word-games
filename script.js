const players = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerdisplay");
const computerDisplay = document.getElementById("computerdisplay");
function playgame(playerchoice){
const computerchoice = choices[Math.floor(Math.random() * 3)];
let result = " ";

if (playerchoice === computerchoice) {
result = "IT'S TIE"

}
else {
switch(playerchoice){
    case "rock":
        (computerchoice ==="scissors") ? "YOU WIN" : "YOU LOOSE"
        break;
        case "paper":
        (computerchoice ==="rock") ? "YOU WIN" : "YOU LOOSE"
        break;
        case "scissors":
            (computerchoice ==="paper") ? "YOU WIN" : "YOU LOOSE"
            break;

}

}

playerDisplay.textcontent = 'Player: ${playerchoice}';
computerDisplay.textcontent = 'Player: ${computerchoice}';
resultDisplay.textcontent = result;
}