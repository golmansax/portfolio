'use strict';

import React from 'react';
import ProjectImages from './images';
import Fragments from '../fragments/fragments';
import Position from '../positions/position';

export default class ProjectsListItem extends React.Component {
  constructor(props) {
    super(props);

    this._renderPress = this._renderPress.bind(this);
    this._renderJoinedWhen = this._renderJoinedWhen.bind(this);
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
      <div className='projects-list-item'>
        <div className='container'>
          <div className='projects-list-item__image-container'>
            <ProjectImages images={this.props.images} />
          </div>
          <div className='projects-list-item__content'>
            <h2><a href={this.props.url}>{this.props.name}</a></h2>
            <p className='projects-list-item__description'>
              {this.props.description}
            </p>
            <dl>
              <dt>Position:</dt>
              <dd>{this.props.positions.map(this._renderPosition)}</dd>
              <dt>Stack:</dt>
              <dd>{this.props.stack}</dd>
              {this._renderJoinedWhen()}
              <dt>Involved with:</dt>
              <dd>
                <ul>
                  {this.props.involvedWith.map(this._renderFragmentsItem)}
                </ul>
              </dd>
              {this._renderPress()}
            </dl>
          </div>
        </div>
      </div>
    );
  }
}

ProjectsListItem.propTypes = {
  name: React.PropTypes.string.isRequired,
  images: React.PropTypes.array.isRequired,
  url: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
  stack: React.PropTypes.string.isRequired,
  joinedWhen: React.PropTypes.string,
  involvedWith: React.PropTypes.array.isRequired,
  press: React.PropTypes.array
};
