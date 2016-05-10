'use strict';

const Squirrel = require('../lib/squirrel');

const app = new Squirrel();

app.middlewares = [];
function* responseTime (next) {
  const start = new Date();
  yield next;
  const ms = new Date - start;
  this.set('X-Response-Time', ms);
}
app.middlewares.push(responseTime);

app.router.get('/test', function* (next) {
  yield next;
  this.body = 'test router';
});

app.loadMiddlewares(app.middlewares);
app.loadRoutes(app.router);

app.start(3000);