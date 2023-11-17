import AddButton from "./scoreboardComponents/addButton.js";
import BtnBox from "./scoreboardComponents/btnbox.js";
import Player from "../classes/player.js";
import PlayerScoreBox from "./scoreboardComponents/playerScoreBox.js";
import RemoveButton from "./scoreboardComponents/removeButton.js";
import TopScoreDisplay from "./scoreboardComponents/topScoreInput.js";

let gameOver = false;
let topScore = 5
const playerList = [];

export default function ScoreBoard(playerNames) {
  const $scoreArea = $("<section id='scoreArea'></section>");
  const $btnSection = $("<section id='btnSection'></section>");
  const $topScoreDisplay = $(TopScoreDisplay(topScore)).on("change", function (event) {
    topScore = $(event.target).val();
    reset();
  });

  let index = 1;
  for (let name of playerNames) {
    $scoreArea.append(PlayerScoreBox(name, index));

    const $addBtn = AddButton(name, index);
    const $removeBtn = RemoveButton(name, index);
    const $scoreBox = $(`<div class="btnBox"></div>`).append($addBtn, $removeBtn)
    $btnSection.append($scoreBox);

    createPlayer($scoreArea.find(`#${index}Score`), $addBtn, $removeBtn);

    index++;
  };

  const $resetBtn = $("<button>Reset</button>").on("click", reset);

  return $("<main></main>").append($resetBtn, $scoreArea, $topScoreDisplay, $btnSection);
}

function createPlayer($display, $addBtn, $removeBtn) {
  const newPlayer = new Player($display, $addBtn, $removeBtn);
  playerList.push(newPlayer);

  $addBtn.on("click", function () {
    addScore(newPlayer, playerList);
  });

  $removeBtn.on("click", function () {
    removeScore(newPlayer, playerList);
  });
}

function addScore(player, opponents) {
  if (!gameOver) {
    player.score += 1;
    player.display.html(player.score);

    if (player.score >= topScore) {
      gameOver = true
      player.display.addClass("won")

      for (const opponent of opponents) {
        if (opponent !== player) {
          opponent.display.addClass("lost");
        }
      }
    }
  }
}

function removeScore(player, opponents) {
  if (player.score > 0) {
    player.score -= 1;
    player.display.html(player.score);

    if (player.score < topScore) {
      gameOver = false
      player.display.removeClass("won")
      for (const opponent of opponents) {
        if (opponent != player) {
          opponent.display.removeClass("lost")
        }
      }
    }
  }
}

function reset() {
  gameOver = false
  for (let player of playerList) {
    player.score = 0
    player.display.html(player.score);
    player.display.removeClass("won", "lost")
  }
}