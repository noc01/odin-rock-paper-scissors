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
        winner = computerSelection;
        console.log("You Lose! Paper beats Rock");
    } else if (playerSelection == "PAPER" && computerSelection == "SCISSORS") {
        winner = computerSelection;
        console.log("You Lose! Scissors beats Paper");
    } else if (playerSelection == "SCISSORS" && computerSelection == "ROCK") {
        winner = computerSelection;
        console.log("You Lose! Rock beats Scissors");
    } else if (playerSelection == "PAPER" && computerSelection == "ROCK") {
        winner = playerSelection;
        console.log("You Win! Paper beats Rock");
    } else if (playerSelection == "SCISSORS" && computerSelection == "PAPER") {
        winner = playerSelection;
        console.log("You Win! Scissors beats Paper");
    } else if (playerSelection == "ROCK" && computerSelection == "SCISSORS") {
        winner = playerSelection;
        console.log("You Win! Rock beats Scissors");
    } else if (playerSelection == computerSelection) {
        console.log("Tie!");
    }
    return winner;
}
function game() {
    let scorePlayer;
    let scoreComputer;
    let playerSelection = prompt("Rock Paper Scissors: ").toUpperCase();
    let computerSelection =  getComputerChoice().toUpperCase();
    let winner = playRound(playerSelection, computerSelection);
    if (winner == playerSelection) {
        scorePlayer += 1;
    } else if (winner == computerSelection) {
        scoreComputer += 1;
    }
    playerSelection = prompt("Rock Paper Scissors: ").toUpperCase();
    computerSelection =  getComputerChoice().toUpperCase();
    winner = playRound(playerSelection, computerSelection);
    if (winner == playerSelection) {
        scorePlayer += 1;
    } else if (winner == computerSelection) {
        scoreComputer += 1;
    }
    playerSelection = prompt("Rock Paper Scissors: ").toUpperCase();
    computerSelection =  getComputerChoice().toUpperCase();
    winner = playRound(playerSelection, computerSelection);
    if (winner == playerSelection) {
        scorePlayer += 1;
    } else if (winner == computerSelection) {
        scoreComputer += 1;
    }
    playerSelection = prompt("Rock Paper Scissors: ").toUpperCase();
    computerSelection =  getComputerChoice().toUpperCase();
    winner = playRound(playerSelection, computerSelection);
    if (winner == playerSelection) {
        scorePlayer += 1;
    } else if (winner == computerSelection) {
        scoreComputer += 1;
    }
    playerSelection = prompt("Rock Paper Scissors: ").toUpperCase();
    computerSelection =  getComputerChoice().toUpperCase();
    winner = playRound(playerSelection, computerSelection);
    if (winner == playerSelection) {
        scorePlayer += 1;
    } else if (winner == computerSelection) {
        scoreComputer += 1;
    }
    
    if (scorePlayer > scoreComputer) {
        console.log(`You Win! ${scorePlayer} - ${scoreComputer}`);
    } else if (scorePlayer < scoreComputer) {
        console.log(`You Lose! ${scorePlayer} - ${scoreComputer}`);
    } else {
        console.log(`Tie! ${scorePlayer} - ${scoreComputer}`)
    }
}

game();