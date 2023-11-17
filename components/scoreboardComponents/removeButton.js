export default function RemoveButton(playerName, index) {

  return $(`
  <button id="${index + "Remove"}">${"-1 " + playerName}</button>
  `);
}