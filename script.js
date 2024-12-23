function randNum(){
    const RandomNum=Math.random()
    if (RandomNum<0.3){
        return "Rock";
    }
    else if (RandomNum>=0.3 && RandomNum<0.6){
        return "Paper";
    }
    else{
        return "Scissors";
    }
}
let decision=''
let computerScore=0
let userScore=0
let userChoice=''
let computerChoice=''

function onRock(){
    userChoice="Rock"
    const compChoice=randNum();
    computerChoice=compChoice
    if (compChoice==="Rock"){
        decision="It's a tie!"
        }
    else if(compChoice==='Scissors'){
        userScore++;
        decision="You win!"
    }
    else{
        computerScore++;
        decision="You lose!"
    }
    display()
    displayScores()
}
function onPaper(){
    userChoice="Paper"
    const compChoice=randNum();
    computerChoice=compChoice
    if (compChoice==="Paper"){
        decision="It's a tie!"
        }
    else if(compChoice==='Rock'){
        userScore++;
        decision="You win!"
    }
    else{
        computerScore++;
        decision="You lose!"
        }
    display()
    displayScores()
}
function onScissors(){
    userChoice="Scissors"
    const compChoice=randNum();
    computerChoice=compChoice
    if (compChoice==="Scissors"){
        decision="It's a tie!"
        }
    else if(compChoice==='Paper'){
        userScore++;
        decision="You win!"
    }
    else{
        computerScore++;
        decision="You lose!"
        }
    display()
    displayScores()
}

function displayScores(){
document.getElementById('playerScore').textContent = userScore;
document.getElementById('computerScore').textContent = computerScore;
document.getElementById('result').textContent = decision;
document.getElementById('playerChoice').textContent=userChoice;
document.getElementById('computerChoice').textContent=computerChoice;
}

function display(){
    console.log("UserScore:"+userScore);
    console.log("ComputerScore:"+computerScore);
    console.log("Decision:"+decision);
}
            