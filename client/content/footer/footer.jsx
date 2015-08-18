import React from 'react';
import { Link } from 'react-router';
import ContentFooterSection from './section';
import MyEmail from '../../my/email';
import StackedIcon from '../../shared/stacked_icon';
import Container from '../../shared/container';

export default class ContentFooter extends React.Component {
  render() {
    return (
      <div className='content-footer'>
        <Container>
          <ContentFooterSection>
            <a href='https://github.com/golmansax'>
              <StackedIcon back='github' front='fw' />
              golmansax
            </a>
          </ContentFooterSection>
          <ContentFooterSection>
            <Link to='resume'>
              <StackedIcon
                back='circle'
                front='file-text'
                className='content-footer__resume-icon'
              />
              Resume
            </Link>
          </ContentFooterSection>
          <ContentFooterSection>
            <StackedIcon
              className='content-footer__email-icon'
              back='circle'
              front='envelope'
            />
            <MyEmail />
          </ContentFooterSection>
          <ContentFooterSection>
            <StackedIcon back='circle' front='map-marker' />
            in San Francisco, CA
          </ContentFooterSection>
        </Container>
      </div>
    );
  }
}
