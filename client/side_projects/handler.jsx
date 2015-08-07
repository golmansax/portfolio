import React from 'react';
import DocumentTitle from 'react-document-title';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getSideProjects } from '../data/store';

export default class SideProjectsHandler extends React.Component {
  render() {
    return (
      <DocumentTitle title='Side Projects — Holman Gao'>
        <div>
          <BreadcrumbsList breadcrumbs={['Side Projects']} />
          <ProjectsList projects={getSideProjects()} />
        </div>
      </DocumentTitle>
    );
  }
}
