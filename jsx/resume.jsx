'use strict';

var React = require('react');
var Entry = require('./entry.jsx');

var CATEGORIES = ['work', 'education', 'other'];
var TITLES = {
  work: 'Work Experience',
  education: 'Education',
  other: 'Other'
};

module.exports = React.createClass({
  getInitialProps: function () {
    return { work: [], education: [], other: [] };
  },

  _renderEntry: function (entry, index) {
    var showMoreAfter = index > 0 ? 2 : false;
    // TODO make this less specific
    if (entry.title[0] === 'Volunteer Experience:') {
      showMoreAfter = 2;
    }

    return (<Entry {...entry} key={index} showMoreAfter={showMoreAfter} />);
  },

  _renderCategory: function (category, index) {
    var entries = this.props[category].map(this._renderEntry);
    var breaks;
    if (index < CATEGORIES.length - 1) { breaks = (<div><br /><hr /></div>); }

    return (
      <div key={category}>
        <div className='resume-category container'>
          <h2>{TITLES[category]}</h2>
          {entries}
        </div>
        {breaks}
      </div>
    );
  },

  render: function () {
    var categories = CATEGORIES.map(this._renderCategory);

    return (<div className='resume'>{categories}</div>);
  }
});
