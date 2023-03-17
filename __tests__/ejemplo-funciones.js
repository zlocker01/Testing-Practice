function suma(a, b) {
    return a + b;
};


describe('testing a las funciones de +  -', () => {
    test('suma de 20 y 30', () => {
        expect(suma(20, 30)).toBe(50);
    })
    test('La suma 10 y 10 no sea 10', () => {
        expect(suma(10+10)).not.toBe(5);
    })
})