import { PropTypes } from 'react';
import Fragment from './fragment';

function getFragments(fragments) {
  return fragments.map((fragment, index) => {
    let myfragment = fragment;
    if (typeof fragment === 'string') {
      myfragment = { text: fragment };
    }

    return (
      <fragment {...myfragment} key={index} />
    );
  });
}

const Fragments = ({ fragments }) => <span>{getFragments(fragments)}</span>;

Fragments.defaultProps = { fragments: [] };
Fragments.propTypes = { fragments: PropTypes.array };

export default Fragments;
