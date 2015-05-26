'use strict';

var React = require('react');
var Entry = require('./entry');

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
    return <Entry {...entry} key={index} />;
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
