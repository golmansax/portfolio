'use strict';

var React = require('react');
var Fragment = require('./fragment');

class Donations extends React.Component {
  constructor(props) {
    super(props);
    this._renderDonation = this._renderDonation.bind(this);
  }

  _renderDonation(donation) {
    return (
      <div key={donation.year}>
        {donation.year} –&nbsp;
        <Fragment {...donation.organization} />
      </div>
    );
  }

  render() {
    var donations = this.props.donations.map(this._renderDonation);

    return <div className='container'>{donations}</div>;
  }
}
Donations.defaultProps = { donations: [] };

module.exports = Donations;
