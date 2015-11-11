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
  border: React.PropTypes.bool,
  className: React.PropTypes.string,
  inverse: React.PropTypes.bool,
  listItem: React.PropTypes.bool,
  size: React.PropTypes.string,
  stack: React.PropTypes.string,
  type: React.PropTypes.string.isRequired,
};
