export default function PlayerScoreBox(playerName, id) {

  return $(`
  <p>
    <span id="${id + "Name"}" class="playerName">${fixName(playerName)}</span>
    <span id="${id + "Score"}" class="playerScore">0</span>
  </p>
  `)
}

function fixName(playerName) {
  if (playerName.length > 14) {
    playerName = playerName.slice(0, 12) + "...";
  }

  return playerName;
}