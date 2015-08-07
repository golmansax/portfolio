import React from 'react';
import * as Router from 'react-router';
import contentRoutes from '../routes';
import LayoutHandler from '../layout/handler';
import getDataFromI18n from '../data/from_i18n';
import { loadData } from '../data/store';
import getImagesData from '../images/data';
import { loadImages } from '../images/store';

export default function RouterRoute(req, res) {
  const routes = (
    <Router.Route handler={LayoutHandler}>
      {contentRoutes}
    </Router.Route>
  );

  loadData(getDataFromI18n());
  loadImages(getImagesData());

  Router.run(routes, req.path, (Handler) => {
    const html = '<!DOCTYPE html>' + React.renderToStaticMarkup(<Handler/>);
    res.send(html);
  });
}
