const openRules = document.querySelector(".open");
const closeRules = document.querySelector(".close-btn");
const rules = document.querySelector(".rules-container");
const discs = document.querySelectorAll(".disc");
const gameWrapper = document.querySelector(".game-wrapper");
const gameBoard = document.querySelector(".game-board");
const player1 = document.querySelector(".player-1");
const player2 = document.querySelector(".player-2");
const player2Btn = document.querySelector(".player-2 .shadow");
const verdict = document.querySelector(".verdict");
const verdictText = document.querySelector(".verdict h1");
const playAgain = document.querySelector(".verdict button");
const scoreText = document.querySelector(".score-num");
let score = 0;

//Opening rule
openRules.addEventListener("click", () => {
  rules.style.display = "flex";
});
closeRules.addEventListener("click", () => {
  rules.style.display = "none";
});

//opening rule end

discs.forEach((disc) => {
  disc.addEventListener("click", () => {
    discs.forEach((disc) => {
      disc.classList.remove("clicked");
    });
    disc.classList.add("clicked");
    player1.classList.add("isClicked");
    gameWrapper.style.display = "none";
    gameBoard.style.display = "flex";

    var clone = disc.cloneNode(true);
    clone.id = "";
    if (player1.classList.contains("isClicked")) {
      player1.appendChild(clone);
    } else {
      player1.removeChild(clone);
    }
    if (player2.classList.contains("isClicked")) {
      player2.appendChild(clone);
      player2Btn.style.display = "none";
    } else {
      player2.removeChild(clone);
    }
    Rule();
  });
});

function Rule() {
  let player1Check = gameBoard.children[0];
  let gamePlayer1 = player1Check.children[1];
  let player2Check = gameBoard.children[2];
  let gamePlayer2 = player2Check.children[2];

  //with rock
  if (
    gamePlayer1.classList.contains("rock") &&
    gamePlayer2.classList.contains("rock")
  ) {
    verdictText.textContent = "It's a tie";
  } else if (
    gamePlayer1.classList.contains("rock") &&
    gamePlayer2.classList.contains("paper")
  ) {
    score--;
    verdictText.textContent = "you lose";
  } else if (
    gamePlayer1.classList.contains("rock") &&
    gamePlayer2.classList.contains("scissors")
  ) {
    score++;
    verdictText.textContent = "you win";
  }
  //with paper
  else if (
    gamePlayer1.classList.contains("paper") &&
    gamePlayer2.classList.contains("rock")
  ) {
    score++;
    verdictText.textContent = "You win";
  } else if (
    gamePlayer1.classList.contains("paper") &&
    gamePlayer2.classList.contains("paper")
  ) {
    verdictText.textContent = "it's a tie";
  } else if (
    gamePlayer1.classList.contains("paper") &&
    gamePlayer2.classList.contains("scissors")
  ) {
    score--;
    verdictText.textContent = "you lose";
  }
  //with scissors
  else if (
    gamePlayer1.classList.contains("scissors") &&
    gamePlayer2.classList.contains("rock")
  ) {
    score--;
    verdictText.textContent = "You lose";
  } else if (
    gamePlayer1.classList.contains("scissors") &&
    gamePlayer2.classList.contains("scissors")
  ) {
    verdictText.textContent = "it's a tie";
  } else if (
    gamePlayer1.classList.contains("scissors") &&
    gamePlayer2.classList.contains("paper")
  ) {
    score++;
    verdictText.textContent = "you win";
  }
  if (score <= 0) {
    score = 0;
  }
  scoreText.textContent = score;
  if (verdictText.textContent.includes("lose")) {
    player2Check.classList.add("winner");
    player1Check.classList.remove("winner");
  } else if (verdictText.textContent.includes("win")) {
    player2Check.classList.remove("winner");
    player1Check.classList.add("winner");
  }
}

player2Btn.addEventListener("click", () => {
  player2.classList.add("isClicked");
  gameWrapper.style.display = "flex";
  gameBoard.style.display = "none";
  verdict.style.display = "block";
});

playAgain.addEventListener("click", () => {
  discs.forEach((disc) => {
    const discTile2 = player2.children[2];
    const discTile1 = player1.children[1];
    disc.classList.remove("clicked");
    gameWrapper.style.display = "flex";
    gameBoard.style.display = "none";
    verdict.style.display = "none";
    player1.classList.remove("isClicked", "winner");
    player2.classList.remove("isClicked", "winner");
    player2.removeChild(discTile2);
    player1.removeChild(discTile1);
    player2Btn.style.display = "block";
  });
});
