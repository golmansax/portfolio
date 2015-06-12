'use strict';

import React from 'react';
import * as Router from 'react-router';
import routes from '../routes';

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler />, global.document.getElementById('content'));
});
