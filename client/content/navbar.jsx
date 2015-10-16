import React from 'react';
import { getImage } from '../images/store';
import ContentMainLinks from './main_links';
import { Link } from 'react-router';
import Container from '../shared/container';
import {
  addChangeListener,
  removeChangeListener,
  isMenuShowing,
  toggleMenuShowing,
} from './state_store';

export default class ContentNavbar extends React.Component {
  constructor(props) {
    super(props);
    this._renderNavbarMenu = this._renderNavbarMenu.bind(this);
    this._toggleMenu = this._toggleMenu.bind(this);
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
              <img src={getImage('/static/navbar-icon.png')} />
              <h1>Holman Gao</h1>
            </Link>
          </div>
          <div className='navbar-right'><ContentMainLinks /></div>
          <button
            className='navbar__sidebar-trigger'
            onClick={this._toggleMenu}
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

  _toggleMenu() {
    toggleMenuShowing();
  }

  _updateState() {
    this.setState({ isMenuShowing: isMenuShowing() });
  }
}
