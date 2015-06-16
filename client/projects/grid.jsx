'use strict';

import React from 'react';
import ProjectsImage from './image';
import Fragment from '../fragments/fragment';

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

    while (projects.length > 0) {
      projectChunks.push(projects.splice(0, 3));
    }

    return projectChunks;
  }

  _renderChunk(projectChunk, index) {
    return (
      <div className='projects-grid__chunk' key={index}>
        {projectChunk.map(this._renderProject)}
      </div>
    );
  }

  _renderProject(project, index) {
    return (
      <div className='projects-grid__item' key={index}>
        <h2>
          <Fragment
            routeName={project.type}
            text={project.name}
            params={{ projectId: project.slug }}
          />
        </h2>
        <ProjectsImage image={project.images[0]} />
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
