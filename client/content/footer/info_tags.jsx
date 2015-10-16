import React from 'react';
import { Link } from 'react-router';
import MyEmail from '../../my/email';
import StackedIcon from '../../shared/stacked_icon';

export default class ContentFooterInfoTags extends React.Component {
  render() {
    return (
      <div className='content-footer-info-tags'>
        <div className='content-footer-info-tags__group'>
          <div>
            <a href='https://github.com/golmansax'>
              <StackedIcon back='github' front='fw' />
              golmansax
            </a>
          </div>
          <div className='content-footer-info-tags__tag'>
            <Link to='resume'>
              <StackedIcon
                back='circle'
                front='file-text'
                className='content-footer__resume-icon'
              />
              Resume
            </Link>
          </div>
        </div>
        <div className='content-footer-info-tags__group'>
          <div className='content-footer-info-tags__tag'>
            <StackedIcon
              className='content-footer__email-icon'
              back='circle'
              front='envelope'
            />
            <MyEmail />
          </div>
          <div className='content-footer-info-tags__tag'>
            <StackedIcon back='circle' front='map-marker' />
            in San Francisco, CA
          </div>
        </div>
      </div>
    );
  }
}
