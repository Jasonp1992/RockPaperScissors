let selctArr = ["rock", "paper", "scissors"];
let score = 0;

game();

function game() {
  for (let i = 0; i < 5; i++) {
    let compInput = getComputerInput();
    let userInput = getInput();

    if (
      userInput == selctArr[0] ||
      userInput == selctArr[1] ||
      userInput == selctArr[2]
    ) {
      oneRound(compInput, userInput);
      console.log(score);
    } else {
      alert("input not valid");
    }
  }

  if (score > 0) {
    return console.log("You Win!!! Score = " + score);
  } else if (score < 0) {
    return console.log("Sorry You Loose Score = " + score);
  } else {
    return console.log("Its a Tie Score = " + score)
  }
}

//plays one round of rps
function oneRound(comp, user) {
  if (comp == user) {
    return console.log("its a tie");
  } else if (comp == selctArr[0] && user == selctArr[1]) {
    score = score + 1;
    return console.log("You Win!! paper beats rock!");
  } else if (comp == selctArr[1] && user == selctArr[2]) {
    score = score + 1;
    return console.log("You Win!! scissors beats paper!");
  } else if (comp == selctArr[2] && user == selctArr[0]) {
    score = score + 1;
    return console.log("You Win!! rock beats scissors!");
  } else {
    score = score - 1;
    return console.log(`You loose: ${user} dosn't beat ${comp}.`);
  }
}

//get user input
function getInput() {
  let userRawInput = window.prompt("rock, paper, or scissors?");
  return userRawInput.toLowerCase();
}

//gets random section from computer
function getComputerInput() {
  //sets rdmNum to 0-2
  let rdmNum = Math.floor(Math.random() * 3);
  return selctArr[rdmNum];
}
