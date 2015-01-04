(function (exports) {
  'use strict';

  require('node-jsx').install({ extension: '.jsx' });
  var React = require('react');
  var ResumeFactory = React.createFactory(require('./components/resume'));
  var i18n = require('i18n');

  exports.index = function (req, res) {
    var resume = React.renderToString(
      ResumeFactory({ entries: i18n.__('resume') })
    );

    res.render('index', { resume: resume });
  };

  exports.hcd = function (req, res) {
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
})(exports);
