import { PropTypes } from 'react';
import Fragment from './fragment';

function renderFragment(fragment, index) {
  let myfragment = fragment;
  if (typeof fragment === 'string') {
    myfragment = { text: fragment };
  }

  return (
    <Fragment {...myfragment} key={index} />
  );
}

const Fragments = ({ fragments }) => (
  <span>{fragments.map(renderFragment)}</span>
);

Fragments.defaultProps = { fragments: [] };
Fragments.propTypes = { fragments: PropTypes.array };

export default Fragments;
