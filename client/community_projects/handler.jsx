'use strict';

import React from 'react';
import * as CommunityProjectsStore from './store';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';

export default class CommunityProjectsHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Efforts in Community']} />
        <ProjectsList projects={CommunityProjectsStore.getAll()} />
      </div>
    );
  }
}
