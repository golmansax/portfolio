var React = require('react');
var Fragments = require('./fragments.jsx');

module.exports = React.createClass({
  getInitialProps: function () {
    return { title: [], notes: [] };
  },
  render: function () {
    var notesHtml;
    if (this.props.notes) {
      notesHtml = this.props.notes.map(function (note, index) {
        return (
          <div className='resume-entry-note' key={index}>
            <Fragments fragments={note} />
          </div>
        );
      });
    }

    return (
      <div className='resume-entry'>
        <Fragments fragments={this.props.title} />
        {notesHtml}
      </div>
    );
  }
});
