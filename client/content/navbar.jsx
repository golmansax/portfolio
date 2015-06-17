'use strict';

import React from 'react';
import { getImage } from '../images/store';
import ContentNavbarLinks from './navbar_links';
import { Link } from 'react-router';

export default class ContentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this._renderNavbarMenu = this._renderNavbarMenu.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);

    this.state = { isMenuShowing: false };
  }

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
            onClick={this._toggleMenu}
            >
            <i className='fa fa-bars fa-3x' />
          </button>
        </div>
        {this._renderNavbarMenu()}
      </div>
    );
  }

  _renderNavbarMenu() {
    if (!this.state.isMenuShowing) {
      return null;
    }

    return (
      <div className='navbar__menu'>
        <ContentNavbarLinks />
      </div>
    );
  }

  _toggleMenu() {
    this.setState({ isMenuShowing: !this.state.isMenuShowing });
  }
}
