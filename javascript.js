// Rock Paper Scissors game

function getComputerChoice(){
    const possibleChoices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * possibleChoices.length);
    const computerSelection = possibleChoices[random];
    return computerSelection;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection){
    //if player choses rock
    if (playerSelection != computerSelection){
        if (playerSelection == "rock"){
            if (computerSelection == "paper"){
                console.log("Paper beats rock! You lose!");
                computerScore += 1;
            }
            else {
                console.log("Rock beats scissors! You win!");
                playerScore += 1;
            }
        }
        //if player choses paper
        if (playerSelection == "paper"){
            if (computerSelection == "scissors"){
                console.log("Scissors beat paper! You lose!");
                computerScore += 1;
            }
            else {
                console.log("Paper beats rock! You win!");
                playerScore += 1;
            }
        }
        //if player choses scissors
        if (playerSelection == "scissors"){
            if (computerSelection == "rock"){
                console.log("Rock beats scissors! You lose!");
                computerScore += 1;
            }
            else {
                console.log("Scissors beat paper! You win!");
                playerScore += 1;
            }
        }
    }
    else {
        console.log("That's a tie! Try again!");
    }
    
}

function game(){
    playerScore = 0;
    computerScore = 0;

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");

    console.log("Enter your choice. Rock, paper or scissors?");

    rockButton.addEventListener('click', () => {playRound("rock", getComputerChoice())});
    paperButton.addEventListener('click', () => {playRound("paper", getComputerChoice())});
    scissorsButton.addEventListener('click', () => {playRound("scissors", getComputerChoice())});
    
        
   
    const playerSelection = null;
    const computerSelection = getComputerChoice();
    
    /*
    if (playerScore > computerScore){
        console.log(`Congratulations! You won by ${playerScore} : ${computerScore}!`);
    }
    else if (playerScore < computerScore){
        console.log(`You lost... by ${playerScore} : ${computerScore}.`);
    }
    else if (playerScore == computerScore){
        console.log("It's a tie. Nobody won.");
    }
    */
}

game();

