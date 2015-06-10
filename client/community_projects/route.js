'use strict';

import React from 'react';
import i18n from 'i18next';
import * as CommunityProjectsStore from './store';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';

var ProjectsListFactory = React.createFactory(ProjectsList);
var BreadcrumbsListFactory = React.createFactory(BreadcrumbsList);

export default function CommunityProjectsRoute(req, res) {
  var attrs = { projects: CommunityProjectsStore.getAll() };

  res.render('community_projects/page', {
    metaData: i18n.t('community_projects:metaData'),
    communityProjects: React.renderToString(ProjectsListFactory(attrs)),
    breadcrumbs: React.renderToString(BreadcrumbsListFactory({
      breadcrumbs: ['Efforts in Community']
    }))
  });
}
