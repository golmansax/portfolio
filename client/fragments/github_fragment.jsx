'use strict';

import React from 'react';

export default class GithubFragment extends React.Component {
  render() {
    return (
      <div>
        <a href={`https://github.com/${this.props.github}`}>
          <i className='github-fragment__icon fa fa-github' />
          {this.props.github}
        </a>
      </div>
    );
  }
}
GithubFragment.propTypes = { github: React.PropTypes.string.isRequired };
