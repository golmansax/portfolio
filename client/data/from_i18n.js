import i18n from '../../server/my_i18n';
import { getAsset } from '../../server/asset_utils';
import ProjectsArray from '../projects/array';

export default function getDataFromI18n() {
  const people = i18n.t('people:people');
  Object.keys(people).forEach((key) => {
    const person = people[key];
    if (person.image) { person.image = getAsset(person.image); }
  });

  return {
    metaData: i18n.t('meta_data:metaData'),

    people,
    testimonials: i18n.t('testimonials:testimonials'),

    languages: i18n.t('technologies:languages'),
    codeLibraries: i18n.t('technologies:codeLibraries'),
    infrastructures: i18n.t('technologies:infrastructures'),

    communityProjects: ProjectsArray.from(i18n.t('community_projects:projects'))
      .map((project) => {
        Object.assign(project, {
          projectPath: `/portfolio/in-community#${project.slug}`,
          type: 'communityProject',
        });
        return project;
      }),

    sideProjects: ProjectsArray.from(i18n.t('side_projects:projects'))
      .map((project) => {
        Object.assign(project, {
          projectPath: `/portfolio/side-projects#${project.slug}`,
          type: 'sideProject',
        });
        return project;
      }),

    workProjects: ProjectsArray.from(i18n.t('work_projects:projects'))
      .map((project) => {
        Object.assign(project, {
          projectPath: `/portfolio/work#${project.slug}`,
          type: 'workProject',
        });
        return project;
      }),
  };
}
