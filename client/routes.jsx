import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import PortfolioHandler from './portfolio/handler';
import WorkProjectsHandler from './work_projects/handler';
import SideProjectsHandler from './side_projects/handler';
import CommunityProjectsHandler from './community_projects/handler';
import ProjectHandler from './projects/project_handler';
import ResumeHandler from './resume/handler';
import ContentHandler from './content/handler';

// jscs:disable maximumLineLength
export default (
  <Route handler={ContentHandler}>
    <DefaultRoute name='portfolio' handler={PortfolioHandler} />
    <Route name='workProjects' path='/work' handler={WorkProjectsHandler} />
    <Route name='workProject' path='/work/:projectId' handler={ProjectHandler} />
    <Route name='sideProjects' path='/side-projects' handler={SideProjectsHandler} />
    <Route name='sideProject' path='/side-projects/:projectId' handler={ProjectHandler} />
    <Route name='communityProjects' path='/in-community' handler={CommunityProjectsHandler} />
    <Route name='communityProject' path='/in-community/:projectId' handler={ProjectHandler} />
    <Route name='resume' handler={ResumeHandler} />
  </Route>
);

// jscs:enable maximumLineLength
