export default function AddButton(playerName, index) {

  return $(`
  <button id="${index + "Add"}">${"+1 " + playerName}</button>
  `);
}