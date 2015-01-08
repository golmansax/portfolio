var React = require('react');
var Fragments = require('./fragments.jsx');

module.exports = (function () {
  'use strict';

  var NOTE_LIMIT = 2;

  return React.createClass({
    getInitialProps: function () {
      return { title: [], notes: [], showMore: false };
    },
    getInitialState: function () {
      return { showingMore: true };
    },
    componentDidMount: function () {
      if (this.props.showMore) {
        this.setState({ showingMore: false });
      }
    },
    _toggleShowMore: function () {
      this.setState({ showingMore: !this.state.showingMore });
      // Prevent URL change
      return false;
    },
    _renderNote: function (note, index) {
      return (
        <div className='resume-entry-note' key={index}>
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
        if (this.state.showingMore) {
          notes = this.props.notes.map(this._renderNote);
        } else {
          notes = this.props.notes.slice(0, NOTE_LIMIT).map(this._renderNote);
        }

        if (this.props.showMore && this.props.notes.length > NOTE_LIMIT) {
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
