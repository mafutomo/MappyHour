const assert = require('assert')
const routes = require('../server/routes/routes.js')
const request = require('supertest')
const server = require('../server/server.js')
//const { addDatabaseHooks } = require('./utils')

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
describe('POST /user', function() {
  it('respond with json', function(done) {
    request(server)
      .post('/user')
      .set('Accept', 'application/json')
      .send({email:'schroder.brent@gmail.com', password: 'supdogmex'})
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
