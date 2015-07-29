'use strict';

import React from 'react';
import Fragment from './fragment';

export default class Fragments extends React.Component {
  render() {
    var fragments = this.props.fragments.map((fragment, index) => {
      if (typeof fragment === 'string') {
        fragment = { text: fragment };
      }

      return (
        <Fragment {...fragment} key={index} />
      );
    });

    return (
      <span>{fragments}</span>
    );
  }
}
Fragments.defaultProps = { fragments: [] };
