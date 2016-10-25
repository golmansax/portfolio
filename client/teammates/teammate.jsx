import { PropTypes } from 'react';
import Fragment from '../fragments/fragment';
import { getPerson } from '../data/store';

const Teammate = ({ personId }) => {
  const person = getPerson(personId);
  return <Fragment text={person.name} />;
}

Teammate.propTypes = {
  personId: PropTypes.string.isRequired,
};

export default Teammate;
