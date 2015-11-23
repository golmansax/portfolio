import React from 'react';
import Helmet from 'react-helmet';
import i18n from '../../server/my_i18n';
import { cachify } from 'connect-cachify-static';

const LayoutHead = () => {
  const helmet = Helmet.rewind();

  return (
    /* eslint-disable max-len */
    <head>
      {helmet.title.toComponent()}
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
      {helmet.meta.toComponent()}
    </head>
    /* eslint-enable max-len */
  );
};

export default LayoutHead;
