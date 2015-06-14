'use strict';

import React from 'react';
import { getImage } from '../images/store';
import ContentNavbarLinks from './navbar_links';

export default class ContentNavbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='navbar-left'>
            <a href='/'>
              <img src={getImage('/static/navbar-icon.png')} />
              <h1>Holman Gao</h1>
            </a>
          </div>
          <div className='navbar-right'><ContentNavbarLinks /></div>
        </div>
      </div>
    );
  }
}
