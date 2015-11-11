import React from 'react';
import ProjectsGrid from '../projects/grid';
import { getAllProjects } from '../data/store';

export default class PorfolioHandler extends React.Component {
  render() {
    const allProjects = getAllProjects().filter((project) => project.images);
    return <ProjectsGrid projects={allProjects} />;
  }
}
