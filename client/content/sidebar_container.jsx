import React from 'react';
import * as ContentStateStore from './state_store';
import ContentSidebar from './sidebar';

// HACK
global.window = global.window || {};
var Sidebar = require('react-sidebar');

export default class ContentSidebarContainer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      docked: ContentStateStore.isSidebarDocked(),
      isDockingActive: false
    };
    this._mediaQueryChanged = this._mediaQueryChanged.bind(this);
    this._updateDocked = this._updateDocked.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount() {
    if (global.matchMedia) {
      var mql = global.matchMedia(`(max-width: 800px)`);
      mql.addListener(this._mediaQueryChanged);
      this.setState({ mql: mql, isDockingActive: mql.matches });
    }
    ContentStateStore.addChangeListener(this._updateDocked);
  }

  componentWillUnmount() {
    if (global.matchMedia) {
      this.state.mql.removeListener(this._mediaQueryChanged);
    }
    ContentStateStore.removeChangeListener(this._updateDocked);
  }

  _updateDocked() {
    console.log(ContentStateStore.isSidebarDocked());
    console.log(this.state.isDockingActive);
    this.setState({ docked: ContentStateStore.isSidebarDocked() });
  }

  _mediaQueryChanged() {
    this.setState({ isDockingActive: this.state.mql.matches });
  }

  render() {
    return (
      <Sidebar
        sidebar={<ContentSidebar />}
        open={this.state.docked && this.state.isDockingActive}
        onSetOpen={ContentStateStore.toggleSidebarDocked}
        >
        {this.props.children}
      </Sidebar>
    );
  }
}
