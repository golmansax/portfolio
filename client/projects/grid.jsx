import { Component, PropTypes } from 'react';
import ProjectsImage from './image';
import Fragment from '../fragments/fragment';
import Container from '../shared/container';

const PROJECT_ROUTE_MAPPING = {
  workProject: 'work',
  sideProject: 'side-projects',
  communityProject: 'in-community',
};
const getProjectRoute = (projectType) => PROJECT_ROUTE_MAPPING[projectType];

class ProjectsGrid extends Component {
  constructor(props) {
    super(props);
    this._getProjectChunks = this._getProjectChunks.bind(this);
    this._renderProject = this._renderProject.bind(this);
    this._renderChunk = this._renderChunk.bind(this);
  }

  render() {
    return (
      <Container>
        {this._getProjectChunks().map(this._renderChunk)}
      </Container>
    );
  }

  _renderChunk(projectChunk, index) {
    return (
      <div className='projects-grid__chunk' key={index}>
        {projectChunk.map(this._renderProject)}
      </div>
    );
  }

  _renderProject(project, index) {
    const routeName = `/${getProjectRoute(project.type)}/${project.slug}`;
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
  }

  _getProjectChunks() {
    const projectChunks = [];
    const projects = this.props.projects;

    while (projects.length > 0) {
      projectChunks.push(projects.splice(0, 3));
    }

    return projectChunks;
  }
}

ProjectsGrid.propTypes = {
  projects: PropTypes.instanceOf(Array).isRequired,
};

export default ProjectsGrid;
