import React from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';
import ContentNavbar from './navbar';
import ContentFooter from './footer';
import ContentSidebarContainer from './sidebar_container';

export default class ContentHandler extends React.Component {
  render() {
    return (
      <DocumentTitle title='Holman Gao'>
        <ContentSidebarContainer>
          <ContentNavbar />
          <RouteHandler />
          <ContentFooter />
        </ContentSidebarContainer>
      </DocumentTitle>
    );
  }
}
