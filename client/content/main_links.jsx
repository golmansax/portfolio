import { PropTypes } from 'react';
import Fragment from '../fragments/fragment';
import { getPortfolioPath } from '../url_utils';

const LINKS = [
  { text: 'Work', routeName: getPortfolioPath('/portfolio/work') },
  {
    text: 'Side Projects',
    routeName: getPortfolioPath('/portfolio/side-projects'),
  },
  { text: 'In Community', routeName: getPortfolioPath('/in-community') },
  { text:
    'Technologies',
    routeName: getPortfolioPath('/portfolio/technologies'),
  },
];

const renderLink = (navbarLink, index) => (
  <Fragment key={index} {...navbarLink} />
);

const ContentMainLinks = ({ className }) => (
  <div className={className}>
    {LINKS.map(renderLink)}
  </div>
);

ContentMainLinks.propTypes = { className: PropTypes.string };

export default ContentMainLinks;
