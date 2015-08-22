import React from 'react';
import ContentFooterInfoTags from './info_tags';
import ContentMainLinks from '../main_links';
import Container from '../../shared/container';

export default class ContentFooter extends React.Component {
  render() {
    return (
      <div className='content-footer'>
        <Container>
          <div className='content-footer__section'>
            <h2>Holman Gao</h2>
            <ContentMainLinks className='content-footer__main-links' />
          </div>
          <div className='content-footer__section'>
            <ContentFooterInfoTags />
          </div>
        </Container>
      </div>
    );
  }
}
