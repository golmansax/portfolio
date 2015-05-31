'use strict';

import React from 'react';
import Fragments from './fragments';

export default class FragmentsBlock extends React.Component {
  render() {
    if (this.props.data.left) {
      return (
        <div className='clearfix'>
          <div className='fragment-left'>
            <Fragments fragments={this.props.data.left} />
          </div>
          <div className='fragment-right'>
            <em>
              <Fragments fragments={this.props.data.right} />
            </em>
          </div>
        </div>
      );
    } else {
      return <Fragments fragments={this.props.data} />;
    }
  }
}
FragmentsBlock.defaultProps = { data: [] };
