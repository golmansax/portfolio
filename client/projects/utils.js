import { getPortfolioPath } from '../url_utils';

const PROJECT_ROUTE_MAPPING = {
  workProject: 'work',
  sideProject: 'side-projects',
  communityProject: 'in-community',
};

const projectTechLookup = new Map();

export function projectUsesTechnology(project, technology) {
  if (!projectTechLookup.has(project.slug)) {
    projectTechLookup.set(project.slug, new Set(project.technologies));
  }

  return projectTechLookup.get(project.slug).has(technology);
}

export function getProjectPath(project) {
  const prefix = PROJECT_ROUTE_MAPPING[project.type];
  return getPortfolioPath(`/${prefix}/${project.slug}`);
}
