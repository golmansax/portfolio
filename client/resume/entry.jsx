import React from 'react';
import ResumeNotes from './notes';
import FragmentsBlock from '../fragments/block';

class ResumeEntry extends React.Component {
  constructor(props) {
    super(props);
    this._renderNotes = this._renderNotes.bind(this);
  }

  render() {
    return (
      <div className='resume-entry'>
        <h3><FragmentsBlock data={this.props.title} /></h3>
        {this._renderNotes()}
      </div>
    );
  }

  _renderNotes() {
    if (!this.props.notes) {
      return false;
    }

    return <ResumeNotes {...this.props} />;
  }
}

ResumeEntry.defaultProps = {
  title: [],
  notes: [],
  numInitialNotesToShow: false,
};

ResumeEntry.propTypes = {
  image: React.PropTypes.array,
  notes: React.PropTypes.array.isRequired,
  numInitialNotesToShow: React.PropTypes.bool,
  title: React.PropTypes.array.isRequired,
};

export default ResumeEntry;
