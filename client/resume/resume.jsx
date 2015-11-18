import React from 'react';
import ResumeEntry from './entry';
import Container from '../shared/container';

const CATEGORIES = ['work', 'education', 'other'];
const TITLES = {
  work: 'Work Experience',
  education: 'Education',
  other: 'Other',
};

class Resume extends React.Component {
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

  _renderCategory(category) {
    const entries = this.props[category].map(this._renderEntry);

    return (
      <div key={category} className='resume-category__container'>
        <Container className='resume-category'>
          <h2>{TITLES[category]}</h2>
          {entries}
        </Container>
      </div>
    );
  }
}
Resume.defaultProps = { work: [], education: [], other: [] };

export default Resume;
