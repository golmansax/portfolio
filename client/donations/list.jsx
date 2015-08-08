import React from 'react';
import Fragment from '../fragments/fragment';

export default class DonationsList extends React.Component {
  constructor(props) {
    super(props);
    this._renderDonation = this._renderDonation.bind(this);
  }

  render() {
    const donations = this.props.donations.map(this._renderDonation);
    return <div className='container'>{donations}</div>;
  }

  _renderDonation(donation) {
    return (
      <div key={donation.year}>
        {donation.year} –&nbsp;
        <Fragment {...donation.organization} />
      </div>
    );
  }
}

DonationsList.defaultProps = { donations: [] };
DonationsList.propTypes = { donations: React.PropTypes.array };
