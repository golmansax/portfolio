'use strict';

import React from 'react';
import * as Router from 'react-router';
import contentRoutes from '../routes';
import LayoutHandler from '../layout/handler';

export default function RouterRoute(req, res) {
  var html;
  var routes = (
    <Router.Route handler={LayoutHandler}>
      {contentRoutes}
    </Router.Route>
  );

  Router.run(routes, req.path, function (Handler, state) {
    html = React.renderToString(<Handler/>)
  })
  res.send(html);
}
