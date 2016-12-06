'use strict';

describe('game module tests', function() {

    it('should prepare cellStates array at the start of each game', function() {
        // given
        var cellStates = [null, null, null, null, null, null, null, null, null],
            result,
            dummyElement = document.createElement('div');
        document.getElementById = jasmine.createSpy('HTML Element').and.returnValue(dummyElement);

        // when

        result = game.resetGame();

        // then
        expect(result).toBe(cellStates);
    });

});