'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsList from '../client/projects/list';

var ProjectsListFactory = React.createFactory(ProjectsList);

export default function CommunityProjectsRoute(req, res) {
  var attrs = {
    projects: i18n.t('community_projects:communityProjects')
  };

  res.render('community_projects/page', {
    metaData: i18n.t('community_projects:metaData'),
    communityProjects: React.renderToString(ProjectsListFactory(attrs))
  });
}
