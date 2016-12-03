import React, { PropTypes } from 'react';
import { getProjectBySlug } from '../data/store';
import { getProjectPath } from '../projects/utils';

const ListItem = ({ technology }) => {
  const { workCount, otherCount } = technology;

  const countPhrases = [];
  if (workCount > 0) {
    countPhrases.push(`at ${workCount} job${workCount === 1 ? '' : 's'}`);
  }
  if (otherCount > 0) {
    countPhrases.push(
      `in ${otherCount} project${otherCount === 1 ? '' : 's'}`,
    );
  }

  return (
    <div key={technology.id} className='technologies-list__item'>
      <div className='technologies-list__item-name'>
        {technology.name}
      </div>
      used {countPhrases.join(', ')}
      <ul style={{ display: 'none' }}>
        {technology.projects.map((slug) => {
          const project = getProjectBySlug(slug);

          return (
            <li key={slug}>
              {project.type} /{' '}
              <a href={getProjectPath(project)}>
                {project.name}
              </a>
            </li>
          );
        })}
      </ul>
      <br />
    </div>
  );
};

ListItem.propTypes = {
  technology: PropTypes.object.isRequired,
};

const TechnologiesList = ({ technologies }) => (
  <div>
    {technologies.map((codeLibrary) => (
      <ListItem key={codeLibrary.id} technology={codeLibrary} />
    ))}
  </div>
);

TechnologiesList.propTypes = {
  technologies: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TechnologiesList;
