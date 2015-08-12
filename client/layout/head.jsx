import React from 'react';
import DocumentTitle from 'react-document-title';
import i18n from 'i18next';
import { cachify } from 'connect-cachify-static';
import reactMixin from 'react-mixin';
import { State } from 'react-router';

export default class LayoutHead extends React.Component {
  render() {
    const currentRoutes = this.getRoutes();
    const routeName = currentRoutes[currentRoutes.length - 1].name;
    const metaData = i18n.t(`metaData.${routeName}`);

    // jscs:disable maximumLineLength
    return (
      <head>
        <title>{DocumentTitle.rewind()}</title>
        <link
          type='text/css'
          rel='stylesheet'
          href='http://fonts.googleapis.com/css?family=PT+Sans:400,700,400italic'
        />
        <link
          href='//maxcdn.bootstrapcdn.com/font-awesome/4.3.0/css/font-awesome.min.css'
          rel='stylesheet'
        />
        <link href={cachify('/assets/main.css')} rel='stylesheet' />
        <link
          href='http://www.gravatar.com/avatar/f14bfcfb11c5a367dc8c88bc3dd43189?s=16'
          rel='icon'
        />
        <meta name='viewport' content='width=device-width, user-scalable=no' />
        <meta name='apple-mobile-web-app-status-bar-style' content='black-translucent' />
        {this._renderMetaDescription(metaData.description)}
      </head>
    );

    // jscs:enable maximumLineLength
  }

  _renderMetaDescription(description) {
    if (!description) {
      return null;
    }

    return <meta name='description' content={description} />;
  }

  _getTitle(title) {
    return title === 'Holman Gao' ? title : title + ' — Holman Gao ';
  }

}
reactMixin.onClass(LayoutHead, State);
