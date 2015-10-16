import React from 'react';
import Icon from '../shared/icon';
import FragmentsBlock from '../fragments/block';

export default class ResumeNotes extends React.Component {
  constructor(props) {
    super(props);
    this._toggleShowMore = this._toggleShowMore.bind(this);
    this._renderNote = this._renderNote.bind(this);
    this._renderHeading = this._renderHeading.bind(this);
    this._renderShowMore = this._renderShowMore.bind(this);

    // We start by showing all if numInitialNotesToShow is turned off, but we
    // start with a small list if numInitialNotesToShow is turned on
    this.state = { showingMore: !this.props.numInitialNotesToShow };
  }

  render() {
    if (!this.props.notes) { return false; }

    const notes = this.props.notes.map(this._renderNote);
    const numInitialNotesToShow = this.props.numInitialNotesToShow;
    let showMore;

    if (numInitialNotesToShow &&
        this.props.notes.length > numInitialNotesToShow) {
      showMore = this._renderShowMore();
    }

    return (
      <div>
        {this._renderHeading()}
        <ul className='resume-notes fa-ul'>
          {notes}
          {showMore}
        </ul>
      </div>
    );
  }

  _renderHeading() {
    if (!this.props.heading) { return null; }

    return <div className='resume-notes__heading'>{this.props.heading}</div>;
  }

  _renderShowMore() {
    const iconName = `caret-${this.state.showingMore ? 'up' : 'down'}`;

    return (
      <li>
        <a href='#' onClick={this._toggleShowMore}>
          {this.state.showingMore ? 'Less' : 'More'}&nbsp;
          <Icon type={iconName} />
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
        <Icon type='circle' listItem className='resume-notes__list-item-icon' />
        <FragmentsBlock data={note} />
      </li>
    );
  }

  _toggleShowMore(event) {
    event.preventDefault();
    this.setState({ showingMore: !this.state.showingMore });
  }
}

ResumeNotes.propTypes = {
  notes: React.PropTypes.array.isRequired,
  numInitialNotesToShow: React.PropTypes.number,
  heading: React.PropTypes.string,
};
