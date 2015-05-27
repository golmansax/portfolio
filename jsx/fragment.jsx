'use strict';

var React = require('react');

class Fragment extends React.Component {
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

module.exports = Fragment;
