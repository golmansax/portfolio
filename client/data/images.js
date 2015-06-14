'use strict';

import { cachify } from 'connect-cachify-static';

export default [
  cachify('/static/navbar-icon.png')
]
