var React = require('react');
var Fragment = require('./fragment.jsx');

module.exports = (function () {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { fragments: [] };
    },
    render: function () {
      var fragmentsHtml = this.props.fragments.map(function (fragment, index) {
        if (!fragment.text) { fragment = { text: fragment }; }

        return (
          <Fragment {...fragment} key={index} />
        );
      });

      return (
        <span>{fragmentsHtml}</span>
      );
    }
  });
})();
