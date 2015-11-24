import React from 'react';
import Fragment from '../fragments/fragment';
import Container from '../shared/container';

class DonationsList extends React.Component {
  constructor(props) {
    super(props);
    this._renderDonation = this._renderDonation.bind(this);
  }

  render() {
    const donations = this.props.donations.map(this._renderDonation);
    return <Container>{donations}</Container>;
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

export default DonationsList;
