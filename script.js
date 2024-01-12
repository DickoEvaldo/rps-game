function getComputerChoice () {
    const moves = ["rock", "paper", "scissor"];
    return moves[Math.floor(Math.random() * moves.length)];
}

// function getPlayerChoice () {
//     const moves = ["rock", "paper", "scissor"];
//     let playerChoice = prompt("enter your move:");
    
//     while (!moves.includes(playerChoice)) {
//         alert('Wrong input');
//         playerChoice = prompt("enter your move:");
//     }
//     return playerChoice;
// }

function PlayRound (computerChoice, playerChoice ) {
    
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

// function game () {
//     let playerScore = 0;
//     let computerScore = 0;
//     for (let i = 0; i < 5; i ++) {
//         const result = PlayRound(getComputerChoice, getPlayerChoice);
//         if (result === 'W') {
//             playerScore ++;
//         }
//         else if (result === 'L') {
//             computerScore ++;
//         }
//         else {
//             console.log(`Round: ${i + 1} - It's a tie! Restarting the round.`);
//             i--;
//         }

//         console.log(`Round: ${i + 1}`);
//         console.log(`Player Score: ${playerScore}`);
//         console.log(`Computer Score: ${computerScore}`);
//     }

//     if (computerScore > playerScore) {
//         return "Computer Wins"
//     }
//     else {
//         return "Player Wins"
//     }
// }

const rockButton = document.getElementById("rock")
const paperButton = document.getElementById("paper")
const scissorButton = document.getElementById("scissor")

// function imageSelector (value) {
//     if (value === "rock") {
//         return 
//     }
// }

function updateImage (computerChoice, playerChoice) {
    const container1 = document.querySelector(".human-box img");
    const container2 = document.querySelector(".computer-box img");
    
    container1.src = `images/${playerChoice}.png`;
    container2.src = `images/${computerChoice}.png`;

    container1.setAttribute('style', 'width: 150px; height: 150px');
    container2.setAttribute('style', 'width: 150px; height: 150px');
}

function clickFunction (playerChoice) {
    const computerChoice = getComputerChoice();
    updateImage(computerChoice, playerChoice);
    const result = PlayRound(computerChoice, playerChoice);
    console.log(result);
    if (result === "W") {
        const container = document.querySelector(".result-text");
        container.textContent = "HUMAN WINS";
    }
    else if (result === "L") {
        const container = document.querySelector(".result-text");
        container.textContent = "COMPUTER WINS";
    }
    else {
        const container = document.querySelector(".result-text");
        container.textContent = "ITS A TIE";
    }
}

rockButton.addEventListener('click', () => {clickFunction("rock")})
paperButton.addEventListener('click', () => {clickFunction("paper")})
scissorButton.addEventListener('click', () => {clickFunction("scissor")})