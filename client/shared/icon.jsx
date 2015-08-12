import React from 'react';
import classNames from 'classnames';

export default class Icon extends React.Component {
  render() {
    var myClass = classNames({
      [`fa fa-${this.props.type}`]: true,
      'fa-li': this.props.listItem,
      [this.props.className]: !!this.props.className,
    });
    return <i className={myClass} />;
  }
}

Icon.propTypes = {
  type: React.PropTypes.string.isRequired,
  listItem: React.PropTypes.bool,
  className: React.PropTypes.string,
};
