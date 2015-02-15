var React = require('react');
var FragmentBlock = require('./fragment_block.jsx');

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
        <li className={noteClass} key={index}>
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

        var showMoreAfter = this.props.showMoreAfter;
        if (showMoreAfter && this.props.notes.length > showMoreAfter) {
          showMore = this._renderShowMore();
        }
      }

      return (
        <div className='resume-entry'>
          <h3><FragmentBlock data={this.props.title} /></h3>
          <ul>
            {notes}
            {showMore}
          </ul>
        </div>
      );
    }
  });
})();
