const result = document.getElementById("result");
const buttons = document.querySelectorAll(".rps-btn");

const choices = ["rock", "paper", "scissors"];

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const playerChoice = button.dataset.choice;
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    const winner = getWinner(playerChoice, computerChoice);
    result.textContent = `You chose ${playerChoice}, computer chose ${computerChoice}. ${winner}`;
  });
});

function getWinner(player, computer) {
  if (player === computer) return "It's a draw!";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win!";
  }
  return "You lose!";
}
