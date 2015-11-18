import React from 'react';
import ProjectsGrid from '../projects/grid';
import { getAllProjects } from '../data/store';

const getProjects = () => getAllProjects().filter((project) => project.images);

const PortfolioHandler = () => (
  <ProjectsGrid projects={getProjects()} />
);

export default PortfolioHandler;
