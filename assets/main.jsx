var React = require('react');
var Resume = require('../components/resume.jsx');
var gon = require('./gon');

React.render(
  <Resume entries={gon.resumeEntries} />,
  window.document.getElementById('react-container')
);
