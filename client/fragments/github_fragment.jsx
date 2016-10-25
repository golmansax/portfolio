import { PropTypes } from 'react';
import Icon from '../shared/icon';

const GithubFragment = ({ github }) => (
  <a
    href={`https://github.com/${github}`}
    target='_blank'
    rel='noopener noreferrer'
    >
    <Icon type='github-square' className='github-fragment__icon' />
    {github}
  </a>
);

GithubFragment.propTypes = { github: PropTypes.string.isRequired };

export default GithubFragment;
