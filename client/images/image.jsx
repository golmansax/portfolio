import { Link } from 'react-router';
import React from 'react';
import { getThumURL } from 'thum.io';

export default class Image extends React.Component {
  render() {
    if (this.props.href) {
      return <a href={this.props.href}>{this._renderImage()}</a>;
    }

    if (this.props.routeName) {
      return <Link to={this.props.routeName}>{this._renderImage()}</Link>;
    }

    return this._renderImage();
  }

  _getSource() {
    if (this.props.url) {
      return getThumURL({
        url: this.props.url,
        width: 600,
        crop: 900,
      });
    }

    return this.props.src;
  }

  _renderImage() {
    return <img alt='' src={this._getSource()} />;
  }
}

Image.propTypes = {
  href: React.PropTypes.string,
  routeName: React.PropTypes.string,
  src: React.PropTypes.string,
  url: React.PropTypes.string,
};
