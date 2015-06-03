'use strict';

import React from 'react';

export default class Fragment extends React.Component {
  render() {
    if (this.props.url) {
      return (
        <a href={this.props.url}>{this.props.text}</a>
      );
    } else {
      return <span>{this.props.text}</span>;
    }
  }
}
Fragment.defaultProps = { url: '', text: '' };
