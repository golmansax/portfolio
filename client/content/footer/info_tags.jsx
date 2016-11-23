import { Link } from 'react-router';
import StackedIcon from '../../shared/stacked_icon';

const ContentFooterInfoTags = () => (
  <div className='content-footer-info-tags'>
    <div className='content-footer-info-tags__group'>
      <div>
        <a
          href='https://github.com/golmansax'
          target='_blank'
          rel='noopener noreferrer'
          >
          <StackedIcon back='github' front='fw' />
          golmansax
        </a>
      </div>
      <div className='content-footer-info-tags__tag'>
        <Link to='/resume'>
          <StackedIcon
            back='circle'
            front='file-text'
            className='content-footer-info-tags__resume-icon'
            backClassName='content-footer-info-tags__back-icon'
          />
          Resume
        </Link>
      </div>
    </div>
    <div className='content-footer-info-tags__group'>
      <div className='content-footer-info-tags__tag'>
        <a href='https://golmansax.com/blog'>
          <StackedIcon
            back='circle'
            front='pencil'
            className='content-footer-info-tags__blog-icon'
            backClassName='content-footer-info-tags__back-icon'
          />
          Blog
        </a>
      </div>
      <div className='content-footer-info-tags__tag'>
        <StackedIcon
          back='circle'
          front='map-marker'
          backClassName='content-footer-info-tags__back-icon'
        />
        in New York, NY
      </div>
    </div>
  </div>
);

export default ContentFooterInfoTags;
