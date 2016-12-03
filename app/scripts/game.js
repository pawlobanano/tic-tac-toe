/*
  1. Clear board 
  2. Set sign for starting player (default - X)
    2.1. Perform turn (click on one of grid's cell)
    2.2. Check if is win/draw
      2.2.1. Show popup
  3. Lock the board 
  4. Set winer / draw
  5. Update History (API)
  6. New game option
*/

/* 
    Variables 
*/
var cellStates = [null, null, null, null, null, null, null, null, null],
  cellState = {
    null: null,
    x: "x",
    o: "o"
  },
  cellIds = [0, 1, 2, 3, 4, 5, 6, 7, 8],
  winPatterns = [
    [0, 1, 2], // top row
    [3, 4, 5], // middle row
    [6, 7, 8], // bottom row
    [0, 3, 6], // left column
    [1, 4, 7], // middle column
    [2, 5, 8], // right column
    [0, 4, 8], // diagonally
    [2, 4, 6] // diagonally
  ],
  player1 = cellState.x,
  player2 = cellState.o,
  gameOn = false,
  startingPlayerX = "First player X",
  startingPlayerO = "First player O",
  startingPlayerButton = document.getElementById("player-switcher"),
  restartButton = document.getElementById("restart-button");

/* 
    Functions 
*/
// 1.
function clearGrid() {};

// 2.
// Automatic default value setter for startingPlayerButton
(function () {
  if (!startingPlayerButton.innerText) startingPlayerButton.innerText = startingPlayerX;
})();

function switchStartingPlayer() {

  if (startingPlayerButton.innerText === startingPlayerX) {
    startingPlayerButton.innerText = startingPlayerO;
  } else {
    startingPlayerButton.innerText = startingPlayerX;
  }

}

// 2.1
function turn(cellId) {

  console.log(cellId);

};