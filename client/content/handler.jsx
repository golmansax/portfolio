import React from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';
import ContentNavbar from './navbar';
import ContentFooter from './footer';

export default class ContentHandler extends React.Component {
  render() {
    return (
      <DocumentTitle title='Holman Gao'>
        <div>
          <ContentNavbar />
          <RouteHandler />
          <ContentFooter />
        </div>
      </DocumentTitle>
    );
  }
}
