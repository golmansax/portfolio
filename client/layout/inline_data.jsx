import React from 'react';
import getDataFromI18n from '../data/from_i18n';
import getAssetsData from '../assets/data';

const getScript = () => {
  const gon = { data: getDataFromI18n(), assets: getAssetsData() };
  return `window.gon = ${JSON.stringify(gon)}`;
};

const LayoutInlineData = () => (
  <script
    type='text/javascript'
    dangerouslySetInnerHTML={{ __html: getScript() }}
  />
);

export default LayoutInlineData;
