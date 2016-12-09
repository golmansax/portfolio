import React from 'react';
import { Link } from 'react-router';
import { getAsset } from '../assets/store';
import ContentMainLinks from './main_links';
import Container from '../shared/container';
import {
  addChangeListener,
  removeChangeListener,
  isMenuShowing,
  toggleMenuShowing,
} from './state_store';

class ContentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this._renderNavbarMenu = this._renderNavbarMenu.bind(this);
    this._updateState = this._updateState.bind(this);

    this.state = { isMenuShowing: isMenuShowing() };
  }

  componentDidMount() {
    addChangeListener(this._updateState);
  }

  componentWillUnmount() {
    removeChangeListener(this._updateState);
  }

  render() {
    return (
      <div className='navbar'>
        <Container>
          <div className='navbar-left'>
            <Link to='/'>
              <img
                role='presentation'
                src={getAsset('/static/navbar-icon.png')}
              />
              <h1>Holman Gao</h1>
            </Link>
          </div>
          <div className='navbar-right'><ContentMainLinks /></div>
          <button
            className='navbar__sidebar-trigger'
            onClick={toggleMenuShowing}
            >
            <i className='fa fa-bars navbar__sidebar-trigger-icon' />
          </button>
        </Container>
        {this._renderNavbarMenu()}
      </div>
    );
  }

  _renderNavbarMenu() {
    if (!this.state.isMenuShowing) {
      return null;
    }

    return (
      <div className='navbar__menu'>
        <ContentMainLinks />
      </div>
    );
  }

  _updateState() {
    this.setState({ isMenuShowing: isMenuShowing() });
  }
}

export default ContentNavbar;
