import { render } from 'react-dom';
import { Router, browserHistory, applyRouterMiddleware } from 'react-router';
import { useScroll } from 'react-router-scroll';

import { routesComponent } from '../routes';
import gon from '../gon';
import { loadData } from '../data/store';
import { loadAssets } from '../assets/store';
import { toggleMenuShowing } from '../content/state_store';

// require('babelify/polyfill');

// Expose React so we don't need to import it for JSX
global.React = require('react');

loadData(gon.data);
loadAssets(gon.assets);

toggleMenuShowing(false);


function hashLinkScroll() {
  const { hash } = global.location;

  if (hash !== '') {
    // Push onto callback queue so it runs after the DOM is updated,
    // this is required when navigating from a different page so that
    // the element is rendered on the page before trying to getElementById.
    setTimeout(() => {
      const id = hash.replace('#', '');
      const element = global.document.getElementById(id);
      if (element) element.scrollIntoView();
    }, 0);
  }
}

render(
  <Router
    history={browserHistory}
    render={applyRouterMiddleware(useScroll())}
    onUpdate={hashLinkScroll}
    >
    {routesComponent}
  </Router>,
  global.document.getElementById('content'),
);
