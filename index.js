/* eslint-disable no-console, no-var */

require('babel-core/register');

// Expose React so we don't need to import it for JSX
global.React = require('react');

require('./server/my_i18n').initI18n().then(() => {
  var PORT = require('./server/config').PORT;

  var server;
  if (require('./server/config').isProduction()) {
    server = require('./server/prod_server').default;
  } else {
    server = require('./server/dev_server').default;
  }

  server.listen(PORT, () => {
    console.log(`golmansax/my-site-in-express listening on port ${PORT}`);
  });
}).catch((error) => console.error(error.stack));
