export default function PlayerNames(amount) {
  const $playerNames = $("<section></section>");

  for (let i = 1; i <= amount; i++) {
    const $div = $("<div></div>");

    const $playerInput = $("<input>", { type: "text", id: i + "NameInput", placeholder: "Enter name" });
    const $playerLabel = $("<label>", { for: i + "NameInput" }).text(`Player ${i} name:`);

    $playerNames.append($div.append($playerLabel, $playerInput));
  }

  return $playerNames;
}
