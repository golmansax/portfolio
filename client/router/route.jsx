'use strict';

import React from 'react';
import * as Router from 'react-router';
import contentRoutes from '../routes';
import LayoutHandler from '../layout/handler';
import getDataFromI18n from '../data/from_i18n';
import { loadData } from '../data/store';
import getImagesData from '../images/data';
import { loadImages } from '../images/store';
import i18n from 'i18next';

export default function RouterRoute(req, res) {
  var html;
  var routes = (
    <Router.Route handler={LayoutHandler}>
      {contentRoutes}
    </Router.Route>
  );

  loadData(getDataFromI18n());
  loadImages(getImagesData());

  Router.run(routes, req.path, (Handler, state) => {
    html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Handler/>);
    res.send(html);
  });
}
