import { cachify } from 'connect-cachify-static';

export default {
  from(projects) {
    return projects.map((project) => {
      if (project.images) {
        project.images = project.images.map((image) => {
          if (Array.isArray(image)) {
            return image.map(cachify);
          }

          return cachify(image);
        });
      }

      return project;
    });
  },
};
