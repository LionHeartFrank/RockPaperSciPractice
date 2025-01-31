


function rpsls(pl1,pl2){
    const choice = {
        rock: ["scissors", "lizard"],
        paper: ["rock", "spock"],
        scissors: ["paper", "lizard"],
        spock: ["scissors", "rock"],
        lizard: ["paper", "spock"],
      }
      
    if (pl1 === pl2) {return "Draw!"}
    else if (choice[pl1].includes(pl2)) {return "Player 1 Won!"} // this is the equivalent of eg choice["rock"].includes("spock")
    else {return "Player 2 Won!"}
}
    