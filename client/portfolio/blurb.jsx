import { PropTypes } from 'react';
import { getAsset } from '../assets/store';
import Container from '../shared/container';
import Fragment from '../fragments/fragment';
import { getPortfolioPath } from '../url_utils';

const PortfolioBlurb = ({ className }) => (
  <Container className={className}>
    <h2 className='blurb__mobile-heading'>Welcome to my portfolio!</h2>
    <div className='blurb__portrait-container'>
      <div
        className='blurb__portrait'
        style={(() => {
          const portraitImage = getAsset('/static/portrait_2017-01-27.jpg');
          return {
            backgroundImage: `url('${portraitImage}')`,
          };
        })()}
      />
    </div>
    <div className='blurb__text-container'>
      <h1 className='blurb__large-heading'>Welcome to my portfolio!</h1>
      <p className='blurb__paragraph'>
        Here you will find a collection of my{' '}
        <Fragment
          routeName={getPortfolioPath('/work')}
          text='work'
        />,{' '}
        <Fragment
          routeName={getPortfolioPath('/side-projects')}
          text='side projects'
        />, and{' '}
        <Fragment
          routeName={getPortfolioPath('/technologies')}
          text='technologies'
        /> that I&rsquo;ve used.  Feel free to reach out if you want to{' '}
        <Fragment
          routeName={getPortfolioPath('/work-together')}
          text='work together'
        />!
      </p>
    </div>
  </Container>
);

PortfolioBlurb.propTypes = {
  className: PropTypes.string,
};

export default PortfolioBlurb;
