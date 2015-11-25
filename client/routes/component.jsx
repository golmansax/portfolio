import React from 'react';
import { IndexRoute, Route } from 'react-router';
import PortfolioHandler from '../portfolio/handler';
import WorkProjectsHandler from '../work_projects/handler';
import SideProjectsHandler from '../side_projects/handler';
import CommunityProjectsHandler from '../community_projects/handler';
import ProjectHandler from '../projects/project_handler';
import ResumeHandler from '../resume/handler';
import ContentHandler from '../content/handler';
import NotFoundHandler from './not_found_handler';

export default (
  /* eslint-disable max-len */
  <Route path='/' component={ContentHandler}>
    <IndexRoute component={PortfolioHandler} />
    <Route path='/work' component={WorkProjectsHandler} />
    <Route path='/work/:projectId' component={ProjectHandler} />
    <Route path='/side-projects' component={SideProjectsHandler} />
    <Route path='/side-projects/:projectId' component={ProjectHandler} />
    <Route path='/in-community' component={CommunityProjectsHandler} />
    <Route path='/in-community/:projectId' component={ProjectHandler} />
    <Route path='/resume' component={ResumeHandler} />
    <Route path='*' component={NotFoundHandler} />
  </Route>
  /* eslint-enable max-len */
);
