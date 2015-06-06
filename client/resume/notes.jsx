'use strict';

import React from 'react';
import FragmentsBlock from '../fragments/block';

export default class ResumeNotes extends React.Component {
  constructor(props) {
    super(props);
    this._toggleShowMore = this._toggleShowMore.bind(this);
    this._renderNote = this._renderNote.bind(this);
    this._renderShowMore = this._renderShowMore.bind(this);

    // We start by showing all if numInitialNotesToShow is turned off, but we
    // start with a small list if numInitialNotesToShow is turned on
    this.state = { showingMore: !this.props.numInitialNotesToShow };
  }

  _toggleShowMore(event) {
    event.preventDefault();
    this.setState({ showingMore: !this.state.showingMore });
  }

  _renderShowMore() {
    var iconClass = 'fa fa-caret-' + (this.state.showingMore ? 'up' : 'down');

    return (
      <li>
        <a href='#' onClick={this._toggleShowMore}>
          {this.state.showingMore ? 'Less' : 'More'}&nbsp;
          <i className={iconClass}></i>
        </a>
      </li>
    );
  }

  _renderNote(note, index) {
    if (!this.state.showingMore && index >= this.props.numInitialNotesToShow) {
      return null;
    }

    return (
      <li key={index}>
        <i className='fa-li fa fa-circle' />
        <FragmentsBlock data={note} />
      </li>
    );
  }

  render() {
    if (!this.props.notes) {
      return false;
    }

    var notes, showMore;
    notes = this.props.notes.map(this._renderNote);

    var numInitialNotesToShow = this.props.numInitialNotesToShow;
    if (numInitialNotesToShow &&
        this.props.notes.length > numInitialNotesToShow) {
      showMore = this._renderShowMore();
    }

    return (
      <ul className='resume-notes fa-ul'>
        {notes}
        {showMore}
      </ul>
    );
  }
}