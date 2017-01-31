/* eslint-disable no-console */

import fs from 'fs';
import path from 'path';
import mkdirp from 'mkdirp';
import React from 'react';
import '../server/asset_utils';
import { stringBulkReplace } from '../utils';
import { routesData } from '../client/routes';
import getStaticHtml from '../client/router/get_static_html';
import getRedirectHtml from '../client/router/get_redirect_html';
import { initI18n } from '../server/my_i18n';
import { getStaticHtmlPath } from '../server/static_html_utils';
import { getPortfolioPath } from '../client/url_utils';

// Expose React so we don't need to import it for JSX
global.React = React;

function writeHtmlToPath(html, myPath) {
  const outputPath = getStaticHtmlPath(myPath);
  mkdirp(path.dirname(outputPath), (mkdirpError) => {
    if (mkdirpError) { throw mkdirpError; }

    fs.writeFile(outputPath, html, (error) => {
      if (error) { throw error; }
      console.log(`Successfully wrote to ${outputPath}`);
    });
  });
}

function writeHtmlForPath(myPath, redirectFrom) {
  getStaticHtml(getPortfolioPath(myPath)).then(({ html }) => writeHtmlToPath(html, myPath));

  if (redirectFrom) {
    writeHtmlToPath(getRedirectHtml(myPath), redirectFrom);
  }
}

initI18n().then(() => {
  routesData.forEach((route) => {
    if (route.data) {
      route.data.getter().forEach((object) => {
        const keysToReplace = route.data.replaceInPath(object);

        writeHtmlForPath(
          stringBulkReplace(route.path, keysToReplace),
          route.redirectFrom ?
            stringBulkReplace(route.redirectFrom, keysToReplace) :
            null,
        );
      });
    } else {
      writeHtmlForPath(route.path, route.redirectFrom);
    }
  });
}).catch((error) => console.error(error.stack));
