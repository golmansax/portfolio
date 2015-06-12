'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import PortfolioHandler from './portfolio/handler';
import WorkProjectsHandler from './work_projects/handler';
import LayoutHandler from './layout/handler';

export default (
  <Route handler={LayoutHandler}>
    <DefaultRoute name='portfolio' handler={PortfolioHandler} />
    <Route name='workProjects' path='/work' handler={WorkProjectsHandler} />
  </Route>
);
