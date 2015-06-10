'use strict';

var React = require('react');
var Resume = require('./resume/resume');
var gon = require('./gon');

global.document.addEventListener('DOMContentLoaded', function () {
  var resume = global.document.getElementById('resume');
  if (resume) {
    React.render(<Resume {...gon} />, resume);
  }
});
