'use strict';

const Squirrel = require('../lib/squirrel');

const app = new Squirrel();

app.use(function* (next) {
  this.body = '123';
  yield next;
});

app.routes.get('/1', function* (next) {
  yield next;
  this.body = 'test';
});

app.start(3000);