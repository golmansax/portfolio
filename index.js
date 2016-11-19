/* eslint-disable no-console, no-var, no-process-env */

if (process.env.NODE_ENV !== 'production') { require('dotenv').config(); }

require('babel-core/register');

// Expose React so we don't need to import it for JSX
global.React = require('react');

require('./server/my_i18n').initI18n()
  .then(() => {
    var PORT = require('./server/config').PORT;

    var server;
    if (require('./server/config').isProduction()) {
      server = require('./server/prod_server').default;
    } else {
      server = require('./server/dev_server').default;
    }

    server.listen(PORT, () => {
      console.log(`golmansax/portfolio listening on port ${PORT}`);
    });
  })
  .catch((error) => console.error(error.stack));
