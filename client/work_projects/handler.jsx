'use strict';

import React from 'react';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getWorkProjects } from '../data/store';

export default class WorkProjectsHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Work']} />
        <ProjectsList projects={getWorkProjects()} />
      </div>
    );
  }
}
