function getComputerChoice() {
  let computerSelection = Math.floor(Math.random() * 3);

  return computerSelection;
}

function getHumanChoice() {
  let player = prompt("enter your choice");
  let playerSelection;
  if (
    player === "paper" ||
    player === "Paper" ||
    player === "PAPER" ||
    player === "PapeR"
  ) {
    playerSelection = 1;
  } else if (
    player === "rock" ||
    player === "ROCK" ||
    player === "Rock" ||
    player === "RocK"
  ) {
    playerSelection = 0;
  } else if (
    player === "scissors" ||
    player === "SCISSORS" ||
    player === "Scissors" ||
    player === "ScissorS"
  ) {
    playerSelection = 2;
  }

  return playerSelection;
}

let humanScore = 0,
  computerScore = 0;

function playRound(humanChoice, computerChoice) {
  //human win condition
  if (humanChoice === 0 && computerChoice === 2) {
    humanScore++;
    console.log("You win, Rock beats Scisorss");
  } else if (humanChoice === 1 && computerChoice === 0) {
    humanScore++;
    console.log("You win, Paper beats Scisorss");
  } else if (humanChoice === 2 && computerChoice === 1) {
    humanScore++;
    console.log("You win, Scisorss beats Paper");
  }
  //computer win condition
  else if (computerChoice === 0 && humanChoice === 2) {
    computerScore++;
    console.log("You lose, Rock beats Scisorss");
  } else if (computerChoice === 1 && humanChoice === 0) {
    computerScore++;
    console.log("You lose, Paper beats Rock");
  } else if (computerChoice === 2 && humanChoice === 1) {
    computerScore++;
    console.log("You lose, Scissors beats Paper");
  }
  //stalemate condition
  else if (computerChoice === 0 && humanChoice === 0) {
    console.log("Stalemate, both of you chose Rock");
  } else if (computerChoice === 1 && humanChoice === 1) {
    console.log("Stalemate, both of you chose Paper");
  } else if (computerChoice === 2 && humanChoice === 2) {
    console.log("Stalemate, both of you chose Scissors");
  }
}

function playGame(human, computer) {
  let round = 5;

  for (let i = 0; i < round; i++) {
    const playerValue = getHumanChoice();
    const computerValue = getComputerChoice();
    playRound(playerValue, computerValue);
    console.log(
      `current score, player : ${humanScore} computer : ${computerScore} `
    );
  }
  if (humanScore > computerScore) {
    console.log(
      `You win the round, player : ${humanScore}, computer : ${computerScore}`
    );
  } else {
    console.log(
      `You lose the round, player : ${humanScore}, computer : ${computerScore}`
    );
  }
}

playGame();
