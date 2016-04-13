import { Link } from 'react-router';
import React from 'react';

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

  _renderImage() {
    return <img role='presentation' src={this.props.src} />;
  }
}

Image.propTypes = {
  href: React.PropTypes.string,
  routeName: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
};
