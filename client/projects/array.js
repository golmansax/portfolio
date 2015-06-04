'use strict';

import { cachify } from 'connect-cachify-static';

export default class ProjectsArray extends Array {
  constructor(...projects) {
    var decoratedProjects = projects.map(function (project) {
      if (project.images) {
        project.images = project.images.map(function (image) {
          /* jshint -W067 */
          return cachify(image);
          /* jshint +W067 */
        });
      }

      return project;
    });

    super(...decoratedProjects);
  }
}
