'use strict';

import React from 'react';
import Fragment from '../fragments/fragment';

export default class DonationsList extends React.Component {
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
DonationsList.defaultProps = { donations: [] };
