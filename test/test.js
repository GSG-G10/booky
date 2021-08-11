const supertest = require('supertest');
const router = require('../src/router');

test('Home route returns a status code of 200', (done) => {
  supertest(router)
    .get('/')
    .expect(200)
    .expect('Content-Type', /html/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});

test('recommend route returns a status code of 200', (done) => {
  supertest(router)
    .get('/recommend')
    .expect(200)
    .expect('Content-Type', /json/)
    .end((err, res) => {
      if (err) return done(err);
      expect(res.statusCode).toBe(200);
      done();
    });
});
