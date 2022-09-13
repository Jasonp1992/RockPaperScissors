const selctArr = ["rock", "paper", "scissors"];
let score = 0;
let round = 0;
let user = "";
let comp = "";

const buttonInput = document.querySelectorAll("button");

buttonInput[0].addEventListener("click", function () {
  roundCounter();
  user = "rock";
  comp = getComputerInput();
  oneRound(comp, user);
  round++;
  if (round === 5) {
    winLoose(score);
    zeroGame();
  }
});
buttonInput[1].addEventListener("click", function () {
  roundCounter();
  user = "paper";
  comp = getComputerInput();
  oneRound(comp, user);
  round++;
  if (round === 5) {
    winLoose(score);
    zeroGame();  
  }
});
buttonInput[2].addEventListener("click", function () {
  roundCounter();
  user = "scissors";
  comp = getComputerInput();
  oneRound(comp, user);
  round++;
  if (round === 5) {
    winLoose(score);
    zeroGame();  
  }
});

let roundCounter = () => {
  let roundcounter = document.querySelector(".roundCounter");
  roundcounter.textContent = `Round ${round+1}`;
};

//fucntion that prints win or loose and the score
let winLoose = (score) => {
  const container = document.querySelector(".winner");
  if (score === 0) {
    container.textContent = `Its a Tie score: ${score}`;
  } else if (score > 0) {
    container.textContent = `You Win score: ${score}`;
  } else {
    container.textContent = `You Loose score; ${score}`;
  }
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
