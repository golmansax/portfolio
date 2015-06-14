'use strict';

import React from 'react';
import BreadcrumbsList from '../breadcrumbs/list';
import Resume from './resume';
import { getResume } from '../data/store';

export default class ResumeHandler extends React.Component {
  render() {
    return (
      <div>
        <BreadcrumbsList breadcrumbs={['Resume']} />
        <Resume {...getResume()} />
      </div>
    );
  }
}
