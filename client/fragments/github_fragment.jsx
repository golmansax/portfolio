import React from 'react';
import Icon from '../shared/icon';

export default class GithubFragment extends React.Component {
  render() {
    return (
      <div>
        <a href={`https://github.com/${this.props.github}`}>
          <Icon type='github-square' className='github-fragment__icon' />
          {this.props.github}
        </a>
      </div>
    );
  }
}
GithubFragment.propTypes = { github: React.PropTypes.string.isRequired };
