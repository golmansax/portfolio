import DocumentTitle from 'react-document-title';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getWorkProjects } from '../data/store';

const WorkProjectsHandler = () => (
  <DocumentTitle title='Work — Holman Gao'>
    <div>
      <BreadcrumbsList breadcrumbs={['Work']} />
      <ProjectsList projects={getWorkProjects()} />
    </div>
  </DocumentTitle>
);

export default WorkProjectsHandler;
