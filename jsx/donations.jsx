'use strict';

var React = require('react');
var Fragment = require('./fragment');

module.exports = React.createClass({
  getInitialProps: function () {
    return { donations: [] };
  },

  _renderDonation: function (donation) {
    return (
      <div key={donation.year}>
        {donation.year} –&nbsp;
        <Fragment {...donation.organization} />
      </div>
    );
  },

  render: function () {
    var donations = this.props.donations.map(this._renderDonation);

    return <div className='container'>{donations}</div>;
  }
});
