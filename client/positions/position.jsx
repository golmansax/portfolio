import { PropTypes } from 'react';
import { getPositionText } from './utils';

const Position = ({ title, start, end }) => (
  <div>{getPositionText({ title, start, end })}</div>
);

Position.propTypes = {
  end: PropTypes.string.isRequired,
  start: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Position;
