import React, { PropTypes } from 'react';
import Container from '../shared/container';
import {
  getLanguagesWithProjects, getCodeLibrariesWithProjects,
  getInfrastructuresWithProjects, getProjectBySlug,
} from '../data/store';
import { getProjectPath } from '../projects/utils';

const Technology = ({ technology }) => (
  <div key={technology.id}>
    {technology.name} (used in {technology.projects.length} projects)
    <ul>
      {technology.projects.map((slug) => {
        const project = getProjectBySlug(slug);

        return (
          <li key={slug}>
            {project.type} /{' '}
            <a href={getProjectPath(project)}>
              {project.name}
            </a>
          </li>
        );
      })}
    </ul>
    <br />
  </div>
);

Technology.propTypes = {
  technology: PropTypes.object.isRequired,
};

const TechnologiesHandler = () => (
  <Container>
    <h2>Technologies</h2>
    {getCodeLibrariesWithProjects().map((codeLibrary) => (
      <Technology key={codeLibrary.id} technology={codeLibrary} />
    ))}
    <h2>Languages</h2>
    {getLanguagesWithProjects().map((language) => (
      <Technology key={language.id} technology={language} />
    ))}
    <h2>Infrastructures</h2>
    {getInfrastructuresWithProjects().map((infrastructure) => (
      <Technology key={infrastructure.id} technology={infrastructure} />
    ))}
  </Container>
);

export default TechnologiesHandler;
