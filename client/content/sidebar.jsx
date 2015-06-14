var React = require('react');

// HACK
global.window = global.window || {};
var Sidebar = require('react-sidebar');

export default class ContentSidebar extends React.Component {
  constructor(props) {
    super(props)

    this.state = { docked: false, dockingActive: false };
    this._mediaQueryChanged = this._mediaQueryChanged.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({ sidebarOpen: open });
  }

  componentDidMount() {
    if (global.matchMedia) {
      var mql = global.matchMedia(`(min-width: 800px)`);
      mql.addListener(this._mediaQueryChanged);
      this.setState({ mql: mql, dockingActive: mql.matches });
    }
  }

  componentWillUnmount() {
    if (global.matchMedia) {
      this.state.mql.removeListener(this._mediaQueryChanged);
    }
  }

  _mediaQueryChanged() {
    this.setState({ dockingActive: this.state.mql.matches });
  }

  render() {
    var sidebarContent = <b>Sidebar content</b>;

    return (
      <Sidebar
        sidebar={sidebarContent}
        docked={this.state.docked && this.state.dockingActive}
        >
        {this.props.children}
      </Sidebar>
    );
  }
}
