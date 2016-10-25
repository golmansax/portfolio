import { PropTypes } from 'react';
import Fragments from '../fragments/fragments';
import { getPerson } from '../data/store';

const getGithubFragments = ({ github }) => {
  if (!github) { return null; }
  return [' ', { github }];
};

const getPositionFragments = (position) => {
  if (!position) { return null; }
  return [`, ${position}`];
};

const getFragments = ({ person, position }) => {
  const nameFragments = [{
    text: person.name,
    url: person.url,
  }];
  const githubFragments = getGithubFragments(person);
  const positionFragments = getPositionFragments(position);

  return nameFragments
    .concat(githubFragments)
    .concat(positionFragments)
    .filter((fragment) => !!fragment);
};

const Colleague = ({ personId, position }) => {
  const person = getPerson(personId);
  const fragments = getFragments({ person, position });

  return <Fragments fragments={fragments} />;
};

Colleague.propTypes = {
  personId: PropTypes.string.isRequired,
  position: PropTypes.string,
};

export default Colleague;
