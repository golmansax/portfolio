import { Link } from 'react-router';
import MyEmail from '../../my/email';
import StackedIcon from '../../shared/stacked_icon';

const ContentFooterInfoTags = () => (
  <div className='content-footer-info-tags'>
    <div className='content-footer-info-tags__group'>
      <div>
        <a href='https://github.com/golmansax'>
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
        <StackedIcon
          className='content-footer-info-tags__email-icon'
          back='circle'
          front='envelope'
          backClassName='content-footer-info-tags__back-icon'
        />
        <MyEmail />
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
