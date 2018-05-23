import Helmet from 'react-helmet';
import { Link } from 'react-router';
import Container from '../shared/container';
import BreadcrumbsList from '../breadcrumbs/list';
import TestimonialsClient from '../testimonials/client';
import { getMetaData, getTestimonials } from '../data/store';
import Fragment from '../fragments/fragment';
import MyEmail from '../my/email';
import { getPortfolioPath } from '../url_utils';

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
          of my experience is in full-stack software development at early-stage
          companies.  To get a sense of what it&rsquo;s like to work with me,
          read about <a href={BLOG_POST_LINK} target='_blank' rel='noopener noreferrer'>
            my freelancing values
          </a> and check out <Link to={getPortfolioPath('/work-together/testimonials')}>
            my client testimonials
          </Link>.
        </p>
        <br />
        <p>
          I live in Manhattan and can take projects in the New York City
          area.  Remote work is also okay.
        </p>
        <br />
        <p>
          I pride myself in being language and framework agnostic.  I have the
          most experience with Django, Rails, Node.js, PostgreSQL, AWS on the backend, and
          React.js, Webpack, GraphQL on the frontend.{' '}
          <Fragment
            text='See a full list of the technologies I’ve used professionally.'
            url={getPortfolioPath('/technologies')}
          />
        </p>
        <br />
        <p>
          Email <MyEmail link /> to start the discussion!
        </p>
      </div>
      <div className='work-together-handler__section'>
        <h2 id='testimonials' className='work-together-handler__secondary-heading'>
          <Link to={getPortfolioPath('/work-together/testimonials')}>
            Read testimonials from previous clients
          </Link>
        </h2>
        <div>
          {getTestimonials().map((testimonial) => {
            const { projectSlug } = testimonial;

            return (
              <div key={projectSlug} className='work-together-handler__client'>
                <TestimonialsClient
                  testimonial={testimonial}
                  routeName={`${getPortfolioPath('/work-together/testimonials/')}#${projectSlug}`}
                />
              </div>
            );
          })}
        </div>
      </div>
    </Container>
  </div>
);

export default WorkTogetherHandler;
