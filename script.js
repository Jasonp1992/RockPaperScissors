const selctArr = ["rock", "paper", "scissors"];
let score = 0;
let round = 0;
let user = "";
let comp = "";

const buttonInput = document.querySelectorAll("button");

buttonInput[0].addEventListener("click", function () {
  user = "rock";
  comp = getComputerInput();
  oneRound(comp, user);
  round++;
  if (round === 3) {
    winLoose(score);
    zeroGame();
  }
});
buttonInput[1].addEventListener("click", function () {
  user = "paper";
  comp = getComputerInput();
  oneRound(comp, user);
  round++;
  if (round === 3) {
    winLoose(score);
    zeroGame();
  }
});
buttonInput[2].addEventListener("click", function () {
  user = "scissors";
  comp = getComputerInput();
  oneRound(comp, user);
  round++;
  if (round === 3) {
    winLoose(score);
    zeroGame();
  }
});

//fucntion that prints win or loose and the score
let winLoose = (score) => {
  const container = document.querySelector(".container");
  const content = document.createElement("p");
  content.classList.add("content");
  if (score === 0) {
    content.textContent = "Its a tie";
  } else if (score > 0) {
    content.textContent = "You Win";
  } else {
    content.textContent = "You Loose";
  }
  container.appendChild(content);
};

let zeroGame = () => {
  score = 0;
  round = 0;
};

//plays one round of rps
function oneRound(comp, user) {
  if (comp == user) {
    score = score + 0;
  } else if (comp == selctArr[0] && user == selctArr[1]) {
    score = score + 1;
  } else if (comp == selctArr[1] && user == selctArr[2]) {
    score = score + 1;
  } else if (comp == selctArr[2] && user == selctArr[0]) {
    score = score + 1;
  } else {
    score = score - 1;
  }
}

//gets random input from computer
function getComputerInput() {
  let rdmNum = Math.floor(Math.random() * 3);
  return selctArr[rdmNum];
}
