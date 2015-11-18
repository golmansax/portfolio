import { PropTypes } from 'react';
import classNames from 'classnames';

function getClass({
  type, listItem, className, size, border, inverse, stack
}) {
  return classNames({
    [`fa fa-${type}`]: true,
    'fa-li': listItem,
    [className]: !!className,
    [`fa-${size}`]: !!size,
    'fa-border': border,
    'fa-inverse': inverse,
    [`fa-stack-${stack}`]: !!stack,
  });
}

const Icon = (props) => <i className={getClass(props)} />;

Icon.propTypes = {
  border: PropTypes.bool,
  className: PropTypes.string,
  inverse: PropTypes.bool,
  listItem: PropTypes.bool,
  size: PropTypes.string,
  stack: PropTypes.string,
  type: PropTypes.string.isRequired,
};

export default Icon;
