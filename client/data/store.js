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
  return data.workProjects
    .concat(data.sideProjects)
    .concat(data.communityProjects);
}

export function getResume() {
  return data.resume;
}

export function getMetaData() {
  return data.metaData;
}
