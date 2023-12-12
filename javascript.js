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
    const resultField = document.querySelector("#result-field");
    const result = document.createElement("p");
    const playerScoreField = document.querySelector("#your-score");
    const computerScoreField = document.querySelector("#computer-score");
    if (computerScore < 5 && playerScore < 5){
        if (playerSelection != computerSelection){
            //if player choses rock
            if (playerSelection == "rock"){
                if (computerSelection == "paper"){
                    result.textContent = "Paper beats rock! You lose!";
                    computerScore += 1;
                }
                else {
                    result.textContent = "Rock beats scissors! You win!";
                    playerScore += 1;
                }
            }
            //if player choses paper
            if (playerSelection == "paper"){
                if (computerSelection == "scissors"){
                    result.textContent = "Scissors beat paper! You lose!";
                    computerScore += 1;
                }
                else {
                    result.textContent = "Paper beats rock! You win!";
                    playerScore += 1;
                }
            }
            //if player choses scissors
            if (playerSelection == "scissors"){
                if (computerSelection == "rock"){
                    result.textContent = "Rock beats scissors! You lose!";
                    computerScore += 1;
                }
                else {
                    result.textContent = "Scissors beat paper! You win!";
                    playerScore += 1;
                }
            }
        }
        else {
            result.textContent = "That's a tie! Try again!";
        }
        playerScoreField.innerHTML = "Your score: " + playerScore;
        computerScoreField.innerHTML = "The computer's score: " + computerScore;
        resultField.innerHTML = "Result of this round: " + result.textContent;

    }
    

    
}

function game() {
    playerScore = 0;
    computerScore = 0;

    const rockButton = document.querySelector("#rock");
    const paperButton = document.querySelector("#paper");
    const scissorsButton = document.querySelector("#scissors");
    const newGameButton = document.querySelector("#new-game");
    const winner = document.querySelector("#winner");

    const resultField = document.querySelector("#result-field");
    const playerScoreField = document.querySelector("#your-score");
    const computerScoreField = document.querySelector("#computer-score");

    function updateWinner() {
        if (playerScore == 5 || computerScore == 5) {
            if (playerScore > computerScore) {
                winner.innerHTML = "Winner: you";
            } 
            else if (playerScore < computerScore) {
                winner.innerHTML = "Winner: computer";
            } 
        } 
    }

    function newGame(){
        playerScore = 0;
        computerScore = 0;
        resultField.innerHTML = "Result of this round:";
        playerScoreField.innerHTML = "Your score:";
        computerScoreField.innerHTML = "The computer's score:";
        winner.innerHTML = "Winner:";
    }

    rockButton.addEventListener('click', () => {
        playRound("rock", getComputerChoice());
        updateWinner();
    });

    paperButton.addEventListener('click', () => {
        playRound("paper", getComputerChoice());
        updateWinner();
    });

    scissorsButton.addEventListener('click', () => {
        playRound("scissors", getComputerChoice());
        updateWinner();
    });

    newGameButton.addEventListener('click', () => {
        newGame();
    });

}


game();

