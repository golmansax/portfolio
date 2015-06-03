'use strict';

import React from 'react';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);

    this._renderImages = this._renderImages.bind(this);
  }

  _renderImages() {
    if (this.props.images.length === 1) {
      return <img src={this.props.images[0]} />;
    }

    return this.props.images.map(function (image, index) {
      return (
        <div className='projects-images__grid' key={index}>
          <img src={image} />
        </div>
      );
    });
  }

  render() {
    return <div className='projects-images'>{this._renderImages()}</div>;
  }
}

ProjectsListItem.propTypes = { images: React.PropTypes.array.isRequired };
