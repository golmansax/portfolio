'use strict';

import React from 'react';
import * as Router from 'react-router';
import routes from '../routes';
import gon from '../gon';
import { loadData } from '../data/store';
import { loadImages } from '../images/store';

require('babelify/polyfill');

loadData(gon.data);
loadImages(gon.images);

var router = Router.create({
  routes: routes,
  location: Router.HistoryLocation,
  scrollBehavior: Router.ScrollToTopBehavior
});

router.run(function (Handler, state) {
  React.render(<Handler />, global.document.getElementById('content'));
});
