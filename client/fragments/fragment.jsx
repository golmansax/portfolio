import { PropTypes } from 'react';
import { Link } from 'react-router';
import GithubFragment from './github_fragment';
import { getAsset } from '../assets/store';

const Fragment = ({ routeName, text, github, url, assetUrl }) => {
  if (routeName) {
    return <Link to={routeName}>{text}</Link>;
  } else if (github) {
    return <GithubFragment github={github} />;
  } else if (url) {
    const isExternalUrl = !!url.match(/https?:/);

    return (
      <a
        href={url}
        target={isExternalUrl ? '_blank' : null}
        rel={isExternalUrl ? 'noopener noreferrer' : null}
        >
        {text || url}
      </a>
    );
  } else if (assetUrl) {
    return (
      <a href={getAsset(assetUrl)}>
        {text || url}
      </a>
    );
  }

  return <span>{text}</span>;
};

Fragment.propTypes = {
  assetUrl: PropTypes.string,
  github: PropTypes.string,
  routeName: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Fragment;
