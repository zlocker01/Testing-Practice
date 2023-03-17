const cliente = {
    nombre: 'Diego',
    balance: 500
};

describe('testong al cliente', () => {
    test('el cliente es premium', () => {
        expect(cliente.balance).toBeGreaterThan(400);
    });
    test('el cliente es Juan Pablo', () => {
        expect(cliente.nombre).toBe('Diego');
    });
});