import Helmet from 'react-helmet';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getSideProjects, getMetaData } from '../data/store';

const SideProjectsHandler = () => (
  <div>
    <Helmet {...getMetaData().sideProjects} />
    <BreadcrumbsList breadcrumbs={['Side Projects']} />
    <ProjectsList projects={getSideProjects()} />
  </div>
);

export default SideProjectsHandler;
