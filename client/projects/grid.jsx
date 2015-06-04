'use strict';

import React from 'react';
import ProjectsImages from './images';

export default class ProjectsGrid extends React.Component {
  constructor(props) {
    super(props);
    this._getProjectChunks = this._getProjectChunks.bind(this);
    this._renderProject = this._renderProject.bind(this);
    this._renderChunk = this._renderChunk.bind(this);
  }

  _getProjectChunks() {
    var projectChunks = [];
    var projects = this.props.projects;

    while(projects.length > 0) {
      projectChunks.push(projects.splice(0, 3));
    }

    return projectChunks;
  }

  _renderChunk(projectChunk, index) {
    return <div key={index}>{projectChunk.map(this._renderProject)}</div>;
  }

  _renderProject(project, index) {
    return (
      <div className='projects-grid__item' key={index}>
        <ProjectsImages images={project.images} />
        <h2>{project.name}</h2>
      </div>
    );
  }

  render() {
    return (
      <div className='container'>
        {this._getProjectChunks().map(this._renderChunk)}
      </div>
    );
  }
}

ProjectsGrid.propTypes = {
  projects: React.PropTypes.instanceOf(Array).isRequired
};
