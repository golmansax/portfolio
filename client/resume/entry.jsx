'use strict';

import React from 'react';
import ResumeNotes from './notes';
import FragmentsBlock from '../fragments/block';
import Image from '../images/image';

export default class ResumeEntry extends React.Component {
  constructor(props) {
    super(props);
    this._renderNotes = this._renderNotes.bind(this);
    this._renderContent = this._renderContent.bind(this);
  }

  _renderNotes() {
    if (!this.props.notes) {
      return false;
    }

    return <ResumeNotes {...this.props} />;
  }

  _renderContent() {
    if (!this.props.image) {
      return this._renderNotes();
    }

    return (
      <div className='resume-entry-image-container clearfix'>
        <div className='resume-entry-image'>
          <Image {...this.props.image} />
        </div>
        <div className='resume-entry-other'>
          {this._renderNotes()}
        </div>
      </div>
    );
  }

  render() {
    return (
      <div className='resume-entry'>
        <h3><FragmentsBlock data={this.props.title} /></h3>
        {this._renderContent()}
      </div>
    );
  }
}

ResumeEntry.defaultProps = {
  title: [],
  notes: [],
  numInitialNotesToShow: false,
};
