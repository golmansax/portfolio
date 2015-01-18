var React = require('react');
var Fragments = require('./fragments.jsx');

module.exports = (function () {
  'use strict';

  return React.createClass({
    getInitialProps: function () {
      return { title: [], notes: [], showMoreAfter: false };
    },
    getInitialState: function () {
      // We start by showing all if showMoreAfter is turned off, but we start
      // with a small list if showMoreAfter is turned on
      return { showingMore: !this.props.showMoreAfter };
    },
    _toggleShowMore: function (event) {
      event.preventDefault();
      this.setState({ showingMore: !this.state.showingMore });
    },
    _renderNote: function (note, index) {
      var noteClass = 'resume-entry-note';
      if (!this.state.showingMore && index >= this.props.showMoreAfter) {
        noteClass += ' hide';
      }

      return (
        <div className={noteClass} key={index}>
          <Fragments fragments={note} />
        </div>
      );
    },
    _renderShowMore: function () {
      var iconClass = 'fa fa-caret-' + (this.state.showingMore ? 'up' : 'down');

      return (
        <a className='resume-entry-show-more' href='#'
            onClick={this._toggleShowMore}>
          {this.state.showingMore ? 'Less' : 'More'}&nbsp;
          <i className={iconClass}></i>
        </a>
      );
    },
    render: function () {
      var notes, showMore;

      if (this.props.notes) {
        notes = this.props.notes.map(this._renderNote);

        var showMoreAfter = this.props.showMoreAfter;
        if (showMoreAfter && this.props.notes.length > showMoreAfter) {
          showMore = this._renderShowMore();
        }
      }

      return (
        <div className='resume-entry'>
          <h3><Fragments fragments={this.props.title} /></h3>
          {notes}
          {showMore}
        </div>
      );
    }
  });
})();
