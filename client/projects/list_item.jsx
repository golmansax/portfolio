import React from 'react';
import ProjectsImage from './image';
import ProjectsContent from './content';
import Pdf from '../shared/pdf';
import Container from '../shared/container';

class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);

    this._hasVisuals = this._hasVisuals.bind(this);
    this._renderVisuals = this._renderVisuals.bind(this);
    this._renderProject = this._renderProject.bind(this);
    this._renderContent = this._renderContent.bind(this);
  }

  render() {
    return (
      <div id={this.props.slug} className='projects-list-item'>
        <Container>{this._renderProject()}</Container>
      </div>
    );
  }

  _renderVisuals() {
    if (this.props.pdf) {
      return <Pdf url={this.props.pdf} />;
    }

    if (this.props.gif) {
      return <ProjectsImage image={this.props.gif} url={this.props.url} />;
    }

    if (this.props.images) {
      return this.props.images.map((image, index) => (
        <ProjectsImage image={image} key={index} url={this.props.url} />
      ));
    }

    return null;
  }

  _renderContent() {
    return <ProjectsContent {...this.props} />;
  }

  _renderProject() {
    if (!this._hasVisuals()) {
      return this._renderContent();
    }

    return [
      <div className='projects-list-item__visual-container' key='image'>
        {this._renderVisuals()}
      </div>,
      <div className='projects-list-item__content' key='content'>
        {this._renderContent()}
      </div>,
    ];
  }

  _hasVisuals() {
    return this.props.images || this.props.pdf;
  }
}

ProjectsListItem.propTypes = {
  gif: React.PropTypes.string,
  images: React.PropTypes.array,
  pdf: React.PropTypes.string,
  url: React.PropTypes.string,
  slug: React.PropTypes.string,
};

export default ProjectsListItem;
