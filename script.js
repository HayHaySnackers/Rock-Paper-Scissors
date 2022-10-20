"use strict";

// create function that will randomly return rock paper or scissors

const computerChoices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
};

// Creating DRY to stop prevent repeating code

// If the player WINS

// // If there is a TIE

// Creating player scores
let playerScore = 0;
let computerScore = 0;
let score = `Player - ${playerScore} | Computer - ${computerScore}`;

// create function for single round of RPS
const singleRPS = function (playerSelection, computerSelection) {
  //creating playerSelection input case-insensitive
  playerSelection = playerSelection.toLowerCase();
  playerSelection =
    playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1);
  //   console.log(playerSelection);

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    playerScore += 1;
    console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    console.log(playerScore, computerScore);
  } else if (playerSelection === computerSelection) {
    console.log("Its a tie!");
    console.log(playerScore, computerScore);
  } else {
    computerScore += 1;
    console.log(
      `Computer Wins! ${computerSelection} beats ${playerSelection}!`
    );
    console.log(playerScore, computerScore);
  }
};

// return string declaring winner of the round

// singleRPS("ROCK", getComputerChoice());

// Create new function called game()
const game = function (playerSelection, computerSelection) {
  for (let i = 0; i < 20; i++) {
    singleRPS(prompt("Rock Paper Scissors"), getComputerChoice());

    if (playerScore == 5) {
      console.log(`You win! ${playerScore} - ${computerScore}!`);
      break;
    } else if (computerScore == 5) {
      console.log(`You lose! ${computerScore} - ${playerScore}!`);
      break;
    }
  }
};
//   }
// };

game();
