'use strict';

import React from 'react';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getCommunityProjects } from '../data/store';

export default class CommunityProjectsHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Efforts in Community']} />
        <ProjectsList projects={getCommunityProjects()} />
      </div>
    );
  }
}
