const cliente = {
    nombre: 'juan 2',
    balance: 500,
    tipo: 'premium'
};

describe('Test al cliente', () => {
    test('Es juan', () => {
        expect(cliente).toMatchSnapshot();
    });
});