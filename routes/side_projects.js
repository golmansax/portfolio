'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsList from '../client/projects/list';
import { cachify } from 'connect-cachify-static';

var ProjectsListFactory = React.createFactory(ProjectsList);

export default function SideProjectsRoute(req, res) {
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
