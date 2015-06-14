'use strict';

import i18n from 'i18next';
import ProjectsArray from '../projects/array';

export default function getDataFromI18n() {
  return {
    communityProjects: ProjectsArray.from(i18n.t('community_projects:projects'))
      .map(function (project) {
        Object.assign(project, {
          projectPath: `/in-community#${project.slug}`
        });
        return project;
      }),

    sideProjects: ProjectsArray.from(i18n.t('side_projects:projects'))
      .map(function (project) {
        Object.assign(project, {
          projectPath: `/side-projects#${project.slug}`
        });
        return project;
      }),

    workProjects: ProjectsArray.from(i18n.t('work_projects:projects'))
      .map(function (project) {
        Object.assign(project, { projectPath: `/work#${project.slug}` });
        return project;
      })
  };
}
