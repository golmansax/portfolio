import React from 'react';
import classNames from 'classnames';

export default class Container extends React.Component {
  render() {
    const myClass = classNames({
      'gsax-container': true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <div className={myClass}>{this.props.children}</div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]).isRequired,

  className: React.PropTypes.string,
};
