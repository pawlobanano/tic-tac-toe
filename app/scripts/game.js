/*
  1. Clear board 
  2. Set starting player (default - X)
    2.a. Perform turn (click on one of grid's cell)
    2.b. Check if is win/draw
  3. Lock board 
  4. Set winer / Set draw
  5. Update History (API)
 */

var cells = [0, 1, 2, 3, 4, 5, 6, 7, 8];
var wins = [
  [0, 1, 2], // top row
  [3, 4, 5], // middle row
  [6, 7, 8], // bottom row
  [0, 3, 6], // left column
  [1, 4, 7], // middle column
  [2, 5, 8], // right column
  [0, 4, 8], // diagonally
  [2, 4, 6] // diagonally
];

function performTurn(cell) {
  document.getElementById(cell.id).innerText = "X";
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