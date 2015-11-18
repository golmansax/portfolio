import DocumentTitle from 'react-document-title';
import BreadcrumbsList from '../breadcrumbs/list';
import Resume from './resume';
import { getResume } from '../data/store';

const ResumeHandler = () => (
  <DocumentTitle title='Resume — Holman Gao'>
    <div>
      <BreadcrumbsList breadcrumbs={['Resume']} />
      <Resume {...getResume()} />
    </div>
  </DocumentTitle>
);

export default ResumeHandler;
