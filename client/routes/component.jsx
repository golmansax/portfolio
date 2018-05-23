import React from 'react';
import { IndexRoute, Route } from 'react-router';
import PortfolioHandler from '../portfolio/handler';
import WorkProjectsHandler from '../work_projects/handler';
import SideProjectsHandler from '../side_projects/handler';
import CommunityProjectsHandler from '../community_projects/handler';
import ProjectHandler from '../projects/project_handler';
import ResumeHandler from '../resume/handler';
import WorkTogetherHandler from '../work_together/handler';
import TestimonialsHandler from '../testimonials/handler';
import ContentHandler from '../content/handler';
import TechnologiesHandler from '../technologies/handler';
import NotFoundHandler from './not_found_handler';
import { getPortfolioPath } from '../url_utils';

const ROOT_PATH = (() => {
  const path = getPortfolioPath('');
  if (!path) { return '/'; }
  return path;
})();

export default (
  /* eslint-disable max-len */
  <Route path={ROOT_PATH} component={ContentHandler}>
    <IndexRoute component={PortfolioHandler} />
    <Route path='resume' component={ResumeHandler} />
    <Route path='work-together'>
      <IndexRoute component={WorkTogetherHandler} />
      <Route path='testimonials' component={TestimonialsHandler} />
    </Route>
    <Route path=':projectType/:projectId' component={ProjectHandler} />
    <Route path='work' component={WorkProjectsHandler} />
    <Route path='technologies' component={TechnologiesHandler} />
    <Route path='side-projects' component={SideProjectsHandler} />
    <Route path='in-community' component={CommunityProjectsHandler} />
    <Route path='*' component={NotFoundHandler} />
  </Route>
  /* eslint-enable max-len */
);
