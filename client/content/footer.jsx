import React from 'react';
import Fragment from '../fragments/fragment';

export default class ContentFooter extends React.Component {
  render() {
    return (
      <div className='footer'>
        <div className='container'>
          <a href='https://github.com/golmansax'>Github</a>
          &nbsp;|&nbsp;
          <Fragment routeName='resume' text='Resume' />
          &nbsp;|
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
          .com | in San Francisco, CA
        </div>
      </div>
    );
  }
}
