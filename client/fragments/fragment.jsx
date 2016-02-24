import { PropTypes } from 'react';
import { Link } from 'react-router';
import GithubFragment from './github_fragment';

const Fragment = ({ routeName, text, github, url }) => {
  if (routeName) {
    return <Link to={routeName}>{text}</Link>;
  } else if (github) {
    return <GithubFragment github={github} />;
  } else if (url) {
    return (
      <a href={url} target={url.match(/https?:/) ? '_blank': null}>
        {text || url}
      </a>
    );
  }

  return <span>{text}</span>;
};

Fragment.propTypes = {
  github: PropTypes.string,
  routeName: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Fragment;
