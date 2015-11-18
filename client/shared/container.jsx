import { PropTypes } from 'react';
import classNames from 'classnames';

function getClass({ className }) {
  return classNames({
    'gsax-container': true,
    [className]: !!className,
  });
}

const Container = ({ className, children }) => (
  <div className={getClass({ className })}>{children}</div>
);

Container.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.element,
    PropTypes.array,
  ]).isRequired,

  className: PropTypes.string,
};

export default Container;
