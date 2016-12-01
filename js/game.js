function clickAtButton(cell) {
    document.getElementById(cell.id).innerText = "X";
};

document.getElementById(cell.id).onclick = clickAtButton;

/* Player module */
var player = (function () {
    var name = [{
        playerX: "X", 
        playerY: "Y"
    }];

    return {
        playerName: function () {
            return 'Player\'s name is: ' +
                player.name;
        }
    };
})();

player.playerName(); // Player's name is: X/Y