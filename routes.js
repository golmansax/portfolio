'use strict';

require('node-jsx').install({ extension: '.jsx' });
var React = require('react');
var ResumeFactory = React.createFactory(require('./jsx/resume'));
var i18n = require('i18n');
var routes = {};

routes.index = function (req, res) {
  var resumeAttrs = {
    work: i18n.__('work'),
    education: i18n.__('education'),
    other: i18n.__('other')
  };

  res.render('index', {
    resume: React.renderToString(ResumeFactory(resumeAttrs)),
    gon: JSON.stringify(resumeAttrs)
  });
};

routes.hcd = function (req, res) {
  var link = 'https://docs.google.com/viewer?' + [
    'srcid=0BzCKqkqhnFJQRFFyTDZFQ1R6OGs',
    'pid=explorer',
    'efh=false',
    'a=v',
    'chrome=false',
    'embedded=true'
  ].join('&');

  res.render('hcd', { link: link });
};

module.exports = routes;
