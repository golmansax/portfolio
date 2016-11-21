import {
  getWorkProjects,
  getSideProjects,
  getCommunityProjects,
} from '../data/store';

const SLUG_REPLACE = (project) => ({ projectId: project.slug });

export default [
  { path: '/work' },
  {
    path: '/portfolio/work/:projectId',
    data: {
      getter: getWorkProjects,
      replaceInPath: SLUG_REPLACE,
    },
  },
  { path: '/side-projects' },
  {
    path: '/side-projects/:projectId',
    data: {
      getter: getSideProjects,
      replaceInPath: SLUG_REPLACE,
    },
  },
  { path: '/in-community' },
  {
    path: '/in-community/:projectId',
    data: {
      getter: getCommunityProjects,
      replaceInPath: SLUG_REPLACE,
    },
  },
  { path: '/' },
  { path: '/resume' },
  { path: '/404.html' },
];
