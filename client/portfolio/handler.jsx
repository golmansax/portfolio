import Helmet from 'react-helmet';
import ProjectsGrid from '../projects/grid';
import { getAllProjects, getMetaData } from '../data/store';

const getProjects = () => getAllProjects().filter((project) => project.images);
console.log(getMetaData());

const PortfolioHandler = () => (
  <div>
    <Helmet {...getMetaData().portfolio} />
    <ProjectsGrid projects={getProjects()} />
  </div>
);

export default PortfolioHandler;
