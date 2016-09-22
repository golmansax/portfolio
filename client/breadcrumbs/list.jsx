import { PropTypes } from 'react';
import Fragment from '../fragments/fragment';
import Container from '../shared/container';

const renderBreak = (key) => <span key={key}>&nbsp;&rsaquo;&nbsp;</span>;

const renderBreadcrumb = (breadcrumb, index) => {
  let myBreadcrumb = breadcrumb;
  if (typeof breadcrumb === 'string') {
    myBreadcrumb = { text: breadcrumb };
  }

  return [
    index === 0 ? null : renderBreak(`span-${index}`),
    <Fragment key={`fragment${index}`} {...myBreadcrumb} />,
  ];
};

const BreadcrumbsList = ({ breadcrumbs }) => {
  const fullBreadcrumbs = [{ text: 'Home', routeName: '/' }]
    .concat(breadcrumbs);

  return (
    <Container className='breadcrumbs'>
      {fullBreadcrumbs.map(renderBreadcrumb)}
    </Container>
  );
};

BreadcrumbsList.defaultProps = { breadcrumbs: [] };
BreadcrumbsList.propTypes = { breadcrumbs: PropTypes.array.isRequired };

export default BreadcrumbsList;
