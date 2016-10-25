import { PropTypes } from 'react';
import Fragment from '../fragments/fragment';
import { getPerson } from '../data/store';

const Colleague = ({ personId }) => {
  const person = getPerson(personId);
  return <Fragment text={person.name} />;
}

Colleague.propTypes = {
  personId: PropTypes.string.isRequired,
};

export default Colleague;
