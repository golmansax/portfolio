import { getAsset } from '../../server/asset_utils';

export default {
  from(projects) {
    return projects.map((project) => {
      if (project.images) {
        project.images = project.images.map((image) => {
          if (Array.isArray(image)) {
            return image.map(getAsset);
          }

          return getAsset(image);
        });
      }

      if (project.gif) {
        project.gif = getAsset(project.gif);
      }

      return project;
    });
  },
};
