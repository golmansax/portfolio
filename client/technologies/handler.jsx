import React from 'react';
import Helmet from 'react-helmet';
import Container from '../shared/container';
import {
  getLanguagesWithProjects, getCodeLibrariesWithProjects,
  getInfrastructuresWithProjects, getMetaData,
} from '../data/store';
import TechnologiesList from './list';

const TechnologiesHandler = () => (
  <Container>
    <Helmet {...getMetaData().technologies} />
    <div className='technologies-handler__section'>
      <h2>Technologies</h2>
      <TechnologiesList technologies={getCodeLibrariesWithProjects()} />
    </div>
    <div className='technologies-handler__section'>
      <h2>Languages</h2>
      <TechnologiesList technologies={getLanguagesWithProjects()} />
    </div>
    <div className='technologies-handler__section'>
      <h2>Infrastructures</h2>
      <TechnologiesList technologies={getInfrastructuresWithProjects()} />
    </div>
  </Container>
);

export default TechnologiesHandler;
