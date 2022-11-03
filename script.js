"use strict";

// create function that will randomly return rock paper or scissors

const computerChoices = ["Rock", "Paper", "Scissors"];

const getComputerChoice = function () {
  return computerChoices[Math.trunc(Math.random() * computerChoices.length)];
};

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

  resetGame();

  if (
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Scissors" && computerSelection === "Rock")
  ) {
    playerScore += 1;
    document.querySelector(
      ".result"
    ).textContent = `You win! ${playerSelection} beats ${computerSelection}!`;
    // console.log(playerScore, computerScore);
    updateScore();
  } else if (playerSelection === computerSelection) {
    document.querySelector(".result").textContent = "Its a tie!";
    // console.log(playerScore, computerScore);
    updateScore();
  } else {
    computerScore += 1;
    document.querySelector(
      ".result"
    ).textContent = `Computer Wins! ${computerSelection} beats ${playerSelection}!`;
    // console.log(playerScore, computerScore);
    updateScore();
  }

  for (let i = 0; i < 20; i++) {
    if (playerScore == 5) {
      document.querySelector(
        ".result"
      ).textContent = `You win! ${playerScore} - ${computerScore}! Play again?`;
      removebtn();
      // resetGame();
      break;
    } else if (computerScore == 5) {
      document.querySelector(
        ".result"
      ).textContent = `You lose! ${computerScore} - ${playerScore}! Play again?`;
      removebtn();
      // resetGame();
      break;
    }
  }
};

// Create new function called game()

// function that plays 5 rounds

// const game = function (playerSelection, computerSelection) {
//   for (let i = 0; i < 20; i++) {
//     singleRPS(playerSelection, getComputerChoice());

//     if (playerScore == 5) {
//       console.log(`You win! ${playerScore} - ${computerScore}!`);
//       break;
//     } else if (computerScore == 5) {
//       console.log(`You lose! ${computerScore} - ${playerScore}!`);
//       break;
//     }
//   }
// };
//   }
// };

// UI

const rock = document.querySelector("#rock");
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const btn = document.querySelector(".btn");

rock.addEventListener("click", function () {
  singleRPS("Rock", getComputerChoice());
});

paper.addEventListener("click", function () {
  singleRPS("Paper", getComputerChoice());
});

scissors.addEventListener("click", function () {
  singleRPS("Scissors", getComputerChoice());
});

const updateScore = function () {
  document.querySelector(".pScore").textContent = playerScore;
  document.querySelector(".cScore").textContent = computerScore;
};

const removebtn = function () {
  document.getElementById("rock").style.display = "none";
  document.getElementById("paper").style.display = "none";
  document.getElementById("scissors").style.display = "none";
};

const resetGame = function () {
  document.querySelector(".reset").addEventListener("click", function () {
    document.querySelector(".pScore").textContent = 0;
    document.querySelector(".cScore").textContent = 0;
    document.getElementById("rock").style.display = "block";
    document.getElementById("paper").style.display = "block";
    document.getElementById("scissors").style.display = "block";
    document.querySelector(".result").textContent = "";
    playerScore = 0;
    computerScore = 0;
  });
};
