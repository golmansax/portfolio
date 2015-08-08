import React from 'react';
import DocumentTitle from 'react-document-title';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getCommunityProjects } from '../data/store';

export default class CommunityProjectsHandler extends React.Component {
  render() {
    return (
      <DocumentTitle title='Efforts in Community — Holman Gao'>
        <div>
          <BreadcrumbsList breadcrumbs={['Efforts in Community']} />
          <ProjectsList projects={getCommunityProjects()} />
        </div>
      </DocumentTitle>
    );
  }
}
