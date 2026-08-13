let victories = 0;
let defeats = 0;
let draws = 0;

function play(playerChoice) {
  const options = ["pedra", "papel", "tesoura"];
  const computerChoice = options[Math.floor(Math.random() * options.length)];
  let result = "";

  if (playerChoice === computerChoice) {
    result = "Empate";
    draws++;
  } else if (
    (playerChoice === "pedra" && computerChoice === "tesoura") ||
    (playerChoice === "papel" && computerChoice === "pedra") ||
    (playerChoice === "tesoura" && computerChoice === "papel")
  ) {
    result = "Vitória";
    victories++;
  } else {
    result = "Derrota";
    defeats++;
  }

  // Atualiza resultado atual
  document.getElementById("result").textContent =
    `Você jogou ${playerChoice}, computador jogou ${computerChoice}. Resultado: ${result}`;
  document.getElementById("score").textContent =
    `Vitórias: ${victories} | Derrotas: ${defeats} | Empates: ${draws}`;

  // Atualiza ranking
  const table = document.getElementById("rankingTable").querySelector("tbody");
  const row = document.createElement("tr");
  row.innerHTML = `
    <td><img src="img/${playerChoice}.png" alt="${playerChoice}" height="40"></td>
    <td><img src="img/${computerChoice}.png" alt="${computerChoice}" height="40"></td>
    <td>${result}</td>
  `;
  table.appendChild(row);
}

