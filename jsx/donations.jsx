'use strict';

var React = require('react');
var Entry = require('./entry.jsx');
var Fragment = require('./fragment.jsx');

var CATEGORIES = ['work', 'education', 'other'];
var TITLES = {
  work: 'Work Experience',
  education: 'Education',
  other: 'Other'
};

module.exports = React.createClass({
  getInitialProps: function () {
    return { donations: [] };
  },

  _renderDonation: function (donation) {
    return (
      <div key={donation.year}>
        {donation.year} &emdash;
        <Fragment {...donation.organization} />
      </div>
    );
  },

  render: function () {
    var donations = this.props.donations.map(this._renderDonation);

    return <div className='container'>{donations}</div>;
  }
});
