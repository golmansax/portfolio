import React from 'react';
import { RouteHandler } from 'react-router';
import LayoutHead from './head';
import LayoutInlineData from './inline_data';
import { cachify } from 'connect-cachify-static';

export default class LayoutHandler extends React.Component {
  render() {
    return (
      <html>
        <LayoutHead />
        <body>
          <div
            id='content'
            className='content'
            dangerouslySetInnerHTML={{ __html: this._getContent() }}
          />
          <LayoutInlineData />
          <script
            type='text/javascript'
            src={cachify('/assets/router_bootstrap.js')}
          />
        </body>
      </html>
    );
  }

  _getContent() {
    return React.renderToString(<RouteHandler />);
  }
}
