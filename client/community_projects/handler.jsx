import React from 'react';
import Helmet from 'react-helmet';
import ProjectsList from '../projects/list';
import BreadcrumbsList from '../breadcrumbs/list';
import { getCommunityProjects, getMetaData } from '../data/store';

const CommunityProjectsHandler = () => (
  <div>
    <Helmet {...getMetaData().communityProjects} />
    <BreadcrumbsList breadcrumbs={['Efforts in Community']} />
    <ProjectsList projects={getCommunityProjects()} />
  </div>
);

export default CommunityProjectsHandler;
