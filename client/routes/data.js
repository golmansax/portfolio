import {
  getWorkProjects,
  getSideProjects,
  getCommunityProjects,
} from '../data/store';

const SLUG_REPLACE = (project) => ({ projectId: project.slug });

export default [
  {
    path: '/portfolio/work',
    redirectFrom: '/work',
  },
  {
    path: '/portfolio/work/:projectId',
    data: {
      getter: getWorkProjects,
      replaceInPath: SLUG_REPLACE,
    },
    redirectFrom: '/work/:projectId',
  },
  {
    path: '/portfolio/side-projects',
    redirectFrom: '/side-projects',
  },
  {
    path: '/portfolio/side-projects/:projectId',
    redirectFrom: '/side-projects/:projectId',
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
