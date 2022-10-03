const Rover = require('./');
describe('test rover function', () => {

    test('rover starting at 1 2 N and with commands LMLMLMLMM must finish at 1 3 N', () => {
        expect(Rover([1, 2], 'N', [10, 10], 'LMLMLMLMM')).toBe('1 3 N');
    });
    
    test('rover starting at 3 3 E and with commands MRRMMRMRRM must finish at 2 3 S', () => {
        expect(Rover([3, 3], 'E', [10, 10], 'MRRMMRMRRM')).toBe('2 3 S');
    });
    
    test('rover starting at 5 7 W and with commands LMRMRMMRLM must finish at 4 9 N', () => {
        expect(Rover([5, 7], 'W', [10, 10], 'LMRMRMMRLM')).toBe('4 9 N');
    });

    test('rover starting at 5 6 S and with commands MLMMRMRRMLMM must finish at 5 5 W', () => {
        expect(Rover([5, 6], 'S', [10, 10], 'MLMMRMRRMLMM')).toBe('5 5 W');
    });
    
    test('rover with coordinates bigger than the plateau must finish out of the plateau', () => {
        expect(Rover([3, 3], 'E', [10, 2], 'MRRMMRMRRM')).toBe('Rover out of the plateau');
    })
})