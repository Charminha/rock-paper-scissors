// Rock Paper Scissors game

function getComputerChoice(){
    const possibleChoices = ["rock", "paper", "scissors"];
    const random = Math.floor(Math.random() * possibleChoices.length);
    const computerSelection = possibleChoices[random];
    console.log(computerSelection);
    return computerSelection;
}

function playRound(playerSelection, computerSelection){

}

getComputerChoice();
console.log("hello");
