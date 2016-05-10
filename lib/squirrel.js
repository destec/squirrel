'use strict';

const Koa = require('koa');
const router = require('koa-router')();

class Squirrel extends Koa {

  constructor() {
    super();
    //this.server = Koa;
    this.app = Koa();
    this.router = router;

    return this;
  }

  loadRoutes(routes) {
    this.app
      .use(routes.routes())
      .use(routes.allowedMethods());
  }

  loadMiddlewares(middlewares) {
    middlewares.forEach(fn => {
      this.app.use(fn);
    });
  }

  start(port) {
    this.app.listen(port);
  }

}

module.exports = Squirrel;
