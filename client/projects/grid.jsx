'use strict';

import React from 'react';
import ProjectsGridItem from './grid_item';

export default class ProjectsGrid extends React.Component {
  constructor(props) {
    super(props);
    this._renderProject = this._renderProject.bind(this);
  }

  _renderProject(entry, index) {
    return <ProjectsGridItem {...entry} key={index} />;
  }

  render() {
    var filteredProjects = this.props.projects.filter(function (project) {
      return project.images;
    });

    return (
      <div className='container'>
        {this.props.projects.map(this._renderProject)}
      </div>
    );
  }
}
ProjectsGrid.propTypes = { projects: React.PropTypes.array.isRequired };
