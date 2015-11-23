import Helmet from 'react-helmet';
import BreadcrumbsList from '../breadcrumbs/list';
import Resume from './resume';
import { getResume, getMetaData } from '../data/store';

const ResumeHandler = () => (
  <div>
    <Helmet {...getMetaData().resume} />
    <BreadcrumbsList breadcrumbs={['Resume']} />
    <Resume {...getResume()} />
  </div>
);

export default ResumeHandler;
