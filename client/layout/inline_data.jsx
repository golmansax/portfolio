import React from 'react';
import getDataFromI18n from '../data/from_i18n';
import getImagesData from '../images/data';

const getScript = () => {
  const gon = { data: getDataFromI18n(), images: getImagesData() };
  return `window.gon = ${JSON.stringify(gon)}`;
}

const LayoutInlineData = () => (
  <script
    type='text/javascript'
    dangerouslySetInnerHTML={{ __html: getScript() }}
  />
);

export default LayoutInlineData;
