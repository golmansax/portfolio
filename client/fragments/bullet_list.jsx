import { PropTypes } from 'react';
import classNames from 'classnames';
import Fragments from '../fragments/fragments';

const renderFragments = (fragments, index) => (
  <div key={index}>
    <Fragments fragments={fragments} key={index} />
  </div>
);

const Bullet = ({ bullet, spacedOut }) => (
  <li
    className={classNames({
      'fragments-bullet-list__item-spaced': spacedOut,
    })}
    >
    {bullet.map(renderFragments)}
  </li>
);

Bullet.propTypes = {
  bullet: PropTypes.array.isRequired,
  spacedOut: PropTypes.bool.isRequired,
};

const FragmentsBulletList = ({ bullets, spacedOut }) => (
  <ul className='fragments-bullet-list'>
    {bullets.map((bullet, index) => (
      <Bullet
        key={index}
        bullet={bullet}
        spacedOut={spacedOut}
      />
    ))}
  </ul>
);

FragmentsBulletList.propTypes = {
  bullets: PropTypes.array.isRequired,
  spacedOut: PropTypes.bool.isRequired,
};

FragmentsBulletList.defaultProps = {
  spacedOut: true,
};

export default FragmentsBulletList;
