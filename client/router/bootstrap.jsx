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
Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler />, global.document.getElementById('content'));
});
