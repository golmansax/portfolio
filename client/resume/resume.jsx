import React from 'react';
import ResumeEntry from './entry';
import Container from '../shared/container';

const CATEGORIES = ['work', 'education', 'other'];
const TITLES = {
  work: 'Work Experience',
  education: 'Education',
  other: 'Other',
};

export default class Resume extends React.Component {
  constructor(props) {
    super(props);
    this._renderEntry = this._renderEntry.bind(this);
    this._renderCategory = this._renderCategory.bind(this);
  }

  render() {
    return (
      <div className='resume'>
        {CATEGORIES.map(this._renderCategory)}
      </div>
    );
  }

  _renderEntry(entry, index) {
    return <ResumeEntry {...entry} key={index} />;
  }

  _renderCategory(category, index) {
    const entries = this.props[category].map(this._renderEntry);
    let breaks;
    if (index < CATEGORIES.length - 1) { breaks = (<div><br /><hr /></div>); }

    return (
      <div key={category}>
        <Container className='resume-category'>
          <h2>{TITLES[category]}</h2>
          {entries}
        </Container>
        {breaks}
      </div>
    );
  }
}
Resume.defaultProps = { work: [], education: [], other: [] };
