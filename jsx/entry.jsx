'use strict';

var React = require('react');
var FragmentBlock = require('./fragment_block');

module.exports = React.createClass({
  getInitialProps: function () {
    return { title: [], notes: [], numInitialNotesToShow: false };
  },
  getInitialState: function () {
    // We start by showing all if numInitialNotesToShow is turned off, but we
    // start with a small list if numInitialNotesToShow is turned on
    return { showingMore: !this.props.numInitialNotesToShow };
  },
  _toggleShowMore: function (event) {
    event.preventDefault();
    this.setState({ showingMore: !this.state.showingMore });
  },
  _renderNote: function (note, index) {
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
  },
  _renderShowMore: function () {
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
  },
  render: function () {
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
});
