import React, { PropTypes } from 'react';
import Fragment from '../fragments/fragment';
import { getProjectBySlug, getPerson } from '../data/store';
import TestimonialsClient from './client';

const ListItem = ({ testimonial }) => {
  const person = getPerson(testimonial.personId);
  const project = getProjectBySlug(testimonial.projectSlug);

  return (
    <div className='testimonials-list__item' id={testimonial.projectSlug}>
      <div className='testimonials-list__item-person'>
        <TestimonialsClient testimonial={testimonial} />
      </div>
      <div className='testimonials-list__item-quote'>
        <i className='fa fa-quote-left testimonials-list__item-quote-icon' />
        {testimonial.quote}
      </div>
    </div>
  );
};

ListItem.propTypes = {
  testimonial: PropTypes.object.isRequired,
};

const TestimonialsList = ({ testimonials }) => (
  <div>
    {testimonials.map((testimonial) => {
      if (!testimonial.quote) { return null; }
      return <ListItem key={testimonial.personId} testimonial={testimonial} />;
    })}
  </div>
);

TestimonialsList.propTypes = {
  testimonials: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
};

export default TestimonialsList;
