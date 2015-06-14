'use strict';

import React from 'react';
import getDataFromI18n from '../data/from_i18n';
import getImagesData from '../images/data';

export default class LayoutInlineData extends React.Component {
  _getScript() {
    var gon = { data: getDataFromI18n(), images: getImagesData() };
    return `window.gon = ${JSON.stringify(gon)}`;
  }

  render() {
    return (
      <script
        type='text/javascript'
        dangerouslySetInnerHTML={{ __html: this._getScript() }}
      />
    );
  }
}
