import { PropTypes } from 'react';
import Fragments from '../fragments/fragments';
import { getPerson } from '../data/store';

const getFragments = ({ person, position }) => {
  const nameFragments = [person.name];
  const githubFragments = (() => {
    if (!person.github) { return null; }
    return [' ', { github: person.github }];
  })();
  const positionFragment = (() => {
    if (!position) { return null; }
    return [`, ${position}`];
  })();

  return nameFragments
    .concat(githubFragments)
    .concat(positionFragment)
    .filter((fragment) => !!fragment);
};

const Colleague = ({ personId, position }) => {
  const person = getPerson(personId);
  const fragments = getFragments({ person, position });

  return <Fragments fragments={fragments} />;
}

Colleague.propTypes = {
  personId: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default Colleague;
