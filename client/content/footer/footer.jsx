import React from 'react';
import StackedIcon from '../../shared/stacked_icon';
import { Link } from 'react-router';
import ContentFooterSection from './section';

export default class ContentFooter extends React.Component {
  render() {
    return (
      <div className='content-footer'>
        <div className='container'>
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
            holm
            <span className='hide'>crap</span>
            an
            <span className='hide'>crap</span>
            @
            <span className='hide'>crap</span>
            gol
            <span className='hide'>crap</span>
            mans
            <span className='hide'>crap</span>
            ax
            <span className='hide'>crap</span>
            .com
          </ContentFooterSection>
          <ContentFooterSection>
            <StackedIcon back='circle' front='map-marker' />
            in San Francisco, CA
          </ContentFooterSection>
        </div>
      </div>
    );
  }
}
