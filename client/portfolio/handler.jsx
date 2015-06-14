'use strict';

import React from 'react';
import ProjectsGrid from '../projects/grid';
import ProjectsArray from '../projects/array';
import { getAllProjects } from '../data/store';

export default class PorfolioHandler extends React.Component {
  render() {
    var allProjects = getAllProjects().filter(project => project.images);
    return <ProjectsGrid projects={allProjects} />;
  }
}
