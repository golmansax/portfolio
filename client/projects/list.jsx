import { PropTypes } from 'react';
import ProjectsListItem from './list_item';

const renderProject = (entry, index) => (
  <ProjectsListItem {...entry} key={index} />
);

const ProjectsList = ({ projects }) => (
  <div>{projects.map(renderProject)}</div>
);

ProjectsList.propTypes = { projects: PropTypes.array.isRequired };

export default ProjectsList;
