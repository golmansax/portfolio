import Helmet from 'react-helmet';
import Container from '../shared/container';
import BreadcrumbsList from '../breadcrumbs/list';
import TestimonialsList from '../testimonials/list';
import { getMetaData, getTestimonials } from '../data/store';
import MyEmail from '../my/email';

const BLOG_POST_LINK = '/blog/posts/2017/05/17' +
  '/creating-a-positive-freelancer-client-relationship/';

const WorkTogetherHandler = () => (
  <div>
    <Helmet {...getMetaData().workTogether} />
    <BreadcrumbsList breadcrumbs={['Let’s Work Together!']} />
    <Container>
      <div className='work-together-handler__section'>
        <h1>Let&rsquo;s work together!</h1>
        <p>
          I’m available for freelance, contract, or consulting work.  The core
          of my experience is in full-stack web development at early-stage
          companies.  To get a sense of what it&rsquo;s like to work with me,
          read about <a href={BLOG_POST_LINK} target='_blank' rel='noopener noreferrer'>
            my freelancing values
          </a> and check out <a href='#testimonials'>my client testimonials</a>.
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
