import { Component, PropTypes } from 'react';
import Helmet from 'react-helmet';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getAllProjects } from '../data/store';
import { getPositionText } from '../positions/utils';

const PARENT_BREADCRUMBS = {
  workProject: {
    routeName: '/work',
    text: 'Work',
  },
  sideProject: {
    routeName: '/side-projects',
    text: 'Side Projects',
  },
  communityProject: {
    routeName: '/in-community',
    text: 'Efforts in Community',
  },
};

const getFragmentText = (fragment) => fragment.text ? fragment.text : fragment;

function getProjectDescriptionText(description) {
  return Array.isArray(description) ?
      description.reduce((prev, curr) => prev + getFragmentText(curr), '') :
      description;
}

function getMetaDescription({
  createdFor, name, positions, description, stack,
}) {
  const points = [];

  if (positions) {
    points.push(`${getPositionText(positions[0] || positions)}.`);
  }

  if (createdFor) {
    points.push(`For ${createdFor}.`);
  }

  points.push(`${name} — ${getProjectDescriptionText(description)}`);

  if (stack) {
    points.push(`Uses ${stack}.`);
  }

  return points.join(' ');
}

function getMetaData(project) {
  return {
    title: project.name,
    meta: [{
      name: 'description',
      content: getMetaDescription(project),
    }],
  };
}

class ProjectHandler extends Component {
  render() {
    const myProject = getAllProjects().find((project) => {
      return project.slug === this.props.params.projectId;
    });

    // TODO catch projects that don't match

    return (
      <div>
        <Helmet {...(getMetaData(myProject))} />
        <BreadcrumbsList
          breadcrumbs={[
            PARENT_BREADCRUMBS[myProject.type],
            myProject.shortName || myProject.name,
          ]}
        />
        <ProjectsList projects={[myProject]} />
      </div>
    );
  }
}

ProjectHandler.propTypes = {
  params: PropTypes.object.isRequired,
  routes: PropTypes.array.isRequired,
};

export default ProjectHandler;
