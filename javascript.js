function getComputerChoice() {
    let intChoice = Math.floor(Math.random() * 3) + 1;
    let choice;
    if (intChoice == 1) {
        choice = "Rock";
    } else if (intChoice == 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice;
}

function playRound(playerSelection, computerSelection) {
    let winner;
    if (playerSelection == "ROCK" && computerSelection == "PAPER") {
        winner = "You Lose! Paper beats Rock";
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        winner = "You Lose! Scissors beats Paper";
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        winner = "You Lose! Rock beats Scissors";
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        winner = "You Win! Paper beats Rock";
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        winner = "You Win! Scissors beats Paper";
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        winner = "You Win! Rock beats Scissors";
    } else {
        winner = "Tie";
    }
    return winner;
}
