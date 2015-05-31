'use strict';

var React = require('react');
var PortfolioFactory = React.createFactory(
  require('./client/portfolio/portfolio')
);
var ResumeFactory = React.createFactory(
  require('./client/resume/resume')
);
var DonationsListFactory = React.createFactory(
  require('./client/donations/list')
);
var WorkProjectsListFactory = React.createFactory(
  require('./client/work_projects/list')
);
var i18n = require('i18n');
var cachify = require('connect-cachify-static').cachify;
var routes = {};

routes.resume = function (req, res) {
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

  res.render('resume/page', {
    metaData: i18n.__('metaData.resume'),
    resume: React.renderToString(ResumeFactory(resumeAttrs)),
    gon: JSON.stringify(resumeAttrs)
  });
}

routes.work = function (req, res) {
  var attrs = {
    workProjects: i18n.__('work').map(function (entry) {
      if (entry.image) {
        if (!entry.image.src) {
          entry.image = { src: entry.image };
        }

        entry.image.src = cachify(entry.image.src);
      }
      return entry;
    })
  };

  console.log(React.renderToString(WorkProjectsListFactory(attrs)));
  res.render('work_projects/page', {
    metaData: i18n.__('metaData.resume'),
    work: React.renderToString(WorkProjectsListFactory(attrs)),
    gon: JSON.stringify(attrs)
  });
};

routes.portfolio = function (req, res) {
  res.render('portfolio/page', {
    metaData: i18n.__('metaData.portfolio'),
    portfolio: React.renderToString(PortfolioFactory())
  });
};

routes.donations = function (req, res) {
  var attrs = {
    donations: i18n.__('donations')
  };

  res.render('donations/page', {
    metaData: i18n.__('metaData.donations'),
    donations: React.renderToString(DonationsListFactory(attrs))
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

  res.render('pages/hcd', {
    metaData: i18n.__('metaData.hcd'),
    link: link
  });
};

module.exports = routes;
