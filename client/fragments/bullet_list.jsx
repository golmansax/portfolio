import React from 'react';
import Fragments from '../fragments/fragments';

class FragmentsBulletList extends React.Component {
  constructor(props) {
    super(props);
    this._renderBullet = this._renderBullet.bind(this);
  }

  render() {
    return (
      <ul className='fragments-bullet-list'>
        {this.props.bullets.map(this._renderBullet)}
      </ul>
    );
  }

  _renderFragments(fragments, index) {
    return (
      <div key={index}>
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
}
FragmentsBulletList.propTypes = { bullets: React.PropTypes.array.isRequired };

export default FragmentsBulletList;
