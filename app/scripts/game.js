'use strict';
/*
  0. Initialize application
  0.1. Initialize application helper
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

var game = (function() {
    var cellStates = [null, null, null, null, null, null, null, null, null],
        cellState = {
            EMPTY: null,
            X: 'x',
            O: 'o'
        },
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
        gameHasWinner = false,
        round = 0,
        startingPlayerX = 'First player X',
        startingPlayerO = 'First player O',
        startingPlayerButton = document.getElementById('player-switcher-button'),
        restartButton = document.getElementById('restart-button'),
        cells = document.querySelectorAll('.cell'),
        /**
         * 1. Clear grid
         */
        clearGrid = function() {
            cells.forEach(function(element) {
                if (element.innerText === cellState.X) element.classList.remove(cellState.X);
                if (element.innerText === cellState.O) element.classList.remove(cellState.O);
                element.innerText = '';
            }, this);
        },
        /**
         * 0.1. Initialize application helper
         */
        init = function() {
            game.init();
        };

    return {
        /**
         * 0. Initialize application
         */
        init: function() {
            if (!startingPlayerButton.innerText) startingPlayerButton.innerText = startingPlayerX;
            gameState = gameStates.READY;
            currentPlayer = firstPlayer;
            clearGrid();
        },
        /**
         * 2.1. Perform turn (click on one of grid's cell)
         * 
         * @param {any} cellId
         * @returns
         */
        turn: function(cellId) {
            if (cellStates[cellId] !== cellState.EMPTY) return;
            if (gameState === gameStates.WAITING) return;
            gameState = gameStates.IN_PROGRESS;
            cellStates[cellId] = currentPlayer; // cellStates Array
            document.getElementById(cellId).classList.add(currentPlayer);
            cells[cellId].innerText = currentPlayer; // cells in DOM
            // document.getElementById(cellId).classList.add("animated");// animated appear
            // document.getElementById(cellId).classList.add("pulse");
            round++;
            winnerChecker.checkGameStatus(currentPlayer, cellStates, cellState, round, gameStates, gameState, cells, gameHasWinner);
            currentPlayer = currentPlayer === player1 ? player2 : player1;
        },
        /**
         * 2. Set sign for starting player (default - X)
         * 
         * @returns
         */
        switchStartingPlayer: function() {
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
        },
        /**
         * Reset game function
         */
        resetGame: function() {
            cellStates = [null, null, null, null, null, null, null, null, null];
            round = 0;
            gameHasWinner = false;
            cells.forEach(function(element) {
                element.classList.remove('not-active');
            });
            init();

            return cellStates;
        }

    }
})();

game.init();