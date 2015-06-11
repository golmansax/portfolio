'use strict';

import React from 'react';
import ProjectsGrid from '../projects/grid';
import ProjectsArray from '../projects/array';
import * as WorkProjectsStore from '../work_projects/store';
import * as SideProjectsStore from '../side_projects/store';
import * as CommunityProjectsStore from '../community_projects/store';

export default class PorfolioHandler extends React.Component {
  render() {
    var allProjects = WorkProjectsStore.getAll()
      .concat(SideProjectsStore.getAll())
      .concat(CommunityProjectsStore.getAll())
      .filter(function (project) {
        return project.images;
      });

    return <ProjectsGrid projects={ProjectsArray.from(allProjects)} />;
  }
}
