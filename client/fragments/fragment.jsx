import { PropTypes } from 'react';
import { Link } from 'react-router';
import GithubFragment from './github_fragment';

const Fragment = ({ routeName, params, text, github, url }) => {
  if (routeName) {
    return <Link to={routeName} params={params}>{text}</Link>;
  } else if (github) {
    return <GithubFragment github={github} />;
  } else if (url) {
    return <a href={url}>{text || url}</a>;
  }

  return <span>{text}</span>;
};

Fragment.propTypes = {
  github: PropTypes.string,
  params: PropTypes.object,
  routeName: PropTypes.string,
  text: PropTypes.string,
  url: PropTypes.string,
};

export default Fragment;
