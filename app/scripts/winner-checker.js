'use strict';
var winnerChecker = (function () {
  var winPatterns = [
      [0, 1, 2], // top row
      [3, 4, 5], // middle row
      [6, 7, 8], // bottom row
      [0, 3, 6], // left column
      [1, 4, 7], // middle column
      [2, 5, 8], // right column
      [0, 4, 8], // diagonally
      [2, 4, 6] // diagonally
    ],
    /**
     * Helper function to speed up winPatterns comparison
     * 
     * @param {any} i
     * @param {any} currentPlayer
     * @returns
     */
    checkWinPatternsForCurrentPlayer = function (i, currentPlayer) {
      if (cellStates[winPatterns[i][0]] === currentPlayer &&
        cellStates[winPatterns[i][1]] === currentPlayer &&
        cellStates[winPatterns[i][2]] === currentPlayer) {
        return true;
      }

      return false;
    };

  return {
    /**
     * 2.2.1. Check if is win/draw
     * 2.2.2.1. Show popup
     * 4. Set winer / draw
     * 
     * @param {any} currentPlayer
     * @returns
     */
    checkGameStatus: function (currentPlayer) {
      for (var i = 0; i < winPatterns.length; i++) { // 8 win patterns
        if ([cellStates[winPatterns[i][0]],
            cellStates[winPatterns[i][1]],
            cellStates[winPatterns[i][2]]
          ]
          .indexOf(currentPlayer) === -1) {

          continue;
        }

        if (checkWinPatternsForCurrentPlayer(i, currentPlayer)) { // true if winner is found
          gameState = gameStates.WAITING;
          cells.disabled = true;
          gameHasWinner = true;

          if (currentPlayer === cellState.X) {
            historyApi.xWon();
            document.getElementById('winsX').innerText = historyApi.getTimesXWon();
          } else {
            historyApi.oWon();
            document.getElementById('winsO').innerText = historyApi.getTimesOWon();
          }

          alert(currentPlayer + ' win!');
          
          return;
        }
      }

      if (round === 9 && gameHasWinner === false) { // Draw only after all moves
        historyApi.wasDraw();
        document.getElementById('draws').innerText = historyApi.getTimesWasDraw();
        alert('It is draw');
      };
    }
  };
})();