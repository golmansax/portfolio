import React from 'react';
import Fragment from './fragment';

export default class Fragments extends React.Component {
  render() {
    const fragments = this.props.fragments.map((fragment, index) => {
      let myFragment = fragment;
      if (typeof fragment === 'string') {
        myFragment = { text: fragment };
      }

      return (
        <Fragment {...myFragment} key={index} />
      );
    });

    return (
      <span>{fragments}</span>
    );
  }
}

Fragments.defaultProps = { fragments: [] };
Fragments.propTypes = { fragments: React.PropTypes.array };
