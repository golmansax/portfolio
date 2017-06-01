import Helmet from 'react-helmet';
import Container from '../shared/container';
import BreadcrumbsList from '../breadcrumbs/list';
import TestimonialsList from '../testimonials/list';
import { getMetaData, getTestimonials } from '../data/store';
import MyEmail from '../my/email';

const WorkTogetherHandler = () => (
  <div>
    <Helmet {...getMetaData().workTogether} />
    <BreadcrumbsList breadcrumbs={['Let’s Work Together!']} />
    <Container>
      <div className='work-together-handler__section'>
        <h1>Let&rsquo;s work together!</h1>
        <p>
          I’m available for freelance, contract, or consulting work.  The core
          of my experience has been full-stack web development at early-stage
          companies.  To read about my past work, click around my portfolio
          and <a href='#testimonials'>read testimonials below</a>.
        </p>
        <br />
        <p>
          I will also consider pro-bono work depending on the idea and time
          commitment, and I’m especially interested in cool education projects.
        </p>
        <br />
        <p>
          Email <MyEmail link /> to start the discussion!
        </p>
      </div>
      <div className='work-together-handler__section'>
        <h2 id='testimonials' className='work-together-handler__secondary-heading'>
          Testimonials
        </h2>
        <TestimonialsList testimonials={getTestimonials()} />
      </div>
    </Container>
  </div>
);

export default WorkTogetherHandler;
