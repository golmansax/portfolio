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
        <div className='content-footer__large-section'>
          <h2>
            Holman Gao <small>© {new Date().getFullYear()}</small>
          </h2>
          <MyEmail link />
          <div>in New York, NY</div>
        </div>
        <div className='content-footer__section'>
          <div className='content-footer__section-heading'>Portfolio</div>
          <ContentMainLinks className='content-footer__main-links' />
        </div>
        <div className='content-footer__section'>
          <div className='content-footer__section-heading'>Other links</div>
          <div className='content-footer__main-links'>
            <a href='/'>Home</a>
            <a href='/blog'>Blog</a>
            <a href='/resume'>Resume</a>
            <a href='https://github.com/golmansax'>GitHub</a>
            <a href='https://twitter.com/golmansax'>Twitter</a>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

export default ContentFooter;
