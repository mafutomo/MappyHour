const assert = require('assert')
const routes = require('../server/routes/routes.js')
const request = require('supertest')
const server = require('../server.js')
//const { addDatabaseHooks } = require('./utils')

describe('GET /restaurnts', function() {
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
describe('GET /restraunts/:name', function() {
  it('respond with json', function(done) {
    request(server)
      .get('/restaurants/Bohemian Biergarten')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('GET /favorites/:id', function() {
  it('respond with json', function(done) {
    request(server)
      .get('/favorites/id=1') //must update manually
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
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('POST /users/', function() {
  it('respond with json', function(done) {
    request(server)
      .post('/users/')
      .set('Accept', 'application/json')
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('POST /favorites/', function() {
  it('respond with json', function(done) {
    request(server)
      .post('/favorites/')
      .set('Accept', 'application/json')
      .expect(201)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
describe('DELETE /favorites/:id', function() {
  it('respond with json', function(done) {
    request(server)
      .delete('/favorites/2')
      .set('Accept', 'application/json')
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
});
