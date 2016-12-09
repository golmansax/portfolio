import { PropTypes } from 'react';
import { getAsset } from '../assets/store';
import Container from '../shared/container';
import MyEmail from '../my/email';

const ACROYOGA_LINK = 'http://www.sfgate.com/music/slideshow/' +
  'Outside-Lands-2014-91325.php';

const PortfolioBlurb = ({ className }) => (
  <Container className={className}>
    <h2 className='blurb__mobile-heading'>About me</h2>
    <div className='blurb__portrait-container'>
      <div
        className='blurb__portrait'
        style={(() => {
          const portraitImage = getAsset('/static/portrait_2016-04-30.jpg');
          return {
            backgroundImage: `url('${portraitImage}')`,
          };
        })()}
      />
    </div>
    <div className='blurb__text-container'>
      <h2 className='blurb__large-heading'>About me</h2>
      <p className='blurb__paragraph'>
        Hi! My name is Holman, I am an entrepreneur and freelance developer
        with a love for education.  I speak English and Mandarin natively,
        and Spanish at an intermediate level. In my free time, I like to sing
        and play guitar, tutor math, and sometimes even{' '}
        <a
          href={ACROYOGA_LINK}
          target='_blank'
          rel='noopener noreferrer'
          >
          do acroyoga
        </a>.
      </p>
      <p className='blurb__paragraph'>
        Want to say hello? Feel free to reach out at <MyEmail link />.  I read
        every email, I promise!
      </p>
    </div>
  </Container>
);

PortfolioBlurb.propTypes = {
  className: PropTypes.string,
};

export default PortfolioBlurb;
