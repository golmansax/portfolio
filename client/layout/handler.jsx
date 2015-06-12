'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import LayoutHead from './head';
import { cachify } from 'connect-cachify-static';

export default class LayoutHandler extends React.Component {
  render() {
    return (
      <html>
        <LayoutHead />
        <body>
          <div id='content' className='content'>
            <RouteHandler />
          </div>
        </body>
      </html>
    );
  }
}
