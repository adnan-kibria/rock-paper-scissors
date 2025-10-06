//CREATE a function named getComputerChoice
function getComputerChoice(){
    //CREATE a variable named number & store Math.random() function to get random numbers
    let number = Math.random();
    //CREATE a variable named output to store choices and return as function output
    let output;
    //IF output grater than equal to 0 and less than 0.4" THEN STORE "Paper" in output and PRINT output
    if(number >= 0 && number < 0.4){
        output = "Paper";
        console.log(output);
    }
    //ELSE IF output greater than equal to 0.4 and less than equal to 0.7 THEN STORE "Scissor" in output and PRINT output
    else if(number >= 0.4 && number <= 0.7){
        output = "Scissor";
        console.log(output);
    }
    //ELSE STORE "Rock" in output and PRINT output
    else{
        output = "Rock";
        console.log(output);
    }
    //RETURN output value
    return output;
}
//CREATE a function named getHumanChoice
function getHumanChoice(){
    //CREATE a variable named input which will take user input
    let input = prompt("Please choose between rock, paper & scissor: ");
    //PRINT input
    console.log(input)
    //RETURN input value
    return input;
}

function playGame(){
    //CREATE a variable named humanScore and SET 0
    let humanScore = 0;
    //CREATE a variable named humanScore and SET 0
    let computerScore = 0;

    //FOR i equals to 1 WHEN i less than 6 INCREMENT i by 1
    for(let i = 1; i<6; i++){
        //PRINT round
        console.log(`Round ${i}`);
        //CREATE a variable called computerChoice and SET getComputerChoice function
        const computerChoice = getComputerChoice();
        //CREATE a variable called humanChoice and SET getHumanChoice function
        const humanChoice = getHumanChoice();
        //CALL playRound parameterized function
        playRound(computerChoice, humanChoice);
    }

    //CREATE a parameterized function called playRound and SET parameter getComputerChoice and getHumanChoice
    function playRound(getComputerChoice, getHumanChoice){
        //IF gteComputerChoice equals to Paper AND getHumanChoice equals to Paper OR paper OR PAPER
        if(getComputerChoice === "Paper" && (getHumanChoice === "Paper" || getHumanChoice === "paper" || getHumanChoice === "PAPER")){
            //PRINT It's a TIE!
            console.log("It's a TIE!");
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Paper AND getHumanChoice equals to Scissor OR scissor OR SCISSOR
        else if(getComputerChoice === "Paper" && (getHumanChoice === "Scissor" || getHumanChoice === "scissor" || getHumanChoice === "SCISSOR")){
            //PRINT You Win! Scissor beats Paper.
            console.log("You Win! Scissor beats Paper.");
            //INCREMENT humanScore by 1
            humanScore++;
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Paper AND getHumanChoice equals to Rock OR rock OR ROCK
        else if(getComputerChoice === "Paper" && (getHumanChoice === "Rock" || getHumanChoice === "rock" || getHumanChoice === "ROCK")){
            //PRINT You Loose! Paper beats Rock.
            console.log("You Loose! Paper beats Rock.");
            //INCREMENT computerScore by 1
            computerScore++;
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Scissor AND getHumanChoice equals to Paper OR paper OR PAPER
        else if(getComputerChoice === "Scissor" && (getHumanChoice === "Paper" || getHumanChoice === "paper" || getHumanChoice === "PAPER")){
            //PRINT You Loose! Scissor beats Paper.
            console.log("You Loose! Scissor beats Paper.");
            //INCREMENT computerScore by 1
            computerScore++;
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Scissor AND getHumanChoice equals to Scissor OR scissor OR SCISSOR
        else if(getComputerChoice === "Scissor" && (getHumanChoice === "Scissor" || getHumanChoice === "scissor" || getHumanChoice === "SCISSOR")){
            //PRINT It's a TIE!
            console.log("It's a TIE!");
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Scissor AND getHumanChoice equals to Rock OR rock OR ROCK
        else if(getComputerChoice === "Scissor" && (getHumanChoice === "Rock" || getHumanChoice === "rock" || getHumanChoice === "ROCK")){
            //PRINT You Win! Rock beats Scissor.
            console.log("You Win! Rock beats Scissor.");
            //INCREMENT humanScore by 1
            humanScore++;
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Rock AND getHumanChoice equals to Paper OR paper OR PAPER
        else if(getComputerChoice === "Rock" && (getHumanChoice === "Paper" || getHumanChoice === "paper" || getHumanChoice === "PAPER")){
            //PRINT You Win! Paper beats Rock.
            console.log("You Win! Paper beats Rock.");
            //INCREMENT humanScore by 1
            humanScore++;
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Rock AND getHumanChoice equals to Scissor OR scissor OR SCISSOR
        else if(getComputerChoice === "Rock" && (getHumanChoice === "Scissor" || getHumanChoice === "scissor" || getHumanChoice === "SCISSOR")){
            //PRINT You Loose! Scissor beats Paper.
            console.log("You Loose! Scissor beats Paper.");
            //INCREMENT computerScore by 1
            computerScore++;
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        //ELSE IF gteComputerChoice equals to Rock AND getHumanChoice equals to Rock OR rock OR ROCK
        else if(getComputerChoice === "Rock" && (getHumanChoice === "Rock" || getHumanChoice === "rock" || getHumanChoice === "ROCK")){
            //PRINT It's a TIE!
            console.log("It's a TIE!");
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
            //RETURN false
            return false;
        }
        else {
            //PRINT Invalid Choice!
            console.log("Invalid Choice!");
            //PRINT Computer Score
            console.log("Computer Score: ",computerScore);
            //PRINT Human Score
            console.log("Human Score: ",humanScore);
        }
        //RETURN true
        return true;
    }

    //IF humanScore equals to computerScore
    if(humanScore === computerScore){
        //PRINT It's a TIE!
        console.log("It's a TIE!");
    }
    //IF humanScore greater than computerScore
    else if(humanScore > computerScore){
        //PRINT Congratulations! You beat computer by humanScore out of 5 score.
        console.log(`Congratulations! You beat computer by ${humanScore} out of 5 score.`);
    }
    else{
        //PRINT You Loose! Computer beats you by computerScore out of 5 score.
        console.log(`You Loose! Computer beats you by ${computerScore} out of 5 score.`)
    }
}
//CALL playGame function
playGame();
