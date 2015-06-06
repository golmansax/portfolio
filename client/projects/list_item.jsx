'use strict';

import React from 'react';
import ProjectsImage from './image';
import ProjectsContent from './content';
import Pdf from '../pdfs/pdf';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);

    this._hasVisuals = this._hasVisuals.bind(this);
    this._renderVisuals = this._renderVisuals.bind(this);
    this._renderProject = this._renderProject.bind(this);
    this._renderContent = this._renderContent.bind(this);
  }

  _hasVisuals() {
    return this.props.images || this.props.pdf;
  }

  _renderVisuals() {
    if (this.props.images) {
      return this.props.images.map(function (image, index) {
        return <ProjectsImage image={image} key={index} />;
      });
    }

    if (this.props.pdf) {
      return <Pdf url={this.props.pdf} />;
    }
  }

  _renderContent() {
    return <ProjectsContent {...this.props} />;
  }

  _renderProject() {
    if (!this._hasVisuals()) {
      return this._renderContent();
    }

    return [
      (
        <div className='projects-list-item__visual-container' key='image'>
          {this._renderVisuals()}
        </div>
      ),
      (
        <div className='projects-list-item__content' key='content'>
          {this._renderContent()}
        </div>
      )
    ];
  }

  render() {
    return (
      <div id={this.props.slug} className='projects-list-item'>
        <div className='container'>
          {this._renderProject()}
        </div>
      </div>
    );
  }
}

ProjectsListItem.propTypes = { images: React.PropTypes.array };
