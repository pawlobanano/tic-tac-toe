'use strict';
var historyApi = (function() {
    var results = {
        oWonTimes: 0,
        xWonTimes: 0,
        draw: 0
    };
    return {
        xWon: function() {
            results.xWonTimes = results.xWonTimes + 1;
        },
        oWon: function() {
            results.oWonTimes = results.oWonTimes + 1;
        },
        wasDraw: function() {
            results.draw = results.draw + 1;
        },
        getTimesXWon: function() {
            return results.xWonTimes;
        },
        getTimesOWon: function() {
            return results.oWonTimes;
        },
        getTimesWasDraw: function() {
            return results.draw;
        }
    };
})();