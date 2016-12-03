/*
  1. Clear board 
  2. Set sign for starting player (default - X)
    2.1. Perform turn (click on one of grid's cell)
    2.2. Check if is win/draw
      2.2.1. Show popup
  3. Lock the board 
  4. Set winer / draw
  5. Update History (API)
 */

/* Variables */
var cellStates = [null, null, null, null, null, null, null, null, null],
  state = {
    null: null,
    x: "x",
    o: "o"
  },
  cells = [0, 1, 2, 3, 4, 5, 6, 7, 8],
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
  player1 = "x",
  player2 = "y",
  gameOn = false;


/* Functions */
function turn(clickedCellId) {
  var player = clickedCellId,
    cell;
  if (player1 === "x") {
    cell = document.getElementById(clickedCellId);
    console.log(cell);
  }
  console.log(player);
};

function resetGrid() {
  document.getElementById("#tic-tac-toe-board td").html("");
  document.getElementById("#tic-tac-toe-board td").attr("class", "");
}

window.onload = function () {
  document.getElementById("restart").onclick = function () {
    resetGrid();
  };
};