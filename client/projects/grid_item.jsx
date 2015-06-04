'use strict';

import React from 'react';
import ProjectsImages from './images';

export default class ProjectsGridItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='projects-grid-item'>
        <ProjectsImages images={this.props.images} />
        <h2>{this.props.name}</h2>
      </div>
    );
  }
}
ProjectsGridItem.propTypes = { projects: React.PropTypes.array.isRequired };
