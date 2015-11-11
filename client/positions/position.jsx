import React from 'react';

export default class Position extends React.Component {
  render() {
    return (
      <div>
        {this.props.title} ({this.props.start} – {this.props.end})
      </div>
    );
  }
}

Position.propTypes = {
  end: React.PropTypes.string.isRequired,
  start: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
};
