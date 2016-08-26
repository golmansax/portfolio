import Helmet from 'react-helmet';
import ProjectsGrid from '../projects/grid';
import { getAllProjects, getMetaData } from '../data/store';

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
      <ProjectsGrid
        className='portfolio-handler__grid'
        title='Current work/projects'
        projects={currentProjects}
      />
      <ProjectsGrid
        className='portfolio-handler__grid'
        title='Past work/projects'
        projects={pastProjects}
      />
    </div>
  );
};

export default PortfolioHandler;
