'use strict';

var React = require('react');
var ResumeFactory = React.createFactory(require('./jsx/resume'));
var DonationsFactory = React.createFactory(require('./jsx/donations'));
var i18n = require('i18n');
var cachify = require('connect-cachify-static').cachify;
var routes = {};

routes.index = function (req, res) {
  var resumeAttrs = {
    work: i18n.__('work').map(function (entry) {
      if (entry.image) {
        if (!entry.image.src) {
          entry.image = { src: entry.image };
        }

        entry.image.src = cachify(entry.image.src);
      }
      return entry;
    }),
    education: i18n.__('education'),
    other: i18n.__('other')
  };

  res.render('index', {
    metaData: i18n.__('metaData.index'),
    resume: React.renderToString(ResumeFactory(resumeAttrs)),
    gon: JSON.stringify(resumeAttrs)
  });
};

routes.donations = function (req, res) {
  var donationAttrs = {
    donations: i18n.__('donations')
  };

  res.render('donations', {
    metaData: i18n.__('metaData.donations'),
    donations: React.renderToString(DonationsFactory(donationAttrs))
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

  res.render('hcd', {
    metaData: i18n.__('metaData.hcd'),
    link: link
  });
};

module.exports = routes;
