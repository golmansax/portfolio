var React = require('react');
var Fragments = require('./fragments.jsx');

module.exports = (function () {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { data: [] };
    },
    render: function () {
      if (this.props.data.left) {
        return (
          <div className='clearfix'>
            <span className='pull-left'>
              <Fragments fragments={this.props.data.left} />
            </span>
            <span className='pull-right'>
              <Fragments fragments={this.props.data.right} />
            </span>
          </div>
        );
      } else {
        return <Fragments fragments={this.props.data} />
      }
    }
  });
})();
