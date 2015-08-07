import React from 'react';
import DocumentTitle from 'react-document-title';
import BreadcrumbsList from '../breadcrumbs/list';
import Resume from './resume';
import { getResume } from '../data/store';

export default class ResumeHandler extends React.Component {
  render() {
    return (
      <DocumentTitle title='Resume — Holman Gao'>
        <div>
          <BreadcrumbsList breadcrumbs={['Resume']} />
          <Resume {...getResume()} />
        </div>
      </DocumentTitle>
    );
  }
}
