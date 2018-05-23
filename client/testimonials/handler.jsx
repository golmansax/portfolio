import Helmet from 'react-helmet';
import Container from '../shared/container';
import BreadcrumbsList from '../breadcrumbs/list';
import { getMetaData, getTestimonials } from '../data/store';
import MyEmail from '../my/email';
import { getPortfolioPath } from '../url_utils';
import TestimonialsList from './list';

const TestimonialsHandler = () => (
  <div>
    <Helmet {...getMetaData().testimonials} />
    <BreadcrumbsList
      breadcrumbs={[
        {
          routeName: getPortfolioPath('/work-together'),
          text: 'Let’s Work Together!',
        },
        'Testimonials',
      ]}
    />
    <Container>
      <div className='work-together-handler__section'>
        <h1>Testimonials</h1>
        <p>
          Below are testimonials from previous freelance and contracting clients.
          If you&rsquo;re interested in working together,
          please reach out to <MyEmail link />!
        </p>
        <TestimonialsList testimonials={getTestimonials()} />
      </div>
    </Container>
  </div>
);

export default TestimonialsHandler;
