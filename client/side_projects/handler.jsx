'use strict';

import React from 'react';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getSideProjects } from '../data/store';

export default class SideProjectsHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Side Projects']} />
        <ProjectsList projects={getSideProjects()} />
      </div>
    );
  }
}
