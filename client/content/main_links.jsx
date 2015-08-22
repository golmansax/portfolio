import React from 'react';
import Fragment from '../fragments/fragment';

const LINKS = [
  { text: 'Work', routeName: 'workProjects' },
  { text: 'Side Projects', routeName: 'sideProjects' },
  { routeName: 'communityProjects', text: 'In Community' },
];

export default class ContentMainLinks extends React.Component {
  constructor(props) {
    super(props);
    this._renderLink = this._renderLink.bind(this);
  }

  render() {
    return (
      <div className={this.props.className}>
        {LINKS.map(this._renderLink)}
      </div>
    );
  }

  _renderLink(navbarLink, index) {
    return <Fragment key={index} {...navbarLink} />;
  }
}

ContentMainLinks.propTypes = { className: React.PropTypes.string };
