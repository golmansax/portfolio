import React from 'react';
import DocumentTitle from 'react-document-title';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getWorkProjects } from '../data/store';

export default class WorkProjectsHandler extends React.Component {
  render() {
    return (
      <DocumentTitle title='Work — Holman Gao'>
        <div>
          <BreadcrumbsList breadcrumbs={['Work']} />
          <ProjectsList projects={getWorkProjects()} />
        </div>
      </DocumentTitle>
    );
  }
}
