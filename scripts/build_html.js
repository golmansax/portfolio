/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import React from 'react';
import '../server/asset_utils';
import { stringBulkReplace } from '../utils';
import { routesData } from '../client/routes';
import getStaticHtml from '../client/router/get_static_html';
import { initI18n } from '../server/my_i18n';
import { getStaticHtmlPath } from '../server/static_html_utils';

// Expose React so we don't need to import it for JSX
global.React = React;

function writeHtmlForPath(myPath) {
  getStaticHtml(myPath).then(({ html }) => {
    const outputPath = getStaticHtmlPath(myPath);
    mkdirp(path.dirname(outputPath), (mkdirpError) => {
      if (mkdirpError) { throw mkdirpError; }

      fs.writeFile(outputPath, html, (error) => {
        if (error) { throw error; }
        console.log(`Successfully wrote to ${outputPath}`);
      });
    });
  });
}

initI18n().then(() => {
  routesData.forEach((route) => {
    if (route.data) {
      route.data.getter().forEach((object) => {
        const keysToReplace = route.data.replaceInPath(object);
        const modifiedPath = stringBulkReplace(route.path, keysToReplace);
        writeHtmlForPath(modifiedPath);
      });
    } else {
      writeHtmlForPath(route.path);
    }
  });
}).catch((error) => console.error(error.stack));
