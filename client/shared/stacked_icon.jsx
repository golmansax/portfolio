import { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './icon';

function getClass({ className }) {
  return classNames({
    'fa-stack': true,
    [className]: !!className,
  });
}

const StackedIcon = ({ className, back, front }) => (
  <span className={getClass({ className })}>
    <Icon type={back} stack='2x' />
    <Icon type={front} stack='1x' inverse />
  </span>
);

StackedIcon.propTypes = {
  back: PropTypes.string.isRequired,
  className: PropTypes.string,
  front: PropTypes.string.isRequired,
};

export default StackedIcon;
