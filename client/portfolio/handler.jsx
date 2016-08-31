import Helmet from 'react-helmet';
import ProjectsGrid from '../projects/grid';
import { getAllProjects, getMetaData } from '../data/store';
import PortfolioBlurb from './blurb';

const PortfolioHandler = () => {
  const currentProjects = [];
  const pastProjects = [];

  getAllProjects().forEach((project) => {
    if (!project.images) { return; }

    if (project.current) {
      currentProjects.push(project);
    } else {
      pastProjects.push(project);
    }
  });

  return (
    <div>
      <Helmet {...getMetaData().portfolio} />
      <PortfolioBlurb className='portfolio-handler__section' />
      <ProjectsGrid
        className='portfolio-handler__section'
        title='Current work/projects'
        projects={currentProjects}
      />
      <ProjectsGrid
        className='portfolio-handler__section'
        title='Past work/projects'
        projects={pastProjects}
      />
    </div>
  );
};

export default PortfolioHandler;
