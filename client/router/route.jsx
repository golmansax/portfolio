'use strict';

import React from 'react';
import i18n from 'i18next';
import * as Router from 'react-router';
import routes from '../routes';

export default function RouterRoute(req, res) {
  var html;
  Router.run(routes, req.path, function (Handler, state) {
    html = React.renderToString(<Handler/>)
  })
  res.send(html);
}
