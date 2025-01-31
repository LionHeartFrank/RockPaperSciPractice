const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorsButton = document.getElementById("scissors")
const spockButton = document.getElementById("spock")
const lizardButton = document.getElementById("lizard")
const optionsArray = ["rock", "paper", "scissors", "spock", "lizard"]

const winningCombo = {
    rock: ["scissors", "lizard"],
    paper: ["rock", "spock"],
    scissors: ["paper", "lizard"],
    spock: ["scissors", "rock"],
    lizard: ["paper", "spock"],
  }
  

let pl1;
let pl2 = function player2 () {
    let compNum = Math.floor(Math.random() * optionsArray.length)
    const compChoice = optionsArray[compNum]
    console.log(compChoice)
};



function handleSubmit(event)
{

    player2()  
  
function rpsls(pl1,pl2){
  
    if (pl1 === pl2) {return "Draw!"}
    else if (winningCombo[pl1].includes(pl2)) {return "Player 1 Won!"} // this is the equivalent of eg choice["rock"].includes("spock")
    else {return "Player 2 Won!"}


}
console.log(rpsls(pl1))
}

document.getElementById("result").appendChild(rpsls)


// event.preventDefault()
// so do Math.random() to get a random number and then 