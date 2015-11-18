import React from 'react';
import DocumentTitle from 'react-document-title';
import i18n from '../../server/my_i18n';
import { cachify } from 'connect-cachify-static';

const renderMetaDescription = (description) => {
  if (!description) {
    return null;
  }

  return <meta name='description' content={description} />;
}

const getMetaData = (routes) => {
  const routeName = currentRoutes[currentRoutes.length - 1].name;
  return i18n.t(`metaData.${routeName}`);
};

const getTitle = (title) => {
  return title === 'Holman Gao' ? title : `${title} — Holman Gao `;
};

// {renderMetaDescription(getMetaData(params.routes))}
const LayoutHead = ({ params }) => (
  /* eslint-disable max-len */
  <head>
    <title>{DocumentTitle.rewind()}</title>
    <link
      type='text/css'
      rel='stylesheet'
      href='https://cdnjs.cloudflare.com/ajax/libs/normalize/3.0.3/normalize.min.css'
    />
    <link
      type='text/css'
      rel='stylesheet'
      href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic'
    />
    <link
      href='https://maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
      rel='stylesheet'
    />
    <link href={cachify('/assets/main.css')} rel='stylesheet' />
    <link
      href='http://www.gravatar.com/avatar/f14bfcfb11c5a367dc8c88bc3dd43189?s=16'
      rel='icon'
    />
    <meta name='viewport' content='width=device-width, user-scalable=no' />
    <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
  </head>
  /* eslint-enable max-len */
);

export default LayoutHead;
