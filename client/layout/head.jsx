'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';
import { cachify } from 'connect-cachify-static';

export default class LayoutHandler extends React.Component {
  render() {
    return (
      <head>
        <title>Holman Gao</title>
        <link href={cachify('/assets/main.css')} rel='stylesheet' />
        <link
          type='text/css'
          rel='stylesheet'
          href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic'
        />
        <link
          href='//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
          rel='stylesheet'
        />
        <link
          href='http://www.gravatar.com/avatar/f14bfcfb11c5a367dc8c88bc3dd43189?s=16'
          rel='icon'
        />
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
      </head>
    );
  }
}
