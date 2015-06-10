'use strict';

import React from 'react';
import i18n from 'i18next';
import * as SideProjectsStore from './store';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';

var ProjectsListFactory = React.createFactory(ProjectsList);
var BreadcrumbsListFactory = React.createFactory(BreadcrumbsList);

export default function SideProjectsRoute(req, res) {
  var attrs = { projects: SideProjectsStore.getAll() };

  res.render('side_projects/page', {
    metaData: i18n.t('metaData.sideProjects'),
    sideProjects: React.renderToString(ProjectsListFactory(attrs)),
    breadcrumbs: React.renderToString(BreadcrumbsListFactory({
      breadcrumbs: ['Side Projects']
    }))
  });
}
