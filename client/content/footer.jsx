'use strict';

import React from 'react';
import { RouteHandler } from 'react-router';

export default class ContentFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <a href='https://github.com/golmansax'>Github</a>
          &nbsp;|&nbsp;
          <a href='/resume'>Resume</a>
          &nbsp;| holman
          <span className='hide'>crap</span>
          @
          <span className='hide'>crap</span>
          golmansax
          <span className='hide'>crap</span>
          .com | in San Francisco, CA
        </div>
      </div>
    );
  }
}
