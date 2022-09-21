const selctArr = ["rock", "paper", "scissors"];
let score = 0;
let round = 0;
let user = "";
let comp = "";

const buttonInput = document.querySelectorAll("button");

buttonInput[0].addEventListener("click", function () {
  roundCounter();
  scoreCounter();
  buttonInput[0].classList.add("test");
  user = "rock";
  let compNum = randomNum();
  comp = getComputerInput(compNum);
  buttonInput[compNum + 3].classList.add("test");
  console.log(comp)
  oneRound(comp, user);
  round++;
  if (round === 5) {
    winLoose(score);
    zeroGame();
  }
});

buttonInput[1].addEventListener("click", function () {
  roundCounter();
  scoreCounter();
  buttonInput[1].classList.add("test");
  user = "paper";
  let compNum = randomNum();
  comp = getComputerInput(compNum);
  buttonInput[compNum + 3].classList.add("test");
  console.log(comp)
  oneRound(comp, user);
  round++;
  if (round === 5) {
    winLoose(score);
    zeroGame();
  }
});
buttonInput[2].addEventListener("click", function () {
  roundCounter();
  scoreCounter();
  buttonInput[2].classList.add("test");
  user = "scissors";
  let compNum = randomNum();
  comp = getComputerInput(compNum);
  buttonInput[compNum + 3].classList.add("test");
  console.log(comp)
  oneRound(comp, user);
  round++;
  if (round === 5) {
    winLoose(score);
    zeroGame();
  }
});

let roundCounter = () => {
  let roundcounter = document.querySelector(".round");
  roundcounter.textContent = `Round ${round + 1}`;
};

let scoreCounter = () => {
  let scoreholder = document.querySelector('.score');
  scoreholder.textContent = `Score: ${score}`;
};

//fucntion that prints win or loose and the score
let winLoose = (score) => {
  const container = document.querySelector(".winner");
  if (score === 0) {
    setTimeout(function(){ alert("Its a Tie"); }, 500);
  } else if (score > 0) {
    setTimeout(function(){ alert("You Win!!"); }, 500);
  } else {
    setTimeout(function(){ alert("You Loose :("); }, 500);
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
function randomNum() {
  let rdmNum = Math.floor(Math.random() * 3);
  return rdmNum;
}

function getComputerInput(num) {
  return selctArr[num];
}

const buttons = document.querySelectorAll("button");
buttons.forEach((button) =>
  button.addEventListener("transitionend", removeTransition)
);

function removeTransition(e) {
  if (e.propertyName !== "background-color") return;
  this.classList.remove("test");
}
