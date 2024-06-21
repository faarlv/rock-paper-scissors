let getComputerChoice = () => Math.floor(Math.random() * 3);

const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const header = document.getElementById("header");
const subhead = document.getElementById("subHead");

let playerScore = 0;
let computerScore = 0;

// let winLose = (state) => {
//   let header = document.getElementById("header");
//   if (result.includes("Win")) {
//     header.textContent = `You Win, ${state}`;
//   } else if (result.includes("Lose")) {
//     header.textContent = `You Lose, ${state}`;
//   }
// };

let play = (x, y) => {
  const condition = [
    ["Stalemate", "You Lose", "You Win"],
    ["You Win", "Stalemate", "You Lose"],
    ["You Lose", "You Win", "stalemate"],
  ];
  const state = [
    ["Both of you chose Rocks", "Paper beat rocks", "Rocks beat scissors"],
    ["Paper beat rocks", "Both of you chose paper", "Scissors beat paper"],
    ["Rock beat scissors", "Scissors beat paper", "Both of you chose scissors"],
  ];

  const result = condition[x][y];
  const status = state[x][y];
  console.log(result);

  if (result.includes("Win")) {
    header.innerText = "You win";
    subhead.innerText = status;
    playerScore += 10;
  } else if (result.includes("Lose")) {
    header.innerText = "You Lose";
    subhead.innerText = status;
    computerScore += 10;
  } else {
    header.innerText = "Stalemate";
    subhead.innerText = status;
  }
  if (playerScore >= 50) {
    header.innerText = "You Win The Round";
    subhead.innerText = "You manage to get the first 50 point";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore >= 50) {
    header.innerText = "Computer Win The Round";
    subhead.innerText = "the computer get the 50 point first";
    playerScore = 0;
    computerScore = 0;
  }
  const player = (document.getElementById("player").innerText = playerScore);
  const computer = (document.getElementById("computer").innerText =
    computerScore);
};

rock.onclick = () => play(0, getComputerChoice());
paper.onclick = () => play(1, getComputerChoice());
scissors.onclick = () => play(2, getComputerChoice());

// function getHumanChoice() {
//   let player = prompt("enter your choice");
//   let playerSelection;
//   if (
//     player === "paper" ||
//     player === "Paper" ||
//     player === "PAPER" ||
//     player === "PapeR"
//   ) {
//     playerSelection = 1;
//   } else if (
//     player === "rock" ||
//     player === "ROCK" ||
//     player === "Rock" ||
//     player === "RocK"
//   ) {
//     playerSelection = 0;
//   } else if (
//     player === "scissors" ||
//     player === "SCISSORS" ||
//     player === "Scissors" ||
//     player === "ScissorS"
//   ) {
//     playerSelection = 2;
//   }

//   return playerSelection;
// }

// let humanScore = 0,
//   computerScore = 0;

// function playRound(humanChoice, computerChoice) {
//   //human win condition
//   if (humanChoice === 0 && computerChoice === 2) {
//     humanScore++;
//     console.log("You win, Rock beats Scisorss");
//   } else if (humanChoice === 1 && computerChoice === 0) {
//     humanScore++;
//     console.log("You win, Paper beats Scisorss");
//   } else if (humanChoice === 2 && computerChoice === 1) {
//     humanScore++;
//     console.log("You win, Scisorss beats Paper");
//   }
//   //computer win condition
//   else if (computerChoice === 0 && humanChoice === 2) {
//     computerScore++;
//     console.log("You lose, Rock beats Scisorss");
//   } else if (computerChoice === 1 && humanChoice === 0) {
//     computerScore++;
//     console.log("You lose, Paper beats Rock");
//   } else if (computerChoice === 2 && humanChoice === 1) {
//     computerScore++;
//     console.log("You lose, Scissors beats Paper");
//   }
//   //stalemate condition
//   else if (computerChoice === 0 && humanChoice === 0) {
//     console.log("Stalemate, both of you chose Rock");
//   } else if (computerChoice === 1 && humanChoice === 1) {
//     console.log("Stalemate, both of you chose Paper");
//   } else if (computerChoice === 2 && humanChoice === 2) {
//     console.log("Stalemate, both of you chose Scissors");
//   }
// }

// function playGame(human, computer) {
//   let round = 5;

//   for (let i = 0; i < round; i++) {
//     const playerValue = getHumanChoice();
//     const computerValue = getComputerChoice();
//     playRound(playerValue, computerValue);
//     console.log(
//       `current score, player : ${humanScore} computer : ${computerScore} `
//     );
//   }
//   if (humanScore > computerScore) {
//     console.log(
//       `You win the round, player : ${humanScore}, computer : ${computerScore}`
//     );
//   } else {
//     console.log(
//       `You lose the round, player : ${humanScore}, computer : ${computerScore}`
//     );
//   }
// }

// playGame();
