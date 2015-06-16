'use strict';

import React from 'react';
import { getImage } from '../images/store';
import ContentNavbarLinks from './navbar_links';
import { toggleSidebarDocked } from './state_store';
import { Link } from 'react-router';

export default class ContentNavbar extends React.Component {
  render() {
    return (
      <div className='navbar'>
        <div className='container'>
          <div className='navbar-left'>
            <Link to='/'>
              <img src={getImage('/static/navbar-icon.png')} />
              <h1>Holman Gao</h1>
            </Link>
          </div>
          <div className='navbar-right'><ContentNavbarLinks /></div>
          <button
            className='navbar__sidebar-trigger'
            onClick={toggleSidebarDocked}
            >
            <i className='fa fa-bars fa-3x' />
          </button>
        </div>
      </div>
    );
  }
}