require('babel-core/register');

// Expose React so we don't need to import it for JSX
global.React = require('react');

require('i18next').init({
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
}, () => require('./server').default.listen(require('./server/config').PORT));
