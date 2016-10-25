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
    2: 'book-booster',
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

export function getMetaData() {
  return data.metaData;
}

export function getPerson(id) {
  if (!data.people[id]) {
    throw new Error(`Cannot find person with ID: ${id}`);
  }

  return data.people[id];
}
