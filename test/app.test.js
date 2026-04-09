const request = require('supertest');
const app = require('../app');

describe('Health Check', () => {
    test('GET / should return status ok', async () => {
        const res = await request(app).get('/');
        expect(res.statusCode).toBe(200);
        expect(res.body.status).toBe('ok');
    });
});

describe('Add Endpoint', () => {
    test('GET /add/2/3 should return 5', async () => {
        const res = await request(app).get('/add/2/3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(5);
    });

    test('GET /add/10/20 should return 30', async () => {
        const res = await request(app).get('/add/10/20');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(30);
    });
});

describe('Multiply Endpoint', () => {
    test('GET /multiply/3/4 should return 12', async () => {
        const res = await request(app).get('/multiply/3/4');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(12);
    });
});

describe('Subtract Endpoint', () => {
    test('GET /subtract/10/3 should return 7', async () => {
        const res = await request(app).get('/subtract/10/3');
        expect(res.statusCode).toBe(200);
        expect(res.body.result).toBe(7);
    });
});