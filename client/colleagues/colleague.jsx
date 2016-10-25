import { PropTypes } from 'react';
import Fragments from '../fragments/fragments';
import { getPerson } from '../data/store';

const Colleague = ({ personId, position }) => {
  const person = getPerson(personId);
  const fragments = (() => {
    const nameFragment = person.name;
    const positionFragment = (() => {
      if (!position) { return null; }
      return `, ${position}`;
    })();

    return [nameFragment, positionFragment].filter((fragment) => !!fragment);
  })();

  return <Fragments fragments={fragments} />;
}

Colleague.propTypes = {
  personId: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default Colleague;
