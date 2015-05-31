'use strict';

var React = require('react');
var Resume = require('../jsx/resume.jsx');
var gon = require('./gon');

global.document.addEventListener('DOMContentLoaded', function () {
  React.render(
    <Resume {...gon} />,
    global.document.getElementById('react-container')
  );
});
