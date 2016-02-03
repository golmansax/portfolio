import i18n from 'i18next';

export default i18n;

export const initI18n = () => new Promise((resolve) => {
  i18n.init({
    lng: 'en-US',
    ns: {
      namespaces: [
        'meta_data',
        'community_projects',
        'work_projects',
        'side_projects',
        'resume',
      ],
    },
    returnObjectTrees: true,
  }, resolve);
});
