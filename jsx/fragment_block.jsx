'use strict';

var React = require('react');
var Fragments = require('./fragments.jsx');

module.exports = React.createClass({
  getInitialProps: function () {
    return { data: [] };
  },
  render: function () {
    if (this.props.data.left) {
      return (
        <div className='clearfix'>
          <div className='fragment-left'>
            <Fragments fragments={this.props.data.left} />
          </div>
          <div className='fragment-right'>
            <Fragments fragments={this.props.data.right} />
          </div>
        </div>
      );
    } else {
      return <Fragments fragments={this.props.data} />;
    }
  }
});
