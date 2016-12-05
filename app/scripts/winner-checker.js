'use strict';
/**
 * 2.2.1. Check if is win/draw
 * 2.2.2.1. Show popup
 * 4. Set winer / draw
 * 
 * @param {any} currentPlayer
 * @returns
 */
function checkGameStatus(currentPlayer) {

    for (var i = 0; i < winPatterns.length; i++) {

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
            alert((currentPlayer + ' won')); // nicer modal maybe?

            return;

        }

    }

}

/**
 * Helper function to speed up winPatterns comparison
 * 
 * @param {any} i
 * @param {any} currentPlayer
 * @returns
 */
function checkWinPatternsForCurrentPlayer(i, currentPlayer) {

    if (cellStates[winPatterns[i][0]] === currentPlayer &&
        cellStates[winPatterns[i][1]] === currentPlayer &&
        cellStates[winPatterns[i][2]] === currentPlayer) {

        return true;
    }

    return false;

}