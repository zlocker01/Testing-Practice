const password = '123456';

describe('vaidacion de password y su no. de caracteres', () => {
    test('que el password tenga 6 caracteres', () => {
        expect(password).toHaveLength(6);
    });
    test('password no vacio', () => {
        expect(password).not.toHaveLength(0);
    });
});