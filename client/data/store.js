import { addProjectData, sortTechnologies } from '../technologies/utils';

const data = {};

export function loadData(newData) {
  Object.assign(data, newData);
}

export function getWorkProjects() {
  return data.workProjects;
}

export function getSideProjects() {
  return data.sideProjects;
}

export function getCommunityProjects() {
  return data.communityProjects;
}

export function getAllProjects() {
  if (data.allProjects) { return data.allProjects; }

  const projects = data.workProjects
    .concat(data.sideProjects)
    .concat(data.communityProjects);

  const ORDER_OVERRIDES = {
    4: 'my-impact-pledge',
    5: 'personal-site',
  };

  const allProjects = Object.keys(ORDER_OVERRIDES)
    .reduce((prevProjects, newIndex) => {
      const slug = ORDER_OVERRIDES[newIndex];

      const newProjects = [...prevProjects];

      // Remove project from array
      const myProject = newProjects.find((project) => project.slug === slug);
      const indexToRemove = newProjects.indexOf(myProject);

      if (indexToRemove < 0) {
        throw new Error('Index should not be negative...');
      }
      newProjects.splice(indexToRemove, 1);

      // Add it back at proper index
      newProjects.splice(newIndex, 0, myProject);

      return newProjects;
    }, projects);

  data.allProjects = allProjects;
  return allProjects;
}

export function getProjectBySlug(slug) {
  if (!data.projectsBySlug) {
    const lookup = new Map();
    getAllProjects().forEach((project) => {
      lookup.set(project.slug, project);
    });

    data.projectsBySlug = lookup;
  }

  if (!data.projectsBySlug.has(slug)) {
    throw new Error(`Cannot find slug in projects: ${slug}`);
  }

  return data.projectsBySlug.get(slug);
}

export function getMetaData() {
  return data.metaData;
}

export function getPerson(id) {
  if (!data.people[id]) {
    throw new Error(`Cannot find person with ID: ${id}`);
  }

  return data.people[id];
}

export function getTechnology(id) {
  if (data.languages[id]) { return data.languages[id]; }
  if (data.codeLibraries[id]) { return data.codeLibraries[id]; }
  if (data.infrastructures[id]) { return data.infrastructures[id]; }

  throw new Error(`Cannot find technology with ID: ${id}`);
}

export function getLanguagesWithProjects() {
  if (data.languagesWithProjects) { return data.languagesWithProjects; }

  const languages = [];
  Object.keys(data.languages).forEach((id) => {
    languages.push({
      id,
      name: data.languages[id],
    });
  });

  data.languagesWithProjects = sortTechnologies(addProjectData(
    languages,
    getAllProjects(),
  ));

  return data.languagesWithProjects;
}

export function getInfrastructuresWithProjects() {
  if (data.infrastructuresWithProjects) {
    return data.infrastructuresWithProjects;
  }

  const infrastructures = [];
  Object.keys(data.infrastructures).forEach((id) => {
    infrastructures.push({
      id,
      name: data.infrastructures[id],
    });
  });

  data.infrastructuresWithProjects = sortTechnologies(addProjectData(
    infrastructures,
    getAllProjects(),
  ));

  return data.infrastructuresWithProjects;
}

export function getCodeLibrariesWithProjects() {
  if (data.codeLibrariesWithProjects) { return data.codeLibrariesWithProjects; }

  const codeLibraries = [];
  Object.keys(data.codeLibraries).forEach((id) => {
    codeLibraries.push({
      id,
      name: data.codeLibraries[id],
    });
  });

  data.codeLibrariesWithProjects = sortTechnologies(addProjectData(
    codeLibraries,
    getAllProjects(),
  ));

  return data.codeLibrariesWithProjects;
}
