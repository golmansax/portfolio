import React, { PropTypes } from 'react';
import Fragment from '../fragments/fragment';
import { getProjectBySlug, getPerson } from '../data/store';

const ListItem = ({ testimonial }) => {
  const person = getPerson(testimonial.personId);
  const project = getProjectBySlug(testimonial.projectSlug);

  return (
    <div className='testimonials-list__item'>
      <div className='testimonials-list__item-person'>
        <div
          className='testimonials-list__item-portrait'
          style={{ backgroundImage: `url(${person.image})` }}
        />
        <div>{person.name}</div>
        <div>{testimonial.position}</div>
        <div><Fragment text={project.name} url={project.url} /></div>
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
