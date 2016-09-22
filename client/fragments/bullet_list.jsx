import { PropTypes } from 'react';
import Fragments from '../fragments/fragments';

const renderFragments = (fragments, index) => (
  <div key={index}>
    <Fragments fragments={fragments} key={index} />
  </div>
);

const renderBullet = (bullet, index) => (
  <li key={index} className='fragments-bullet-list__item'>
    {bullet.map(renderFragments)}
  </li>
);

const FragmentsBulletList = ({ bullets }) => (
  <ul className='fragments-bullet-list'>
    {bullets.map(renderBullet)}
  </ul>
);

FragmentsBulletList.propTypes = { bullets: PropTypes.array.isRequired };

export default FragmentsBulletList;
