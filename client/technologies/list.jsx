import React, { PropTypes, Component } from 'react';
import { getProjectBySlug } from '../data/store';
import FragmentsBulletList from '../fragments/bullet_list';
import { getProjectPath } from '../projects/utils';

class ListItem extends Component {
  static propTypes = {
    technology: PropTypes.object.isRequired,
  };

  state = {
    projectsShowing: false,
  };

  render = () => {
    const { technology } = this.props;
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
        used {countPhrases.join(', ')}{' '}
        [<a href='#' onClick={this._toggleShowing}>
          {this.state.projectsShowing ? 'hide' : 'show'}
        </a>]
        {this.state.projectsShowing ? (
          <FragmentsBulletList
            spacedOut={false}
            bullets={technology.projects.map((slug) => {
              const project = getProjectBySlug(slug);

              return [[
                {
                  routeName: getProjectPath(project),
                  text: project.name,
                },
              ]];
            })}
          />
        ) : null}
      </div>
    );
  };

  _toggleShowing = (event) => {
    event.preventDefault();
    this.setState({ projectsShowing: !this.state.projectsShowing });
  };
}

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
