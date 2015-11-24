import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import useScrollToTop from 'scroll-behavior/lib/useScrollToTop';

import { routesComponent } from '../routes';
import gon from '../gon';
import { loadData } from '../data/store';
import { loadImages } from '../images/store';
import { toggleMenuShowing } from '../content/state_store';

// require('babelify/polyfill');

// Expose React so we don't need to import it for JSX
global.React = require('react');

loadData(gon.data);
loadImages(gon.images);

const history = useScrollToTop(createBrowserHistory)();

toggleMenuShowing(false);
render(
  <Router history={history}>
    {routesComponent}
  </Router>,
  global.document.getElementById('content')
);
