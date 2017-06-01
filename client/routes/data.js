import {
  getWorkProjects,
  getSideProjects,
} from '../data/store';

const SLUG_REPLACE = (project) => ({ projectId: project.slug });

export default [
  {
    path: '/work',
  },
  {
    path: '/work/:projectId',
    data: {
      getter: getWorkProjects,
      replaceInPath: SLUG_REPLACE,
    },
  },
  {
    path: '/side-projects',
  },
  {
    path: '/side-projects/:projectId',
    data: {
      getter: getSideProjects,
      replaceInPath: SLUG_REPLACE,
    },
  },
  { path: '/work-together' },
  { path: '/' },
  { path: '/404.html' },
];
