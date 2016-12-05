'use strict';
/*
  0. Init
  1. Clear grid 
  2. Set sign for starting player (default - X)
  2.1. Perform turn (click on one of grid's cell)
  2.2.1. Check if is win/draw
  2.2.2.1. Show popup
  3. Lock the board 
  4. Set winer / draw
  5. Update History (API)
  6. New game option (In modal)
*/

/** 
 * Variables 
 */
var cellStates = [null, null, null, null, null, null, null, null, null],
    cellState = {
        EMPTY: null,
        X: 'x',
        O: 'o'
    },
    winPatterns = [
        [0, 1, 2], // top row
        [3, 4, 5], // middle row
        [6, 7, 8], // bottom row
        [0, 3, 6], // left column
        [1, 4, 7], // middle column
        [2, 5, 8], // right column
        [0, 4, 8], // diagonally
        [2, 4, 6] // diagonally
    ], // to win-checker.js
    player1 = cellState.X,
    player2 = cellState.O,
    firstPlayer = player1,
    currentPlayer,
    gameStates = {
        IN_PROGRESS: 'in progress',
        READY: 'ready',
        WAITING: 'waiting'
    },
    gameState,
    startingPlayerX = 'First player X',
    startingPlayerO = 'First player O',
    startingPlayerButton = document.getElementById('player-switcher'),
    restartButton = document.getElementById('restart-button'),
    cells = document.querySelectorAll('.cell');

/**
 * Functions 
 */

/**
 * 0. Init
 */
function init() {

    if (!startingPlayerButton.innerText) startingPlayerButton.innerText = startingPlayerX;

    gameState = gameStates.READY;

    currentPlayer = firstPlayer;

    clearGrid();

}

/**
 * 1. Clear grid
 */
function clearGrid() {

    cells.forEach(function(element) {
        element.innerText = '';
    }, this);

};

/**
 * 2. Set sign for starting player (default - X)
 * 
 * @returns
 */
function switchStartingPlayer() {

    if (gameState !== gameStates.READY) { // gameState === IN_PROGRESS or WAITING

        if (startingPlayerButton.innerText === startingPlayerX) {
            startingPlayerButton.innerText = startingPlayerO;
            firstPlayer = cellState.O;
        } else {
            startingPlayerButton.innerText = startingPlayerX;
            firstPlayer = cellState.X;
        }

        return;
    }

    if (startingPlayerButton.innerText === startingPlayerX) {
        startingPlayerButton.innerText = startingPlayerO;
        firstPlayer = cellState.O;
        player1 = cellState.O;
        player2 = cellState.X;
    } else {
        startingPlayerButton.innerText = startingPlayerX;
        firstPlayer = cellState.X;
        player1 = cellState.X;
        player2 = cellState.O;
    }

    currentPlayer = player1;

}

/**
 * 2.1. Perform turn (click on one of grid's cell)
 * 
 * @param {any} cellId
 * @returns
 */
function turn(cellId) {

    if (cellStates[cellId] !== cellState.EMPTY) return;

    if (gameState === gameStates.WAITING) return;

    gameState = gameStates.IN_PROGRESS;

    cellStates[cellId] = currentPlayer; // cellStates Array

    cells[cellId].innerText = currentPlayer; // cells in DOM

    checkGameStatus(currentPlayer);

    currentPlayer = currentPlayer === player1 ? player2 : player1;

};

/**
 * Reset game function
 */
function resetGame() {

    cellStates = [null, null, null, null, null, null, null, null, null];
    cells.disabled = false;

    init();

}

(function() {
    init();
})();