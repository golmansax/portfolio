import ContentFooterInfoTags from './info_tags';
import ContentMainLinks from '../main_links';
import Container from '../../shared/container';
import MyEmail from '../../my/email';

const ContentFooter = () => (
  <div>
    <div className='content-footer__top'>
      <Container>
        <h2>Interested in working together?</h2>
        I&rsquo;m available for any type of software engineering contracting
        work (can do pro-bono depending on the idea and time commitment), and
        I&rsquo;m especially interested in cool education projects.  Shoot me an
        email at <MyEmail link />!
      </Container>
    </div>
    <div className='content-footer__bottom'>
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
  </div>
);

export default ContentFooter;
