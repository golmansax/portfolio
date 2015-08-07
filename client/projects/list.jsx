import React from 'react';
import ProjectsListItem from './list_item';

export default class ProjectsList extends React.Component {
  constructor(props) {
    super(props);
    this._renderProject = this._renderProject.bind(this);
  }

  render() {
    return <div>{this.props.projects.map(this._renderProject)}</div>;
  }

  _renderProject(entry, index) {
    return <ProjectsListItem {...entry} key={index} />;
  }
}
ProjectsList.propTypes = { projects: React.PropTypes.array.isRequired };
