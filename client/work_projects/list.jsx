'use strict';

import React from 'react';
import ResumeEntry from '../resume/entry';

export default class WorkProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this._renderProject = this._renderProject.bind(this);
  }

  _renderProject(entry, index) {
    return <ResumeEntry {...entry} key={index} />;
  }

  render() {
    return (
      <div className='resume'>
        {this.props.workProjects.map(this._renderProject)}
      </div>
    );
  }
}
WorkProjectsList.propTypes = { workProjects: React.PropTypes.array.isRequired };
