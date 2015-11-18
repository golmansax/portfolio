import DocumentTitle from 'react-document-title';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getSideProjects } from '../data/store';

const SideProjectsHandler = () => (
  <DocumentTitle title='Side Projects — Holman Gao'>
    <div>
      <BreadcrumbsList breadcrumbs={['Side Projects']} />
      <ProjectsList projects={getSideProjects()} />
    </div>
  </DocumentTitle>
);

export default SideProjectsHandler;
