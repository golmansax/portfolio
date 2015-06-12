import React from 'react';
import { RouteHandler } from 'react-router';
import ContentNavbar from './navbar';
import ContentFooter from './footer';
import ContentSidebar from './sidebar';

export default class ContentHandler extends React.Component {
  render() {
    return (
      <ContentSidebar>
        <ContentNavbar />
        <RouteHandler />
        <ContentFooter />
      </ContentSidebar>
    )
  }
}
