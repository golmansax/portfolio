'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import PortfolioHandler from './portfolio/handler';
import WorkProjectsHandler from './work_projects/handler';
import SideProjectsHandler from './side_projects/handler';
import CommunityProjectsHandler from './community_projects/handler';
import ContentHandler from './content/handler';

export default (
  <Route handler={ContentHandler}>
    <DefaultRoute name='portfolio' handler={PortfolioHandler} />
    <Route name='workProjects' path='/work' handler={WorkProjectsHandler} />
    <Route name='sideProjects' path='/side-projects' handler={SideProjectsHandler} />
    <Route name='communityProjects' path='/in-community' handler={CommunityProjectsHandler} />
  </Route>
);
