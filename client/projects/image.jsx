'use strict';

import React from 'react';

export default class ProjectsImage extends React.Component {
  constructor(props) {
    super(props);

    this._renderImage = this._renderImage.bind(this);
  }

  _renderImage() {
    if (Array.isArray(this.props.image)) {
      return this.props.image.map((image, index) =>
        <div className='projects-image__grid' key={index}>
          <img src={image} />
        </div>
      );
    }

    return <img src={this.props.image} />;
  }

  render() {
    return <div className='projects-image'>{this._renderImage()}</div>;
  }
}

ProjectsImage.propTypes = {
  image: React.PropTypes.oneOfType([
    React.PropTypes.arrayOf(React.PropTypes.string),
    React.PropTypes.string
  ]).isRequired
};
