'use strict';

const Koa = require('koa');

class Squirrel extends Koa {

  constructor() {
    super();
    this.server = Koa;
    this.app = Koa();
    
    return this;
  }

}

module.exports = Squirrel;
