// Rock Paper Scissors game

function getComputerChoice(){
    const possibleChoices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * possibleChoices.length);
    const computerSelection = possibleChoices[random];
    return computerSelection;
}

function playRound(playerSelection, computerSelection){
    //if player choses rock
    if (playerSelection != computerSelection){
        if (playerSelection == "rock"){
            if (computerSelection == "paper"){
                console.log("Paper beats rock! You lose!");
            }
            else {
                console.log("Rock beats scissors! You win!");
            }
        }
        //if player choses paper
        if (playerSelection == "paper"){
            if (computerSelection == "scissors"){
                console.log("Scissors beat paper! You lose!");
            }
            else {
                console.log("Paper beats rock! You win!");
            }
        }
        //if player choses scissors
        if (playerSelection == "scissors"){
            if (computerSelection == "rock"){
                console.log("Rock beats scissors! You lose!");
            }
            else {
                console.log("Scissors beat paper! You win!");
            }
        }
    }
    else {
        console.log("That's a tie! Try again!");
    }
}

/*function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (i=0; i<5; i++){
        playRound(playerSelection, computerSelection);
    }
}*/

const playerSelection = "rock";
const computerSelection = getComputerChoice();
playRound(playerSelection, computerSelection);
