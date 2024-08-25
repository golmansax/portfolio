import ContentMainLinks from '../main_links';
import Container from '../../shared/container';
import MyEmail from '../../my/email';
import Fragment from '../../fragments/fragment';
import { getPortfolioPath } from '../../url_utils';

const ContentFooter = () => (
  <div>
    <div className='content-footer__bottom'>
      <Container>
        <div className='content-footer__large-section'>
          <h2>
            Holman Gao <small>© {new Date().getFullYear()}</small>
          </h2>
          <MyEmail link />
          <div>in NYC</div>
        </div>
        <div className='content-footer__section'>
          <div className='content-footer__section-heading'>
            <Fragment
              routeName={getPortfolioPath('/work-together')}
              text='Need Help With Early-Stage Technical Decisions?'
            />
          </div>
          <br />
          <div className='content-footer__section-heading'>Portfolio</div>
          <Fragment routeName={getPortfolioPath('/')} text='Home' />
          <ContentMainLinks className='content-footer__main-links' />
          <Fragment
            routeName={getPortfolioPath('/work-together/testimonials')}
            text='Testimonials'
          />
        </div>
        <div className='content-footer__section'>
          <div className='content-footer__section-heading'>Other links</div>
          <div className='content-footer__main-links'>
            <a href='/'>Personal Site</a>
            <a href='/about-me'>About Me</a>
            <a href='/blog'>Blog</a>
            <a href='/giving'>Giving</a>
            {/* <a href='/resume'>Resume</a> */}
            <a href='https://github.com/golmansax' target='_blank' rel='noopener noreferrer'>
              GitHub
            </a>
            <a
              href='https://www.linkedin.com/in/holman-gao/'
              target='_blank'
              rel='noopener noreferrer'
              >
              LinkedIn
            </a>
            <a href='https://twitter.com/golmansax' target='_blank' rel='noopener noreferrer'>
              Twitter
            </a>
            <a href='/contact'>Contact</a>
          </div>
        </div>
      </Container>
    </div>
  </div>
);

export default ContentFooter;
