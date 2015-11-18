import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';
import { Router, Route, RoutingContext, match } from 'react-router';
import contentRoutes from '../routes';
import LayoutHandler from '../layout/handler';
import getDataFromI18n from '../data/from_i18n';
import { loadData } from '../data/store';
import getImagesData from '../images/data';
import { loadImages } from '../images/store';

export default function RouterRoute(req, res) {
  const routes = (
    <Router>
      <Route component={LayoutHandler}>
        {contentRoutes}
      </Route>
    </Router>
  );

  loadData(getDataFromI18n());
  loadImages(getImagesData());

  const options = { routes, location: req.url };
  match(options, (error, redirectLocation, renderProps) => {
    const html = '<!DOCTYPE html>' + renderToStaticMarkup(
      <RoutingContext {...renderProps} />
    );
    res.send(html);
  });
}
