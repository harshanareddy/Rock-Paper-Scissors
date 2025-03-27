let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    const randomNumber = Math.random();
    //console.log(randomNumber)
    let computerChoice = " ";
    if(randomNumber >= 0 && randomNumber < 1/3){
        computerChoice = "Rock";
        //console.log("in rock");
    }else if(randomNumber >= 1/3 && randomNumber < 2/3){
        computerChoice = "Paper";
        //console.log("in paper");
    }else if(randomNumber >= 2/3 && randomNumber < 1){
        computerChoice = "Scissors";
        //console.log("in scissors");
    }
    return computerChoice;
}



function getHumanChoice(){
    let humanChoice = window.prompt("Choose Rock or Paper or Scissors");
    return humanChoice;
}



function playRound(humanChoice, computerChoice){
    const human = humanChoice.toLowerCase();
    const computer = computerChoice.toLowerCase();
    if(human === computer){
        console.log("It's a Tie");
    }else if(human === "rock" && computer == "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore++;
    }else if(human === "rock" && computer == "scissors"){
        console.log("You win! Rock beats Scissors");
        humanScore++;
    }else if(human === "paper" && computer == "rock"){
        console.log("You win! Paper beats Rock");
        humanScore++;
    }else if(human === "paper" && computer == "scissors"){
        console.log("You loose! Scissors beats paper");
        computerScore++;
    }else if(human === "scissors" && computer == "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore++;
    }else if(human === "scissors" && computer == "paper"){
        console.log("You win! Scissors beats paper");
        humanScore++;
    }
}

function playGame(){

    let count = 1;

    while(count <= 5){
        const computerChoice = getComputerChoice();
        const humanChoice = getHumanChoice();
        playRound(humanChoice, computerChoice);
        count++;
    }

    if(humanScore > computerScore){
        console.log("Hurray!! You win");
    }else{
        console.log("You lost :( Better luck next time");
    }
    console.log(`Your Score: ${humanScore} Computer Score: ${computerScore}`);
}

playGame();