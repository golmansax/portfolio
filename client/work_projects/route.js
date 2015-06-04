'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsList from '../projects/list';
import * as WorkProjectsStore from './store';

var ProjectsListFactory = React.createFactory(ProjectsList);

export default function WorkProjectsRoute(req, res) {
  var attrs = { projects: WorkProjectsStore.getAll() };

  res.render('work_projects/page', {
    metaData: i18n.t('metaData.workProjects'),
    workProjects: React.renderToString(ProjectsListFactory(attrs))
  });
}
