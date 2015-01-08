var React = require('react');
var Entry = require('./entry.jsx');

module.exports = (function () {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { entries: [] };
    },
    render: function () {
      var entries = this.props.entries.map(function (entry, index) {
        return (
          <Entry {...entry} key={index} showMore={index > 0} />
        );
      });

      return (
        <div className='resume container'>{entries}</div>
      );
    }
  });
})();
