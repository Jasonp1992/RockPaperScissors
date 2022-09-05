//rock paper scissors game agents a computer

//get guess from computer : rock, paper, scissors
    //save guess as variable
    
//get input from user 
    //save input as variable

// check computer pick vs input form user 
    // if computer === user 
        // tie

    // if computer = rock && user = paper
        // user wins 
    
    // if computer = paper && user = scissors
        // user wins

    // if computer = scissors && user = rock
        // user wins 

    // else 
        // user looses 

    let selctArr = ['rock', 'paper', 'scissors']

    //gets random section from computer
    function getComputerInput() {
        //sets rdmNum to 0-2
        let rdmNum = Math.floor(Math.random() * 3)
        return selctArr[rdmNum]
    }

    let compInput = getComputerInput()
