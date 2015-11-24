import { renderToStaticMarkup } from 'react-dom/server';
import { Route, RoutingContext, match } from 'react-router';
import { routesComponent } from '../routes';
import LayoutHandler from '../layout/handler';
import getDataFromI18n from '../data/from_i18n';
import { loadData } from '../data/store';
import getImagesData from '../images/data';
import { loadImages } from '../images/store';

let dataLoaded = false;

export default function getStaticHtml(url) {
  if (!dataLoaded) {
    loadData(getDataFromI18n());
    loadImages(getImagesData());
    dataLoaded = true;
  }

  const routes = (
    <Route component={LayoutHandler}>
      {routesComponent}
    </Route>
  );

  let html;
  match({ routes, location: url }, (error, redirectLocation, renderProps) => {
    html = '<!DOCTYPE html>' + renderToStaticMarkup(
      <RoutingContext {...renderProps} />
    );
  });

  return html;
}
