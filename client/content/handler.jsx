import React from 'react';
import { RouteHandler } from 'react-router';
import DocumentTitle from 'react-document-title';
import ContentNavbar from './navbar';
import ContentFooter from './footer/footer';
import {
  addChangeListener,
  removeChangeListener,
  isMenuShowing,
  toggleMenuShowing
} from './state_store';

export default class ContentHandler extends React.Component {
  constructor(props) {
    super(props);
    this._renderBackdrop = this._renderBackdrop.bind(this);
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
      <DocumentTitle title='Holman Gao'>
        <div>
          <div className='content-handler__top'>
            <ContentNavbar />
          </div>
          <div className='content-handler__body'>
            {this._renderBackdrop()}
            <RouteHandler />
            <ContentFooter />
          </div>
        </div>
      </DocumentTitle>
    );
  }

  _renderBackdrop() {
    if (!this.state.isMenuShowing) {
      return false;
    }

    return (
      <div
        onClick={toggleMenuShowing.bind(this, false)}
        className='content-handler__backdrop'
      />
    );
  }

  _updateState() {
    this.setState({ isMenuShowing: isMenuShowing() });
  }
}
