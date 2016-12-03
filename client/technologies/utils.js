import { projectUsesTechnology } from '../projects/utils';

export function addProjectData(technologies, projects) {
  technologies.forEach((technology) => {
    /* eslint-disable no-param-reassign */
    let workCount = 0;
    let otherCount = 0;

    technology.projects = [];
    projects.forEach((project) => {
      if (projectUsesTechnology(project, technology.id)) {
        technology.projects.push(project.slug);

        if (project.type === 'workProject') {
          workCount += 1;
        } else {
          otherCount += 1;
        }
      }
    });

    technology.workCount = workCount;
    technology.otherCount = otherCount;
    /* eslint-disable no-param-reassign */
  });

  return technologies;
}

export function sortTechnologies(technologies) {
  technologies.sort((a, b) => {
    if (a.workCount !== b.workCount) {
      return b.workCount - a.workCount;
    }

    return b.otherCount - a.otherCount;
  });

  return technologies;
}
