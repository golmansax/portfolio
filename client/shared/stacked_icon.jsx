import React from 'react';
import classNames from 'classnames';
import Icon from './icon';

export default class StackedIcon extends React.Component {
  render() {
    return (
      <span className="fa-stack">
        <Icon type={this.props.back} stack='2x' />
        <Icon type={this.props.front} stack='1x' inverse />
      </span>
    );
  }
}

StackedIcon.propTypes = {
  front: React.PropTypes.string.isRequired,
  back: React.PropTypes.string.isRequired,
};
