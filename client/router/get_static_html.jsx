import { renderToStaticMarkup } from 'react-dom/server';
import { Route, RouterContext, match } from 'react-router';
import { routesComponent } from '../routes';
import LayoutHandler from '../layout/handler';
import getDataFromI18n from '../data/from_i18n';
import { loadData } from '../data/store';
import getAssetsData from '../assets/data';
import { loadAssets } from '../assets/store';

let dataLoaded = false;

export default function getStaticHtml(url) {
  if (!dataLoaded) {
    loadData(getDataFromI18n());
    loadAssets(getAssetsData());
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
        const html = renderToStaticMarkup(<RouterContext {...renderProps} />);
        resolve({ html: `<!DOCTYPE html>${html}` });
      }
    });
  });
}
