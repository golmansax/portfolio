'use strict';

var React = require('react');
var Resume = require('../components/resume.jsx');
var gon = require('./gon');

window.document.addEventListener('DOMContentLoaded', function () {
  React.render(
    <Resume {...gon} />,
    window.document.getElementById('react-container')
  );
});
