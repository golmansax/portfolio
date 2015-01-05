require('node-jsx').install({ extension: '.jsx' });
var React = require('react');
var ResumeFactory = React.createFactory(require('./components/resume'));
var i18n = require('i18n');

module.exports = (function () {
  'use strict';

  return {
    index: function (req, res) {
      var resumeEntries = i18n.__('resume');
      var resume = React.renderToString(
        ResumeFactory({ entries: resumeEntries })
      );

      var gon = JSON.stringify({ resumeEntries: resumeEntries });
      res.render('index', { resume: resume, gon: gon });
    },

    hcd: function (req, res) {
      var link = 'https://docs.google.com/viewer?' + [
        'srcid=0BzCKqkqhnFJQRFFyTDZFQ1R6OGs',
        'pid=explorer',
        'efh=false',
        'a=v',
        'chrome=false',
        'embedded=true'
      ].join('&');

      res.render('hcd', { link: link });
    }
  };
})();
