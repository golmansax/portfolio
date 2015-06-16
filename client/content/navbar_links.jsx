'use strict';

import React from 'react';
import { Link } from 'react-router';

var NAVBAR_LINKS = [
  { text: 'Work', routeName: 'workProjects' },
  { text: 'Side Projects', routeName: 'sideProjects' },
  { routeName: 'communityProjects', text: 'In Community' }
];
var currentPath = 'garbage';

export default class ContentNavbarLinks extends React.Component {
  constructor(props) {
    super(props);
    this._renderNavbarLink = this._renderNavbarLink.bind(this);
  }

  render() {
    return <div>{NAVBAR_LINKS.map(this._renderNavbarLink)}</div>;
  }

  _renderNavbarLink(navbarLink, index) {
    return (
      <Link key={index} to={navbarLink.routeName}>
        {navbarLink.text}
      </Link>
    );
  }
}
