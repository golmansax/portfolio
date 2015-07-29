'use strict';

import { cachify } from 'connect-cachify-static';

export default class ProjectsArray extends Array {
  constructor(...projects) {
    var decoratedProjects = projects.map((project) => {
      if (project.images) {
        project.images = project.images.map((image) => {
          if (Array.isArray(image)) {
            return image.map(cachify);
          } else {
            return cachify(image);
          }
        });
      }

      return project;
    });

    super(...decoratedProjects);
  }
}
