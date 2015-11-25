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

  const ROUTES = (
    <Route component={LayoutHandler}>
      {routesComponent}
    </Route>
  );

  return new Promise((resolve, reject) => {
    const options = { routes: ROUTES, location: url };
    match(options, (error, redirectLocation, renderProps) => {
      if (error) {
        reject(error);
      } else if (redirectLocation) {
        resolve({ redirectLocation });
      } else {
        resolve({
          html: '<!DOCTYPE html>' + renderToStaticMarkup(
            <RoutingContext {...renderProps} />
          ),
        });
      }
    });
  });
}
