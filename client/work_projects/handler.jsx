'use strict';

import React from 'react';
import * as WorkProjectsStore from './store';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';

export default class WorkProjectsHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Work']} />
        <ProjectsList projects={WorkProjectsStore.getAll()} />
      </div>
    );
  }
}
