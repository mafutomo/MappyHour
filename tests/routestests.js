const assert = require('assert')
const routes = require('../server/routes/routes.js')
const request = require('supertest')
const server = require('../server/server.js')

describe('GET /restraunts', function() {
  it('respond with json', function(done) {
    request(server)
      .get('/restaurants')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('GET /users', function() {
  it('respond with json', function(done) {
    request(server)
      .get('/users')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
