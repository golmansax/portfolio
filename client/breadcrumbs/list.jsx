'use strict';

import React from 'react';
import Fragment from '../fragments/fragment';

export default class BreadcrumbsList extends React.Component {
  constructor(props) {
    super(props);

    this._renderBreadcrumb = this._renderBreadcrumb.bind(this);
  }

  _renderBreadcrumb(breadcrumb, index) {
    if (typeof breadcrumb === 'string') {
      breadcrumb = { text: breadcrumb };
    }

    return [
      index === 0 ? null : this._renderBreak('span-' + index),
      <Fragment key={'fragment' + index} {...breadcrumb} />,
    ];
  }

  _renderBreak(key) {
    return <span key={key}>&nbsp;&rsaquo;&nbsp;</span>;
  }

  render() {
    var breadcrumbs = [{ text: 'Home', routeName: '/' }]
      .concat(this.props.breadcrumbs);

    return (
      <div className='breadcrumbs container'>
        {breadcrumbs.map(this._renderBreadcrumb)}
      </div>
    );
  }
}

BreadcrumbsList.defaultProps = { breadcrumbs: [] };
