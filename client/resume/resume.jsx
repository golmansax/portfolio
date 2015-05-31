'use strict';

import React from 'react';
import ResumeEntry from './entry';

var CATEGORIES = ['work', 'education', 'other'];
var TITLES = {
  work: 'Work Experience',
  education: 'Education',
  other: 'Other'
};

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this._renderEntry = this._renderEntry.bind(this);
    this._renderCategory = this._renderCategory.bind(this);
  }

  _renderEntry(entry, index) {
    return <ResumeEntry {...entry} key={index} />;
  }

  _renderCategory(category, index) {
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
  }

  render() {
    var categories = CATEGORIES.map(this._renderCategory);

    return (<div className='resume'>{categories}</div>);
  }
}
Resume.defaultProps = { work: [], education: [], other: [] };
