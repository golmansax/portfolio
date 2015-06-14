import React from 'react';
import { RouteHandler } from 'react-router';
import ContentNavbar from './navbar';
import ContentFooter from './footer';
import ContentSidebarContainer from './sidebar_container';

export default class ContentHandler extends React.Component {
  render() {
    return (
      <ContentSidebarContainer>
        <ContentNavbar />
        <RouteHandler />
        <ContentFooter />
      </ContentSidebarContainer>
    )
  }
}
