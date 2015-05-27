'use strict';

import React from 'react';
import Fragment from './fragment';

export default class Donations extends React.Component {
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
