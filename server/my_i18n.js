import i18n from 'i18next';
import path from 'path';

export default i18n;

export const initI18n = () => {
  return new Promise((resolve) => {
    i18n.init({
      lng: 'en-US',
      ns: {
        namespaces: [
          'app',
          'community_projects',
          'work_projects',
          'side_projects',
          'resume',
        ],
        defaultNs: 'app',
      },
      returnObjectTrees: true,
    }, resolve);
  });
};
