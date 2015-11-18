import { render } from 'react-dom';
import { Router } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory'
import useScrollToTop from 'scroll-behavior/lib/useScrollToTop'

import routes from '../routes';
import gon from '../gon';
import { loadData } from '../data/store';
import { loadImages } from '../images/store';
import { toggleMenuShowing } from '../content/state_store';

// require('babelify/polyfill');

loadData(gon.data);
loadImages(gon.images);

const history = useScrollToTop(createBrowserHistory)();

toggleMenuShowing(false);
render(
  <Router history={history}>
    {routes}
  </Router>,
  global.document.getElementById('content')
);
