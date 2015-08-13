import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
  render() {
    const myClass = classNames({
      [`fa fa-${this.props.type}`]: true,
      'fa-li': this.props.listItem,
      [this.props.className]: !!this.props.className,
      [`fa-${this.props.size}`]: !!this.props.size,
      'fa-border': this.props.border,
      'fa-inverse': this.props.inverse,
      [`fa-stack-${this.props.stack}`]: !!this.props.stack,
    });

    return <i className={myClass} />;
  }
}

Icon.propTypes = {
  type: React.PropTypes.string.isRequired,
  listItem: React.PropTypes.bool,
  border: React.PropTypes.bool,
  inverse: React.PropTypes.bool,
  className: React.PropTypes.string,
  size: React.PropTypes.string,
  stack: React.PropTypes.string,
};
