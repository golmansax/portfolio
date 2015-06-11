'use strict';

var React = require('react');
var DonationsListFactory = React.createFactory(
  require('./client/donations/list')
);
var ResumeRoute = require('./client/resume/route');
var SideProjectsRoute = require('./client/side_projects/route');
var WorkProjectsRoute = require('./client/work_projects/route');
var CommunityProjectsRoute = require('./client/community_projects/route');
var RouterRoute = require('./client/router/route');
var i18n = require('i18next');
var cachify = require('connect-cachify-static').cachify;
var routes = {};

i18n.init({
  lng: 'en-US',
  ns: {
    namespaces: ['app', 'community_projects', 'work_projects', 'side_projects'],
    defaultNs: 'app'
  },
  returnObjectTrees: true
});

routes.resume = ResumeRoute;
routes.workProjects = WorkProjectsRoute;
routes.sideProjects = SideProjectsRoute;
routes.communityProjects = CommunityProjectsRoute;
routes.portfolio = RouterRoute;

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
