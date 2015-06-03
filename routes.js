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
var ProjectsListFactory = React.createFactory(
  require('./client/projects/list')
);
var CommunityProjectsRoute = require('./routes/community_projects');
var i18n = require('i18next');
var cachify = require('connect-cachify-static').cachify;
var routes = {};

i18n.init({
  lng: 'en-US',
  ns: {
    namespaces: ['app', 'community_projects'],
    defaultNs: 'app'
  },
  returnObjectTrees: true
});

routes.resume = function (req, res) {
  var resumeAttrs = {
    work: i18n.t('work').map(function (entry) {
      if (entry.image) {
        if (!entry.image.src) {
          entry.image = { src: entry.image };
        }

        entry.image.src = cachify(entry.image.src);
      }
      return entry;
    }),
    education: i18n.t('education'),
    other: i18n.t('other')
  };

  res.render('resume/page', {
    metaData: i18n.t('metaData.resume'),
    resume: React.renderToString(ResumeFactory(resumeAttrs)),
    gon: JSON.stringify(resumeAttrs)
  });
}

routes.workProjects = function (req, res) {
  var attrs = {
    projects: i18n.t('workProjects').map(function (project) {
      if (project.images) {
        project.images = project.images.map(function (image) {
          return cachify(image);
        });
      }

      return project;
    })
  };

  res.render('work_projects/page', {
    metaData: i18n.t('metaData.workProjects'),
    workProjects: React.renderToString(ProjectsListFactory(attrs))
  });
};

routes.sideProjects = function (req, res) {
  var attrs = {
    projects: i18n.t('sideProjects').map(function (project) {
      if (project.images) {
        project.images = project.images.map(function (image) {
          return cachify(image);
        });
      }

      return project;
    })
  };

  res.render('side_projects/page', {
    metaData: i18n.t('metaData.sideProjects'),
    sideProjects: React.renderToString(ProjectsListFactory(attrs))
  });
};

routes.communityProjects = CommunityProjectsRoute;

routes.portfolio = function (req, res) {
  res.render('portfolio/page', {
    metaData: i18n.t('metaData.portfolio'),
    portfolio: React.renderToString(PortfolioFactory())
  });
};

routes.donations = function (req, res) {
  var attrs = {
    donations: i18n.t('donations')
  };

  res.render('donations/page', {
    metaData: i18n.t('metaData.donations'),
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
    metaData: i18n.t('metaData.hcd'),
    link: link
  });
};

module.exports = routes;
