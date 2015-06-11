'use strict';

import React from 'react';
import reactMixin from 'react-mixin';
import classNames from 'classnames';
import { State } from 'react-router';

var NAVBAR_LINKS = [
  { text: 'Work', url: '/work' },
  { text: 'Side Projects', url: '/side-projects' },
  { url: '/in-community', text: 'In Community' }
];
var currentPath = 'garbage';

export default class LayoutNavbarLinks extends React.Component {
  constructor(props) {
    super(props);
    this._renderNavbarLink = this._renderNavbarLink.bind(this);
  }

  render() {
    return <div>{NAVBAR_LINKS.map(this._renderNavbarLink)}</div>;
  }

  _renderNavbarLink(navbarLink, index) {
    var className = classNames({ active: this.isActive(navbarLink.url) });

    return (
      <a key={index} href={navbarLink.url} className={className}>
        {navbarLink.text}
      </a>
    );
  }
}
reactMixin.onClass(LayoutNavbarLinks, State);
