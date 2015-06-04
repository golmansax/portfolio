'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsGrid from '../projects/grid';
import ProjectsArray from '../projects/array';

var ProjectsGridFactory = React.createFactory(ProjectsGrid);

export default function PorfolioRoute(req, res) {
  var allProjects = i18n.t('workProjects').concat(i18n.t('sideProjects'));
  allProjects = allProjects.filter(function (project) {
    return project.images;
  });

  var attrs = { projects: ProjectsArray.from(allProjects) };

  res.render('portfolio/page', {
    metaData: i18n.t('metaData.portfolio'),
    portfolio: React.renderToString(ProjectsGridFactory(attrs))
  });
}
