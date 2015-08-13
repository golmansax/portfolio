import React from 'react';
import classNames from 'classnames';
import Icon from './icon';

export default class StackedIcon extends React.Component {
  render() {
    const myClass = classNames({
      'fa-stack': true,
      [this.props.className]: !!this.props.className,
    });

    return (
      <span className={myClass}>
        <Icon type={this.props.back} stack='2x' />
        <Icon type={this.props.front} stack='1x' inverse />
      </span>
    );
  }
}

StackedIcon.propTypes = {
  front: React.PropTypes.string.isRequired,
  back: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};
