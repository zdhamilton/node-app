var request = require('supertest');
var app = require('../index.js');

describe('GET /', () => {
    it('respond with hello world', (done) => {
        // navigate to root and check the response it 'hello world'
        request(app).get('/').expect('hello world');
        done();
    });
});