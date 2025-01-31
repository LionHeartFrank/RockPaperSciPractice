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
let pl2; // need to assign result of player2 ()


function player2 () {
    let compNum = Math.floor(Math.random() * optionsArray.length)
    /* Random num * length of optionsArray 
     so eg compChoice = optionsArray[1] (= paper)

     const result = rpsls(compNum) maybe?
    */
    const compChoice = optionsArray[compNum]
    console.log(compChoice)
    return compChoice
};

player2 ()
/* Calling player 2() here to check the function works

We need to:
Assign button to variable whatever user input is
So user presses option, we need to store that in a variable 
And pass that to .addEventListener

We need to assign pl1 to one of the constButtons when clicked


*/

button.addEventListener("click", function rpsls(pl1,pl2){

    if (pl1 === pl2) {return "Draw!"}
    else if (winningCombo[pl1].includes(pl2)) {return "Player 1 Won!"} // this is the equivalent of eg choice["rock"].includes("spock")
    else {return "Player 2 Won!"}
}
)



document.getElementById("result").appendChild(rpsls)


// event.preventDefault()
// so do Math.random() to get a random number and then 


 