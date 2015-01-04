var React = require('react');
var Entry = require('./entry');

module.exports = React.createClass({
  getInitialProps: function () {
    return { entries: [] };
  },
  render: function () {
    var entriesHtml = this.props.entries.map(function (entry, index) {
      return (
        <Entry {...entry} key={index} />
      );
    });

    return (
      <div className='resume container'>{entriesHtml}</div>
    );
  }
});
