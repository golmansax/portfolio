'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsList from '../client/projects/list';
import { cachify } from 'connect-cachify-static';

var ProjectsListFactory = React.createFactory(ProjectsList);

export default function WorkProjectsRoute(req, res) {
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
}
