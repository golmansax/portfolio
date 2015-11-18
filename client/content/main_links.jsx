import { PropTypes } from 'react';
import Fragment from '../fragments/fragment';

const LINKS = [
  { text: 'Work', routeName: '/work' },
  { text: 'Side Projects', routeName: '/side-projects' },
  { routeName: '/in-community', text: 'In Community' },
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
