'use strict';

import React from 'react';
import i18n from 'i18next';
import * as WorkProjectsStore from './store';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';

var ProjectsListFactory = React.createFactory(ProjectsList);
var BreadcrumbsListFactory = React.createFactory(BreadcrumbsList);

export default function WorkProjectsRoute(req, res) {
  var attrs = { projects: WorkProjectsStore.getAll() };

  res.render('work_projects/page', {
    metaData: i18n.t('metaData.workProjects'),
    workProjects: React.renderToString(ProjectsListFactory(attrs)),
    breadcrumbs: React.renderToString(BreadcrumbsListFactory({
      breadcrumbs: ['Work']
    }))
  });
}
