import { render } from 'react-dom';
import { Router, browserHistory } from 'react-router';
// TODO(holman): consider putting back in useScrollToTop

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

toggleMenuShowing(false);
render(
  <Router history={browserHistory}>
    {routesComponent}
  </Router>,
  global.document.getElementById('content')
);
