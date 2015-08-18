import React from 'react';

export default class Pdf extends React.Component {
  render() {
    return <div className='gsax-pdf'><iframe src={this.props.url} /></div>;
  }
}
Pdf.propTypes = { url: React.PropTypes.string.isRequired };
