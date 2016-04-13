import Helmet from 'react-helmet';
import BreadcrumbsList from '../breadcrumbs/list';
import Resume from './resume';
import { getMetaData } from '../data/store';

const ResumeHandler = () => (
  <div>
    <Helmet {...getMetaData().resume} />
    <BreadcrumbsList breadcrumbs={['Resume']} />
    <Resume />
  </div>
);

export default ResumeHandler;
