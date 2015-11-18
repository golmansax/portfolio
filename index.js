/* eslint-disable no-console */

require('babel-core/register');

// Expose React so we don't need to import it for JSX
global.React = require('react');

require('./server/my_i18n').initI18n().then(() => {
  const PORT = require('./server/config').PORT;

  require('./server').default.listen(require('./server/config').PORT, () => {
    console.log(`golmansax/my-site-in-express listening on port ${PORT}`);
  });
});
