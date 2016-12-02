function performTurn(cell) {
    document.getElementById(cell.id).innerText = "X";
};

function cleanUpGrid() {
    $("#tictactoe-board td").html('');
    $("#tictactoe-board td").attr('class', '');
}


/* Player module */
var player = (function() {
    var name = [{
        playerX: "X",
        playerY: "Y"
    }];

    return {
        playerName: function(data) {
            if (data === "X") {
                return player.name.playerX;
            } else {
                return player.name.playerY;
            }
        }
    };
})();

document.getElementById('playerX').innerText = player.playerName(X); // Player's name is: X/Y