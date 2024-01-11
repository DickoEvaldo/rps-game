function getComputerChoice () {
    const moves = ["rock", "paper", "scissor"];
    return moves[Math.floor(Math.random() * moves.length)];
}

function getPlayerChoice () {
    const moves = ["rock", "paper", "scissor"];
    let playerChoice = prompt("enter your move:");
    
    while (!moves.includes(playerChoice)) {
        alert('Wrong input');
        playerChoice = prompt("enter your move:");
    }
    return playerChoice;
}

function PlayRound (getComputerChoice, getPlayerChoice ) {
    const playerChoice = getPlayerChoice().toLowerCase();
    const computerChoice = getComputerChoice();
    
    if (playerChoice === computerChoice) {
        return "T";
    }
    if (playerChoice === "rock"  && computerChoice === "scissor") {
        return "W";
    }
    else if (playerChoice === 'scissor' && computerChoice === "paper") {
        return "W";
    }
    else if (playerChoice === "paper" && computerChoice === "rock") {
        return "W";
    }
    else {
        return "L";
    }
}

function game () {
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i ++) {
        const result = PlayRound(getComputerChoice, getPlayerChoice);
        if (result === 'W') {
            playerScore ++;
        }
        else if (result === 'L') {
            computerScore ++;
        }
        else {
            console.log(`Round: ${i + 1} - It's a tie! Restarting the round.`);
            i--;
        }

        console.log(`Round: ${i + 1}`);
        console.log(`Player Score: ${playerScore}`);
        console.log(`Computer Score: ${computerScore}`);
    }

    if (computerScore > playerScore) {
        return "Computer Wins"
    }
    else {
        return "Player Wins"
    }
}
