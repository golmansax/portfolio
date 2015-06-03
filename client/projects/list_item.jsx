'use strict';

import React from 'react';
import ProjectsImages from './images';
import ProjectsContent from './content';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);

    this._hasVisuals = this._hasVisuals.bind(this);
    this._renderVisuals = this._renderVisuals.bind(this);
    this._renderProject = this._renderProject.bind(this);
    this._renderContent = this._renderContent.bind(this);
  }

  _hasVisuals() {
    return this.props.images; // || this.props.pdf;
  }

  _renderVisuals() {
    return <ProjectsImages images={this.props.images} />;
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
      <div className='projects-list-item'>
        <div className='container'>
          {this._renderProject()}
        </div>
      </div>
    );
  }
}

ProjectsListItem.propTypes = { images: React.PropTypes.array };
