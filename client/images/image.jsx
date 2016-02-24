import React from 'react';

export default class Image extends React.Component {
  render() {
    if (!this.props.href) {
      return <img src={this.props.src} />;
    }

    return <a href={this.props.href}><img src={this.props.src} /></a>;
  }
}

Image.propTypes = {
  href: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
};
