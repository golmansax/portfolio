'use strict';

if (global.window) {
  module.exports = global.gon;
  global.gon = 'Require the gon module to use this!';
}
