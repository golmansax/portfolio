import Helmet from 'react-helmet';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getWorkProjects, getMetaData } from '../data/store';

const WorkProjectsHandler = () => (
  <div>
    <Helmet {...getMetaData().workProjects} />
    <BreadcrumbsList breadcrumbs={['Work']} />
    <ProjectsList projects={getWorkProjects()} />
  </div>
);

export default WorkProjectsHandler;
