import { PropTypes } from 'react';

const Pdf = ({ url }) => (
  <div className='gsax-pdf'><iframe src={url} /></div>
);

Pdf.propTypes = { url: PropTypes.string.isRequired };

export default Pdf;
