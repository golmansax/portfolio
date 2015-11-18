import { PropTypes } from 'react';

const Position = ({ title, start, end }) => (
  <div>{title} ({start} – {end})</div>
);

Position.propTypes = {
  end: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Position;
