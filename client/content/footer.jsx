import React from 'react';
import StackedIcon from '../shared/stacked_icon';
import { Link } from 'react-router';

export default class ContentFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <div className='footer__section'>
            <a href='https://github.com/golmansax'>
              <StackedIcon back='github' front='fw' />
              golmansax
            </a>
          </div>
          <div className='footer__section'>
            <Link to='resume'>
              <StackedIcon
                back='circle'
                front='file-text'
                className='footer__resume-icon'
              />
              Resume
            </Link>
          </div>
          <div className='footer__section'>
            <StackedIcon
              className='footer__email-icon'
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
          </div>
          <div className='footer__section'>
            <StackedIcon back='circle' front='map-marker' />
            in San Francisco, CA
          </div>
        </div>
      </div>
    );
  }
}
