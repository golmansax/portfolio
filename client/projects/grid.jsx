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
    this._renderProject = this._renderProject.bind(this);
  }

  render() {
    return (
      <Container className={this.props.className}>
        <h2>{this.props.title}</h2>
        <div>
          {this.props.projects.map(this._renderProject)}
        </div>
      </Container>
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
}

ProjectsGrid.propTypes = {
  className: PropTypes.string,
  projects: PropTypes.instanceOf(Array).isRequired,
  title: PropTypes.string.isRequired,
};

export default ProjectsGrid;
