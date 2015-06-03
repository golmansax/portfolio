'use strict';

import React from 'react';
import i18n from 'i18next';
import ProjectsGrid from '../projects/grid';
import { cachify } from 'connect-cachify-static';

var ProjectsGridFactory = React.createFactory(ProjectsGrid);

export default function PorfolioRoute(req, res) {
  var attrs = {
    projects: i18n.t('workProjects').map(function (project) {
      if (project.images) {
        project.images = project.images.map(function (image) {
          /* jshint -W067 */
          return cachify(image);
          /* jshint +W067 */
        });
      }

      return project;
    })
  };

  res.render('portfolio/page', {
    metaData: i18n.t('metaData.portfolio'),
    portfolio: React.renderToString(ProjectsGridFactory(attrs))
  });
}
