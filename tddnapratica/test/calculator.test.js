const app = require('../app');

describe('Operações básicas', () => {

    test('Deve retornar o valor 10 ao somar 5 + 5', () => {
        const result = app.soma(5,5);
        expect(result).toEqual(10);
    });
    
    test('Deve retornar o valor 21 ao multiplicar 3 por 7', () => {
        const result = app.mult(3,7);
        expect(result).toEqual(21);
    });

});
