import React, { Component, PropTypes } from 'react';
import Fragments from '../fragments/fragments';
import Fragment from '../fragments/fragment';
import GithubFragment from '../fragments/github_fragment';
import Position from '../positions/position';
import Colleague from '../colleagues/colleague';
import ResumeNotes from '../resume/notes';
import FragmentsBulletList from '../fragments/bullet_list';
import { getTechnology } from '../data/store';

const Custom = {
  ResumeNotes,
  FragmentsBulletList,
};

const renderFragmentsItem = (fragments, index) => (
  <li key={index}><Fragments fragments={fragments} /></li>
);

const renderPosition = (position, index) => (
  <Position {...position} key={index} />
);

class ProjectsContent extends Component {
  constructor(props) {
    super(props);

    this._renderResponsibilities = this._renderResponsibilities.bind(this);
    this._renderPress = this._renderPress.bind(this);
    this._renderCustom = this._renderCustom.bind(this);
    this._renderGithub = this._renderGithub.bind(this);
    this._renderTechnologies = this._renderTechnologies.bind(this);
    this._renderColleagues = this._renderColleagues.bind(this);
    this._renderJoinedWhen = this._renderJoinedWhen.bind(this);
    this._renderPositions = this._renderPositions.bind(this);
    this._renderDescription = this._renderDescription.bind(this);
    this._renderCreatedFor = this._renderCreatedFor.bind(this);
  }

  render() {
    return (
      <div className='projects-content'>
        <h2>
          <Fragment url={this.props.url} text={this.props.name} />
        </h2>
        {this._renderDescription()}
        <dl>
          {this._renderPositions()}
          {this._renderCreatedFor()}
          {this._renderTechnologies()}
          {this._renderColleagues()}
          {this._renderJoinedWhen()}
          {this._renderResponsibilities()}
          {this._renderPress()}
        </dl>
        <div className='projects-content__custom-content'>
          {this._renderCustom()}
        </div>
      </div>
    );
  }

  _renderCreatedFor() {
    if (!this.props.createdFor) {
      return null;
    }

    return [
      <dt key='dt'>Created as part of:</dt>,
      <dd key='dd'>{this.props.createdFor}</dd>,
    ];
  }

  _renderGithub() {
    if (!this.props.github) {
      return null;
    }

    return <div><GithubFragment github={this.props.github} /></div>;
  }

  _renderCustom() {
    if (!this.props.custom) {
      return null;
    }

    return this.props.custom.map((custom, index) => {
      const CustomKlass = Custom[custom.klass];
      return <CustomKlass key={index} {...custom.attrs} />;
    });
  }

  _renderTechnologies() {
    if (!this.props.technologies) {
      return null;
    }

    return [
      <dt key='dt'>Technologies:</dt>,
      <dd key='dd'>
        {this.props.technologies.map((id) => getTechnology(id)).join(', ')}
        {this._renderGithub()}
      </dd>,
    ];
  }

  _renderColleagues() {
    if (!this.props.colleagues) {
      return null;
    }

    return [
      <dt key='dt'>{this.props.current ? 'Working' : 'Worked'} with:</dt>,
      <dd key='dd'>
        <ul className='projects-content__list'>
          {this.props.colleagues.map((colleague) => (
            <li key={colleague.personId}>
              <Colleague {...colleague} />
            </li>
          ))}
        </ul>
      </dd>,
    ];
  }

  _renderResponsibilities() {
    if (!this.props.involvedWith) {
      return null;
    }

    return [
      <dt key='dt'>Responsibilities:</dt>,
      <dd key='dd'>
        <ul className='projects-content__list'>
          {this.props.involvedWith.map(renderFragmentsItem)}
        </ul>
      </dd>,
    ];
  }

  _renderDescription() {
    if (!this.props.description) {
      return null;
    }

    let description;
    if (Array.isArray(this.props.description)) {
      description = this.props.description;
    } else {
      description = [this.props.description];
    }

    return (
      <p><Fragments fragments={description} /></p>
    );
  }

  _renderPositions() {
    if (!this.props.positions) {
      return null;
    }

    return [
      <dt key='dt'>Position:</dt>,
      <dd key='dd'>{this.props.positions.map(renderPosition)}</dd>,
    ];
  }

  _renderPress() {
    if (!this.props.press) {
      return null;
    }

    return [
      <dt key='dt'>Press:</dt>,
      <dd key='dd'>
        <ul className='projects-content__list'>
          {this.props.press.map(renderFragmentsItem)}
        </ul>
      </dd>,
    ];
  }

  _renderJoinedWhen() {
    if (!this.props.joinedWhen) {
      return null;
    }

    return [
      <dt key='dt'>Joined when:</dt>,
      <dd key='dd'>{this.props.joinedWhen}</dd>,
    ];
  }
}

ProjectsContent.propTypes = {
  colleagues: PropTypes.arrayOf(PropTypes.object),
  createdFor: PropTypes.string,
  current: PropTypes.bool.isRequired,
  custom: PropTypes.arrayOf(PropTypes.object),
  description: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
  ]),
  github: PropTypes.string,
  involvedWith: PropTypes.array,
  joinedWhen: PropTypes.string,
  name: PropTypes.string.isRequired,
  positions: PropTypes.array,
  press: PropTypes.array,
  technologies: PropTypes.arrayOf(PropTypes.string.isRequired),
  url: PropTypes.string,
};

ProjectsContent.defaultProps = {
  current: false,
};

export default ProjectsContent;
