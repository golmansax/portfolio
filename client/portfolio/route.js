'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsGrid from '../projects/grid';
import ProjectsArray from '../projects/array';
import * as WorkProjectsStore from '../work_projects/store';

var ProjectsGridFactory = React.createFactory(ProjectsGrid);

export default function PorfolioRoute(req, res) {
  var allProjects = WorkProjectsStore.getAll().concat(i18n.t('sideProjects'));
  allProjects = allProjects.filter(function (project) {
    return project.images;
  });

  var attrs = { projects: ProjectsArray.from(allProjects) };

  res.render('portfolio/page', {
    metaData: i18n.t('metaData.portfolio'),
    portfolio: React.renderToString(ProjectsGridFactory(attrs))
  });
}
