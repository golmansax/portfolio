'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import LayoutHead from './head';
import LayoutNavbar from './navbar';
import LayoutFooter from './footer';
import LayoutSidebar from './sidebar';

export default class LayoutHandler extends React.Component {
  render() {
    return (
      <html>
        <LayoutHead />
        <body>
          <div className='content'>
            <LayoutSidebar>
              <LayoutNavbar />
              <RouteHandler />
              <LayoutFooter />
            </LayoutSidebar>
          </div>
        </body>
      </html>
    );
  }
}
