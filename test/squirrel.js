'use strict';

const Router = require('koa-router');
const Squirrel = require('../lib/squirrel');

const app = new Squirrel();

app.use(function* () {
  this.body = 'Hello, squirrel!';
});

app.listen(3000);
