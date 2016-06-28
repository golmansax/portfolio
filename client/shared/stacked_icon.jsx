import { PropTypes } from 'react';
import classNames from 'classnames';
import Icon from './icon';

function getClass({ className }) {
  return classNames({
    'fa-stack': true,
    [className]: !!className,
  });
}

const StackedIcon = ({
  className, back, front, backClassName, frontClassName,
}) => (
  <span className={getClass({ className })}>
    <Icon type={back} stack='2x' className={frontClassName} />
    <Icon type={front} stack='1x' className={backClassName} />
  </span>
);

StackedIcon.propTypes = {
  back: PropTypes.string.isRequired,
  backClassName: PropTypes.string,
  className: PropTypes.string,
  front: PropTypes.string.isRequired,
  frontClassName: PropTypes.string,
};

export default StackedIcon;
