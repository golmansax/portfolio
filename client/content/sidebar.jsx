import React from 'react';
import ContentNavbarLinks from './navbar_links';

export default class ContentSidebar extends React.Component {
  render() {
    return (
      <div className='content-sidebar'>
        <ContentNavbarLinks />
      </div>
    );
  }
}
