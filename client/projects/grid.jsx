'use strict';

import React from 'react';
import ProjectsListItem from './list_item';

export default class ProjectsGrid extends React.Component {
  constructor(props) {
    super(props);
    this._renderProject = this._renderProject.bind(this);
  }

  _renderProject(entry, index) {
    return <ProjectsListItem {...entry} key={index} />;
  }

  render() {
    return (
      <div className='projects-list'>
        {this.props.projects.map(this._renderProject)}
      </div>
    );
  }
}
ProjectsGrid.propTypes = { projects: React.PropTypes.array.isRequired };
