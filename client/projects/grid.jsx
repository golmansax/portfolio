import { PropTypes } from 'react';
import ProjectsImage from './image';
import Fragment from '../fragments/fragment';
import Container from '../shared/container';
import { getProjectPath } from './utils';

const renderProject = (project, index) => {
  const routeName = getProjectPath(project);

  return (
    <div className='projects-grid__item' key={index}>
      <h2>
        <Fragment
          routeName={routeName}
          text={project.shortName || project.name}
        />
      </h2>
      <ProjectsImage image={project.images[0]} routeName={routeName} />
    </div>
  );
};

const ProjectsGrid = ({ className, title, projects }) => (
  <Container className={className}>
    <h2>{title}</h2>
    <div>
      {projects.map(renderProject)}
    </div>
  </Container>
);

ProjectsGrid.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectsGrid;
