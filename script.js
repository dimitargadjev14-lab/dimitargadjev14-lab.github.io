console.log("JS connected");

const items = ["rock", "paper", "scissors"];

let wins = 0;
let losses = 0;
let ties = 0;

const screen = document.getElementById("screen");
const stats = document.getElementById("stats");

function play(player) {
    const pc = items[Math.floor(Math.random() * items.length)];

    if (player === pc) {
        ties++;
        screen.textContent = `You chose ${player}, bot chose ${pc} → Tie`;
    } 
    else if (
        (player === "rock" && pc === "scissors") ||
        (player === "paper" && pc === "rock") ||
        (player === "scissors" && pc === "paper")
    ) {
        wins++;
        screen.textContent = `You chose ${player}, bot chose ${pc} → You win`;
    } 
    else {
        losses++;
        screen.textContent = `You chose ${player}, bot chose ${pc} → You lose`;
    }

    stats.textContent = `Wins: ${wins} Losses: ${losses} Ties: ${ties}`;
}

function resetStats() {
    wins = 0;
    losses = 0;
    ties = 0;

    stats.textContent = "Wins: 0 Losses: 0 Ties: 0";
    screen.textContent = "Stats reset!";
}
