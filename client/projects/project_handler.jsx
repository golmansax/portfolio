import React from 'react';
import DocumentTitle from 'react-document-title';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getAllProjects } from '../data/store';

const PARENT_BREADCRUMBS = {
  workProject: {
    routeName: 'workProjects',
    text: 'Work',
  },
  sideProject: {
    routeName: 'sideProjects',
    text: 'Side Projects',
  },
  communityProject: {
    routeName: 'communityProjects',
    text: 'Efforts in Community',
  },
};

class ProjectHandler extends React.Component {
  render() {
    const myProject = getAllProjects().find((project) => {
      return project.slug === this.props.params.projectId;
    });

    // TODO catch projects that don't match

    const currentRoutes = this.props.routes;
    const routeName = currentRoutes[currentRoutes.length - 1].name;

    return (
      <DocumentTitle title={`${myProject.name} — Holman Gao`}>
        <div>
          <BreadcrumbsList
            breadcrumbs={[
              PARENT_BREADCRUMBS[routeName],
              myProject.shortName || myProject.name,
            ]}
          />
          <ProjectsList projects={[myProject]} />
        </div>
      </DocumentTitle>
    );
  }
}

export default ProjectHandler;
