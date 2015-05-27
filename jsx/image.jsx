'use strict';

import React from 'react';

export default class Image extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    if (!this.props.href) {
      return <img src={this.props.src} />;
    }

    return <a href={this.props.href}><img src={this.props.src} /></a>;
  }
}
