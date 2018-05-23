import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import Fragment from '../fragments/fragment';
import { getProjectBySlug, getPerson } from '../data/store';

const TestimonialsClientImage = ({ image, routeName }) => {
  const content = (
    <div
      className='testimonials-client__portrait'
      style={{ backgroundImage: `url(${image})` }}
    />
  );

  if (routeName) {
    return <Link to={routeName}>{content}</Link>
  }

  return content;
};

TestimonialsClientImage.propTypes = {
  image: PropTypes.string.isRequired,
  routeName: PropTypes.string,
};

const TestimonialsClient = ({ testimonial, routeName }) => {
  const person = getPerson(testimonial.personId);
  const project = getProjectBySlug(testimonial.projectSlug);

  return (
    <div className='testimonials-client__container'>
      <div className='testimonials-client__portrait-container'>
        <TestimonialsClientImage image={person.image} routeName={routeName} />
      </div>
      <Fragment text={person.name} routeName={routeName} />
      <div>{testimonial.position}</div>
      <div>
        <Fragment
          text={project.name}
          url={
            // If there's another link, don't show this URL
            routeName ? null : project.url
          }
        />
        {project.accelerator && ` (${project.accelerator})`}
      </div>
    </div>
  );
};

TestimonialsClient.propTypes = {
  routeName: PropTypes.string,
  testimonial: PropTypes.object.isRequired,
};

export default TestimonialsClient;
