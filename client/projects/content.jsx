'use strict';

import React from 'react';
import Fragments from '../fragments/fragments';
import Fragment from '../fragments/fragment';
import Position from '../positions/position';

export default class ProjectsContent extends React.Component {
  constructor(props) {
    super(props);

    this._renderResponsibilities = this._renderResponsibilities.bind(this);
    this._renderPress = this._renderPress.bind(this);
    this._renderStack = this._renderStack.bind(this);
    this._renderJoinedWhen = this._renderJoinedWhen.bind(this);
    this._renderPositions = this._renderPositions.bind(this);
  }

  _renderStack() {
    if (!this.props.stack) {
      return null;
    }

    return [
      <dt key='dt'>Stack:</dt>,
      <dd key='dd'>{this.props.stack}</dd>
    ];
  }

  _renderResponsibilities() {
    if (!this.props.involvedWith) {
      return null;
    }

    return [
      <dt key='dt'>Responsibilities:</dt>,
      <dd key='dd'>
        <ul>
          {this.props.involvedWith.map(this._renderFragmentsItem)}
        </ul>
      </dd>
    ];
  }

  _renderPositions() {
    if (!this.props.positions) {
      return null;
    }

    return [
      <dt key='dt'>Position:</dt>,
      <dd key='dd'>{this.props.positions.map(this._renderPosition)}</dd>
    ];
  }

  _renderPress() {
    if (!this.props.press) {
      return null;
    }

    return [
      <dt key='dt'>Press:</dt>,
      <dd key='dd'>
        <ul>{this.props.press.map(this._renderFragmentsItem)}</ul>
      </dd>
    ];
  }

  _renderFragmentsItem(fragments, index) {
    return <li key={index}><Fragments fragments={fragments} /></li>;
  }

  _renderPosition(position) {
    return <Position {...position} key={position.title} />;
  }

  _renderJoinedWhen() {
    if (!this.props.joinedWhen) {
      return null;
    }

    return [
      <dt key='dt'>Joined when:</dt>,
      <dd key='dd'>{this.props.joinedWhen}</dd>
    ];
  }

  render() {
    return (
      <div className='projects-content'>
        <h2><Fragment url={this.props.url} text={this.props.name} /></h2>
        <p className='projects-list-item__description'>
          {this.props.description}
        </p>
        <dl>
          {this._renderPositions()}
          {this._renderStack()}
          {this._renderJoinedWhen()}
          {this._renderResponsibilities()}
          {this._renderPress()}
        </dl>
      </div>
    );
  }
}

ProjectsContent.propTypes = {
  name: React.PropTypes.string.isRequired,
  url: React.PropTypes.string,
  description: React.PropTypes.string.isRequired,
  stack: React.PropTypes.string.isRequired,
  joinedWhen: React.PropTypes.string,
  involvedWith: React.PropTypes.array,
  press: React.PropTypes.array
};
