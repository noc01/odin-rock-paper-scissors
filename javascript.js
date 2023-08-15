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