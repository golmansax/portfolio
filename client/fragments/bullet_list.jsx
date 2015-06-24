'use strict';

import React from 'react';
import Fragments from '../fragments/fragments';

export default class FragmentsBulletList extends React.Component {
  constructor(props) {
    super(props);
    this._renderBullet = this._renderBullet.bind(this);
  }

  _renderFragments(fragments, index) {
    return (
      <div>
        <Fragments fragments={fragments} key={index} />
      </div>
    );
  }

  _renderBullet(bullet, index) {
    return (
      <li key={index} className='fragments-bullet-list__item'>
        {bullet.map(this._renderFragments)}
      </li>
    );
  }

  render() {
    return (
      <ul className='fragments-bullet-list'>
        {this.props.bullets.map(this._renderBullet)}
      </ul>
    );
  }
}
FragmentsBulletList.propTypes = { bullets: React.PropTypes.array.isRequired };
