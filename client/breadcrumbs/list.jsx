import React from 'react';
import Fragment from '../fragments/fragment';
import Container from '../shared/container';

class BreadcrumbsList extends React.Component {
  constructor(props) {
    super(props);

    this._renderBreadcrumb = this._renderBreadcrumb.bind(this);
  }

  render() {
    const breadcrumbs = [{ text: 'Home', routeName: '/' }]
      .concat(this.props.breadcrumbs);

    return (
      <Container className='breadcrumbs'>
        {breadcrumbs.map(this._renderBreadcrumb)}
      </Container>
    );
  }

  _renderBreadcrumb(breadcrumb, index) {
    let myBreadcrumb = breadcrumb;
    if (typeof breadcrumb === 'string') {
      myBreadcrumb = { text: breadcrumb };
    }

    return [
      index === 0 ? null : this._renderBreak(`span-${index}`),
      <Fragment key={`fragment${index}`} {...myBreadcrumb} />,
    ];
  }

  _renderBreak(key) {
    return <span key={key}>&nbsp;&rsaquo;&nbsp;</span>;
  }
}

BreadcrumbsList.defaultProps = { breadcrumbs: [] };
BreadcrumbsList.propTypes = { breadcrumbs: React.PropTypes.array.isRequired };

export default BreadcrumbsList;
