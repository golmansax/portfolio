'use strict';

import React from 'react';
import { Link } from 'react-router';

export default class Fragment extends React.Component {
  render() {
    if (this.props.routeName) {
      return (
        <Link to={this.props.routeName} params={this.props.params}>
          {this.props.text}
        </Link>
      );
    } else if (this.props.url) {
      return <a href={this.props.url}>{this.props.text}</a>;
    } else {
      return <span>{this.props.text}</span>;
    }
  }
}
Fragment.propTypes = {
  url: React.PropTypes.string,
  text: React.PropTypes.string.isRequired,
  routeName: React.PropTypes.string,
  params: React.PropTypes.object
};
