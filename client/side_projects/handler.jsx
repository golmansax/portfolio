'use strict';

import React from 'react';
import * as SideProjectsStore from './store';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';

export default class SideProjectsHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Side Porjects']} />
        <ProjectsList projects={SideProjectsStore.getAll()} />
      </div>
    );
  }
}
