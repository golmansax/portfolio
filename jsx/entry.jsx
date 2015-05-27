'use strict';

import React from 'react';
import FragmentBlock from './fragment_block';

export default class Entry extends React.Component {
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

  _renderNote(note, index) {
    var noteClass = 'resume-entry-note';
    if (!this.state.showingMore && index >= this.props.numInitialNotesToShow) {
      noteClass += ' hide';
    }

    return (
      <li className={noteClass} key={index}>
        <i className='fa-li fa fa-circle' />
        <FragmentBlock data={note} />
      </li>
    );
  }

  _renderShowMore() {
    var iconClass = 'fa fa-caret-' + (this.state.showingMore ? 'up' : 'down');

    return (
      <li>
        <a className='resume-entry-show-more' href='#'
            onClick={this._toggleShowMore}>
          {this.state.showingMore ? 'Less' : 'More'}&nbsp;
          <i className={iconClass}></i>
        </a>
      </li>
    );
  }

  render() {
    var notes, showMore;

    if (this.props.notes) {
      notes = this.props.notes.map(this._renderNote);

      var numInitialNotesToShow = this.props.numInitialNotesToShow;
      if (numInitialNotesToShow &&
          this.props.notes.length > numInitialNotesToShow) {
        showMore = this._renderShowMore();
      }
    }

    return (
      <div className='resume-entry'>
        <h3><FragmentBlock data={this.props.title} /></h3>
        <ul className='fa-ul'>
          {notes}
          {showMore}
        </ul>
      </div>
    );
  }
}
Entry.defaultProps = { title: [], notes: [], numInitialNotesToShow: false };
