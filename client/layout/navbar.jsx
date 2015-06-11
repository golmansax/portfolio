'use strict';

import React from 'react';
import { cachify } from 'connect-cachify-static';
import LayoutNavbarLinks from './navbar_links';

export default class LayoutNavbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='navbar-left'>
            <a href='/'>
              <img src={cachify('/static/navbar-icon.png')} />
              <h1>Holman Gao</h1>
            </a>
          </div>
          <div className='navbar-right'><LayoutNavbarLinks /></div>
        </div>
      </div>
    );
  }
}
