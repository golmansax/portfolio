'use strict';

import React from 'react';
import { DefaultRoute, Route } from 'react-router';
import PortfolioHandler from './portfolio/handler';
import LayoutHandler from './layout/handler';

export default (
  <Route handler={LayoutHandler}>
    <DefaultRoute handler={PortfolioHandler} />
  </Route>
);
