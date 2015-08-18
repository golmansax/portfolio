import React from 'react';

export default class ContentFooterSection extends React.Component {
  render() {
    return (
      <div className='content-footer-section'>
        {this.props.children}
      </div>
    );
  }
}

ContentFooterSection.propTypes = {
  children: React.PropTypes.oneOfType([
    React.PropTypes.element,
    React.PropTypes.array,
  ]).isRequired,
};
