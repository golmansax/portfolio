'use strict';

var React = require('react');
var Fragment = require('./fragment');

class Fragments extends React.Component {
  render() {
    var fragments = this.props.fragments.map(function (fragment, index) {
      if (!fragment.text) { fragment = { text: fragment }; }

      return (
        <Fragment {...fragment} key={index} />
      );
    });

    return (
      <span>{fragments}</span>
    );
  }
}
Fragments.defaultProps = { fragments: [] };

module.exports = Fragments;
