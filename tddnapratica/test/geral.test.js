const app = require('../src/app');
const supertest = require('supertest');
const request = supertest(app);


test('A aplicação deve responder na porta 3131', () => {
    return request.get('/').then(res => expect(res.statusCode).toEqual(200));
});

test('Deve retornar azul como a cor favorita de Helen', () => {
    return request.get('/cor/helen').then(res => expect(res.body.cor).toEqual('azul'));
});