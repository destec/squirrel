'use strict';

const Koa = require('koa');
const router = require('koa-router')();

class Squirrel extends Koa {

  constructor() {
    super();
    this.initialize();

    return this;
  }

  initialize() {
    this.routes = router;
  }

  loadRouters() {
    this.use(this.routes.routes());
    this.use(this.routes.allowedMethods());
  }

  start() {
    this.loadRouters();
    this.listen(3000);
  }

}

module.exports = Squirrel;
