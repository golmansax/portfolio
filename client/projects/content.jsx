import React from 'react';
import Fragments from '../fragments/fragments';
import Fragment from '../fragments/fragment';
import GithubFragment from '../fragments/github_fragment';
import Position from '../positions/position';
import Colleague from '../colleagues/colleague';
import ResumeNotes from '../resume/notes';
import FragmentsBulletList from '../fragments/bullet_list';

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

class ProjectsContent extends React.Component {
  constructor(props) {
    super(props);

    this._renderResponsibilities = this._renderResponsibilities.bind(this);
    this._renderPress = this._renderPress.bind(this);
    this._renderCustom = this._renderCustom.bind(this);
    this._renderStack = this._renderStack.bind(this);
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
          {this._renderStack()}
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

    return <GithubFragment github={this.props.github} />;
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

  _renderStack() {
    if (!this.props.stack) {
      return null;
    }

    return [
      <dt key='dt'>Stack:</dt>,
      <dd key='dd'>
        {this.props.stack}
        {this._renderGithub()}
      </dd>,
    ];
  }

  _renderColleagues() {
    if (!this.props.colleagues) {
      return null;
    }

    return [
      <dt key='dt'>Worked with:</dt>,
      <dd key='dd'>
        <ul className='projects-content__list'>
          {this.props.colleagues.map((colleague) => {
            return (
              <li key={colleague.personId}>
                <Colleague {...colleague} />
              </li>
            );
          })}
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
  createdFor: React.PropTypes.string,
  custom: React.PropTypes.object,
  description: React.PropTypes.oneOfType([
    React.PropTypes.string,
    React.PropTypes.array,
  ]).isRequired,
  github: React.PropTypes.string,
  involvedWith: React.PropTypes.array,
  joinedWhen: React.PropTypes.string,
  name: React.PropTypes.string.isRequired,
  positions: React.PropTypes.array,
  press: React.PropTypes.array,
  stack: React.PropTypes.string,
  url: React.PropTypes.string,
};

export default ProjectsContent;
